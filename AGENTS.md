# linguistics

이 파일이 canonical 작업 지침이다. `CLAUDE.md`(Claude Code)와 `AGENTS.md`(Codex)는 같은 파일이다(symlink). Claude Code·Codex 공통.

임용고시 대비 영어학(English Linguistics) OX 퀴즈 + 개념 정리 웹 애플리케이션. 순수 HTML/CSS/JS (백엔드 없음).

**범위**: 통사론(Syntax · 메인) + 형태론(Morphology) + 의미론(Semantics) + 화용론(Pragmatics).
**음운론(Phonology)은 본 레포에 없음** — 별도 레포 `phonetics-phonology/`에서 작업.

---

## 🚨 운영 원칙 (최우선)

- **Git 워크플로우**: 작업 완료 후 필요한 검증을 먼저 하고, 커밋은 사용자가 요청했거나 작업 단위가 명확할 때 수행한다. 푸시·PR·배포처럼 외부에 보이는 작업은 명시 요청이 있을 때 진행한다.
- **브랜치 prefix**: 사용하는 도구 관례를 따른다 (Claude Code `claude/`, Codex `codex/`).
- **커밋 트레일러** (`Co-Authored-By: Claude…`)는 도구 기본 동작을 따르되 강제하지 않는다. Codex 커밋에는 넣지 않는다.
- **사용자에게 묻는 건 겁나 중요한 것만** — 콘텐츠 방향·삭제·되돌리기 불가한 결정 등. 기술적 세부사항은 묻지 않는다.

---

## 한글 용어 규칙 (필수)

`_study.html` 개념 본문 / OX 퀴즈 `why` / 카드 설명 등 **한글이 등장하는 모든 본문**에서 학술 키워드는 영어 원어로 통일한다(예: `의미역 기준` → `Theta Criterion`, `의문사 이동` → `wh-movement`, `격 여과` → `Case Filter`). 한글 설명 블록 자체는 유지. 표준 통사 원리·이론 이름(EPP, ECP, Theta Criterion, c-command, Move α 등)은 항상 영어 원어.

### 🥇 통사론 한글 용어 권위 출처

통사론(Syntax) 영역에서 **한글 표현이 필요한 경우** 다음 자료를 1차 참조로 사용한다:

- **`refs/TalkFile_영어통사론 정태구.md`** + `refs/TalkFile_영어통사론 정태구_images/` — **정태구 『영어통사론』** 임용 전공영어 표준 교재. 통사론 한글 학술 용어의 권위 있는 한국 출처
- 정태구 자료에 한글 표현이 명시되어 있으면 그 표현을 채택 (예: 정태구가 사용하는 한글 표현이 있으면 그것을 우선)
- 정태구에 한글 표현이 없거나 영어 원어로만 등장하면 영어 원어 그대로

> 상세 매핑표·예시·위반 트리거는 **`docs/한글용어.md`** 참조. 정책 원본은 전역 지침(`~/.claude/CLAUDE.md` / `~/.codex/AGENTS.md`) "임용 관련 작업: 한국어 용어 규칙" 및 testmaster `docs/한글용어.md`.

---

## 🔗 testmaster 연동 — concept_link 자동 적용 (필수)

이 레포의 `_study.html` 챕터를 만들거나 변경하면, testmaster의 기출 데이터가 자동으로 그 챕터를 "💎 합격자 노트에서 더 자세히" 링크로 가리키도록 매핑표를 갱신해야 한다.

**이 레포명 (concept_anchors.json key): `linguistics`**

### 새 챕터 만들 때 절차

1. `_study.html` 안 각 섹션에 `id="..."` anchor 부여 (의미 있는 영문 slug 권장: `c-command`, `wh-movement`, `theta-criterion`, `binding-principle-a` 등)
2. testmaster의 `data/concept_anchors.json` 갱신 — 해당 챕터의 anchor·title·terms 추가:
   ```json
   "linguistics": {
     "movement_study.html": [
       { "anchor": "wh-movement", "title": "Wh-Movement",
         "terms": ["wh-movement", "wh-question", "operator movement"] }
     ]
   }
   ```
