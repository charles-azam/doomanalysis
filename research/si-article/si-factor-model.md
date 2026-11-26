# A minimal SI forecast model for the article

## What this model can honestly claim

Use an explicit conditional factor chain. The headline is calculated from the factors; the numerical factors remain disclosed judgments. Physics and benchmarks constrain those judgments but do not identify probabilities of an unprecedented event. Calling the product “derived” means derived algebraically from stated assumptions, not measured from data. Otherwise replacing an unexplained 80% headline with three unexplained 90% gates only hides the same arbitrariness.

The reference calculation below was chosen factor by factor and is NOT backsolved to the previous 80%. It gives approximately 67% for SI by 2050, with a very broad sensitivity envelope. It is a worked scenario assessment, not an author-endorsed or statistically calibrated forecast.

## Three operational gates

Fix the assessment protocol before scoring it. Use unfamiliar projects across mathematics, software, experimental science and engineering. Fix a budget comparable to the strong human team being beaten; disclose external tools, retries and human help. Match elapsed time or report it separately. Physical experiments must actually be run by the system or its accessible laboratory/robot infrastructure; suggested experiments do not count as experimental discoveries. SI does not require a humanoid body.

- **G(t), general research competence:** by year t, at least one system can learn and perform unfamiliar research tasks at roughly competent-human level across all four domains, using tools and limited human instruction. This is broad competence, not merely a high score in one domain.
- **X(t), expert superiority:** by t, such a system produces work exceeding strong expert teams on preregistered quality rubrics in all four domains, on held-out projects. At this gate, repeated attempts and occasional failures are still allowed and counted. It addresses the height and breadth of the capability frontier.
- **R(t), dependable integration:** by t, the broadly expert-superior system also satisfies the article's >=80% accepted-completion criterion in every domain on multi-week projects, within fixed budgets and corrective-supervision limits, with two independent evaluators. This addresses reliability, integrity, access to tools/experiments and physical implementation of the system itself.

The full event S(t) is G(t)∩X(t)∩R(t). These gates are not independent. By the probability chain rule:

P(S(t)) = P(G(t)) × P(X(t)|G(t)) × P(R(t)|G(t),X(t)).

This decomposition describes nested necessary capability criteria rather than assuming one particular engineering path. Do not add an independent “10 GW exists” or “training compute reaches 10^n FLOP” gate: an efficient learning method could reach SI below that threshold, and the relevant required compute is unknown. Compute, feedback and system cost inform X and R.

## Reference conditional inputs and evidence

| Gate | Evidence for a high probability by 2050 | Evidence against certainty | Reference conditional input by 2050 | Elicited sensitivity range |
|---|---|---|---:|---:|
| G: broad competent-human research | Current systems already operate across code, images, documents, scientific terminal work and interactive environments. General models transfer into robotics. There are 24 years to the deadline. | Benchmarks do not cover arbitrary new environments; experimental-science and engineering performance has heterogeneous human involvement. Robust general learning may have remaining gaps. | 0.98 | 0.90–0.995 |
| X given G: broad superiority over strong teams | Novel mathematical artifacts; strong research-level results; reinforcement learning and verified feedback; continued investment and more efficient models. Human intelligence is not a demonstrated physical upper bound. | Superhuman islands are not broad superiority. Feedback can be expensive and non-verifiable; public-text limits and new domain data still matter. A general system could remain broadly human-level. | 0.85 | 0.65–0.95 |
| R given G and X: reliable integrated multi-week system | Tool use, test-time search, verification, specialist controllers and increasingly capable agent scaffolds are concrete paths. There is substantial time to engineer error correction and access to labs. | Current hard tasks still fail often; errors compound; monitoring, integrity, experimental throughput and real-time embodiment remain constraints. Current science benchmarks do not establish multi-week autonomous reliability across all domains. | 0.80 | 0.50–0.95 |

**Rationale for the numerical judgments:** 0.98 assigns a small residual chance of broad-competence failure after 24 years because several components already exist. Conditional 0.85 represents substantial optimism about extending the present learning/science trajectory beyond the best expert teams, with a 15% remaining pathway-failure judgment. Conditional 0.80 keeps a larger 20% residual judgment for reliable integration. These are transparent allocations of uncertainty, NOT rates inferred from benchmark pass percentages. Neither the cited studies nor a physical law establishes 0.98,0.85 or0.80. The article should explicitly invite replacing a factor when the reader disagrees with its reasoning.

Reference result:

s_2050 = 0.98 × 0.85 × 0.80 = 0.6664 ≈ 67%.

Taking every sensitivity factor at its low or high endpoint gives 0.90×0.65×0.50 = 29.25% and 0.995×0.95×0.95 = 89.80%. **29–90% is a corner sensitivity envelope, not a confidence interval, and does not assume uncertainty in the factors is independent.** For one-at-a-time sensitivity, holding other reference inputs fixed: varying G gives61–68%; varying X gives51–74%; varying R gives42–79%. This makes reliability the largest numerical uncertainty in this particular assessment.

## Anchor the gates to quantities, not numerical theatre

Current independent evidence, all actually checked earlier:

