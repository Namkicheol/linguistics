// Small structural reader for authored HTML, including nested disclosures.
// Not a browser/HTML validator: tests only use balanced, explicitly closed blocks.
const voidTags = new Set('area base br col embed hr img input link meta param source track wbr'.split(' '));
module.exports = function structure(html) {
  const root = {tag: '#document', attrs: {}, children: []};
  const stack = [root];
  const tokens = /<!--[\s\S]*?-->|<(script|style)\b[^>]*>[\s\S]*?<\/\1\s*>|<\/?[a-z][^>]*>/gi;
  for (const match of html.matchAll(tokens)) {
    const token = match[0];
    if (/^<!--|^<(script|style)\b/i.test(token)) continue;
    const tag = token.match(/^<\/?([\w-]+)/)[1].toLowerCase();
    if (token.startsWith('</')) {
      const index = stack.findLastIndex(n => n.tag === tag);
      if (index > 0) {
        for (const node of stack.slice(index)) node.end = match.index + token.length;
        stack.length = index;
      }
      continue;
    }
    const attrs = {};
    const body = token.slice(token.indexOf(tag) + tag.length, -1);
    for (const attr of body.matchAll(/([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g)) {
      attrs[attr[1]] = attr[2] ?? attr[3] ?? attr[4] ?? '';
    }
    const node = {tag, attrs, children: [], start: match.index, end: match.index + token.length};
    stack.at(-1).children.push(node);
    if (!voidTags.has(tag) && !token.endsWith('/>')) stack.push(node);
  }
  function all(node, predicate) {
    return node.children.flatMap(child => [...(predicate(child) ? [child] : []), ...all(child, predicate)]);
  }
  return {root, all, hasClass: (n, name) => (n.attrs.class || '').split(/\s+/).includes(name),
    source: n => html.slice(n.start, n.end),
    text: n => html.slice(n.start, n.end).replace(/<[^>]*>/g, ' ')};
};
