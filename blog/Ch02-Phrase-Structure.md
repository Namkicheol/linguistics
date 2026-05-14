<iframe src="https://namkicheol.github.io/linguistics/phrase-structure_study.html" width="100%" height="1000px" style="border: none; border-radius: 10px;"></iframe>

# Ch.2 Phrase Structure — 구 구조와 X-bar 정리 | 임용영어학 개념 정리

통사론에서 <span style="color:#3182ce">**phrase structure**</span>는 constituent를 한 단계 더 체계적으로 설명하는 틀입니다. 단순히 "무엇이 constituent인가"를 넘어서, 그 constituent가 어떤 <span style="color:#3182ce">**rule**</span>과 어떤 <span style="color:#3182ce">**projection**</span>으로 조직되는지까지 봐야 이후 Movement·Binding·Raising 분석이 흔들리지 않습니다.

---

## ① 개념 정의

### Phrase Structure Rule이란 무엇인가

<span style="color:#3182ce">**Phrase structure rule**</span>은 상위 범주를 그 바로 아래 constituent들로 전개하는 규칙입니다. 예를 들어 <span style="color:#319795">**S → NP VP**</span>, <span style="color:#319795">**VP → V NP**</span>, <span style="color:#319795">**PP → P NP**</span> 같은 형식이 대표적입니다.

이 규칙은 단순 어순표가 아니라 위계적 구조를 전제로 합니다. 그래서 같은 단어열이라도 어떤 node가 어떤 daughter를 가지는지에 따라 분석이 달라집니다. 임용에서 <span style="color:#3182ce">**tree diagram**</span>이 함께 출제되는 이유도 여기에 있습니다.

### X-bar theory의 핵심

<span style="color:#3182ce">**X-bar theory**</span>는 N, V, A, P, C 같은 범주마다 전혀 다른 구조를 두지 않고, 공통 템플릿으로 설명하려는 분석입니다.

- head X → <span style="color:#319795">**X′**</span> → <span style="color:#319795">**XP**</span>
- <span style="color:#319795">**complement**</span>는 head의 sister
- <span style="color:#319795">**adjunct**</span>는 X′ 바깥에서 결합
- <span style="color:#319795">**specifier**</span>는 X′와 결합해 XP를 완성

즉, phrase structure를 더 정교하게 만든 버전이 X-bar analysis라고 보면 됩니다.

<span style="color:#dd6b20">**현직쌤 팁**: 임용 답안에서는 "X is a complement because it is selected by the head and merged as sister to X"처럼 구조 위치까지 적어 주는 답안이 안정적입니다.</span>

---

## ② 기출 맥락

### 구 구조 규칙 + 수형도 대응

<span style="color:#c53030">**2011 Q33**</span> 계열 포인트는 <span style="color:#3182ce">**phrase structure rules**</span>와 <span style="color:#3182ce">**tree diagram**</span>을 연결하는 문제입니다. 규칙을 보면 바로 tree를 떠올릴 수 있어야 하고, tree를 보면 어떤 rewrite rule이 적용됐는지 역으로 읽을 수 있어야 합니다.

예를 들어 <span style="color:#319795">**S → NP VP**</span>를 보면, S 바로 아래에 subject NP와 predicate VP가 sister로 놓여야 합니다. 이때 VP 안쪽에서는 다시 <span style="color:#319795">**VP → V NP**</span> 같은 rule, 또는 X-bar식 <span style="color:#319795">**V′ → V NP**</span> 분석이 적용될 수 있습니다.

### X-bar + complement/adjunct 판별

<span style="color:#c53030">**2010 Q34**</span>와 <span style="color:#c53030">**2022 A-7**</span> 축은 사실 연결되어 있습니다. 앞에서는 <span style="color:#3182ce">**X-bar theory**</span> 자체를 묻고, 뒤에서는 그 이론을 실제 phrase에 적용해 <span style="color:#3182ce">**complement**</span>와 <span style="color:#3182ce">**adjunct**</span>를 구분하게 합니다.

예:

> *the student <span style="color:#319795">**of linguistics**</span> <span style="color:#319795">**with a notebook**</span>*

여기서 <span style="color:#319795">**of linguistics**</span>는 head noun과 더 밀접한 결합을 이루는 <span style="color:#3182ce">**complement**</span>, <span style="color:#319795">**with a notebook**</span>는 바깥에서 추가 정보를 붙이는 <span style="color:#3182ce">**adjunct**</span>로 보는 분석이 안전합니다.

