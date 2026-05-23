<iframe src="https://namkicheol.github.io/linguistics/movement_study.html" width="100%" height="1000px" style="border: none; border-radius: 10px;"></iframe>

# Ch.3 Movement — 이동 변형과 두 층위 구조 완전 정복 | 임용영어학 개념 정리

통사론에서 <span style="color:#3182ce">**movement**</span>는 D-structure에서 S-structure로 넘어가는 변환(transformation) 과정입니다. constituent가 왜 이동하는지, 어디로 이동하는지, 이동 후 무엇이 남는지를 체계적으로 이해해야 <span style="color:#3182ce">**passive**</span>, <span style="color:#3182ce">**raising**</span>, <span style="color:#3182ce">**wh-question**</span>, <span style="color:#3182ce">**subject-auxiliary inversion**</span>을 한 원리로 꿰뚫을 수 있습니다.

---

## ① 개념 정의

### D-structure vs S-structure: 왜 두 층위가 필요한가

<span style="color:#3182ce">**D-structure**</span>(deep structure)는 phrase structure rules와 lexicon이 만들어 내는 base-generated 구조입니다. theta-role이 D-structure에서 결정됩니다.

<span style="color:#3182ce">**S-structure**</span>(surface structure)는 transformation(이동 규칙)이 D-structure에 적용된 결과입니다. Case 점검이 S-structure에서 이루어집니다.

두 층위가 필요한 이유는 surface에서 보이는 위치와 의미 관계가 어긋나는 현상을 설명하기 위해서입니다.

- <span style="color:#319795">*The contract was signed by the team.*</span> — surface에서 <em>the contract</em>는 subject이지만, theta-role(theme)은 동사 뒤 object 위치에서 온다.
- <span style="color:#319795">*Which report did she review t?*</span> — surface에서 wh-phrase는 문두에 있지만, theta-role은 <em>review</em>의 object 위치에서 온다.

| | D-structure | S-structure |
|---|---|---|
| 생성 방식 | base rules + lexicon | D-str에 transformation 적용 |
| 핵심 역할 | theta-role 결정 | Case 점검 |
| 이동 여부 | 이동 전 | 이동 후 |

---

### V-movement (V-to-I)

<span style="color:#3182ce">**V-movement**</span>는 I가 비어 있을 때(Modal이 없을 때) VP의 head V가 I 위치로 이동하여 Tense/Agreement를 얻는 head movement입니다.

- Modal이 있는 경우: I에 Modal이 있으므로 V는 VP에 머물고 uninflected base form을 유지한다.
- Modal이 없는 경우: V가 I로 올라가 inflection을 얻는다.

<span style="color:#dd6b20">**현직쌤 팁**: V-movement와 affix movement는 영어에서 word order 상 구별이 어렵습니다(vacuous application). 임용 답안에서는 두 분석의 차이를 구조 도식으로 명시하면 됩니다.</span>

---

### I-to-C Movement (Subject-Auxiliary Inversion)

직접 yes/no 의문문에서 I의 Modal(또는 Auxiliary)이 empty C로 이동합니다. 이것이 <span style="color:#3182ce">**I-to-C Movement**</span>입니다.

네 가지 증거:

1. **Gap argument**: I 이동 후 그 자리를 다른 Modal로 채울 수 없다. (<span style="color:#c53030">*Will she could leave?</span>)
2. **Subcategorization**: 이동한 Modal은 D-str에서의 subcategorization 제약을 그대로 보인다.
3. **HAVE contraction**: I-to-C 후 남겨진 gap이 HAVE 축약을 차단한다.
4. **Direct vs Indirect Q**: 직접의문문에만 적용. 간접의문문에서는 C가 이미 채워져 I-to-C 불가.

---

### NP-movement: Passive

<span style="color:#3182ce">**Passive NP-movement**</span>에서 object NP가 subject 위치(Spec,IP)로 이동하는 이유는 <span style="color:#3182ce">**Case Filter**</span> 때문입니다.

> Passive morphology → V의 accusative Case 부여 능력 제거 → object NP가 Case를 받지 못함 → <span style="color:#c53030">**Case Filter 위반**</span> → NP가 nominative Case를 받기 위해 Spec,IP로 이동

세 가지 증거(Radford):
- **Subcategorization 충족**: passive V는 D-str에서 NP complement와 함께 subcategorization을 충족한다.
- **Gap argument**: 이동 후 object 자리를 다른 NP로 채울 수 없다.
- **Idiom chunk**: <span style="color:#319795">*Tabs were kept on all visitors.*</span> — idiom chunk NP가 passive subject로 나타남 → D-str에서 V 뒤 object 위치에 있었음을 지지.

