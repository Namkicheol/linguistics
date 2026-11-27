# 영어학 단원 자료 점검 대장 — 2026-11-27

범위: 원서 전용 은행을 제외한 이 저장소의 단원별 OX, 학교문법과 통사 심화. 아래 목록은 현재 화면 데이터 인벤토리이며, `미대조`·`미검토`는 검증 완료가 아니다. ID가 없는 단원 문항은 파일 내 Q 배열의 1부터 시작하는 순서로 식별한다. 은행과 중복 탑재된 문항은 원문 및 정답 대조 후 별도 매핑한다. 외부 저장소의 실제 콘텐츠는 별도 담당이다.

## 페이지 범위

- 단원 개념·퀴즈: constituency, phrase-structure, movement, raising-control, binding, morphology, semantics, pragmatics의 `*_study.html` 및 `*.html`.
- 심화·학교문법: `syntax.html`, `syntax-diagnostics_study.html`, `school-grammar.html`, `school-grammar_study.html`과 아래의 독립 OX.
- 탐색: `index.html` 및 각 화면에서 실제 연결하는 학습 경로. 원서 전용 TG/TF/AEP/general 은행은 이 대장에서 제외한다.
- study 페이지의 검토 범위는 아래 섹션별 현황과 연결 기출 대조표에 기록한다.

독립 8단원 OX는 290문항이다. 학교문법 36문항과 관련 개념 페이지는 별도 담당자가 검토한다. `example-judgment-ox.html` 32문항, `advanced-syntax-grammaticality-ox.html` 11문항, `syntax-analysis-ox.html` 8문항은 각각 example-ox bank의 `school`, `transform`, `syntax`에 같은 ID·질문·정답·해설로 중복되어 별도 담당자의 검증 결과를 연결해야 한다. 중복 판정은 내용 검증을 대신하지 않는다.

### 단원 개념 페이지 섹션 인벤토리

각 행은 섹션별 검토 범위를 나타낸다. 연결 기출 49개의 상세 대조 결과는 아래 별도 표에 기록했다.

| 파일 | 본문 섹션 ID | 현재 판정 |
| --- | --- | --- |
| constituency_study.html | s1–s9 | s1–s9 본문의 개념·대표 예문·도식 주장을 확인. s2·s5 핵심 정의 대조 및 수정: `refs/syntax_argumentation.md:17101–17118`, `:19472`, `:19520` (의미 보존과 ellipsis 주의). s6은 `refs/transformational_grammar.md:5570–5610`의 particle+NP 전치 진단과 다른 단독 particle 전치로 표기한 두 라벨 수정. s7은 head·complement·adjunct·specifier가 모든 phrase에 있다는 일반화를 기본 X-bar 도식의 설명으로 수정. |
| phrase-structure_study.html | phrase-structure-rules, tree-diagram-basics, x-bar-schema, complement-adjunct, specifier-projection, dp-hypothesis, clause-layers, vp-internal-subject | 핵심 정의 1차 확인; complement-adjunct의 2022 A07과 vp-internal-subject의 2020 B01 시험지 대조. 나머지 예문·세부 본문 미대조 |
| movement_study.html | d-s-structure, v-movement, i-to-c, np-movement-passive, np-movement-raising, wh-movement, trace, subjacency | 여덟 절 본문·예문·도식 주장 확인. 핵심 정의 1차 대조: Radford `refs/transformational_grammar.md:22150–22317`, `:22688`, `:23119`, `:23957`, `:28417`, `:30723`; 기출 연결은 아래 표 참조. |
| raising-control_study.html | theta-criterion, ssr, sor-ecm, subject-control, object-control, pro, diagnostics | 2025 B05 시험지는 put을 ditransitive라고 지문에서 직접 부르므로 그 분류가 시험지의 정의임을 명시. 2019 B06 PRO·control·ECM 발문과 s3–s6 설명 대조. 일곱 절의 핵심 개념·비교 예문·도식 주장은 Radford `refs/transformational_grammar.md:17961`, `:24363` 및 위 시험지에 비추어 검토. |
| binding_study.html | binding-overview, c-command, principle-a, principle-b, principle-c, governing-category, binding-three-way | c-command 정의 `refs/transformational_grammar.md:6712–6741` 대조. sister와 그 descendants 설명을 first-branching 정의와 무조건 동치라고 읽지 않도록 단순 분기 구조 예시로 한정. 마지막 표의 domain 밖 선행사도 별도의 local binder 존재를 배제하지 않도록 수정. 각 절 본문·예문의 주장 검토. |
| morphology_study.html | morpheme, lexical-functional, inflection-derivation, affix-types, allomorphy, word-formation, compounding, word-structure, productivity | 핵심 정의 1차 대조: `refs/윤도형2015.md:319–485`, `:764–1014`, `:1185–1221`, `:1428`, `:19766`. 2021 A02 unboxing, 2007 N03 NASA·netizen·NYU, 2011 X26 xerox·sub·raincheck·typewrite, 2026 B01 neighbor-hood-s, 2023 B04 -al base stress를 시험지 대조. 2020 B03 prefix/suffix 비교 범위를 해당 자료로 한정. 나머지 예문·도식 본문 미대조 |
| semantics_study.html | sense-reference, synonymy-antonymy, hyponymy-meronymy, homonymy-polysemy, entailment-presupposition, ambiguity, thematic-roles, componential-analysis | 핵심 정의 1차 대조: `refs/윤도형2015.md:1758–1979`, `:2121–2183`, `:2333–2422`; `refs/phonetics/ail.md:12268`, `:12537`, `:12864`. 2018 A09 scope 발문 및 2010 X35 entailment 문항 대조. 2010 문항 요구를 상단에 명확히 쓰고 some→not all의 맥락 조건 추가. synonymy의 부자연스러운 a little chance 예시는 기존 해설과 같은 big/large suitcase 교체 예시로 수정. 나머지 기출·도식 상세 대조 필요 |
| pragmatics_study.html | speech-acts, speech-act-components, performative-felicity, direct-indirect, cooperative-maxims, manner-context-examples, implicature, scalar-conventional, presupposition, politeness-deixis | 핵심 정의는 `refs/윤도형2015.md:2749–2914`, `:3226–3543`, `:2121–2183` 1차 대조. 2007 S18 화자의 독일군 가장 의도와 독일어 문장 의미, 2013 X33 수량·정도 추론을 시험지 대조. 2020 A05 적용 예시가 원문이 아닌 변형 예문임을 명시. scalar-conventional 정의의 고정 all/most/many/some 순서는 제거하고 관련 stronger alternative의 조건을 표현함(`refs/영어학 짱은 나야!!!_가루미 복사본.md:2504`). cooperative-maxims에서 maxim을 지키지 않는다고 일반화한 문구도 수정. 나머지 예문·도식 본문 미대조 |

## 연결 기출 대조

아래는 링크 대상 49개 ID와 59개 파일·섹션 조합이다. 시험지 내용 확인은 testmaster의 개별 JSON `problem` 및 `answer.model_answer`를 기준으로 했고 2022 B05는 JSON의 시험지 figure도 확인했다. 학습용 변형은 원문 그대로 인용한 것과 구분한다. 아래 대조는 카드 자체가 공식 시험지와 완전히 일치한다는 별도 원본 이미지 전수 검증을 뜻하지 않는다.

