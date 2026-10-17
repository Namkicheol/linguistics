(function () {
  'use strict';

  // Open a linked concept before scrolling, including legacy collapsed sections.
  function revealLinkedSection() {
    if (!window.location.hash) return;
    var id;
    try { id = decodeURIComponent(window.location.hash.slice(1)); } catch (_) { return; }
    var target = document.getElementById(id);
    if (!target) return;
    var node = target;
    while (node && node !== document.body) {
      if (node.classList && node.classList.contains('sec')) node.classList.add('open');
      if (node.tagName === 'DETAILS') node.open = true;
      node = node.parentElement;
    }
    if (target.scrollIntoView) target.scrollIntoView({block: 'start'});
  }
  revealLinkedSection();
  if (window.addEventListener) {
    window.addEventListener('hashchange', revealLinkedSection);
    window.addEventListener('pageshow', function (event) {
      // BFCache already restores the reader's scroll and disclosure state.
      if (event.persisted) return;
      revealLinkedSection();
    });
  }

  function allowedReturnUrl(value) {
    if (!value) return null;
    try {
      var url = new URL(value, window.location.href);
      if (url.protocol !== 'http:' && url.protocol !== 'https:') return null;
      if (url.username || url.password) return null;
      if (url.origin === window.location.origin) return url.href;
      if (url.protocol !== 'https:') return null;
      if (url.origin === 'https://etwiki.net') return url.href;
      if (url.origin === 'https://namkicheol.github.io'
          && /^\/(?:englisheducation|linguistics|phonetics-phonology)(?:\/|$)/.test(url.pathname)) return url.href;
      return null;
    } catch (_) {
      return null;
    }
  }

  var params = new URLSearchParams(window.location.search);
  var explicitReturn = allowedReturnUrl(params.get('returnTo'));
  var referrer = allowedReturnUrl(document.referrer);
  var cardIdPattern = /^(?:general|education|linguistics)_20\d{2}_(?:(?:N|S|X|A|B)\d{2}(?:_(?:comp|sheep|essay))?|E[12]_\d{2}(?:_\d{1,2})?)$/;
  var legacyId = [params.get('return'), params.get('rid'), params.get('id')].find(function (value) {
    return cardIdPattern.test(value || '');
  }) || null;
  var legacyReturn = legacyId ? 'https://etwiki.net/index.html?id=' + encodeURIComponent(legacyId) : null;
  var destination = explicitReturn || legacyReturn || referrer || new URL('./index.html', window.location.href).href;
  var fallbackLabel = document.currentScript && document.currentScript.getAttribute('data-hub-label') || '학습 허브';
  var label = explicitReturn && params.get('returnLabel');
  if (!label && !explicitReturn && params.get('from')) label = params.get('from');
  label = (label || (explicitReturn || referrer ? '이전 페이지' : legacyReturn ? '전공기출 문제' : fallbackLabel)).trim().slice(0, 80);
  // A nested lesson must return to this page with its own return route intact.
  // Only enrich authored links that already point back to this exact page.
  var currentUrl = new URL(window.location.href);
  if (document.querySelectorAll) {
    document.querySelectorAll('a[href]').forEach(function (link) {
      try {
        var next = new URL(link.getAttribute('href'), currentUrl);
        if (next.origin !== currentUrl.origin) return;
        var nestedValue = next.searchParams.get('returnTo');
        if (!nestedValue) return;
        var nested = new URL(nestedValue, next);
        if (nested.origin !== currentUrl.origin || nested.pathname !== currentUrl.pathname) return;
        // Keep the authored section hash, plus the validated route and its label.
        nested.search = currentUrl.search;
        nested.searchParams.set('returnTo', destination);
        nested.searchParams.set('returnLabel', label);
        next.searchParams.set('returnTo', nested.href);
        link.href = next.href;
      } catch (_) {
        // Leave malformed or unrelated links untouched.
      }
    });
  }
  var button = document.getElementById('back-btn') || document.getElementById('testmaster-return-btn');

  if (!button) {
    button = document.createElement('a');
    button.id = 'back-btn';
    button.style.cssText = 'position:relative;margin:24px auto 12px;z-index:9999;display:inline-flex;align-items:center;justify-content:center;min-height:44px;max-width:calc(100vw - 24px);box-sizing:border-box;padding:10px 14px;border:1px solid #9bb9ca;border-radius:999px;background:#1a5276;color:#fff;box-shadow:0 4px 16px rgba(26,82,118,.28);font:700 13px/1.35 sans-serif;text-align:center;text-decoration:none;';
    var returnArea = document.createElement('nav');
    returnArea.setAttribute('aria-label', '이전 학습으로 돌아가기');
    returnArea.style.cssText = 'text-align:center;padding:0 12px;';
    returnArea.appendChild(button);
    document.body.appendChild(returnArea);
  }

  button.style.minHeight = '44px';
  button.style.boxSizing = 'border-box';
  button.href = destination;
  button.textContent = '← ' + label + '로 돌아가기';
  button.style.display = 'inline-flex';
  button.setAttribute('aria-label', button.textContent.replace(/^←\s*/, ''));
  button.title = button.getAttribute('aria-label');
})();

/* Independent study-disclosure component; return navigation above is unchanged. */
(function () {
  'use strict';
  if (!/(?:_study|_concepts)\.html$/.test(window.location.pathname)
      || document.getElementById('ew-study-details-script')) return;
  var current = document.currentScript;
  if (!current || !current.src) return;
  var script = document.createElement('script');
  script.id = 'ew-study-details-script';
  script.src = new URL('study-details.js', current.src).href;
  document.head.appendChild(script);
})();