<span style="color:#dd6b20">**현직쌤 팁**: verbal passive와 adjectival passive 구별. <span style="color:#319795">*There was expected to be a problem.*</span> (verbal passive ✓) vs <span style="color:#c53030">*There was unexpected to be a problem.*</span> (adjectival passive ✗) — expletive <em>there</em> 허용 여부로 판별.</span>

---

### NP-movement: Raising

<span style="color:#3182ce">**Raising**</span> 구문에서도 NP-movement가 적용됩니다. <em>seem</em>, <em>appear</em>, <em>happen</em>, <em>tend</em> 같은 raising verb는 matrix subject에 theta-role을 부여하지 않기 때문에, embedded clause의 subject NP가 matrix Spec,IP로 이동합니다.

| | Raising verb | Control verb |
|---|---|---|
| 대표 동사 | seem, appear, happen, tend | want, try, decide, persuade, force |
| Matrix subject | theta-role 없음 (이동) | theta-role 있음 (PRO 통제) |
| Idiom chunk subject | <span style="color:#319795">허용</span> | <span style="color:#c53030">불허</span> |
| Expletive *there* | <span style="color:#319795">허용</span> | <span style="color:#c53030">불허</span> |

<span style="color:#dd6b20">**현직쌤 팁**: idiom chunk와 expletive <em>there</em>가 가능하면 raising, 불가능하면 control. 이 두 가지가 임용 답안 작성의 핵심 기준입니다.</span>

---

### Wh-movement

<span style="color:#3182ce">**WH MOVEMENT**</span>는 wh-phrase를 원래 argument 위치에서 <span style="color:#3182ce">**Spec,CP**</span>로 이동시키는 A-bar movement(operator movement)입니다.

- D-str: wh-phrase는 object, subject, PP complement 등 argument 위치에 base-generated.
- S-str: wh-phrase가 Spec,CP로 이동하고 원위치에 <span style="color:#3182ce">**wh-trace**</span>(t_i)를 남긴다.

직접 wh-의문문에서는 WH MOVEMENT와 I-to-C가 동시 적용될 수 있습니다 — wh-phrase는 Spec,CP, inverted auxiliary는 C. 두 요소가 다른 자리이므로 공존 가능합니다.

---

### Trace & Empty Category: That-trace Effect

이동이 일어나면 original position에 <span style="color:#3182ce">**trace**</span>(t)가 남습니다. 이동한 요소와 trace는 동일한 subscript index로 coindexed됩니다.

| | NP-trace | Wh-trace |
|---|---|---|
| 생성 원인 | NP-movement (passive, raising) | WH MOVEMENT |
| 이동 유형 | A → A position | A → A-bar position |
| 적용 원리 | Binding Principle A | ECP (Empty Category Principle) |

<span style="color:#c53030">**That-trace Effect**</span>: wh-phrase가 subject 위치에서 이동할 때, complementizer <em>that</em> 바로 앞에 trace가 남으면 ECP 위반으로 비문이 됩니다.

- <span style="color:#c53030">*Who do you think **that** t saw the professor?*</span> — 비문 (That-trace Effect)
- <span style="color:#319795">*Who do you think t saw the professor?*</span> — 정문 (*that* 생략으로 해소)

---

### Subjacency & Island Constraints

<span style="color:#3182ce">**Subjacency Principle**</span>: 이동 요소는 한 번의 이동 단계에서 둘 이상의 <span style="color:#3182ce">**bounding node**</span>를 교차할 수 없습니다. 영어의 bounding node는 IP와 NP입니다.

Island 유형:

| Island | 대표 비문 |
|---|---|
| Subject Island | <span style="color:#c53030">*What did [pictures of t] bother him?*</span> |
| Complex NP Island | <span style="color:#c53030">*Who did she meet [a man [who knew t]]?*</span> |
| Wh-island | <span style="color:#c53030">*What does he wonder [who bought t]?*</span> |
| Coordinate Structure Island | <span style="color:#c53030">*What did she buy t and a book?*</span> |

Long movement는 중간 Spec,CP를 경유하는 <span style="color:#3182ce">**successive cyclic movement**</span>로 처리하여 각 단계마다 bounding node를 하나씩만 교차합니다.

---

## ② 기출 맥락

Movement 챕터는 임용고시에서 지속적으로 출제되어 왔습니다.

<span style="color:#c53030">**2012 Q33**</span> — passive 구문에서 object NP가 subject 위치로 이동하는 D-str/S-str 대비 분석.

<span style="color:#c53030">**2013 Q34**</span> — raising verb와 control verb의 구분, PRO 적용 여부.

