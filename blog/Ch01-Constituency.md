<iframe src="https://namkicheol.github.io/linguistics/constituency_study.html" width="100%" height="1000px" style="border: none; border-radius: 10px;"></iframe>

# Ch.1 Constituency — 구성성분 완전 정복 | 임용영어학 개념 정리

영어학 통사론 첫 단원, **constituent** 개념을 완전히 정리합니다. 통사 분석의 모든 출발점이며, 이후 Movement·Binding·X-bar 분석이 모두 이 개념 위에 얹힙니다. 임용 기출에서 비문/정문 판별 문항이 가장 자주 묻는 주제이기도 합니다.

---

## ① 개념 정의

### Constituent란 무엇인가

<span style="color:#3182ce">**Constituent**</span>는 단어들이 모여 하나의 통사 단위로 기능하는 묶음입니다. Tree에서 single node가 dominate하는 모든 단어들의 집합으로 정의됩니다. 가장 작은 constituent는 word 자체이고, 가장 큰 constituent는 sentence 전체입니다.

> *"A constituent is a word or group of words that functions as a single unit within a hierarchical structure."*

문장은 단어들의 평면적 나열(<span style="color:#c53030">**flat sequence**</span>)이 아니라 위계적(<span style="color:#3182ce">**hierarchical**</span>) 구조를 가집니다. 의미 단위·통사 규칙(이동·생략·대용)이 모두 constituent 단위로 작동합니다.

### Constituent test 5종 — 비문/정문 판별의 핵심 도구

영어학에서 어떤 단어 묶음이 constituent인지 검증하는 표준 진단법은 다섯 가지입니다.

| 진단법 | 원리 | 대표 proform/조작 |
|---|---|---|
| <span style="color:#3182ce">**Substitution**</span> | proform으로 대체 가능 | NP→pronoun · VP→do so · PP→there/then |
| <span style="color:#3182ce">**Movement**</span> | 한 단위로 이동 가능 | topicalization · PP preposing · VP fronting |
| <span style="color:#3182ce">**Coordination**</span> | 같은 범주끼리 결합 | and · or · but |
| <span style="color:#3182ce">**Fragment Answer**</span> | wh-Q에 단독 답변 | "Where? — In the lab." |
| <span style="color:#3182ce">**Cleft**</span> | it-cleft focus 위치 | "It was X that…" |

이 다섯 진단이 모두 통과하면 그 단어 묶음은 분명한 constituent. 일부 진단만 통과하고 다른 진단이 실패하면 그 묶음은 constituent가 아니거나 분석이 모호한 케이스입니다.

<span style="color:#dd6b20">**현직쌤 팁**: 임용 답안에서는 "_X_ is a constituent because the substitution test/movement test confirms it" 형식으로 어떤 진단이 적용되었는지 명시하는 게 안전합니다.</span>

---

## ② 기출 맥락

### Phrasal Verb vs Prepositional Verb — 4-way 진단

임용 통사 문항에서 **가장 자주 나오는** 비문/정문 판별 주제입니다. 두 동사 유형은 표면상 비슷해 보이지만 통사 행동이 정반대입니다.

| 진단 | <span style="color:#3182ce">**Phrasal Verb**</span> (V + Particle) | <span style="color:#3182ce">**Prepositional Verb**</span> (V + PP) |
|---|---|---|
| NP shift (V-NP-Prt) | ✅ | ❌ |
| Pronoun shift (V-pronoun-Prt) | ✅ (의무적) | ❌ |
| 부사 삽입 (V-Adv-X) | ❌ | ✅ |
| Wh-question P-stranding | — | ✅ |

> *"She turned <span style="color:#319795">**off**</span> the light"* / *"She turned the light <span style="color:#319795">**off**</span>"* ✅
> *"She turned <span style="color:#319795">**it off**</span>"* ✅ / *"<span style="color:#c53030">*She turned off it</span>"* ❌
>
> *"She <span style="color:#319795">**looked at**</span> the painting"* ✅ / *"<span style="color:#c53030">*She looked the painting at</span>"* ❌
> *"<span style="color:#319795">**What**</span> did she <span style="color:#319795">**look at**</span>?"* ✅

<span style="color:#c53030">**⚠️ 함정**: pronoun shift는 phrasal V에서 **의무적**입니다. *"She turned off it"*은 비문. 임용에서 가장 자주 노리는 함정.</span>

### C-command — Binding과 NPI의 기초

<span style="color:#3182ce">**C-command**</span>는 통사 의존성(Binding·NPI licensing·Movement constraints)의 기반 개념입니다.

> *"Node A c-commands node B iff (i) A does not dominate B, (ii) B does not dominate A, (iii) the first branching node dominating A also dominates B."* — <span style="color:#805ad5">**Reinhart (1976)**</span>

쉽게 말하면, A의 sister node 안에 B가 있으면 A가 B를 c-command합니다.

**기출 출제 패턴**:

① **Anaphor binding** — Reflexive(<span style="color:#3182ce">**himself**</span>, <span style="color:#3182ce">**herself**</span> 등)는 결속 영역 안에서 c-commanding antecedent를 가져야 함 (<span style="color:#3182ce">**Binding Principle A**</span>).

> *"The candidate<sub>i</sub> admires <span style="color:#319795">**himself<sub>i</sub>**</span>"* ✅ — subject가 object anaphor를 c-command
>
> *"<span style="color:#c53030">*Himself<sub>i</sub> admires the candidate<sub>i</sub></span>"* ❌ — anaphor가 antecedent를 c-command함 (역방향)