| 기출 ID | 연결 섹션 | 확인 |
| --- | --- | --- |
| `linguistics_2007_N03` | `morphology#word-formation` | passage·model answer 대조 |
| `linguistics_2007_N21` | `semantics#synonymy-antonymy` | passage·model answer 대조 |
| `linguistics_2007_S16` | `pragmatics#politeness-deixis` | passage·model answer 대조 |
| `linguistics_2007_S18` | `pragmatics#speech-acts` | passage·model answer 대조 |
| `linguistics_2008_N08` | `pragmatics#politeness-deixis` | passage·model answer 대조 |
| `linguistics_2008_S19` | `morphology#word-formation` | passage·model answer 대조 |
| `linguistics_2009_X29` | `raising-control#object-control` | passage·model answer 대조 |
| `linguistics_2009_X32` | `phrase-structure#complement-adjunct` | passage·model answer 대조 |
| `linguistics_2009_X35` | `pragmatics#cooperative-maxims`, `pragmatics#speech-acts` | passage·model answer 대조 |
| `linguistics_2010_X34` | `pragmatics#politeness-deixis` | passage·model answer 대조 |
| `linguistics_2010_X35` | `semantics#entailment-presupposition` | passage·model answer 대조 |
| `linguistics_2010_X36` | `phrase-structure#complement-adjunct` | passage·model answer 대조 |
| `linguistics_2011_X26` | `morphology#word-formation` | passage·model answer 대조 |
| `linguistics_2011_X32` | `semantics#synonymy-antonymy` | passage·model answer 대조 |
| `linguistics_2011_X34` | `constituency#s6` | passage·model answer 대조 |
| `linguistics_2012_X21` | `raising-control#ssr`, `raising-control#subject-control` | passage·model answer 대조 |
| `linguistics_2012_X34` | `pragmatics#direct-indirect` | passage·model answer 대조 |
| `linguistics_2013_X31` | `morphology#inflection-derivation` | passage·model answer 대조 |
| `linguistics_2013_X33` | `pragmatics#scalar-conventional` | passage·model answer 대조 |
| `linguistics_2013_X35` | `binding#governing-category` | passage·model answer 대조 |
| `linguistics_2014_A04` | `constituency#s7` | passage·model answer 대조 |
| `linguistics_2014_A05` | `morphology#productivity` | passage·model answer 대조 |
| `linguistics_2015_A10` | `binding#governing-category` | passage·model answer 대조 |
| `linguistics_2016_B06` | `phrase-structure#complement-adjunct` | passage·model answer 대조 |
| `linguistics_2017_B06` | `binding#c-command` | passage·model answer 대조 |
| `linguistics_2018_A08` | `pragmatics#politeness-deixis` | passage·model answer 대조 |
| `linguistics_2018_A09` | `semantics#ambiguity` | passage·model answer 대조 |
| `linguistics_2018_A12` | `constituency#s4` | passage·model answer 대조 |
| `linguistics_2018_B06` | `binding#principle-a`, `raising-control#ssr` | passage·model answer 대조 |
| `linguistics_2019_A09` | `movement#wh-movement` | passage·model answer 대조 |
| `linguistics_2019_B06` | `raising-control#object-control`, `raising-control#pro`, `raising-control#sor-ecm`, `raising-control#subject-control` | passage·model answer 대조 |
| `linguistics_2020_A05` | `pragmatics#politeness-deixis` | passage·model answer 대조 |
| `linguistics_2020_B01` | `phrase-structure#vp-internal-subject` | passage·model answer 대조 |
| `linguistics_2020_B03` | `morphology#allomorphy` | passage·model answer 대조 |
| `linguistics_2021_A02` | `morphology#word-formation` | passage·model answer 대조 |
| `linguistics_2021_A03` | `phrase-structure#specifier-projection` | passage·model answer 대조 |
| `linguistics_2022_A07` | `constituency#s4`, `constituency#s7`, `phrase-structure#complement-adjunct` | passage·model answer 대조 |
| `linguistics_2022_B02` | `movement#v-movement` | passage·model answer 대조 |
| `linguistics_2022_B05` | `movement#subjacency` | passage·model answer 대조 |
| `linguistics_2023_B04` | `morphology#productivity` | passage·model answer 대조 |
| `linguistics_2023_B05` | `semantics#ambiguity` | passage·model answer 대조 |
| `linguistics_2024_A07` | `raising-control#ssr` | passage·model answer 대조 |
| `linguistics_2024_B05` | `semantics#ambiguity` | passage·model answer 대조 |
| `linguistics_2025_A02` | `pragmatics#implicature` | 수정: 불합격 대화 원문 복원 |
| `linguistics_2025_A07` | `movement#np-movement-raising`, `raising-control#ssr`, `raising-control#subject-control` | passage·model answer 대조 |
| `linguistics_2025_B01` | `semantics#entailment-presupposition` | passage·model answer 대조 |
| `linguistics_2025_B05` | `movement#wh-movement` | passage·model answer 대조 |
| `linguistics_2026_B01` | `morphology#inflection-derivation` | passage·model answer 대조 |
| `linguistics_2026_B09` | `movement#trace` | passage·model answer 대조 |

## 문항별 현황

### constituency.html — 40문항

| 식별 | 주제 | 정답 | 원서·기출 대조 | 판정 |
| --- | --- | --- | --- | --- |
| constituency #1 | Constituency Test | O | `refs/syntax_argumentation.md:17805`, `:25954`; 2014 A04 발문 substitution | GREEN — did so가 제시된 VP 전체를 대용하는 분석 |
| constituency #2 | Constituency Test | X | `refs/syntax_argumentation.md:17101`; 2014 A04 발문 substitution | GREEN — 전체 대상을 다시 가리킨 사실만으로 부분 문자열의 constituent를 입증하지 않음 |
| constituency #3 | Constituency Test | O | `refs/syntax_argumentation.md:15096` | GREEN — there가 장소 PP를 대신하는 제시된 대조 |
| constituency #4 | Constituency Test | O | `refs/syntax_argumentation.md:17101`; 2014 A04 발문 substitution | GREEN — 해당 사건 수식 해석과 NP 대용 가능성을 제시하며 다른 해석을 배제하지 않음 |
| constituency #5 | Constituency Test | O | `refs/syntax_argumentation.md:19520`; 2014 A04 발문 movement | GREEN — 해당 PP의 이동이 constituent 분석을 지지함 |
| constituency #6 | Constituency Test | X | `refs/syntax_argumentation.md:16252`, `:19520`; 2014 A04 발문 movement | GREEN — 이동한 NP를 포함하는 더 큰 문자열을 입증하지 않음 |
| constituency #7 | Constituency Test | O | `refs/syntax_argumentation.md:16374`, `:16436`, `:16477` | GREEN — VP-preposing과 남은 auxiliary의 대비 |
| constituency #8 | Constituency Test | O | `refs/syntax_argumentation.md:18391`, `:18400` | GREEN — 제시한 평행 VP coordination 분석 |
| constituency #9 | Constituency Test | O | `refs/syntax_argumentation.md:18391`, `:18400` | GREEN — 제시한 평행 VP coordination 분석 |
| constituency #10 | Constituency Test | O | `refs/syntax_argumentation.md:18391`, `:18400` | GREEN — 제시한 목적어 NP coordination 분석 |
| constituency #11 | Constituency Test | O | `refs/syntax_argumentation.md:19520`, `:19610`, `:25899`; #23 VP ellipsis 대조 | 조건부 GREEN — PP를 답으로 쓴 근거는 타당. 해설의 모든 답변 문자열에 대한 단정 및 ‘입증’을 수정 |
| constituency #12 | Constituency Test | X | `refs/syntax_argumentation.md:19472`; 2014 A04 constituency | GREEN — 질문에 맞지 않는 NP와 전치사 조각을 자동으로 constituent로 볼 수 없음 |
| constituency #13 | Constituency Test | O | `refs/syntax_argumentation.md:18570` | GREEN — NP cleft focus 분석 |
| constituency #14 | Constituency Test | O | `refs/syntax_argumentation.md:18570` | GREEN — PP cleft focus 분석 |
| constituency #15 | Constituency Test | X | `refs/syntax_argumentation.md:19520`, `:19610` | GREEN — it-cleft 실패만으로 VP가 constituent가 아니라는 결론을 내릴 수 없음 |
| constituency #16 | Phrasal V | O | `refs/transformational_grammar.md:5798` | GREEN — 제시된 turn off의 명사 목적어 위치 교체 |
| constituency #17 | Phrasal V | O | `refs/transformational_grammar.md:5798` | GREEN — 비강세 대명사와 particle의 순서 |
| constituency #18 | Prepositional V | X | `refs/transformational_grammar.md:5809`; `refs/teachers_grammar.md:8408` | GREEN — 제시된 어순 교체는 불가하며 wh-extraction 예외는 해설에 명시 |
| constituency #19 | Phrasal vs Prep V | O | `refs/transformational_grammar.md:5610–5666` | GREEN — 제시된 동사·부사 대조와 삽입 위치 |
| constituency #20 | Prepositional V | O | `refs/teachers_grammar.md:8415` | GREEN — 해당 wh-extraction에서 preposition stranding 가능 |
| constituency #21 | Phrasal V | X | `refs/transformational_grammar.md:5570` | GREEN — 해당 V-particle 구조에서 particle+NP를 하나의 PP처럼 전치하지 않음 |
| constituency #22 | Constituency Test | O | `refs/syntax_argumentation.md:16850` | GREEN — heavy NP shift 분석과 전체 NP 이동 대조 |
| constituency #23 | Constituency Test | X | `refs/transformational_grammar.md:16942` modal 뒤 VP ellipsis; `refs/syntax_argumentation.md:19326` | GREEN — 해당 분석에서 NP+auxiliary 표면 문자열만으로 constituency를 확정하지 않음 |
| constituency #24 | Constituency Test | X | `refs/syntax_argumentation.md:17101`, `:19520`; `refs/transformational_grammar.md:6338` | GREEN — 특정 대용 형식이 불가능해도 nonconstituent가 되지는 않으며 hope so로 대조 |
| constituency #25 | Phrasal vs Prep V | X | `refs/teachers_grammar.md:8400–8445`; `refs/transformational_grammar.md:5570–5823` | GREEN — 조건·용법을 무시한 일괄 판정 주장은 부정 |
| constituency #26 | C-command | O | `refs/transformational_grammar.md:6712` | GREEN — first branching node 및 상호 dominance 제외 정의 일치 |
| constituency #27 | C-command | X | `refs/transformational_grammar.md:6712–6741` | GREEN — 제시된 SVO 구조의 subject/object 비대칭 |
| constituency #28 | C-command | O | `refs/transformational_grammar.md:6735–6741` | GREEN — sister node 간 상호 c-command |
| constituency #29 | C-command | X | `refs/transformational_grammar.md:6712`, `:30707` | GREEN — 해당 구조의 뒤에 나오는 NP는 subject anaphor를 c-command하지 않음 |
| constituency #30 | C-command | O | `refs/transformational_grammar.md:6712`, `:30707` | GREEN — 해당 subject antecedent가 목적어 anaphor를 c-command |
| constituency #31 | C-command | O | `refs/transformational_grammar.md:12263` | GREEN — 제시된 부정 평서문에서 subject nobody가 anything을 c-command |
| constituency #32 | C-command | X | `refs/transformational_grammar.md:6712`, `:12263` | GREEN — subject NP 내부 nobody가 목적어 any를 c-command하지 않음 |
| constituency #33 | C-command | O | `refs/transformational_grammar.md:6712`; `refs/영어학 짱은 나야!!!_가루미 복사본.md:1470` | GREEN — 제시된 공지시와 주절 pronoun의 c-command 조건 |
| constituency #34 | X-bar | O | `refs/transformational_grammar.md:10130–10162`; `refs/syntax_argumentation.md:10375` | GREEN — 원서의 동일 NP 대조. 해설의 complement 의무성 일반화를 수정 |
| constituency #35 | X-bar | X | `refs/transformational_grammar.md:10130–10162` | GREEN — 원서의 동일 NP 순서 대조 |
| constituency #36 | X-bar | O | `refs/transformational_grammar.md:10751–10764` | GREEN — adjunct의 반복 적용 |
| constituency #37 | X-bar | O | `refs/transformational_grammar.md:22156` | GREEN — 제시한 devour 용법의 목적어 요구 |
| constituency #38 | Ambiguity | O | `refs/transformational_grammar.md:3968`; 2022 A07 structural ambiguity | GREEN — 동일 PP의 NP/VP attachment 대비 |
| constituency #39 | Ambiguity | O | `refs/transformational_grammar.md:3968`; 2022 A07 structural ambiguity | GREEN — old의 서로 다른 수식 범위 |
| constituency #40 | X-bar | O | `refs/transformational_grammar.md:23163`, `:26551` | GREEN — 제시된 put 용법의 위치 complement 요구 |

