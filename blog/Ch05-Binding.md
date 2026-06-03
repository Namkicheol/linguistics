<iframe src="https://namkicheol.github.io/linguistics/binding_study.html" width="100%" height="1000px" style="border: none; border-radius: 10px;"></iframe>

# Ch.5 Binding — Principle A·B·C·c-command 완전 정복 | 임용영어학 개념 정리

통사론에서 <span style="color:#3182ce;">**Binding**</span>은 어떤 명사 표현이 어디서 다른 표현과 같은 대상을 가리킬 수 있고, 어디서는 가리킬 수 없는지를 규정합니다. 핵심 도구는 두 가지 — <span style="color:#3182ce;">**c-command**</span>라는 구조 관계와 <span style="color:#3182ce;">**coindexation**</span>이라는 지시 관계입니다. 이 글은 <span style="color:#3182ce;">**anaphor**</span> / <span style="color:#3182ce;">**pronoun**</span> / <span style="color:#3182ce;">**R-expression**</span> 세 부류가 각각 <span style="color:#3182ce;">**Principle A·B·C**</span>로 어떻게 갈리는지를 **① 개념 정의** → **② 기출 맥락** → **③ 키텀 비교** → **④ 수험 팁** 흐름으로 풀고, <span style="color:#3182ce;">**binding domain**</span>(= <span style="color:#3182ce;">**governing category**</span>) 안에서 bound인지 free인지로 비문을 가려내는 법을 정리합니다.

---

## ① 개념 정의

### Binding Theory overview — coindexation·bound·free

> **An antecedent is the expression that another expression takes its reference from. Two expressions sharing the same index (e.g., `_i`) are coindexed and refer to the same entity. A binds B if and only if (i) A c-commands B and (ii) A and B are coindexed. An expression is free if it is not bound.**

<span style="color:#3182ce;">**Binding**</span>은 단순히 "같은 대상을 가리킨다"가 아닙니다. 두 조건을 **동시에** 만족해야 binding이 성립합니다 — <span style="color:#3182ce;">**coindexation**</span>(같은 index)과 <span style="color:#3182ce;">**c-command**</span>. 둘 중 하나라도 빠지면 그 요소는 <span style="color:#319795;">**free**</span>입니다. Binding Theory는 <span style="color:#3182ce;">**anaphor**</span> / <span style="color:#3182ce;">**pronoun**</span> / <span style="color:#3182ce;">**R-expression**</span> 세 부류가 각각 어디서 <span style="color:#319795;">**bound**</span>여야 하고 어디서 <span style="color:#319795;">**free**</span>여야 하는지를 Principle A·B·C로 규정합니다.

- <span style="color:#319795;">*Daniel_i hurt himself_i.*</span> — Daniel이 himself를 c-command하고 coindex → himself는 **bound** (정문).
- <span style="color:#319795;">*Daniel_i said he_i was tired.*</span> — he는 Daniel과 coindex이지만 다른 절에 있어 자기 절 안에서는 free → 문장 차원의 coreference 허용 (정문).
- <span style="color:#c53030;">**\*Himself_i resigned.**</span> — himself에 c-commanding antecedent가 없음 → free → Principle A 위반.

---

### c-command — binding의 구조적 핵심

> **X c-commands Y iff the first branching node dominating X also dominates Y, and neither X nor Y dominates the other.** Equivalently, **a node c-commands its sisters and all of their descendants.**

<span style="color:#3182ce;">**c-command**</span>는 binding을 결정하는 구조 관계입니다. 어떤 node X 위로 처음 갈라지는(branching) node를 찾고, 그 node가 지배(dominate)하는 모든 것을 X가 c-command합니다. 직관적으로 X는 트리에서 Y보다 "위에 있거나 같은 높이"에 있어야 합니다. <span style="color:#3182ce;">**subject NP**</span>는 VP 안의 object를 c-command하지만, 소유격(possessor) 안에 갇힌 NP는 그 바깥을 c-command하지 못합니다.

c-command 판정 절차는 세 단계입니다.

1. anaphor / pronoun node를 찾는다.
2. 후보 antecedent node를 찾는다.
3. antecedent 위 first branching node가 anaphor을 dominate하는가? → 그렇다면 c-command 성립.

possessor가 c-command에 실패하는 대조가 핵심입니다.