### DP hypothesis와 functional projection

<span style="color:#c53030">**2017 기입4**</span> 계열에서는 <span style="color:#3182ce">**DP hypothesis**</span>가 핵심입니다. determiner를 단순 수식어가 아니라 head D로 보면, nominal phrase 전체를 NP가 아니라 DP로 분석하게 됩니다. 이 포인트는 이후 CP, TP 같은 <span style="color:#3182ce">**functional projection**</span>을 이해하는 발판이 됩니다.

---

## ③ 키텀 비교

### Complement vs Adjunct

| | <span style="color:#3182ce">**Complement**</span> | <span style="color:#3182ce">**Adjunct**</span> |
|---|---|---|
| 선택성 | head가 요구 | 선택적 |
| 구조 위치 | head의 sister | X′ 바깥 |
| 순서 | head에 더 가까움 | 더 바깥 |
| recursion | 제한적 | 다수 누적 가능 |

핵심은 "가깝다/멀다"가 아니라 <span style="color:#3182ce">**selection**</span>입니다. head가 요구하는가 아닌가를 먼저 보고, 그 다음에 ordering과 recursion으로 검증합니다.

### Head / X′ / XP

| 단계 | 역할 |
|---|---|
| <span style="color:#319795">**Head X**</span> | projection의 범주 결정 |
| <span style="color:#319795">**X′**</span> | head + complement 결합의 intermediate level |
| <span style="color:#319795">**XP**</span> | maximal projection |

이 구분을 놓치면 specifier와 adjunct를 모두 "큰 수식어"처럼 뭉뚱그리게 되는데, 임용에서는 바로 그 지점을 함정으로 씁니다.

### NP vs DP

traditional NP analysis에서는 N이 nominal projection의 head이고 determiner는 specifier로 분석될 수 있습니다. 반면 <span style="color:#3182ce">**DP hypothesis**</span>에서는 D가 더 큰 DP projection의 head가 됩니다. 즉,

- NP analysis: [NP the [N book]]
- DP hypothesis: [DP D [NP book]]

처럼 보는 셈입니다.

---

## ④ 수험 활용 팁

### 답안 작성 패턴

phrase structure 문제는 다음 틀로 쓰면 흔들리지 않습니다.

> *"The relevant structure is XP because the head projects to X′ and then to XP. The phrase Y is a complement/adjunct/specifier because …"*

이때 반드시

1. head가 무엇인지
2. Y가 head의 sister인지
3. selection이 있는지
4. 더 바깥 modifier인지

를 순서대로 적는 것이 안전합니다.

### 빠른 판단 루틴

낯선 phrase가 나오면 다음 순서로 보세요.

1. **head 찾기**: 범주를 결정하는 요소가 무엇인가
2. **selected phrase 확인**: head가 요구하는 complement가 있는가
3. **outer modifier 분리**: optional 정보는 adjunct로 따로 볼 수 있는가
4. **projection level 확인**: XP / X′ / head 중 어디에 해당하는가

### 함정 정리

<span style="color:#c53030">**⚠️ complement와 adjunct를 의미만으로 구분하지 말 것**</span>: 구조 위치와 selection까지 함께 봐야 합니다.

<span style="color:#c53030">**⚠️ determiner를 무조건 NP 내부 수식어로 보지 말 것**</span>: <span style="color:#3182ce">**DP hypothesis**</span>가 적용되는 문항에서는 D가 head입니다.

<span style="color:#c53030">**⚠️ subject를 lexical verb의 직접 자매로 단정하지 말 것**</span>: <span style="color:#3182ce">**VP-internal subject hypothesis**</span>를 전제하면 origin과 surface position이 달라집니다.

---

<p align="center">
<a href="https://namkicheol.github.io/linguistics/phrase-structure.html" target="_blank" style="display:inline-block;padding:14px 28px;background:#3b3f86;color:#fff;text-decoration:none;border-radius:8px;font-weight:bold;font-size:15px;">📝 Phrase Structure OX 40문항 풀러 가기 →</a>
</p>

---

**태그**: 임용고시, 중등영어, 영어학, 통사론, Ch2, Phrase Structure, phrase structure rules, tree diagram, X-bar theory, complement, adjunct, specifier, DP hypothesis, CP, TP, VP-internal subject hypothesis, 서브노트, 기출분석