### phrase-structure.html — 40문항

| 식별 | 주제 | 정답 | 원서·기출 대조 | 판정 |
| --- | --- | --- | --- | --- |
| phrase-structure #1 | Phrase Structure Rule | O | Radford refs/transformational_grammar.md:7191 (PS 규칙), :6712 (branching) | GREEN — 제시된 구조와 정답·해설 대조 |
| phrase-structure #2 | Phrase Structure Rule | O | Radford refs/transformational_grammar.md:7191 (PS 규칙), :6712 (branching) | GREEN — 제시된 구조와 정답·해설 대조 |
| phrase-structure #3 | Phrase Structure Rule | X | Radford refs/transformational_grammar.md:7191 (PS 규칙), :6712 (branching) | GREEN — 제시된 구조와 정답·해설 대조 |
| phrase-structure #4 | Phrase Structure Rule | O | Radford refs/transformational_grammar.md:7191 (PS 규칙), :6712 (branching) | GREEN — 제시된 구조와 정답·해설 대조 |
| phrase-structure #5 | Phrase Structure Rule | X | Radford refs/transformational_grammar.md:7191 (PS 규칙), :6712 (branching) | GREEN — 제시된 구조와 정답·해설 대조 |
| phrase-structure #6 | Phrase Structure Rule | O | Radford refs/transformational_grammar.md:7191 (PS 규칙), :6712 (branching) | GREEN — 제시된 구조와 정답·해설 대조 |
| phrase-structure #7 | Phrase Structure Rule | O | Radford refs/transformational_grammar.md:7191 (PS 규칙), :6712 (branching) | GREEN — 제시된 구조와 정답·해설 대조 |
| phrase-structure #8 | Phrase Structure Rule | O | Radford refs/transformational_grammar.md:7191 (PS 규칙), :6712 (branching) | GREEN — 제시된 구조와 정답·해설 대조 |
| phrase-structure #9 | X-bar Schema | O | Radford refs/transformational_grammar.md:12888–12905 (X-bar), :12984 (adjunct) | GREEN — 제시된 구조와 정답·해설 대조 |
| phrase-structure #10 | X-bar Schema | O | Radford refs/transformational_grammar.md:12888–12905 (X-bar), :12984 (adjunct) | GREEN — 제시된 구조와 정답·해설 대조 |
| phrase-structure #11 | X-bar Schema | O | Radford refs/transformational_grammar.md:12888–12905 (X-bar), :12984 (adjunct) | GREEN — 제시된 구조와 정답·해설 대조 |
| phrase-structure #12 | X-bar Schema | O | Radford refs/transformational_grammar.md:12888–12905 (X-bar), :12984 (adjunct) | GREEN — 제시된 구조와 정답·해설 대조 |
| phrase-structure #13 | X-bar Schema | O | Radford refs/transformational_grammar.md:12888–12905 (X-bar), :12984 (adjunct) | GREEN — 제시된 구조와 정답·해설 대조 |
| phrase-structure #14 | X-bar Schema | X | Radford refs/transformational_grammar.md:12888–12905 (X-bar), :12984 (adjunct) | GREEN — 제시된 구조와 정답·해설 대조 |
| phrase-structure #15 | X-bar Schema | O | Radford refs/transformational_grammar.md:12888–12905 (X-bar), :12984 (adjunct) | GREEN — 제시된 구조와 정답·해설 대조 |
| phrase-structure #16 | X-bar Schema | O | Radford refs/transformational_grammar.md:12888–12905 (X-bar), :12984 (adjunct) | GREEN — 제시된 구조와 정답·해설 대조 |
| phrase-structure #17 | Complement vs Adjunct | O | Radford refs/transformational_grammar.md:10130–10162; 공식 2022 A07 | GREEN — 제시된 구조와 정답·해설 대조 |
| phrase-structure #18 | Complement vs Adjunct | O | Radford refs/transformational_grammar.md:10130–10162; 공식 2022 A07 | GREEN — 제시된 구조와 정답·해설 대조 |
| phrase-structure #19 | Complement vs Adjunct | O | Radford refs/transformational_grammar.md:10130–10162; 공식 2022 A07 | GREEN — 제시된 구조와 정답·해설 대조 |
| phrase-structure #20 | Complement vs Adjunct | O | Radford refs/transformational_grammar.md:10130–10162; 공식 2022 A07 | GREEN — 제시된 구조와 정답·해설 대조 |
| phrase-structure #21 | Complement vs Adjunct | O | Radford refs/transformational_grammar.md:10130–10162; 공식 2022 A07 | GREEN — 제시된 구조와 정답·해설 대조 |
| phrase-structure #22 | Complement vs Adjunct | X | Radford refs/transformational_grammar.md:10130–10162; 공식 2022 A07 | GREEN — 제시된 구조와 정답·해설 대조 |
| phrase-structure #23 | Complement vs Adjunct | O | Radford refs/transformational_grammar.md:10130–10162; 공식 2022 A07 | GREEN — 제시된 구조와 정답·해설 대조 |
| phrase-structure #24 | Complement vs Adjunct | X | Radford refs/transformational_grammar.md:10130–10162; 공식 2022 A07 | GREEN — 제시된 구조와 정답·해설 대조 |
| phrase-structure #25 | Specifier | O | Aarts refs/syntax_argumentation.md:8912–9038; Radford :12888 | GREEN — 제시된 구조와 정답·해설 대조 |
| phrase-structure #26 | Specifier | O | Aarts refs/syntax_argumentation.md:8912–9038; Radford :12888 | GREEN — 제시된 구조와 정답·해설 대조 |
| phrase-structure #27 | Specifier | X | Aarts refs/syntax_argumentation.md:8912–9038; Radford :12888 | GREEN — 제시된 구조와 정답·해설 대조 |
| phrase-structure #28 | Specifier | O | Radford refs/transformational_grammar.md:14765 (D projection), :27503 (CP) | GREEN — 제시된 구조와 정답·해설 대조 |
| phrase-structure #29 | Specifier | O | Radford refs/transformational_grammar.md:14765 (D projection), :27503 (CP) | GREEN — 제시된 구조와 정답·해설 대조 |
| phrase-structure #30 | Specifier | X | Radford refs/transformational_grammar.md:14765 (D projection), :27503 (CP) | GREEN — 제시된 구조와 정답·해설 대조 |
| phrase-structure #31 | DP Hypothesis | O | Radford refs/transformational_grammar.md:14765 (D projection), :27503 (CP) | GREEN — 제시된 구조와 정답·해설 대조 |
| phrase-structure #32 | DP Hypothesis | X | Radford refs/transformational_grammar.md:14765 (D projection), :27503 (CP) | GREEN — 제시된 구조와 정답·해설 대조 |
| phrase-structure #33 | DP Hypothesis | O | Radford refs/transformational_grammar.md:14765 (D projection), :27503 (CP) | GREEN — 제시된 구조와 정답·해설 대조 |
| phrase-structure #34 | Clause Structure | O | Aarts refs/syntax_argumentation.md:5279, :7557; Radford :17998 | GREEN — 제시된 구조와 정답·해설 대조 |
| phrase-structure #35 | Clause Structure | O | Aarts refs/syntax_argumentation.md:5279, :7557; Radford :17998 | GREEN — 제시된 구조와 정답·해설 대조 |
| phrase-structure #36 | Clause Structure | O | Aarts refs/syntax_argumentation.md:5279, :7557; Radford :17998 | GREEN — 제시된 구조와 정답·해설 대조 |
| phrase-structure #37 | Clause Structure | X | Aarts refs/syntax_argumentation.md:5279, :7557; Radford :17998 | GREEN — 제시된 구조와 정답·해설 대조 |
| phrase-structure #38 | Clause Structure | O | refs/TalkFile_영어통사론 정태구.md:7476; 공식 2020 B01 | GREEN — 제시된 구조와 정답·해설 대조 |
| phrase-structure #39 | Clause Structure | X | refs/TalkFile_영어통사론 정태구.md:7476; 공식 2020 B01 | GREEN — 제시된 구조와 정답·해설 대조 |
| phrase-structure #40 | Clause Structure | O | Radford refs/transformational_grammar.md:12888–12905 | GREEN — 제시된 구조와 정답·해설 대조 |