3. testmaster에서 자동 적용 + 검증 실행:
   ```bash
   cd ~/Library/Mobile\ Documents/com~apple~CloudDocs/Developments/testmaster
   python3 scripts/wire_concept_links.py
   ```
4. 출력에서 `깨진링크: 0건` 확인. 깨졌으면 anchor 이름 수정.

### 트리거 (자동 실행)

다음 상황에서 별도 지시 없이 위 절차를 실행한다:
- 새 `_study.html` 챕터 생성/완성 직후
- 기존 `_study.html`에 섹션 추가/제거/anchor 변경 시
- 사용자가 "기출 연동", "concept_link", "testmaster 적용", "wire" 등 언급 시

### testmaster 위치

`~/Library/Mobile Documents/com~apple~CloudDocs/Developments/testmaster/`
규칙 원본: 위 디렉토리의 `AGENTS.md` "concept_link 자동 적용" 섹션
GitHub: `https://github.com/Namkicheol/testmaster`

---

## 작업 가이드

englisheducation의 디자인·구조를 재사용한다. スキル 정의가 있으면 활용하되, 없으면 아래 순서로 직접 확인하고 작업한다.

| 상황 | 처리 방법 |
|------|----------------|
| 디자인 시스템, 색상, kw1~kw4 키워드 스타일 | 기존 완성 파일(`constituency*.html`, `index.html`, `blog/Ch01-*`)을 템플릿으로 비교·복제 |
| OX 퀴즈 페이지 제작 | `constituency.html`의 `SAVE_KEY`, `TOTAL`, 모드 토글, `Q[]`, script 로드 순서를 기준으로 수정 |
| 개념 정리 페이지 제작 | `constituency_study.html`의 TOC, `.concept`, `.exam`, 인라인 SVG 패턴을 기준으로 수정 |
| 챕터 완료 후 점검 | 이 문서의 체크리스트 + rg/Grep 검색 + 브라우저/정적 확인으로 검증 |
| 통사론 예문·트리·OX 작성 보조 | refs의 Radford/합격자 노트/기출맥락을 직접 대조하고, 트리는 `_study.html`에 인라인 SVG로 작성 |
| 이미지 생성 | Canva plugin이 사용 가능하면 Canva, 아니면 Pencil MCP·Gemini / Codex `image_gen` 또는 사용자가 지정한 도구 사용 |

sub-agent(Task 도구 / Codex parallel agent)는 작업 분할이 의미 있을 때만, 사용자가 명시적으로 요청한 경우에 사용한다. 자동으로 백그라운드 에이전트를 띄우는 것은 trivial 작업에 강제 적용하지 않는다.

---

## 파일 구조

| 파일 | 역할 | 상태 |
|------|------|------|
| `index.html` | 전체 챕터 인덱스 랜딩 페이지 | ✅ 셋업 완료 |
| `sounds.js` | 정답/오답 효과음 (Web Audio API) | ✅ 공용 |
| `score-popup.js` | 결과 팝업 + 컨페티 + 최고기록 | ✅ 공용 |
| `docs/한글용어.md` | 한글 용어 매핑·정책 | ✅ |
| `refs/` | 강사·교재·기출 참고 자료 | ✅ |

### 챕터 (8개 예정 · 챕터당 2 파일)

| 챕터 | 영역 | 퀴즈 | 개념정리 | 상태 |
|------|------|------|---------|------|
| 1. Constituency | Syntax | `constituency.html` | `constituency_study.html` | ✅ |
| 2. Phrase Structure | Syntax | `phrase-structure.html` | `phrase-structure_study.html` | ✅ |
| 3. Movement | Syntax | `movement.html` | `movement_study.html` | ✅ |
| 4. Raising & Control | Syntax | `raising-control.html` | `raising-control_study.html` | 🚧 작업 중 |
| 5. Binding | Syntax | `binding.html` | `binding_study.html` | ⏳ |
| 6. Morphology | Morphology | `morphology.html` | `morphology_study.html` | ⏳ |
| 7. Semantics | Semantics | `semantics.html` | `semantics_study.html` | ⏳ |
| 8. Pragmatics | Pragmatics | `pragmatics.html` | `pragmatics_study.html` | ⏳ |