<span style="color:#c53030">**2014 기입3**</span> — passive와 unaccusative 구분에서 NP-movement 적용 여부 판별.

<span style="color:#c53030">**2015 기입3**</span> — raising verb와 control verb를 idiom chunk·there 검증으로 구분.

<span style="color:#c53030">**2017 기입3**</span> — wh-movement와 island constraint 위반 식별.

<span style="color:#c53030">**2018 기입3**</span> — passive와 raising 구문에서 D-str/S-str 도출.

<span style="color:#c53030">**2022 서술2**</span> — wh-phrase가 Spec,CP로 이동하는 과정 분석.

<span style="color:#c53030">**2025 A-7**</span> — Case Filter와 NP-movement: passive/raising 술어의 accusative Case 부여 불가 → NP 이동.

<span style="color:#c53030">**2025 B-5**</span> — Subjacency와 bounding node: 두 개 이상 교차 시 비문.

<span style="color:#c53030">**2026 B-9**</span> — That-trace effect: wh-trace 뒤에 <em>that</em>이 오면 비문.

---

## ③ 키텀 비교

### NP-movement (Passive) vs NP-movement (Raising)

| | Passive | Raising |
|---|---|---|
| 이동 이유 | Case Filter (acc Case 부여 불가) | Matrix verb가 theta-role 비부여 |
| Landing site | Spec,IP (matrix) | Spec,IP (matrix) |
| External argument | 없음 (by-phrase로 흡수) | 없음 (raising verb 특성) |
| D-str 원래 위치 | embedded object | embedded subject |

### Head movement vs NP-movement vs Wh-movement

| | Head movement (V-to-I, I-to-C) | NP-movement | Wh-movement |
|---|---|---|---|
| 이동 요소 | head node (V, I) | maximal projection (NP) | maximal projection (wh-phrase) |
| Landing site | I (V-to-I), C (I-to-C) | A-position (Spec,IP) | A-bar position (Spec,CP) |
| Trace type | head trace | NP-trace (A-bound) | wh-trace (A-bar bound) |

---

## ④ 수험 활용 팁

### 답안 작성 패턴 — Movement 분석

임용 Movement 문항의 표준 답안 패턴:

> *"At D-structure, [NP] is base-generated in [position] where it receives the theta-role of [verb]. At S-structure, [NP] moves to [Spec,IP / Spec,CP] to [receive nominative Case / satisfy the wh-fronting requirement]. A [NP-trace / wh-trace] coindexed with the moved element remains in the original position."*

### 비문 판별 루틴

1. **Case Filter 위반 여부**: passive/raising 구문에서 NP가 Case를 받는가?
2. **That-trace Effect**: wh-phrase가 subject에서 이동할 때 <em>that</em>이 남아 있는가?
3. **Subjacency 위반**: 이동 과정에서 bounding node(IP, NP)를 두 개 이상 교차했는가?
4. **Island constraint**: Subject Island, Complex NP Island, Wh-island 중 하나에 해당하는가?

### 함정 정리

<span style="color:#c53030">**⚠️ raising과 control을 혼동하지 말 것**</span>: idiom chunk와 expletive <em>there</em>로 반드시 검증하세요. <em>seem</em>, <em>appear</em>, <em>happen</em>은 raising; <em>want</em>, <em>try</em>, <em>decide</em>는 control.

<span style="color:#c53030">**⚠️ wh-phrase의 landing site는 C가 아니라 Spec,CP**</span>: inverted auxiliary(I-to-C)는 C에, wh-phrase는 Spec,CP에 있어 두 자리가 다릅니다.

<span style="color:#c53030">**⚠️ adjectival passive에 NP-movement 적용 금지**</span>: <em>un-</em> prefix가 붙거나 gradable한 경우 adjectival passive일 가능성 높음. <em>There</em>-construction 허용 여부로 판별.

<span style="color:#c53030">**⚠️ Subjacency와 bounding node는 언어마다 다를 수 있음**</span>: 영어의 bounding node는 IP와 NP. 이 둘을 둘 다 교차하면 무조건 비문.

---

<p align="center">
<a href="https://namkicheol.github.io/linguistics/movement.html" target="_blank" style="display:inline-block;padding:14px 28px;background:#3b3f86;color:#fff;text-decoration:none;border-radius:8px;font-weight:bold;font-size:15px;">📝 Movement OX 44문항 풀러 가기 →</a>
</p>

---

**태그**: 임용고시, 중등영어, 영어학, 통사론, Ch3, Movement, transformation, D-structure, S-structure, V-movement, I-to-C, NP-movement, passive, raising, wh-movement, trace, Subjacency, island constraint, That-trace effect, Case Filter, 서브노트, 기출분석