### movement.html — 44문항

| 식별 | 주제 | 정답 | 원서·기출 대조 | 판정 |
| --- | --- | --- | --- | --- |
| movement #1 | D/S-structure | O | refs/transformational_grammar.md:22150–22173 | GREEN — 해당 분석틀·예문·정답·해설 대조 |
| movement #2 | D/S-structure | X | refs/transformational_grammar.md:22150–22173 | GREEN — 해당 분석틀·예문·정답·해설 대조 |
| movement #3 | D/S-structure | O | refs/transformational_grammar.md:22150–22173 | GREEN — 해당 분석틀·예문·정답·해설 대조 |
| movement #4 | D/S-structure | O | refs/transformational_grammar.md:22150–22173 | GREEN — 해당 분석틀·예문·정답·해설 대조 |
| movement #5 | D/S-structure | X | refs/transformational_grammar.md:22150–22173 | GREEN — 해당 분석틀·예문·정답·해설 대조 |
| movement #6 | V-movement | O | refs/transformational_grammar.md:22175–22317 | GREEN — 해당 분석틀·예문·정답·해설 대조 |
| movement #7 | V-movement | X | refs/transformational_grammar.md:22175–22317 | GREEN — 해당 분석틀·예문·정답·해설 대조 |
| movement #8 | V-movement | O | refs/transformational_grammar.md:22175–22317 | GREEN — 해당 분석틀·예문·정답·해설 대조 |
| movement #9 | V-movement | O | refs/transformational_grammar.md:22175–22317 | GREEN — 해당 분석틀·예문·정답·해설 대조 |
| movement #10 | V-movement | O | refs/transformational_grammar.md:22175–22317 | GREEN — 해당 분석틀·예문·정답·해설 대조 |
| movement #11 | I-to-C | O | refs/transformational_grammar.md:22688–22838 | GREEN — 해당 분석틀·예문·정답·해설 대조 |
| movement #12 | I-to-C | O | refs/transformational_grammar.md:22688–22838 | GREEN — 해당 분석틀·예문·정답·해설 대조 |
| movement #13 | I-to-C | X | refs/transformational_grammar.md:22688–22838 | GREEN — 해당 분석틀·예문·정답·해설 대조 |
| movement #14 | I-to-C | O | refs/transformational_grammar.md:22688–22838 | GREEN — 해당 분석틀·예문·정답·해설 대조 |
| movement #15 | I-to-C | O | refs/transformational_grammar.md:22688–22838 | GREEN — 해당 분석틀·예문·정답·해설 대조 |
| movement #16 | NP-movement (Passive) | O | refs/transformational_grammar.md:23119–23185; 공식 2024 A07 | GREEN — 해당 분석틀·예문·정답·해설 대조 |
| movement #17 | NP-movement (Passive) | O | refs/transformational_grammar.md:23119–23185; 공식 2024 A07 | GREEN — 해당 분석틀·예문·정답·해설 대조 |
| movement #18 | NP-movement (Passive) | X | refs/transformational_grammar.md:23119–23185; 공식 2024 A07 | GREEN — 해당 분석틀·예문·정답·해설 대조 |
| movement #19 | NP-movement (Passive) | O | refs/transformational_grammar.md:23119–23185; 공식 2024 A07 | GREEN — 해당 분석틀·예문·정답·해설 대조 |
| movement #20 | NP-movement (Passive) | O | refs/transformational_grammar.md:23119–23185; 공식 2024 A07 | GREEN — 해당 분석틀·예문·정답·해설 대조 |
| movement #21 | NP-movement (Passive) | O | refs/transformational_grammar.md:23119–23185; 공식 2024 A07 | GREEN — 해당 분석틀·예문·정답·해설 대조 |
| movement #22 | NP-movement (Passive) | X | refs/transformational_grammar.md:23903–23953 | GREEN — 해당 분석틀·예문·정답·해설 대조 |
| movement #23 | NP-movement (Passive) | O | refs/transformational_grammar.md:23119–23185; 공식 2024 A07 | GREEN — 해당 분석틀·예문·정답·해설 대조 |
| movement #24 | NP-movement (Raising) | O | refs/transformational_grammar.md:23957–24242 | GREEN — 해당 분석틀·예문·정답·해설 대조 |
| movement #25 | NP-movement (Raising) | X | refs/transformational_grammar.md:23957–24242 | GREEN — 해당 분석틀·예문·정답·해설 대조 |
| movement #26 | NP-movement (Raising) | O | refs/transformational_grammar.md:23957–24242 | GREEN — 해당 분석틀·예문·정답·해설 대조 |
| movement #27 | NP-movement (Raising) | O | refs/transformational_grammar.md:23957–24242 | GREEN — 해당 분석틀·예문·정답·해설 대조 |
| movement #28 | NP-movement (Raising) | O | refs/transformational_grammar.md:23957–24242 | GREEN — 해당 분석틀·예문·정답·해설 대조 |
| movement #29 | NP-movement (Raising) | O | refs/transformational_grammar.md:23957–24242 | GREEN — 해당 분석틀·예문·정답·해설 대조 |
| movement #30 | Wh-movement | O | refs/transformational_grammar.md:28417, :28755, :30038 | GREEN — 해당 분석틀·예문·정답·해설 대조 |
| movement #31 | Wh-movement | X | refs/transformational_grammar.md:28417, :28755, :30038 | GREEN — 해당 분석틀·예문·정답·해설 대조 |
| movement #32 | Wh-movement | O | refs/transformational_grammar.md:28417, :28755, :30038 | GREEN — 해당 분석틀·예문·정답·해설 대조 |
| movement #33 | Wh-movement | X | refs/transformational_grammar.md:28417, :28755, :30038 | GREEN — 해당 분석틀·예문·정답·해설 대조 |
| movement #34 | Wh-movement | O | refs/transformational_grammar.md:28417, :28755, :30038 | GREEN — 해당 분석틀·예문·정답·해설 대조 |
| movement #35 | Wh-movement | X | refs/transformational_grammar.md:28417, :28755, :30038 | GREEN — 해당 분석틀·예문·정답·해설 대조 |
| movement #36 | Trace | O | refs/transformational_grammar.md:28417, :28755, :30038 | GREEN — 해당 분석틀·예문·정답·해설 대조 |
| movement #37 | Trace | X | [1987 Stanford proceedings, p. 27](https://files.eric.ed.gov/fulltext/ED302057.pdf); [Reinhart & Reuland (1993)](https://www.dbnl.org/tekst/rein008refl01_01/rein008refl01_01_0001.php) | GREEN — 해당 GB 설명에서 두 trace의 ECP 적용과 A/A′ chain 차이 확인. Condition A의 독립성은 분석에 따라 달라질 수 있음 |
| movement #38 | Trace | O | 공식 2026 B09; [Torrego·Pesetsky ECP 분석](https://web.mit.edu/norvin/www/24.956/Torrego-Pesetsky.pdf) | GREEN — 해당 기출의 that-trace 판정과 한 GB 분석의 설명 |
| movement #39 | Trace | O | 공식 2026 B09; [Torrego·Pesetsky ECP 분석](https://web.mit.edu/norvin/www/24.956/Torrego-Pesetsky.pdf) | GREEN — 해당 기출의 무 that 대조와 한 GB 분석의 설명 |
| movement #40 | Subjacency | O | refs/transformational_grammar.md:30723–30858, :30946–31090; 공식 2022 B05 | GREEN — 해당 분석틀·예문·정답·해설 대조 |
| movement #41 | Subjacency | O | refs/transformational_grammar.md:30723–30858, :30946–31090; 공식 2022 B05 | GREEN — 해당 분석틀·예문·정답·해설 대조 |
| movement #42 | Subjacency | O | refs/transformational_grammar.md:30723–30858, :30946–31090; 공식 2022 B05 | GREEN — 해당 분석틀·예문·정답·해설 대조 |
| movement #43 | Subjacency | X | refs/transformational_grammar.md:30723–30858, :30946–31090; 공식 2022 B05 | GREEN — 해당 분석틀·예문·정답·해설 대조 |
| movement #44 | Subjacency | O | refs/transformational_grammar.md:30723–30858, :30946–31090; 공식 2022 B05 | GREEN — 해당 분석틀·예문·정답·해설 대조 |