> 음운론 챕터는 본 레포에 만들지 않는다. 음운론은 `phonetics-phonology/` 별도 레포.

---

## 참고 자료 (refs/) — 영역별 우선순위 트리

영역별로 1순위 자료가 다르므로 평탄한 4-tier 대신 **영역별 트리** 구조.

### 공통 / 기출 — 영역 가리지 않고 먼저 확인

| 파일 | 용도 |
|------|------|
| `refs/메가쌤_기출분석.md` (1.3MB) | 영어학 영역별 기출 분석 — 챕터 작업 전 영역별 헤더 먼저 확인 |
| `refs/루이스기출 5판.md` (1.6MB) | Part 11 Syntax & Grammar / Part 12 Phonetics & Phonology / Part 13 Semantics & Pragmatics / Part 14 Morphology |
| `refs/24 영어학 best/` (97 파일) | 합격자 노트 모음 — Movement·Raising·EPP 등 통사 빈출 주제 중심 |
| `refs/영어학 짱은 나야!!!_가루미 복사본.md` (172KB) | 영역별 키텀 정리 |
| `refs/윤도형2015.md` (510KB) | 5개 챕터 46개 체크포인트 — 영어학 전 영역 |

### 통사론 (Syntax) — 메인 영역

| 파일 | 용도 |
|------|------|
| **`refs/transformational_grammar.md`** (1.5MB) | Radford 원서 전체 텍스트. 예문 원문·규칙 정의 **무조건 여기서 찾기** |
| `refs/transformational_grammar_images/` | Radford 원서 이미지·수형도 (그림 필요 시 보조) |
| **`refs/TalkFile_영어통사론 정태구.md`** | 정태구 『영어통사론』 — **통사론 한글 학술 용어 권위 출처** (이미지 PDF) |
| `refs/TalkFile_영어통사론 정태구_images/` | 정태구 본문 이미지 |
| `refs/syntax_argumentation.md` (850KB) | 통사 논증·분석 자료 |
| `refs/트포 단권화 (구매).md` | TG Ch.4~7 전반 보조 |
| `refs/단숲_TG 정리.md` | Negation 강함 |
| `refs/movement 단권화.md` | Movement 챕터 전용 |
| `refs/Raising And Control .md` | Raising/Control 챕터 전용 |
| `refs/raising and control.md` | Raising/Control 기출 문장 위주 |
| `refs/1. 트포 원서정리 87p(구입).md` | 통사 기출문제 형식 참조 |

### 형태론 (Morphology)

| 파일 | 용도 |
|------|------|
| `refs/teachers_grammar.md` (2MB) | Teacher's Grammar — 단어 형성·품사 핵심 |
| `refs/linguistics_non_linguists.md` (43KB) | Linguistics for Non-Linguists 형태론 챕터 |
| `refs/윤도형2015.md` (Ch.01) | 형태론 정리 |

### 의미론 & 화용론 (Semantics & Pragmatics)

| 파일 | 용도 |
|------|------|
| `refs/linguistics_non_linguists.md` | 의미·화용 입문 챕터 |
| `refs/윤도형2015.md` (Ch.02) | 의미·화용 정리 |
| `refs/메가쌤_기출분석.md` | Part 13 Semantics & Pragmatics 기출 |
| `refs/24 영어학 best/` | 의미·화용 관련 합격자 노트 |

### 통사론 챕터별 보조 자료 우선순위

| 챕터 | 1순위 | 2순위 | 3순위 |
|------|------|------|------|
| Constituency | `transformational_grammar.md` (Ch.2) | `syntax_argumentation.md` | `트포 단권화` |
| Phrase Structure | `transformational_grammar.md` (Ch.3~5) | `트포 단권화` | `syntax_argumentation.md` |
| Movement | `movement 단권화.md` | `transformational_grammar.md` (Ch.6,8,9) | `트포 단권화` |
| Raising/Control | `Raising And Control .md` | `raising and control.md` | `단숲_TG 정리.md` |
| Binding | `transformational_grammar.md` (Ch.10) | `syntax_argumentation.md` | `트포 단권화` |