- [Artificial Analysis v5,27Oct2026](https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v5): Astra/Opus science63%/59%; FrontierCode2 42%/46%; broad independently measured capabilities, with major remaining failures. These are actual task statistics, not estimates of P(G),P(X) or P(R).
- [ARC Prize verified GPT6 results](https://arcprize.org/results/openai-gpt-6): Astra62.7% standard(max) versus99.9% provider adapter(high). System memory/compaction changes outcomes substantially. The right unit is the complete system under a specified budget and harness.
- [Galbot,29Sep2026](https://arxiv.org/abs/2609.38537): one30-second locomotion test uses250calls averaging39.86seconds with physics paused. Total model waiting is order10^4seconds, roughly300times simulated physical duration. This measures an engineering gap; specialist low-level controllers could avoid asking the general model to run every motor command.
- [SenseNova,Oct2026](https://arxiv.org/abs/2610.22471):12benchmarks,8physicalrobot configurations; broad embodied transfer with explicit practical gaps.
- [IEA2026](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary):485TWh data-centre electricity2025,projected950TWh2030. At35%inference and10J/token,world inference capacity is order10^17token-equivalents/year. That is a resource envelope,not a guarantee that enough tokens produce SI.
- [Villalobos data forecast](https://arxiv.org/abs/2211.04325) addresses fresh public human text, not a universal learning ceiling. [DeepSeekR1](https://arxiv.org/abs/2501.12948) demonstrates learning from verifiable reinforcement, not unrestricted improvement in every domain.

An error-compounding example helps explain R. If100 sequential critical stages each independently succeed99%of the time, whole-project success is0.99^100≈37%. At99.9%perstage,it is≈90%. To reach80%projectsuccess across100such stages needs per-stage success0.8^(1/100)≈99.777%;across1,000stages,≈99.9777%. These are illustrative independent-stage calculations,not descriptions of actual agents: recovery,correlation,redundancy and verified checkpoints change the model. The point is that impressive local performance does not automatically produce dependable projects.

## Arrival timing: derive bin weights from the same SI model

Use the same three conditional gates at checkpoints; do not choose an extra “early arrival probability” independently of the cumulative forecast. Proposed worked inputs:

| Deadline | P(G) | P(X|G) | P(R|G,X) | Product P(S by deadline) |
|---|---:|---:|---:|---:|
|2030|0.85|0.45|0.50|0.19125 ≈19%|
|2040|0.95|0.70|0.70|0.46550 ≈47%|
|2050|0.98|0.85|0.80|0.66640 ≈67%|

The rows are cumulative judgments,not independent events. They are monotone and therefore define a valid coarse arrival distribution. Global masses:SI by2030=.19125;arrival2030–2040=.27425;arrival2040–2050=.20090;noSIby2050=.33360.

For a minimal four-cell A/D model,collapse the first two bins into **early SI,by2040**, represented by2035 for deployment-lag calculations;late SI is2040–2050,represented by2045. Representative dates are a coarse numerical approximation,not predictions of exact arrival years.

q_early = P(S by2040)/P(S by2050) = .4655/.6664 = .698529 ≈70%.
q_late = (.6664−.4655)/.6664 = .301471 ≈30%.

This directly supplies the requested early/late weights conditional on SI. Using2035 as the early representative compresses potentially earlier arrivals;flag that limitation and test a2030representative as a sensitivity. The horizon is fixed2050,so the two cells have roughly15and5years for diffusion. Do not give a2049arrival the same time to build factories as a2030arrival.

## Shared four-cell deployment model

Let Z describe the deployment environment: **deployment-capable/coordinated** versus **fragmented/constrained**. It is shared by abundance and doom,and can correlate with arrival time. Elicit b_E=P(capable|earlySI) and b_L=P(capable|lateSI) separately. Then conditional-on-SI joint weights are:

w_EC=q_early b_E;
w_EF=q_early(1−b_E);
w_LC=q_late b_L;
w_LF=q_late(1−b_L).

No independence assumption is required. If industrial/institutional conditions influence both early SI and diffusion,their correlation belongs in b_E versus b_L. The labels must specify industrial deployment,distribution and governance separately where they have different effects;“capable”is not synonymous with“safe.”

If a concrete worked four-cell table is required,**illustrative conditional judgments** b_E=.60,b_L=.40 yield weights .41912,.27941,.12059,.18088. Rationale to be debated:in this scenario early SI correlates with a stronger technology/industrial ecosystem. This relationship is not empirically established;late arrival could instead mean more time to prepare governance. Reversing b_E and b_L is a meaningful sensitivity. Do not silently claim one correlation as a finding.

For each cell j,estimate d_j=P(D|S,j),physical progress m_j=P(material target feasible by2050|S,j,notD),and access a_j=P(global access/costtarget met|S,j,notD,materialtarget). Then:

P(D|S)=Σ_j w_j d_j.
P(A|S)=Σ_j w_j (1−d_j) m_j a_j.

This chain prevents the mutually exclusive endpoint outcomes from summing above1,and uses the same arrival and institutional worlds in both calculations. m_j and a_j are conditional probabilities,not independent assumptions. Doom takes precedence over earlier abundance. A no-SI branch is needed for unconditional P(A)orP(D),but is unnecessary for the three requested headlines P(S),P(A|S),P(D|S).

## Suggested framing in prose

“The probabilities below are a scenario assessment. I cannot measure the frequency of superintelligence or derive it from a scaling law. I can say what would have to happen,show the evidence for and against each step,and make the arithmetic explicit. The reference chain gives67%by2050. That answer changes most when I change the chance that high capability becomes a dependable research system.”

Avoid leaving arbitrary sliders or inviting the reader to drag the headline. A static factor table,one displayed multiplication and one small sensitivity table expose the reasoning more clearly. Revision entries should name the factor whose evidence changed,not merely record that the headline moved.