### raising-control.html — 40문항

| 식별 | 주제 | 정답 | 원서·기출 대조 | 판정 |
| --- | --- | --- | --- | --- |
| raising-control #1 | Theta Criterion | O | refs/transformational_grammar.md:21427; :23163; 공식 2024 A07 | GREEN — 제시된 분석틀·예문·정답·해설 대조 |
| raising-control #2 | Theta Criterion | X | refs/transformational_grammar.md:21427; :23163; 공식 2024 A07 | GREEN — 제시된 분석틀·예문·정답·해설 대조 |
| raising-control #3 | Theta Criterion | X | refs/transformational_grammar.md:21427; :23163; 공식 2024 A07 | GREEN — 제시된 분석틀·예문·정답·해설 대조 |
| raising-control #4 | Theta Criterion | O | refs/transformational_grammar.md:21427; :23163; 공식 2024 A07 | GREEN — 제시된 분석틀·예문·정답·해설 대조 |
| raising-control #5 | SSR | O | refs/transformational_grammar.md:23957–24333; refs/영어학 짱은 나야!!!_가루미 복사본.md:1544 | GREEN — 제시된 분석틀·예문·정답·해설 대조 |
| raising-control #6 | SSR | O | refs/transformational_grammar.md:23957–24333; refs/영어학 짱은 나야!!!_가루미 복사본.md:1544 | GREEN — 제시된 분석틀·예문·정답·해설 대조 |
| raising-control #7 | SSR | X | refs/transformational_grammar.md:23957–24333; refs/영어학 짱은 나야!!!_가루미 복사본.md:1544 | GREEN — 제시된 분석틀·예문·정답·해설 대조 |
| raising-control #8 | SSR | X | refs/transformational_grammar.md:23957–24333; refs/영어학 짱은 나야!!!_가루미 복사본.md:1544 | GREEN — 제시된 분석틀·예문·정답·해설 대조 |
| raising-control #9 | SSR | O | refs/transformational_grammar.md:23957–24333; refs/영어학 짱은 나야!!!_가루미 복사본.md:1544 | GREEN — 제시된 분석틀·예문·정답·해설 대조 |
| raising-control #10 | SSR | X | refs/transformational_grammar.md:23957–24333; refs/영어학 짱은 나야!!!_가루미 복사본.md:1544 | GREEN — 제시된 분석틀·예문·정답·해설 대조 |
| raising-control #11 | SSR | O | 공식 2024 A07 passage, testmaster data/linguistics_2024_A07.json | GREEN — 제시된 분석틀·예문·정답·해설 대조 |
| raising-control #12 | SOR · ECM | O | refs/윤도형2015.md:13693–13702; refs/transformational_grammar.md:17946–17978 | GREEN — 제시된 분석틀·예문·정답·해설 대조 |
| raising-control #13 | SOR · ECM | X | refs/윤도형2015.md:13693–13702; refs/transformational_grammar.md:17946–17978 | GREEN — 제시된 분석틀·예문·정답·해설 대조 |
| raising-control #14 | SOR · ECM | X | refs/윤도형2015.md:13693–13702; refs/transformational_grammar.md:17946–17978 | GREEN — 제시된 분석틀·예문·정답·해설 대조 |
| raising-control #15 | SOR · ECM | X | refs/윤도형2015.md:13693–13702; refs/transformational_grammar.md:17946–17978 | GREEN — 제시된 분석틀·예문·정답·해설 대조 |
| raising-control #16 | SOR · ECM | O | refs/윤도형2015.md:13693–13702; refs/transformational_grammar.md:17946–17978 | GREEN — 제시된 분석틀·예문·정답·해설 대조 |
| raising-control #17 | SOR · ECM | X | refs/윤도형2015.md:13693–13702; refs/transformational_grammar.md:17946–17978 | GREEN — 제시된 분석틀·예문·정답·해설 대조 |
| raising-control #18 | SOR · ECM | O | refs/윤도형2015.md:13693–13702; refs/transformational_grammar.md:17946–17978 | GREEN — 제시된 분석틀·예문·정답·해설 대조 |
| raising-control #19 | SOR · ECM | O | refs/윤도형2015.md:13693–13702; refs/transformational_grammar.md:17946–17978 | GREEN — 제시된 분석틀·예문·정답·해설 대조 |
| raising-control #20 | Subject Control | O | refs/영어학 짱은 나야!!!_가루미 복사본.md:1249, :1522–1528; 공식 2019 B06 | GREEN — 제시된 분석틀·예문·정답·해설 대조 |
| raising-control #21 | Subject Control | X | refs/영어학 짱은 나야!!!_가루미 복사본.md:1249, :1522–1528; 공식 2019 B06 | GREEN — 제시된 분석틀·예문·정답·해설 대조 |
| raising-control #22 | Subject Control | X | refs/영어학 짱은 나야!!!_가루미 복사본.md:1249, :1522–1528; 공식 2019 B06 | GREEN — 제시된 분석틀·예문·정답·해설 대조 |
| raising-control #23 | Subject Control | O | refs/영어학 짱은 나야!!!_가루미 복사본.md:1249, :1522–1528; 공식 2019 B06 | GREEN — 제시된 분석틀·예문·정답·해설 대조 |
| raising-control #24 | Subject Control | O | `refs/transformational_grammar.md:24388`; [Facing Two Ways Syntactically](https://www.tandfonline.com/doi/full/10.1080/0013838X.2023.2179205) | GREEN — 실제 위협 의미의 control과 raising 용법을 해설에서 구분 |
| raising-control #25 | Object Control | O | refs/영어학 짱은 나야!!!_가루미 복사본.md:1249, :1522–1528; 공식 2019 B06 | GREEN — 제시된 분석틀·예문·정답·해설 대조 |
| raising-control #26 | Object Control | X | refs/영어학 짱은 나야!!!_가루미 복사본.md:1249, :1522–1528; 공식 2019 B06 | GREEN — 제시된 분석틀·예문·정답·해설 대조 |
| raising-control #27 | Object Control | X | refs/영어학 짱은 나야!!!_가루미 복사본.md:1249, :1522–1528; 공식 2019 B06 | GREEN — 제시된 분석틀·예문·정답·해설 대조 |
| raising-control #28 | Object Control | X | refs/영어학 짱은 나야!!!_가루미 복사본.md:1249, :1522–1528; 공식 2019 B06 | GREEN — 제시된 분석틀·예문·정답·해설 대조 |
| raising-control #29 | Object Control | O | refs/영어학 짱은 나야!!!_가루미 복사본.md:1249, :1522–1528; 공식 2019 B06 | GREEN — 제시된 분석틀·예문·정답·해설 대조 |
| raising-control #30 | Object Control | O | refs/영어학 짱은 나야!!!_가루미 복사본.md:1249, :1522–1528; 공식 2019 B06 | GREEN — 제시된 분석틀·예문·정답·해설 대조 |
| raising-control #31 | PRO | O | refs/transformational_grammar.md:17451–17551; refs/영어학 짱은 나야!!!_가루미 복사본.md:1249–1250 | GREEN — 제시된 분석틀·예문·정답·해설 대조 |
| raising-control #32 | PRO | X | refs/transformational_grammar.md:17451–17551; refs/영어학 짱은 나야!!!_가루미 복사본.md:1249–1250 | GREEN — 제시된 분석틀·예문·정답·해설 대조 |
| raising-control #33 | PRO | O | refs/transformational_grammar.md:17451–17551; refs/영어학 짱은 나야!!!_가루미 복사본.md:1249–1250 | GREEN — 제시된 분석틀·예문·정답·해설 대조 |
| raising-control #34 | PRO | X | refs/transformational_grammar.md:17451–17551; refs/영어학 짱은 나야!!!_가루미 복사본.md:1249–1250 | GREEN — 제시된 분석틀·예문·정답·해설 대조 |
| raising-control #35 | PRO | O | refs/transformational_grammar.md:17451–17551; refs/영어학 짱은 나야!!!_가루미 복사본.md:1249–1250 | GREEN — 제시된 분석틀·예문·정답·해설 대조 |
| raising-control #36 | Diagnostics | O | refs/transformational_grammar.md:23957–24333; refs/영어학 짱은 나야!!!_가루미 복사본.md:1522–1528 | GREEN — 제시된 분석틀·예문·정답·해설 대조 |
| raising-control #37 | Diagnostics | X | refs/transformational_grammar.md:23957–24333; refs/영어학 짱은 나야!!!_가루미 복사본.md:1522–1528 | GREEN — 제시된 분석틀·예문·정답·해설 대조 |
| raising-control #38 | Diagnostics | O | refs/transformational_grammar.md:23957–24333; refs/영어학 짱은 나야!!!_가루미 복사본.md:1522–1528 | GREEN — 제시된 분석틀·예문·정답·해설 대조 |
| raising-control #39 | Diagnostics | X | refs/transformational_grammar.md:23957–24333; refs/영어학 짱은 나야!!!_가루미 복사본.md:1522–1528 | GREEN — 제시된 분석틀·예문·정답·해설 대조 |
| raising-control #40 | Diagnostics | O | refs/transformational_grammar.md:23957–24333; refs/영어학 짱은 나야!!!_가루미 복사본.md:1522–1528 | GREEN — 제시된 분석틀·예문·정답·해설 대조 |