> ⚠️ **원칙**: 예문·규칙 정의는 반드시 `transformational_grammar.md`에서 구조와 기준을 확인한다. 단, 예문은 §영어학 예문 정책에 따라 그대로 베끼지 말고 구조를 유지한 채 어휘를 변형하거나 새로 만든다. 나머지 md는 해설 보조·임용 출제 포인트 파악용.

---

## 🗄️ TG 레포 자료 자산 (참고 보관)

`transformational-grammar/` 레포는 **임시 중단(deprecate) 상태**. 본 레포에서 통사론을 englisheducation 스타일로 새로 짜되, 그 레포의 콘텐츠는 자산으로 활용한다.

| 자산 | 활용 |
|------|------|
| `transformational-grammar/ch2_concepts.html` | Constituency 챕터 _study.html 작성 시 본문 자산 |
| `transformational-grammar/ch3_concepts.html` | Phrase Structure 챕터 _study.html 작성 시 본문 자산 |
| `transformational-grammar/Ch2_tree.html` (SVG 6) | Constituency `_study.html` 안에 직접 임베드 |
| `transformational-grammar/Ch3_tree.html` (SVG 5) | Phrase Structure `_study.html` 안에 직접 임베드 |
| `transformational-grammar/Ch[2-3]_ox_*.html` | 해당 챕터 OX 작성 시 문항 풀 — 베스트 20문항만 추림 |

> ⚠️ **새 레포 구조**: 챕터당 5파일(TG 방식) 아니고 **챕터당 2파일**(`*.html` + `*_study.html`, englisheducation 방식). 트리 SVG는 별도 페이지 X, `_study.html` 안에 인라인 SVG로 직접 삽입.

---

## 개발 핵심 규칙

- 백엔드 없음 — 순수 클라이언트사이드
- 새 챕터 추가 시: englisheducation의 `listen.html` / `listen_study.html` 기준으로 복사·수정
- CSS 변수 사용 금지, 클래스 스타일로 처리
- 수정 항목: `SAVE_KEY`, `TOTAL`, 헤더 텍스트(NO. XX, 챕터명), `Q[]` 배열
- **sounds.js + score-popup.js 반드시 포함, 퀴즈 JS보다 먼저 로드**
- **⚠️ "루이스" 글자 사용 금지** — `5판`·`기출`·`해설` 등으로만 표기
- **새 챕터 완료 시 `index.html`도 함께 업데이트** (disabled 카드 → 활성 카드 전환)
- **통사 트리 SVG**는 `_study.html` 본문에 인라인. 별도 tree.html 만들지 않음.
- **AI 이미지로 통사 트리 생성 금지** — 노드 라벨·가지 연결 부정확

---

## 🛡️ 정확성·확실성 원칙 (필수)

영어학 콘텐츠는 수험생 학습 자료이므로 **확실한 것만** 적는다. 미묘한·논쟁적 사항은 OX·_study·블로그 어디에도 넣지 않는다.

### 들어가지 말아야 할 것

- **학파·견해가 갈리는 통사 사항** — 예: AdvP+PP coordination이 "like-category"인지 (functional vs categorical), VP-shell 분석 등 교과서 사이 견해 차이가 있는 주제
- **자연성이 native에게 의문스러운 예문** — 예: 일부 PP fronting 케이스("At the painting, she looked..."), heavy stylistic inversion, 격식체에서만 자연스러운 어순
- **임용 표준 답안 패턴과 동떨어진 분석** — 합격자 노트·강사 refs와 어긋나는 분석은 사용 금지
- **해석이 두세 가지로 갈리는 grammaticality 판단** — 비문(*) 표시가 모든 분석에서 일관되지 않은 문장
- **reduced relative·empty category 등 advanced 분석을 가정해야 ambiguous한 케이스** — 학생이 표면상 구조만으로 판단 어려운 진단

### 들어가도 되는 것

- Radford 원서·합격자 노트(`refs/24 영어학 best/`)에 **공통으로** 나오는 표준 진단·예시
- 임용 기출에서 반복적으로 등장한 패턴 (constituent test 4종, phrasal/prep V 4-way 진단, c-command 정의 + Binding/NPI, X-bar complement/adjunct 등)
- 명백한 비문(*) 케이스 — 모든 표준 분석에서 비문임이 일치
- 명백한 ambiguity — 표면 구조만으로도 두 의미가 명확한 PP attachment, coordination scope 등