② **NPI licensing** — <span style="color:#3182ce">**any**</span>, <span style="color:#3182ce">**ever**</span> 등 NPI는 부정 요소가 c-command해야 인가됨.

> *"<span style="color:#319795">**Nobody**</span> has read <span style="color:#319795">**any**</span> of the reports"* ✅ — nobody가 any를 c-command
>
> *"<span style="color:#c53030">*The friend of nobody has read any of the reports</span>"* ❌ — nobody가 NP 안에 갇혀 c-command 못함

③ **Principle C** — R-expression(고유명사·정관사 NP)은 c-commanding 동지수 요소를 가질 수 없음.

---

## ③ 키텀 비교

### Complement vs Adjunct — X-bar 위계 핵심

| | <span style="color:#3182ce">**Complement**</span> | <span style="color:#3182ce">**Adjunct**</span> |
|---|---|---|
| 의무성 | head가 의무적으로 요구 | 선택적 |
| 위치 | head와 sister (가장 가까이) | complement 외곽 |
| Recursion | 단일 | 누적 가능 |
| do so 대용 | 함께 사라짐 | 남을 수 있음 |

> *"the student <span style="color:#319795">**of physics**</span> with long hair"* ✅
> *"<span style="color:#c53030">*the student with long hair of physics</span>"* ❌

<span style="color:#319795">**of physics**</span>가 complement(head <span style="color:#319795">**student**</span>가 의미상 요구), <span style="color:#319795">**with long hair**</span>가 adjunct. 어순은 head → complement → adjunct가 정상이며, 이를 어기면 비문.

### Asymmetric vs Symmetric C-command

| | <span style="color:#3182ce">**Asymmetric**</span> | <span style="color:#3182ce">**Symmetric (Mutual)**</span> |
|---|---|---|
| 정의 | A가 B를 c-command, B는 A를 못함 | A↔B 서로 c-command |
| 대표 | subject NP → object NP | sister nodes |
| 의의 | 주어 우선성(subject orientation) 근거 | LCA 등 선형화 이론 기반 |

Subject가 VP 안 object를 asymmetric하게 c-command하기 때문에 영어 anaphor·NPI에서 subject orientation이 나타납니다.

### Substitution Proform — 4종

| 대용 대상 | Proform | 예시 |
|---|---|---|
| NP | <span style="color:#319795">**pronoun**</span> (he/she/it/they) | "the new intern" → "she" |
| VP | <span style="color:#319795">**do so / do it**</span> | "read the article" → "did so" |
| Locative PP | <span style="color:#319795">**there**</span> | "on the shelf" → "there" |
| Temporal PP | <span style="color:#319795">**then**</span> | "at midnight" → "then" |

대용 가능 여부로 그 string이 어느 범주의 constituent인지 정확히 진단할 수 있습니다.

---

## ④ 수험 활용 팁

### 답안 작성 패턴 — 통사 답안의 정형구

비문/정문 판별 문항의 답안은 다음 정형구로 시작하면 안전합니다.

> *"Sentence (X) is grammatical/ungrammatical because [Principle/Filter/Constraint] is satisfied/violated. Specifically, …"*

기출에서 답안 작성 시 자주 인용되는 표준 표현:

- *"X c-commands Y, satisfying Binding Principle A."*
- *"The NPI <span style="color:#319795">**any**</span> requires a c-commanding licenser, which is unavailable in this configuration."*
- *"The substitution test confirms that [X] forms a single VP constituent."*
- *"Particle shift is impossible with prepositional verbs because the preposition is the head of a PP."*

### 검증 순서 — 비문 판단 시

낯선 문장의 grammaticality를 판단할 때 다음 순서로 점검합니다.

1. **Subcategorization 충족?** — 동사가 요구하는 complement가 모두 있는가
2. **C-command 관계?** — anaphor·pronoun·R-expression의 binding 조건이 위반되지 않는가
3. **Movement constraint?** — wh-movement·NP-movement에서 island violation이 없는가
4. **선형 어순?** — head → complement → adjunct 순서가 지켜지는가

이 네 단계 점검이 통사 답안 작성의 표준 절차입니다.

### 함정 키워드 정리

<span style="color:#c53030">**⚠️ Phrasal vs Prepositional**</span>: 두 단어 동사를 보면 무조건 둘 중 하나로 단정하지 말고 4-way 진단(NP shift / pronoun shift / 부사 삽입 / wh-extraction)을 다 적용해서 판단하세요.

<span style="color:#c53030">**⚠️ C-command direction**</span>: subject → object가 비대칭이라는 점, 그리고 anaphor는 antecedent에게 c-command 당해야 한다는 점(반대가 아님). 임용에서 자주 뒤집어 출제됩니다.

<span style="color:#c53030">**⚠️ Coordination**</span>: 같은 범주(category)의 constituent끼리만 결합 가능. VP+PP, NP+VP 같은 mixed-category coordination은 비문.

---

<p align="center">
<a href="https://obangti.tistory.com/<post-id>" target="_blank" style="display:inline-block;padding:14px 28px;background:#3b3f86;color:#fff;text-decoration:none;border-radius:8px;font-weight:bold;font-size:15px;">📝 Constituency OX 40문항 풀러 가기 →</a>
</p>

---

**태그**: 임용고시, 중등영어, 영어학, 통사론, Ch1, Constituency, Constituent test, Phrasal verb, Prepositional verb, C-command, Binding, X-bar, Substitution, Movement, Coordination, 구성성분, 서브노트, 기출분석