### binding.html — 40문항

| 식별 | 주제 | 정답 | 원서·기출 대조 | 판정 |
| --- | --- | --- | --- | --- |
| binding #1 | c-command | O | refs/영어학 짱은 나야!!!_가루미 복사본.md:1366; refs/transformational_grammar.md:6712–6741 | GREEN — 제시된 공지시·구조와 정답·해설 대조 |
| binding #2 | c-command | O | refs/영어학 짱은 나야!!!_가루미 복사본.md:1366; refs/transformational_grammar.md:6712–6741 | GREEN — 제시된 공지시·구조와 정답·해설 대조 |
| binding #3 | c-command | O | refs/영어학 짱은 나야!!!_가루미 복사본.md:1366; refs/transformational_grammar.md:6712–6741 | GREEN — 제시된 공지시·구조와 정답·해설 대조 |
| binding #4 | c-command | X | refs/영어학 짱은 나야!!!_가루미 복사본.md:1366; refs/transformational_grammar.md:6712–6741 | GREEN — 제시된 공지시·구조와 정답·해설 대조 |
| binding #5 | c-command | O | refs/영어학 짱은 나야!!!_가루미 복사본.md:1366; refs/transformational_grammar.md:6712–6741 | GREEN — 제시된 공지시·구조와 정답·해설 대조 |
| binding #6 | c-command | X | refs/영어학 짱은 나야!!!_가루미 복사본.md:1366; refs/transformational_grammar.md:6712–6741 | GREEN — 제시된 공지시·구조와 정답·해설 대조 |
| binding #7 | Principle A | X | refs/영어학 짱은 나야!!!_가루미 복사본.md:1468; 공식 2018 B06 | GREEN — 제시된 공지시·구조와 정답·해설 대조 |
| binding #8 | Principle A | O | refs/영어학 짱은 나야!!!_가루미 복사본.md:1468; 공식 2018 B06 | GREEN — 제시된 공지시·구조와 정답·해설 대조 |
| binding #9 | Principle A | X | refs/영어학 짱은 나야!!!_가루미 복사본.md:1468; 공식 2018 B06 | GREEN — 제시된 공지시·구조와 정답·해설 대조 |
| binding #10 | Principle A | X | refs/영어학 짱은 나야!!!_가루미 복사본.md:1468; 공식 2018 B06 | GREEN — 제시된 공지시·구조와 정답·해설 대조 |
| binding #11 | Principle A | X | refs/영어학 짱은 나야!!!_가루미 복사본.md:1468; 공식 2018 B06 | GREEN — 제시된 공지시·구조와 정답·해설 대조 |
| binding #12 | Principle A | O | refs/영어학 짱은 나야!!!_가루미 복사본.md:1468; 공식 2018 B06 | GREEN — 제시된 공지시·구조와 정답·해설 대조 |
| binding #13 | Principle A | X | refs/영어학 짱은 나야!!!_가루미 복사본.md:1468; 공식 2018 B06 | GREEN — 제시된 공지시·구조와 정답·해설 대조 |
| binding #14 | Principle A | X | refs/영어학 짱은 나야!!!_가루미 복사본.md:1468; 공식 2018 B06 | GREEN — 제시된 공지시·구조와 정답·해설 대조 |
| binding #15 | Principle A | O | `refs/phonetics/ail.md:3537`; `refs/transformational_grammar.md:6841` | GREEN — 해당 문장의 reciprocal과 reflexive 대조 |
| binding #16 | Principle A | X | refs/영어학 짱은 나야!!!_가루미 복사본.md:1468; 공식 2018 B06 | GREEN — 제시된 공지시·구조와 정답·해설 대조 |
| binding #17 | Principle B | O | refs/영어학 짱은 나야!!!_가루미 복사본.md:1469 | GREEN — 제시된 공지시·구조와 정답·해설 대조 |
| binding #18 | Principle B | O | refs/영어학 짱은 나야!!!_가루미 복사본.md:1469 | GREEN — 제시된 공지시·구조와 정답·해설 대조 |
| binding #19 | Principle B | X | refs/영어학 짱은 나야!!!_가루미 복사본.md:1469 | GREEN — 제시된 공지시·구조와 정답·해설 대조 |
| binding #20 | Principle B | X | refs/영어학 짱은 나야!!!_가루미 복사본.md:1469 | GREEN — 제시된 공지시·구조와 정답·해설 대조 |
| binding #21 | Principle B | O | refs/영어학 짱은 나야!!!_가루미 복사본.md:1469 | GREEN — 제시된 공지시·구조와 정답·해설 대조 |
| binding #22 | Principle B | O | refs/영어학 짱은 나야!!!_가루미 복사본.md:1469 | GREEN — 제시된 공지시·구조와 정답·해설 대조 |
| binding #23 | Principle B | X | refs/영어학 짱은 나야!!!_가루미 복사본.md:1469 | GREEN — 제시된 공지시·구조와 정답·해설 대조 |
| binding #24 | Principle B | O | refs/영어학 짱은 나야!!!_가루미 복사본.md:1469 | GREEN — 제시된 공지시·구조와 정답·해설 대조 |
| binding #25 | Principle B | X | refs/영어학 짱은 나야!!!_가루미 복사본.md:1469 | GREEN — 제시된 공지시·구조와 정답·해설 대조 |
| binding #26 | Principle B | X | [Drummond 연구, binding into adjunct](https://adrummond.net/Minimalist_Construal_Chapter-Feb11.pdf); refs/영어학 짱은 나야!!!_가루미 복사본.md:1469 | GREEN — 제시된 공지시·구조와 정답·해설 대조 |
| binding #27 | Principle C | X | refs/영어학 짱은 나야!!!_가루미 복사본.md:1470 | GREEN — 제시된 공지시·구조와 정답·해설 대조 |
| binding #28 | Principle C | O | refs/영어학 짱은 나야!!!_가루미 복사본.md:1470 | GREEN — 제시된 공지시·구조와 정답·해설 대조 |
| binding #29 | Principle C | O | refs/영어학 짱은 나야!!!_가루미 복사본.md:1470 | GREEN — 제시된 공지시·구조와 정답·해설 대조 |
| binding #30 | Principle C | X | refs/영어학 짱은 나야!!!_가루미 복사본.md:1470 | GREEN — 제시된 공지시·구조와 정답·해설 대조 |
| binding #31 | Principle C | O | refs/영어학 짱은 나야!!!_가루미 복사본.md:1470 | GREEN — 제시된 공지시·구조와 정답·해설 대조 |
| binding #32 | Principle C | X | refs/영어학 짱은 나야!!!_가루미 복사본.md:1470 | GREEN — 제시된 공지시·구조와 정답·해설 대조 |
| binding #33 | Principle C | X | refs/영어학 짱은 나야!!!_가루미 복사본.md:1470 | GREEN — 제시된 공지시·구조와 정답·해설 대조 |
| binding #34 | binding domain | O | refs/영어학 짱은 나야!!!_가루미 복사본.md:1468–1470; 공식 2018 B06 | GREEN — 제시된 공지시·구조와 정답·해설 대조 |
| binding #35 | binding domain | O | refs/영어학 짱은 나야!!!_가루미 복사본.md:1468–1470; 공식 2018 B06 | GREEN — 제시된 공지시·구조와 정답·해설 대조 |
| binding #36 | binding domain | O | refs/영어학 짱은 나야!!!_가루미 복사본.md:1468–1470; 공식 2018 B06 | GREEN — 제시된 공지시·구조와 정답·해설 대조 |
| binding #37 | binding domain | X | refs/영어학 짱은 나야!!!_가루미 복사본.md:1468–1470; 공식 2018 B06 | GREEN — 제시된 공지시·구조와 정답·해설 대조 |
| binding #38 | 3-way contrast | O | refs/영어학 짱은 나야!!!_가루미 복사본.md:1468–1470; 공식 2018 B06 | GREEN — 제시된 공지시·구조와 정답·해설 대조 |
| binding #39 | 3-way contrast | X | refs/영어학 짱은 나야!!!_가루미 복사본.md:1468–1470; 공식 2018 B06 | GREEN — 제시된 공지시·구조와 정답·해설 대조 |
| binding #40 | 3-way contrast | O | refs/영어학 짱은 나야!!!_가루미 복사본.md:1468–1470; 공식 2018 B06 | GREEN — 제시된 공지시·구조와 정답·해설 대조 |

