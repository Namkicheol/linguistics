# 학습자료 1차 교정 · 2026-10-16

이 변경은 검토용 초안이다. 저장소 전체의 내용 검증 완료나 운영 사이트 반영을 뜻하지 않는다.

## 적용 범위

- 8개 챕터의 번호별 목차, 개념정리/OX 테두리 버튼, 읽기 쉬운 본문 스타일.
- 기존 288 OX의 개수, 정답 키, 저장 키와 모든 기존 section anchor를 보존했다. 잘못 일반화한 문항은 정답만 뒤집지 않고, 근거가 명확한 진술로 범위를 좁혔다.
- do so의 대용 범위와 complement/adjunct 구별, 단일 대용 검사로 다른 구조를 배제하던 역추론을 교정했다.
- Theta Criterion 위반 라벨, active ECM/passive raising 구별, persuade와 believe의 finite CP 구문 차이, PRO의 분포를 보완했다.
- wh-movement의 adjunct 출발 가능성, C/C′ 포함 관계, HAVE contraction 예문 손상, GB의 ECP 적용 설명을 보완했다.
- 표면 거리만으로 Binding 위반을 판정하던 설명, lexical/structural ambiguity의 상호 배타적 설명, deictic shifting의 무조건 일반화를 교정했다.
- morphology prefix 예시와 markedness/비문법성 구별을 바로잡았다.
- do so SVG는 기존 다른 그림에 CSS가 새지 않도록 고유 선택자로 한정했다. 전체 tree가 아니라 대용 범위 도식이며 Radford/TG 분석 범위를 명시했다.

## 주요 근거

- Radford, *Transformational Grammar*, pp.181–182, 234–235, 322–323, 414, 440, 494–495, 503–504.
- *Syntax and Argumentation*, §13.8, pp.240–241: 구성성분 검사의 사용과 추론 한계.
- Utrecht Lexicon, *Empty category principle*: GB의 NP-trace 및 A′-bound trace 조건.
- 2018학년도 전공 B 6번: raising chain과 Binding 조건.
- 2010학년도 1차 34번: 같은 날 다른 위치에서 재보고하는 deixis 조건.
- 2012학년도 1차 34번: 미래시제 발화와 실제 선언 발화의 차이.

## 원본 시험지로 확인한 이력 교정

- DP에 붙어 있던 ‘2017 기입4’를 제거했다. 해당 원본은 trisyllabic laxing 문항이다. 근거 없는 대체 연도는 만들지 않았다.
- Theta roles: ‘2014 서술5’ → ‘2014학년도 1차 전공 A 기입형 13번’. 같은 시험지에서 기입형/서술형 번호가 다시 시작하므로 유형을 보존했다.
- Raising/Control/PRO: ‘2019 기입3’ → ‘2019학년도 1차 전공 B 6번’.
- 원본 시험 답안 데이터는 수정하지 않았다.

## 검증

- `node scripts/test_learning_materials.cjs`: 8챕터, 288 OX, 원래 정답 키·저장 키·anchor 보존, inline JS 구문, 목차 링크 검사.
- `git diff --check`: 통과.
- 새 SVG XML 및 CSS 선택자 범위 검사: 통과.
- HTML ID 중복·로컬 링크/자산 존재 및 returnTo/legacy/위험 URL 회귀 검사: 통과.
- 독립 내용 검토에서 발견된 SVG CSS 누수, study/OX 설명 간 불일치, 잘못된 용어 번역, 빈 기출 이력 블록을 수정했다.
- Chromium은 실행 환경의 `socket() failed: Operation not permitted` 오류로 시작되지 않았다. 따라서 실제 데스크톱/모바일 렌더링, 터치, 스크롤 및 OX 상호작용 검증은 미완료다. Draft 상태에서 이 검증을 완료한 후 운영 반영을 판단해야 한다.

## 이번 변경에서 완료했다고 주장하지 않는 항목

- 전체 source 필드의 직접 인용 진위와 모든 예외 조건의 원전 대조.
- 나머지 기출 이력 전체의 원본 이미지 대조.
- NPI 세부 예문, want의 hidden-for 분석, governing category의 모든 framework 차이, 기존 모든 SVG의 분석 및 표시 검증.
- 아직 남은 allomorphy/compound inflection 예외와 일부 설명의 범위 정밀화.
- 기존 모든 어색한 한글, 예시, 접근성 문제의 일괄 해결.

불확실한 이론 차이는 자동 정답 반전으로 처리하지 않는다. Anchor 변경이 없어 testmaster의 새 매핑은 추가하지 않았다.