### 점검 책임

- **콘텐츠 작성자가 점검까지 책임진다.** 사용자에게 "미묘한 부분은 확인해주세요" 떠넘기지 않는다.
- 의심 문항은 **작성 시점에서 안전한 표준 진단으로 교체**한다.
- 작성 완료 후 자체 점검: ① 비문 표시가 표준 분석에서 일관한가 ② 진술이 임용 표준 답안 패턴에 부합하는가 ③ 예문이 native 자연성을 가지는가.

### 위반 즉시 수정 트리거

- "X는 학파에 따라 다르게 본다", "일부 분석에서는…" 같은 진술이 OX `correct`/`why`에 등장 → 그 문항 자체가 임용 OX로 부적합 → 제거 또는 명확한 표준 케이스로 교체
- 예문 자연성 검증 시 "어색하지만 가능"으로 결론 → 사용 금지

---

## 📐 영어학 예문 정책 (필수)

영어학은 예문이 핵심. 다음 정책으로 통일.

### 1. 책·refs 예문 그대로 베끼기 금지

- Radford 원서·`syntax_argumentation.md`·합격자 노트·기출 등 **refs 원문 예문을 그대로 가져오지 않는다.**
- **변형 원칙**: 동일한 통사 구조·동일한 비문/정문 패턴을 유지하되, **고유명사·일반명사·동사·시제·전치사구를 바꾼다.** 한 문장 안에서 최소 2~3개 어휘를 변경.
- 또는 동일한 원리·제약을 검증하는 **새 문장을 창작**한다 (영어 자연성 유지).
- **예외**: 기출 문제지에 등장한 문장 그대로는 OK (인용 표기 시). 단 "그럴법한" 추정 인용 금지 (검증된 기출만).

### 2. 비문(*) / 정문 판별 위주

영어학 OX는 **비문/정문 판별 문항을 다수 포함**한다. 통사론 챕터 핵심 평가 방식.

- 비문 표시: 문장 앞에 `*` (예: `*John believes himself to be honest by Mary.`)
- OX 진술 패턴 예시:
  - `*Sentence X` is grammatical because [Principle/Filter].
  - The contrast between *X and Y supports [Principle].
  - In sentence X, the c-command relation between A and B is [...].
  - Sentence X exhibits [Movement type] because [...].
- 비문 문항과 정문 문항의 비율은 약 1:1 권장. 챕터 주제에 맞춰 조정.

### 3. OX 문항 수 표준 (영어학)

- **통사론 챕터 (Constituency, Phrase Structure, Movement, Raising/Control, Binding): 40문항**
- **형태론·의미론·화용론 챕터: 20~30문항** (분량은 콘텐츠 양에 맞춰 조정)
- 영교론(20문항)과 다름 — 영어학은 예문 검증 위주라 더 많이 필요.

### 4. OX 페이지 구조 — 한 파일 + 모드 토글

- englisheducation 패턴 유지. **챕터당 OX 파일 1개**(`[topic].html`).
- 페이지 상단 또는 헤더에 **모드 토글 버튼**: `기본 순서` / `랜덤`. JS에서 Q 배열을 셔플 또는 원본 순서 유지.
- TG 레포 식의 `_order.html` + `_random.html` 분리는 **사용 안 함**.

### 5. 출처 표기 정책

- OX 본문(질문문)에 출처 표기 금지.
- `why` 해설에는 **검증된 기출** 인 경우에만 연도·번호 표기. 검증 안 됐으면 표기 생략.

---

## 🚨 기출 추정 절대 금지 (전 콘텐츠 공통)

블로그·사이트 콘텐츠·해설·OX 어디든 임용 **기출 관련 정보(연도·출제 의도·답안 패턴 등) 추정 금지**. 검증된 refs에서만 인용한다.