- <span style="color:#319795;">*The witnesses_i exposed themselves_i.*</span> — `[the witnesses]`는 subject로서 themselves를 c-command → 정문.
- <span style="color:#c53030;">**\*The witnesses'_i testimony exposed themselves_i.**</span> — `[the witnesses']`는 소유격 specifier 안에 갇혀 themselves를 c-command하지 못함 → anaphor에 적법한 c-commanding antecedent 없음 → 비문.

구조로 보면 비문은 `*[TP [DP [DP The witnesses']_i testimony] [VP exposed [DP themselves]_i ]]` — 소유격 DP가 큰 subject DP의 specifier에 갇혀, 그 위 first branching node가 themselves를 dominate하지 못합니다.

---

### Principle A — anaphors

> **An anaphor must be bound within its binding domain (the minimal clause / minimal CP-or-DP containing the anaphor and its closest subject).**

<span style="color:#3182ce;">**Anaphor**</span>은 독립 지시(independent reference)를 가질 수 없는 표현입니다 — <span style="color:#3182ce;">**reflexives**</span>(myself, himself, herself, themselves …)와 <span style="color:#3182ce;">**reciprocals**</span>(each other, one another). 따라서 반드시 antecedent가 있어야 하고, 그 antecedent는 (i) anaphor을 c-command해야 하며 (ii) 같은 <span style="color:#3182ce;">**binding domain**</span>(대략 minimal clause) 안에 있어야 합니다. domain 밖의 antecedent로는 bound될 수 없습니다. <span style="color:#3182ce;">**governing category**</span>라는 표준 용어도 같은 뜻입니다.

- <span style="color:#319795;">*The actress_i blamed herself_i.*</span> — herself가 같은 절 안에서 c-commanding antecedent에 bound → 정문.
- <span style="color:#c53030;">**\*Brian_i hopes that Karen will forgive himself_i.**</span> — himself의 antecedent Brian이 종속절 밖(다른 binding domain)에 있음 → 비문 (Principle A 위반: anaphor not bound in its binding domain).
- <span style="color:#319795;">*Nora_i believes herself_i to be qualified.*</span> — ECM: herself는 비정형 보문의 subject이지만 matrix subject Nora가 그 binding domain 안에서 c-command·bind → 정문.
- <span style="color:#319795;">*The jurors_i distrust each other_i.*</span> — reciprocal each other가 같은 절 복수 antecedent에 bound → 정문.

구조 대조를 보면, 정문은 `[TP [DP The actress]_i [VP blamed [DP herself]_i ]]`로 subject DP의 first branching node(TP)가 herself를 dominate해 c-command가 성립하고, 비문은 `*[TP [DP Brian]_i [VP hopes [CP that [TP Karen [VP will forgive [DP himself]_i ]]]]]`로 himself의 binding domain인 종속 TP 안에 적법한 antecedent가 없습니다. reflexive `They_i admire themselves_i`(각자 자기 자신)와 reciprocal `They_i admire each other_i`(서로 상대를)는 의미가 다르지만 둘 다 anaphor로서 Principle A 적용은 동일합니다.

---

### Principle B — pronouns

> **A pronoun must be free in its binding domain. It may not be bound by a coindexed antecedent within its minimal clause, but it may be bound outside it.**

<span style="color:#3182ce;">**Pronoun**</span>(he, she, it, they, him, her, them …)은 anaphor과 **정확히 반대**입니다. 같은 binding domain 안에서는 antecedent에 bound되면 **안 됩니다**(free여야 함). 단 domain **밖**의 antecedent와의 coreference는 허용됩니다. 그래서 reflexive와 pronoun은 같은 자리에서 <span style="color:#3182ce;">**complementary distribution**</span>을 이룹니다 — 한쪽이 정문이면 다른 쪽은 그 antecedent로 비문입니다.

- <span style="color:#c53030;">**\*Megan_i criticized her_i.**</span> — her가 같은 절 subject Megan에 bound → Principle B 위반 → 비문 (her는 다른 사람만 지시 가능).
- <span style="color:#319795;">*Megan_i said that Paula admired her_i.*</span> — her가 자기 binding domain(종속절) 안에서는 free, 절 밖 Megan과 coreference → 정문.
- <span style="color:#c53030;">**\*The senator_i believes him_i to be honest.**</span> — ECM: him이 binding domain 안 matrix subject the senator에 bound → Principle B 위반 → 비문.
- <span style="color:#319795;">*Oliver_i wants Sarah to support him_i.*</span> — him은 종속절 안에서 free(Sarah가 antecedent 아님), matrix Oliver와 coreference 허용 → 정문.

<span style="color:#dd6b20;">**complementarity 대조가 핵심**</span>입니다. 같은 자리에서 anaphor은 정문, pronoun은 비문이 됩니다.

- <span style="color:#319795;">*Victor_i defended himself_i.*</span> (anaphor, locally bound — Principle A 충족)
- <span style="color:#c53030;">**\*Victor_i defended him_i.**</span> (pronoun, locally bound — Principle B 위반)

---

### Principle C — R-expressions

> **An R-expression must be free everywhere. It may never be bound by a c-commanding coindexed antecedent — neither locally nor non-locally.**

<span style="color:#3182ce;">**R-expression**</span>(referential expression)은 스스로 지시 대상을 골라내는 이름이나 한정 기술입니다 — *Diana, the manager, that student*. R-expression은 어떤 c-commanding antecedent에도 bound될 수 없습니다 — domain 안이든 밖이든 전부. 그래서 c-commanding pronoun이 R-expression과 coindex되면 비문입니다. 단, c-command가 없으면 같은 index도 허용될 수 있습니다.

- <span style="color:#c53030;">**\*He_i thinks Trevor_i will win.**</span> — matrix subject He가 종속절의 이름 Trevor를 c-command·coindex → Principle C 위반 → 비문.
- <span style="color:#c53030;">**\*Sheila_i praised Sheila_i.**</span> — 앞 Sheila가 뒤 Sheila(R-expression)를 c-command·coindex → 비문 (반드시 한쪽은 다른 사람).
- <span style="color:#319795;">*His_i mother adores Trevor_i.*</span> — His는 소유격 안에 갇혀 Trevor를 c-command하지 **못함** → coindex 허용 → 정문 (R-expression이 free).
- <span style="color:#319795;">*When she_i arrived, Diana_i smiled.*</span> — 부사절 안 she가 주절 Diana를 c-command하지 못함 → 정문.

구조로 보면 비문은 `*[TP [DP He]_i [VP thinks [CP that [TP [DP Trevor]_i will win]]]]`로 matrix subject He가 종속절 이름 Trevor를 c-command하고, 정문 대조 `[TP [DP [DP His]_i mother] [VP adores [DP Trevor]_i ]]`에서는 His가 소유격 안이라 Trevor를 c-command하지 못해 R-expression이 free로 남습니다.

---

### Governing category / Binding domain — locality

> **The binding domain (= governing category) of an element is the smallest clause (minimal CP/TP) — or DP — containing that element and a subject (governor) that could serve as its binder.**

<span style="color:#3182ce;">**locality**</span>는 Principle A·B의 "어디까지"를 정합니다. 대략 **anaphor / pronoun을 포함하는 가장 작은 절**이 그 <span style="color:#3182ce;">**binding domain**</span>입니다. Anaphor은 이 domain **안에서** bound, pronoun은 이 domain **안에서** free여야 합니다. <span style="color:#3182ce;">**governing category**</span>와 <span style="color:#3182ce;">**binding domain**</span>은 같은 개념의 다른 이름일 뿐입니다.

여기서 ECM이 domain을 위로 확장하는 점을 반드시 함께 잡아야 모순이 없습니다. binding domain은 "요소 + 그 binder가 될 수 있는 subject를 포함하는 가장 작은 절"입니다. 따라서 <span style="color:#3182ce;">**finite 종속절**</span>에서는 anaphor의 domain이 그 종속절에 닫혀 상위 절 antecedent를 가질 수 없습니다. 그러나 비정형/ECM 보문(`believe / expect X to VP`)에서는 하위 subject 자리의 요소가 그 절 안에 적법한 subject-binder를 갖지 못하므로 domain이 **matrix subject까지 확장**됩니다. 그 결과 `Nora believes herself to be...`(anaphor)는 정문, <span style="color:#c53030;">**\*Nora believes her to be...**</span>(pronoun, 같은 지시)는 비문입니다. 즉 "clause-bounded"는 finite 절 기준의 평이한 특성화이고, ECM에서는 domain이 위로 확장된다는 점을 함께 적어야 합니다.

- <span style="color:#319795;">*Helen_i convinced herself_i.*</span> (domain = 단일 절, anaphor bound → 정문)
- <span style="color:#c53030;">**\*Helen_i convinced her_i.**</span> (같은 domain에서 pronoun bound → 비문)
- <span style="color:#319795;">*Helen_i knew that the doctor trusted her_i.*</span> (her의 domain = 종속절; 그 안에서 free → 정문)

---

## ② 기출 맥락

Binding은 임용 통사론에서 anaphor / pronoun / R-expression의 분포와 c-command를 묻는 핵심 영역입니다.

<span style="color:#dd6b20;">**메가쌤 기출분석에서 확인된 결합형 서술형 각도**</span>가 대표적입니다. <span style="color:#3182ce;">**Theta role**</span> + <span style="color:#3182ce;">**Binding condition**</span> + <span style="color:#3182ce;">**Movement constraint**</span>를 한 서술형 문항에서 동시에 적용시키는 고난도 유형으로, Binding 부분의 핵심은 anaphor(himself)가 **lowest embedded clause** 안에 있고 antecedent(matrix subject)가 멀리 있을 때 anaphor이 bound될 수 있는지를 판정·설명하게 하는 것입니다. 표준 답안 방향은 — anaphor은 자신의 binding domain(minimal clause) 안에서 bound되어야 하므로, antecedent가 다른 절에 있으면 binding condition 위반으로 ill-formed라는 것입니다.

토픽 색인 수준에서는 `binding theory`, `anaphora`, `pronoun`, `Principle A/B/C`가 출제 토픽으로 등재되어 있습니다.

> 연도가 검증되지 않은 항목은 연도를 표기하지 않았습니다. 위 결합형 각도는 메가쌤 기출분석에서 확인된 각도이되 해당 자료에서 연도가 확인되지 않아 연도 표기를 생략합니다.

---

## ③ 키텀 비교

### 3분류 한눈에 — anaphor / pronoun / R-expression

세 부류가 각각 어디서 bound·free여야 하는지가 Binding의 전부입니다. 가장 빈출되는 판별 포인트입니다.

| 항목 | Anaphor (himself, each other) | Pronoun (him, her, them) | R-expression (Diana, the manager) |
|---|---|---|---|
| 독립 지시 가능? | 불가 — 반드시 antecedent 필요 | 가능(deictic) 또는 antecedent | 가능 — 스스로 지시 |
| 적용 Principle | **A** | **B** | **C** |
| 요건 | binding domain 안에서 **bound** | binding domain 안에서 **free** | 어디서나 **free** |
| 같은 절 내 c-commanding antecedent | **필수** (없으면 비문) | **금지** (있으면 비문) | **금지** (있으면 비문) |
| 절 밖 c-commanding antecedent | 불가 (too far) | 허용 | 금지 |

한 줄 요약 — anaphor은 가까이서 bound, pronoun은 가까이선 free·멀리선 OK, R-expression은 언제나 free.

### Principle A vs Principle B — complementary distribution

같은 자리에서 anaphor과 pronoun은 정반대로 갈립니다. 이것이 두 Principle이 만드는 <span style="color:#3182ce;">**complementary distribution**</span>입니다.

| 자리 | Anaphor | Pronoun |
|---|---|---|
| 같은 절(binding domain) 안 c-commanding subject | <span style="color:#319795;">정문 (Principle A 충족 — bound)</span> | <span style="color:#c53030;">비문 (Principle B 위반 — bound)</span> |
| 절 밖 antecedent와 coreference | <span style="color:#c53030;">불가 (too far)</span> | <span style="color:#319795;">허용 (domain 안에서는 free)</span> |
| 예 | <span style="color:#319795;">*Victor defended himself.*</span> | <span style="color:#c53030;">**\*Victor defended him.**</span> (him = Victor) |

### governing category / binding domain — finite vs ECM

`governing category`와 `binding domain`은 같은 개념의 표준 동의어입니다. 핵심은 finite 절과 ECM 보문에서 domain의 범위가 달라진다는 점입니다.

| 구조 | binding domain 범위 | anaphor | pronoun (같은 지시) |
|---|---|---|---|
| finite 종속절 | 그 종속절에 닫힘 | 상위 절 antecedent 불가 | 상위 절과 coreference 허용 |
| ECM (`believe X to VP`) | matrix subject까지 확장 | <span style="color:#319795;">*Nora believes herself to be qualified.*</span> | <span style="color:#c53030;">**\*Nora believes her to be qualified.**</span> |

### anaphor·pronoun·R-expression 진단 순서

| 진단 | 확인 항목 |
|---|---|
| 1. 요소 분류 | 문제의 표현이 anaphor / pronoun / R-expression 중 무엇인가 |
| 2. c-command 확인 | antecedent가 그 요소를 c-command하는가 (소유격·부사절은 c-command 못 함) |
| 3. binding domain 확정 | 요소 + 그 binder가 될 수 있는 subject를 포함하는 가장 작은 절 (ECM은 위로 확장) |
| 4. Principle 적용 | A → domain 안 bound 요구 &#124; B → domain 안 free 요구 &#124; C → 어디서나 free 요구 |

---

## ④ 수험 팁

### 답안 작성 패턴

임용 Binding 문항의 표준 답안 패턴입니다. 영어 그대로 외워 두면 서술형에서 바로 씁니다.

> **Principle A**: *"Sentence X is ungrammatical because Principle A is violated — the anaphor is not bound in its binding domain (its only possible antecedent lies outside the minimal clause)."*

> **Principle B**: *"Sentence X is ungrammatical because Principle B is violated — the pronoun is not free in its binding domain (it is bound by a coindexed c-commanding antecedent within its minimal clause)."*

> **Principle C**: *"Sentence X is ungrammatical because Principle C is violated — the R-expression is not free (it is bound by a c-commanding coindexed antecedent)."*

### 시험장 판별 루틴

1. **요소부터 분류**: anaphor(reflexive·reciprocal) / pronoun / R-expression 중 무엇인지 먼저 결정. Principle이 자동으로 정해집니다 — A / B / C.
2. **c-command 확인**: antecedent가 요소를 c-command하는가. 소유격(possessor) 안의 NP나 부사절 안의 요소는 바깥을 c-command하지 못하므로, 여기서 비문/정문이 갈립니다.
3. **binding domain 확정**: 요소를 포함하는 가장 작은 절을 잡되, ECM(`believe X to VP`)이면 domain이 matrix subject까지 확장됨을 기억.
4. **bound/free 판정**: anaphor은 domain 안 bound여야 정문, pronoun은 domain 안 free여야 정문, R-expression은 어디서나 free여야 정문.

### 함정 정리

<span style="color:#c53030;">**⚠️ coindexation만으로는 binding이 아니다**</span>: binding은 c-command + coindexation **둘 다** 필요합니다. 같은 index만으로 bound라고 판단하면 틀립니다.

<span style="color:#c53030;">**⚠️ 소유격·부사절은 바깥을 c-command 못 한다**</span>: <span style="color:#c53030;">**\*The witnesses' testimony exposed themselves.**</span>는 비문, <span style="color:#319795;">*His mother adores Trevor.*</span>(His = Trevor)는 정문. c-command 실패가 정/비문을 가릅니다.

<span style="color:#c53030;">**⚠️ finite 절과 ECM을 한 진술로 묶지 말 것**</span>: "anaphor은 종속절 antecedent를 못 가진다"는 finite 종속절에서만 참입니다. ECM 보문에서는 domain이 확장되어 <span style="color:#319795;">*Nora believes herself to be qualified.*</span>가 정문이 됩니다.

<span style="color:#c53030;">**⚠️ Principle B는 "절 안에서만" free를 요구한다**</span>: pronoun이 문장 전체에서 antecedent를 못 가지는 것이 아닙니다. <span style="color:#319795;">*Megan said that Paula admired her.*</span>(her = Megan)처럼 domain **밖** antecedent와의 coreference는 허용됩니다.

<span style="color:#c53030;">**⚠️ Principle C는 절이 달라도 적용된다**</span>: R-expression은 c-commanding antecedent가 다른 절에 있어도 bound될 수 없습니다. <span style="color:#c53030;">**\*She said that Diana was promoted.**</span>(She = Diana)는 비문입니다.

### 복습 포인트

- anaphor = domain 안 bound, pronoun = domain 안 free, R-expression = 어디서나 free. 이 한 줄이 Principle A·B·C 전부입니다.
- binding = c-command **and** coindexation. 둘 중 하나라도 빠지면 free.
- anaphor과 pronoun은 같은 자리에서 complementary distribution — 한쪽이 정문이면 다른 쪽은 비문.
- `governing category` = `binding domain` = 요소 + 그 binder 될 subject를 포함하는 가장 작은 절. finite 절은 닫히고, ECM은 matrix subject까지 확장.

---

<p align="center">
<a href="https://namkicheol.github.io/linguistics/binding.html" target="_blank" style="display:inline-block;padding:14px 28px;background:#3b3f86;color:#fff;text-decoration:none;border-radius:8px;font-weight:bold;font-size:15px;">📝 Ch.5 Binding OX 40문항 풀러 가기 →</a>
</p>

---

**태그**: 임용고시, 중등영어, 전공영어, 영어학, 통사론, syntax, Binding, Principle A, Principle B, Principle C, c-command, anaphor, pronoun, R-expression, governing category, 서브노트, 기출분석