### morphology.html — 30문항

| 식별 | 주제 | 정답 | 원서·기출 대조 | 판정 |
| --- | --- | --- | --- | --- |
| morphology #1 | Morpheme | O | refs/윤도형2015.md:319–343 | GREEN — 해당 예문·정답·해설과 개념 대조 |
| morphology #2 | Morpheme | O | refs/윤도형2015.md:319–343 | GREEN — 해당 예문·정답·해설과 개념 대조 |
| morphology #3 | Morpheme | X | refs/윤도형2015.md:319–343 | GREEN — 해당 예문·정답·해설과 개념 대조 |
| morphology #4 | Inflection | O | refs/윤도형2015.md:405–485; refs/phonetics/ail.md:3459 | GREEN — 해당 예문·정답·해설과 개념 대조 |
| morphology #5 | Inflection | O | refs/윤도형2015.md:405–485; refs/phonetics/ail.md:3459 | GREEN — 해당 예문·정답·해설과 개념 대조 |
| morphology #6 | Derivation | O | refs/윤도형2015.md:405–485; refs/phonetics/ail.md:3459 | GREEN — 해당 예문·정답·해설과 개념 대조 |
| morphology #7 | Inflection | X | refs/윤도형2015.md:405–485; refs/phonetics/ail.md:3459 | GREEN — 해당 예문·정답·해설과 개념 대조 |
| morphology #8 | Inflection | X | refs/윤도형2015.md:405–485; refs/phonetics/ail.md:3459 | GREEN — 해당 예문·정답·해설과 개념 대조 |
| morphology #9 | Inflection | X | refs/윤도형2015.md:405–485; refs/phonetics/ail.md:3459 | GREEN — 해당 예문·정답·해설과 개념 대조 |
| morphology #10 | Conversion | O | refs/윤도형2015.md:764–770 | GREEN — 해당 예문·정답·해설과 개념 대조 |
| morphology #11 | Blending | O | refs/윤도형2015.md:842–904, :913 | GREEN — 해당 예문·정답·해설과 개념 대조 |
| morphology #12 | Backformation | O | refs/윤도형2015.md:977–1008 | GREEN — 해당 예문·정답·해설과 개념 대조 |
| morphology #13 | Clipping | X | refs/윤도형2015.md:842–904, :913 | GREEN — 해당 예문·정답·해설과 개념 대조 |
| morphology #14 | Acronym | X | refs/윤도형2015.md:1011–1032 | GREEN — 해당 예문·정답·해설과 개념 대조 |
| morphology #15 | Conversion | X | refs/윤도형2015.md:764–770 | GREEN — 해당 예문·정답·해설과 개념 대조 |
| morphology #16 | Compounding | X | refs/윤도형2015.md:1061–1070 | GREEN — 해당 예문·정답·해설과 개념 대조 |
| morphology #17 | Allomorphy | O | refs/윤도형2015.md:19766–19778, :22622–22628 | GREEN — 해당 예문·정답·해설과 개념 대조 |
| morphology #18 | Allomorphy | O | refs/윤도형2015.md:19766–19778, :22622–22628 | GREEN — 해당 예문·정답·해설과 개념 대조 |
| morphology #19 | Allomorphy | X | refs/윤도형2015.md:19766–19778, :22622–22628 | GREEN — 해당 예문·정답·해설과 개념 대조 |
| morphology #20 | Allomorphy | X | refs/윤도형2015.md:19766–19778, :22622–22628 | GREEN — 해당 예문·정답·해설과 개념 대조 |
| morphology #21 | Compounding | O | refs/윤도형2015.md:1631–1671 | GREEN — 해당 예문·정답·해설과 개념 대조 |
| morphology #22 | Compounding | O | refs/윤도형2015.md:1631–1671 | GREEN — 해당 예문·정답·해설과 개념 대조 |
| morphology #23 | Compounding | O | refs/윤도형2015.md:1631–1671 | GREEN — 해당 예문·정답·해설과 개념 대조 |
| morphology #24 | Compounding | X | refs/윤도형2015.md:1631–1671 | GREEN — 해당 예문·정답·해설과 개념 대조 |
| morphology #25 | Compounding | X | refs/윤도형2015.md:1185–1201, :1221 | GREEN — 해당 예문·정답·해설과 개념 대조 |
| morphology #26 | Compounding | X | refs/윤도형2015.md:1185–1201, :1221 | GREEN — 해당 예문·정답·해설과 개념 대조 |
| morphology #27 | Word structure | O | refs/윤도형2015.md:590–648; refs/phonetics/ail.md:4374–4379 | GREEN — 해당 예문·정답·해설과 개념 대조 |
| morphology #28 | Word structure | X | refs/윤도형2015.md:569; refs/phonetics/ail.md:5203–5206 | GREEN — 해당 예문·정답·해설과 개념 대조 |
| morphology #29 | Affix types | X | [Cambridge Dictionary en-](https://dictionary.cambridge.org/us/dictionary/english/en?topic=in-and-at); `refs/윤도형2015.md:405–414` | GREEN — en-에 enrich 예시가 있고 형성 결과 verb인 해당 사례를 검토 |
| morphology #30 | Productivity | X | refs/윤도형2015.md:1428–1434 | GREEN — 해당 예문·정답·해설과 개념 대조 |

### semantics.html — 28문항