**검증 절차** (영어학):
1. **1차**: `refs/메가쌤_기출분석.md` — 영역별 기출 분류
2. **2차**: `refs/루이스기출 5판.md` — Part 11(Syntax)/12(Phonology)/13(Semantics·Pragmatics)/14(Morphology) 기출 표·해설
3. **3차**: 챕터별 보조 자료 (위 표) — 단권화·정리본 교차 검증
4. **2022년 이후**: 루이스 5판 범위 밖 → testmaster의 `refs/2025 전공 기출 김재균해설.md`, `refs/2026 기출 권두걸팀 해설서.md` 영어학 파트 타겟 검색
5. **gee 답안 기준** 활용 (TG 레포 Ch.2~3 검증된 답안 패턴 — 통사론 한정)

**원칙**:
- **연도·기출 정보 표기는 OPTIONAL** — 블로그 작성 시 검증 부담스러우면 본문에 박지 않아도 됨. 개념 위주로 작성해도 무방
- **박는 경우에만** refs 검증 필수. 검증 매칭 0건이면 표기 **생략**. "그럴법한" 추정값 박지 말 것
- 추정 = 수험생에게 잘못된 정보 제공 = **치명적 오류**

---

## 블로그 글 작성

전역 블로그 지침 `~/Library/Mobile Documents/com~apple~CloudDocs/Developments/blog writings/blog write.md` 의 **"임용고시 (영어학·영교론)"** 섹션과 그 하위 **"📚 임용 블로그 글쓰기 규칙"** 을 따른다.

본 레포 유형: **A형 (영어학 서브노트형)** — 블로그 작성 대상.

핵심:
- 블로그 글은 `.md` 파일로 작성 (티스토리 마크다운 에디터)
- **본문 = 서브노트 핵심 + 4섹션 보강** (① 개념 정의 [필수] + ②③④ 중 최소 2개)
  - ② 기출 맥락 / ③ 키텀 비교 / ④ 수험 활용 팁
  - **합격자 노트(`refs/24 영어학 best/`)·`refs/단숲_TG 정리.md` 등에 팁 있으면 ④ 무조건 포함**
- **한글 설명 시 용어는 영어 원문 그대로** (예: `c-command`·`Binding`·`Raising`·`Control`·`Theta Criterion` 그대로. "C-통제"·"결속" 등 어설픈 번역 X). 학자명·이론명·기술 용어 모두 영어 유지
- **본문에 출처 인용 표기 불필요** (`— Radford Ch.4` 같은 표기 X)
- **키워드 하이라이트 필수** (5색): 학술 용어(c-command·Binding·Movement·entailment 등) → 파랑 `#3182ce` / 학자명(Radford·Chomsky·Grice 등) → 보라 `#805ad5` / 함정·비문(*표시 등) → 빨강 `#c53030` / 정문·올바른 분석·정의 → 청록 `#319795` / 현직쌤 팁 → 주황 `#dd6b20`
- **기출 연도 빨간색 인라인** (`#c53030`)
- 핵심 개념은 **영어 원문 한 문단 + 한글 설명 한 문단** 교차 (개념정리 페이지 수록 개념 + 알파)
- **신규 글 썸네일은 Canva plugin 또는 Pencil MCP·Gemini / Codex `image_gen`으로 생성**. 기존 글은 그대로 유지
- **SVG 사용 금지** (블로그 한정. 웹앱 페이지 내부 SVG 다이어그램은 별개)
- **Radford 교재 표기**: `Radford 교수의 『Transformational Grammar』` 만 사용. "(국제판)" 표기 절대 금지

### 영어학 블로그 고유 규칙

**사이트 구조 → 블로그 매핑**
- 사이트는 챕터당 2개: `*_study.html` (개념정리) + `*.html` (OX 20문항)
- **블로그 글 단위: 챕터당 1편 통합** (4섹션 본문 + OX 별도 발행)

**iframe + 태그 배치 — englisheducation 패턴 그대로**

영어학 블로그는 englisheducation 블로그 패턴을 **그대로 따른다**. 다음 4가지 필수:

1. **맨 위 iframe** — 사이트 페이지 임베드 (개념정리편은 `*_study.html`, OX편은 `*.html`)
2. **본문 4섹션** — ① 정의 [필수] + ②③④ 중 최소 2개
3. **본문 끝 링크 버튼** — 개념정리편 → OX 링크 / OX편 → 개념정리 링크
4. **맨 아래 태그** — `**태그**: 콤마, 콤마, ...` 형식