| 식별 | 주제 | 정답 | 원서·기출 대조 | 판정 |
| --- | --- | --- | --- | --- |
| semantics #1 | Sense / Reference | O | testmaster `refs/형태의미화용_가루미.md:757` (Frege 대조); [NASA Venus facts](https://science.nasa.gov/venus/venus-facts/) (Venus) | GREEN — 두 표현의 reference는 같고 sense는 다름 |
| semantics #2 | Sense / Reference | X | refs/phonetics/ail.md:12268 (sense/reference) | GREEN — 제시된 진술·정답·해설 대조 |
| semantics #3 | Sense / Reference | X | refs/phonetics/ail.md:36094–36095 | GREEN — 제시된 진술·정답·해설 대조 |
| semantics #4 | Sense / Reference | O | refs/윤도형2015.md:3226–3294 | GREEN — 제시된 진술·정답·해설 대조 |
| semantics #5 | Antonymy | O | refs/윤도형2015.md:1893–1979 | GREEN — 제시된 진술·정답·해설 대조 |
| semantics #6 | Antonymy | O | refs/윤도형2015.md:1893–1979 | GREEN — 제시된 진술·정답·해설 대조 |
| semantics #7 | Antonymy | X | refs/윤도형2015.md:1893–1979 | GREEN — 제시된 진술·정답·해설 대조 |
| semantics #8 | Hyponymy | O | refs/윤도형2015.md:1832–1861; 공식 2025 B01 | GREEN — 제시된 진술·정답·해설 대조 |
| semantics #9 | Hyponymy | X | refs/윤도형2015.md:1832–1861; 공식 2025 B01 | GREEN — 제시된 진술·정답·해설 대조 |
| semantics #10 | Meronymy | X | refs/영어학 짱은 나야!!!_가루미 복사본.md:2347 | GREEN — 제시된 진술·정답·해설 대조 |
| semantics #11 | Prototype | X | [Rosch & Mervis (1975), Family resemblances](https://www.sciencedirect.com/science/article/pii/0010028575900249) | GREEN — 범주 구성원의 typicality가 균등하다는 주장 부정 |
| semantics #12 | Homonymy | O | refs/윤도형2015.md:1758–1811 | GREEN — 제시된 진술·정답·해설 대조 |
| semantics #13 | Polysemy | O | refs/윤도형2015.md:1758–1811 | GREEN — 제시된 진술·정답·해설 대조 |
| semantics #14 | Homonymy | X | refs/윤도형2015.md:1758–1811, :24196 | GREEN — bright의 intelligent/shining을 원문이 polysemy로 제시 |
| semantics #15 | Entailment | O | refs/윤도형2015.md:2333–2387; 공식 2025 B01 | GREEN — 제시된 진술·정답·해설 대조 |
| semantics #16 | Entailment | X | refs/윤도형2015.md:2333–2387; 공식 2025 B01 | GREEN — 제시된 진술·정답·해설 대조 |
| semantics #17 | Presupposition | O | refs/윤도형2015.md:2121–2183 | GREEN — 제시된 진술·정답·해설 대조 |
| semantics #18 | Presupposition | X | refs/윤도형2015.md:2121–2183 | GREEN — 제시된 진술·정답·해설 대조 |
| semantics #19 | Paraphrase | X | refs/윤도형2015.md:2407–2422; 공식 2025 B01 | GREEN — 제시된 진술·정답·해설 대조 |
| semantics #20 | Ambiguity | O | refs/윤도형2015.md:4679; refs/transformational_grammar.md:3968 | GREEN — 제시된 진술·정답·해설 대조 |
| semantics #21 | Ambiguity | X | refs/윤도형2015.md:4679; refs/transformational_grammar.md:3968 | GREEN — 제시된 진술·정답·해설 대조 |
| semantics #22 | Thematic Roles | O | refs/phonetics/ail.md:12864–12919 | GREEN — 제시된 진술·정답·해설 대조 |
| semantics #23 | Thematic Roles | O | refs/phonetics/ail.md:12864–12919 | GREEN — 제시된 진술·정답·해설 대조 |
| semantics #24 | Thematic Roles | X | refs/phonetics/ail.md:12864–12919 | GREEN — 제시된 진술·정답·해설 대조 |
| semantics #25 | Thematic Roles | X | refs/phonetics/ail.md:12864–12919 | GREEN — 제시된 진술·정답·해설 대조 |
| semantics #26 | Semantic Features | O | refs/phonetics/ail.md:12537–12558 | GREEN — 제시된 진술·정답·해설 대조 |
| semantics #27 | Truth Conditions | O | refs/윤도형2015.md:22681; refs/phonetics/ail.md:11243 | GREEN — 제시된 진술·정답·해설 대조 |
| semantics #28 | Truth Conditions | X | refs/윤도형2015.md:22681; refs/phonetics/ail.md:11243 | GREEN — 제시된 진술·정답·해설 대조 |

### pragmatics.html — 28문항

| 식별 | 주제 | 정답 | 원서·기출 대조 | 판정 |
| --- | --- | --- | --- | --- |
| pragmatics #1 | Speech Acts | O | refs/윤도형2015.md:2749–2800 | GREEN — 제시된 문맥·진술·정답·해설 대조 |
| pragmatics #2 | Speech Acts | X | refs/윤도형2015.md:2749–2800 | GREEN — 제시된 문맥·진술·정답·해설 대조 |
| pragmatics #3 | Speech Acts | O | refs/윤도형2015.md:2749–2800 | GREEN — 제시된 문맥·진술·정답·해설 대조 |
| pragmatics #4 | Speech Acts | X | refs/윤도형2015.md:2749–2800 | GREEN — 제시된 문맥·진술·정답·해설 대조 |
| pragmatics #5 | Speech Acts | O | refs/윤도형2015.md:2749–2800 | GREEN — 제시된 문맥·진술·정답·해설 대조 |
| pragmatics #6 | Direct/Indirect | O | refs/윤도형2015.md:2811–2914 | GREEN — 제시된 문맥·진술·정답·해설 대조 |
| pragmatics #7 | Direct/Indirect | X | refs/윤도형2015.md:2811–2914 | GREEN — 제시된 문맥·진술·정답·해설 대조 |
| pragmatics #8 | Direct/Indirect | O | refs/윤도형2015.md:2811–2914 | GREEN — 제시된 문맥·진술·정답·해설 대조 |
| pragmatics #9 | Direct/Indirect | X | refs/윤도형2015.md:2811–2914 | GREEN — 제시된 문맥·진술·정답·해설 대조 |
| pragmatics #10 | Performative | O | refs/윤도형2015.md:2617–2667 | GREEN — 제시된 문맥·진술·정답·해설 대조 |
| pragmatics #11 | Performative | X | refs/윤도형2015.md:2617–2667 | GREEN — 제시된 문맥·진술·정답·해설 대조 |
| pragmatics #12 | Performative | O | refs/윤도형2015.md:3003–3024 | GREEN — 제시된 문맥·진술·정답·해설 대조 |
| pragmatics #13 | Maxims | O | refs/윤도형2015.md:3412–3436 | GREEN — 제시된 문맥·진술·정답·해설 대조 |
| pragmatics #14 | Maxims | X | refs/윤도형2015.md:3445–3477 | GREEN — 제시된 문맥·진술·정답·해설 대조 |
| pragmatics #15 | Maxims | O | refs/윤도형2015.md:3486–3513 | GREEN — 제시된 문맥·진술·정답·해설 대조 |
| pragmatics #16 | Maxims | X | refs/윤도형2015.md:3516–3543 | GREEN — 제시된 문맥·진술·정답·해설 대조 |
| pragmatics #17 | Implicature | O | `refs/루이스기출 5판.md:17976`; `refs/영어학 짱은 나야!!!_가루미 복사본.md:2504` | GREEN — some의 not-all 함축과 이를 all로 취소하는 예 |
| pragmatics #18 | Implicature | X | refs/윤도형2015.md:2333–2387; 공식 2025 B01 | GREEN — 제시된 문맥·진술·정답·해설 대조 |
| pragmatics #19 | Implicature | O | [Capone (2006), conventional implicatures](https://philarchive.org/archive/CAPOGC) | GREEN — 기술한 전통적 분석에서 but와 비취소성을 설명하며 문항 해설의 분석 범위를 유지 |
| pragmatics #20 | Implicature | X | refs/영어학 짱은 나야!!!_가루미 복사본.md:2504–2507 | GREEN — 제시된 문맥·진술·정답·해설 대조 |
| pragmatics #21 | Implicature | X | refs/윤도형2015.md:2333–2387; 공식 2025 B01 | GREEN — 제시된 문맥·진술·정답·해설 대조 |
| pragmatics #22 | Presupposition | O | refs/윤도형2015.md:2121–2174 | GREEN — 제시된 문맥·진술·정답·해설 대조 |
| pragmatics #23 | Presupposition | X | refs/윤도형2015.md:2435–2459 | GREEN — 제시된 문맥·진술·정답·해설 대조 |
| pragmatics #24 | Presupposition | X | refs/윤도형2015.md:2189–2225 | GREEN — 제시된 문맥·진술·정답·해설 대조 |
| pragmatics #25 | Presupposition | X | refs/윤도형2015.md:2333–2387; 공식 2025 B01 | GREEN — 제시된 문맥·진술·정답·해설 대조 |
| pragmatics #26 | Politeness | O | testmaster `refs/애플4th.md:22017–22021` | GREEN — 인정·존중과 비강요에 관한 두 face 대비 |
| pragmatics #27 | Politeness | X | testmaster `refs/애플4th.md:22113–22138` | GREEN — face-threatening 의미와 제시된 보호 진술 대조 |
| pragmatics #28 | Deixis | O | refs/윤도형2015.md:3226–3294 | GREEN — 제시된 문맥·진술·정답·해설 대조 |

### 별도 담당 대조표 — 학교문법 및 중복 문항

| 화면 | 문항 수 | 근거와 문항별 판정 |
| --- | ---: | --- |
| school-grammar-ox.html | 36 | [TG·Cowan 문항 대조표](tg-cowan-item-audit-2026-11-27.tsv): SG ID별 판정 |
| example-judgment-ox.html | 32 | [TG·Cowan 문항 대조표](tg-cowan-item-audit-2026-11-27.tsv): EJ ID별 판정; example-ox `school`과 동일 |
| advanced-syntax-grammaticality-ox.html | 11 | [TF·AEP·일반 자료 대조표](2026-11-27-tf-aep-general.tsv): example-ox `transform`과 동일 ID로 조회 |
| syntax-analysis-ox.html | 8 | [TF·AEP·일반 자료 대조표](2026-11-27-tf-aep-general.tsv): example-ox `syntax`와 동일 ID로 조회 |

별도 대조표의 각 항목 판정·미완료 상태를 그대로 따른다.