iframe 템플릿:
```html
<!-- 개념정리편 첫 줄 -->
<iframe src="https://namkicheol.github.io/linguistics/[topic]_study.html" width="100%" height="1000px" style="border: none; border-radius: 10px;"></iframe>

<!-- OX편 첫 줄 -->
<iframe src="https://namkicheol.github.io/linguistics/[topic].html" width="100%" height="1000px" style="border: none; border-radius: 10px;"></iframe>
```

링크 버튼 템플릿 (OX편으로 보내기):
```html
<p align="center">
<a href="https://obangti.tistory.com/<post-id>" target="_blank" style="display:inline-block;padding:14px 28px;background:#3b3f86;color:#fff;text-decoration:none;border-radius:8px;font-weight:bold;font-size:15px;">📝 [챕터명] OX [N]문항 풀러 가기 →</a>
</p>
```

태그 템플릿:
```markdown
**태그**: 임용고시, 중등영어, 영어학, 통사론, Ch1, Constituency, [챕터별 키텀 5~10개], 서브노트, 기출분석
```

**썸네일**: 신규 글마다 가능하면 **Canva plugin**으로 1장 생성. Canva가 현재 세션에서 사용 불가하면 Pencil MCP·Gemini / Codex `image_gen` 또는 사용자가 지정한 도구를 사용한다. 사이즈 1200×630 (Tistory 표준), 인디고 그라디언트 배경, 챕터 제목 + 영역명 + "임용영어학".

**📝 OX 블로그 글 구조** (별도 발행 — 해설 중심 3섹션)
- ① 짧은 도입 (1-2줄)
- ② 본문 = **20문항 × 자세한 해설** (90%): 문항/답(✅❌)/영어 원문 인용 1-2문장/한글 풀이/⚠️ 함정/빨간 연도/5색 하이라이트
- ③ 개념정리 글로 돌아가기 링크 버튼 (사이클 형성)
- 분량: 5,000~10,000자 (문항당 250-500자)
- 통사 답안 패턴(`Sentence (X) is ungrammatical because [Principle/Filter] is violated ...`) 해설에 명시
- 자세한 규칙은 `blog write.md` "📝 OX·실전·응용 블로그 글 구조" 참조

**4섹션 보강 포인트 (영어학 특화)**
- ① **개념 정의**: 핵심 용어 영어 그대로. 통사론은 `transformational_grammar.md` 원서 발췌 (출처 표기 X)
- ② **기출 맥락**: 영어학 기출 답안 패턴 풀이 + `refs/메가쌤_기출분석.md` + `refs/24 영어학 best/` 우선 활용
- ③ **키텀 비교**:
  - Constituency: `syntax_argumentation.md`
  - Phrase Structure: `트포 단권화` + `transformational_grammar.md`
  - Movement: `movement 단권화.md`
  - Raising/Control: `Raising And Control .md`
  - Binding: `transformational_grammar.md` (Ch.10)
  - Morphology: `teachers_grammar.md` + `linguistics_non_linguists.md`
  - Semantics/Pragmatics: `linguistics_non_linguists.md` + `윤도형2015.md`
- ④ **수험 팁 필수 포함**: gee 답안 기준 + 합격자 노트 답안 작성 패턴 무조건 포함

**Tree Diagram 시각화 규칙 (통사론 특화)**

블로그 글 SVG 금지의 **유일한 예외**가 syntactic tree diagram. 단, 우선순위:

| 순위 | 방법 | 비고 |
|---|---|---|
| 1순위 | `_study.html` 페이지 **스크린샷 → PNG** 업로드 | 사이트 SVG 트리를 정적 이미지로 |
| 2순위 | 마크다운 **bracketed notation** | 짧은 구조에만. 예: `[CP [C that] [TP [DP John] [VP left]]]` |
| **예외** | **SVG 직접 삽입 허용** | 위 1~2 부적절한 경우만 |

- ❌ **AI 이미지로 통사 트리 생성 금지** — AI 이미지 생성은 노드 라벨·가지 연결 부정확


---

## 📋 기출 맥락 참조 (블로그·서브노트·OX 공통)

**`docs/기출맥락_2010_2026.md`** — 2010~2026 전 연도 기출 문항별 핵심 용어·맥락 인덱스 (testmaster에서 동기화).

| 작업 | 참조 방법 |
|------|----------|
| **블로그 글 작성** | 연도·문항 확인 → 해당 챕터 개념이 어느 해 어떤 맥락으로 출제됐는지 인용 |
| **서브노트 개념 정리** (`_study.html`) | 해당 챕터 용어의 출제 연도·문항 번호를 "기출 이력" 란에 표기 |
| **OX 문제 작성** | 기출 맥락 근거로 실제 출제 각도·선지 함정 설정; 해설에 연도 인용 |

---

## 🤖 신규 페이지 작성 시 보조 절차 (필수)

`_study.html` 또는 OX 파일을 **신규 작성하거나 대폭 수정**할 때 아래 절차를 직접 수행한다. sub-agent는 사용자가 명시적으로 요청한 경우에만 병렬 보조로 사용한다.

### 트리거 조건

| 트리거 | 수행 작업 |
|--------|----------|
| 새 `_study.html` 챕터 작성·수정 | **기출이력 추가** |
| 새 OX 파일(`[topic].html`) 작성·문항 추가 | **OX 기출각도 보강** |

### 작업 명세

**기출이력 추가** 절차:
1. `docs/기출맥락_2010_2026.md` 읽기
2. 해당 `_study.html`의 각 `.concept` div에서 핵심 용어 추출
3. 기출맥락에서 해당 용어 검색 → 출제 연도·문항·맥락 확인
4. 각 concept 끝에 `.exam` 블록 추가:
   ```html
   <div class="exam">
     <div class="exam-label">📋 기출 이력</div>
     <p><strong>20XX 1차 QX</strong> — [맥락 설명]</p>
   </div>
   ```
5. 기출맥락에 없는 개념 → 건너뜀 (추정 금지)

**OX 기출각도 보강** 절차:
1. `docs/기출맥락_2010_2026.md`에서 해당 챕터 개념의 실제 출제 각도 확인
2. 기출에서 확인된 각도로 OX 문항 1~2개 추가 (파일당):
   ```js
   {src:"...", cat:"기출 — 20XX 1차", text:"...", ans:true/false,
    correct:"...", why:"... (20XX 1차 QX 출제 각도)", source:"기출맥락_2010_2026.md", compare:[...]}
   ```
3. `TOTAL` 변수 및 `/N문제` 표시 업데이트
4. 변경 범위만 검증하고, 커밋은 사용자 요청 또는 명확한 작업 단위가 끝났을 때 수행

## 블로그 작성 규칙

- 블로그 글은 `blog/` 아래에 작성하고, 첫 줄에 해당 GitHub Pages 앱 iframe을 넣는다.
- 개념정리 글과 OX 해설 글을 구분한다. 파일명은 기존 `ChNN-Topic.md`, `ChNN-Topic-OX.md` 패턴을 우선 따른다.
- 블로그 본문에서도 한글 설명은 유지하되, 학술 키워드와 개념 용어는 영어 원어를 기본으로 쓴다. `docs/한글용어.md` 또는 refs에 없는 한국어 번역 조어를 만들지 않는다.
- 기출 연도, 출제 의도, 답안 패턴은 `docs/기출맥락_2010_2026.md`, refs, 또는 해당 study page에 이미 확인된 경우에만 표기한다. 확인되지 않으면 생략한다.
- 썸네일은 `blog/thumbnails/`에 저장한다. 로컬 도형 합성으로 급조하지 말고, 사용자가 요구한 경우 ChatGPT/image model 또는 Canva급 결과물을 기준으로 만든다.
- 썸네일 파일은 16:9 비율, 기본 `1280x720` PNG를 우선 사용한다. 개념정리와 OX 썸네일은 한눈에 구분되게 한다.
- 작업 완료 전 블로그 파일 대상으로 금지/주의 용어 검색, iframe URL 확인, `git diff --check`를 실행한다.
- 커밋할 때는 이번 블로그 작업 파일과 썸네일만 선별 stage한다. 기존 dirty/untracked 자료는 명시 요청 없이는 포함하지 않는다.
