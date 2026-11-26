# SI and compute research memo

Research cutoff: 2026-11-01. Main horizon: 2050; checkpoints 2030 and 2040. All cited pages below were actually opened. Announcements are evidence of what authors claim; verification status matters. No numerical P(SI) can be deduced from a power law alone.

## A testable thesis and definition

Suggested thesis: **Intelligence can become abundant much faster than the physical goods intelligence helps produce.** Test cognitive capability, deployment capacity, and physical conversion separately. A narrow scientific proof raises confidence in scientific capability but does not establish reliable general autonomy or cheap mass deployment.

Operational SI proposal (our definition, not a discovered scientific constant): a system that, on independently administered, previously unseen projects, exceeds a strong human expert team across mathematics, software, experimental science and engineering; carries projects over weeks with little human intervention; and does so at a specified budget and reliability. Measure (1) breadth; (2) successful novelty; (3) probability of project completion; (4) human oversight hours; (5) cost and elapsed time. Add a threshold such as >=90% success on a preregistered multi-domain portfolio, no disqualifying integrity failures. The threshold is an explicit convention and can be debated. Distinguish isolated superhuman results, broadly superhuman cognition, and autonomous control over the physical economy. SI need not require consciousness, omniscience, or indefinite recursive improvement.

P(SI by 2050) should not be 100% by construction: scaling extrapolation, deployment failures, economics, and missing learning capabilities remain uncertainty. Forecast arrival-year CDF (2030,2040,2050) and conditional capability/cost scenarios, rather than a single shapeless “SI probability.” Increasing the definition's required reliability, breadth or physical autonomy must lower or delay the assessed probability.

## Source ledger: twelve core sources

1. **Hoffmann et al., Training Compute-Optimal Large Language Models**, submitted 2022-03-29. https://arxiv.org/abs/2203.15556 . Over 400 training runs; fixed-compute optimal scaling approximately doubles both model size and training tokens together. Chinchilla 70B trained on four times Gopher's data used the same compute as 280B Gopher and performed better. A loss law is an empirical description within a tested regime, not a theorem guaranteeing SI. Useful shorthand: C_train ≈ 6ND; L≈L∞+A/N^α+B/D^β. If D≈20N, C≈120N²; a 100-fold compute increase then calls for ~10-fold larger N and D. This demonstrates why training data matters.

2. **Villalobos et al., Will we run out of data?**, v2 2024-06-04. https://arxiv.org/abs/2211.04325 . Estimates public human text stocks would be matched by training datasets between 2026 and 2032 if historical trends continue. Discusses synthetic data, transfer learning, and better sample efficiency as possible routes onward. This is a conditional forecast about one resource, not a forecast that all AI progress stops. Correct wording: “A hard ceiling on useful learning has not been demonstrated; scarcity of fresh high-quality public text remains plausible.” Avoid “the data wall is gone.”

3. **Muennighoff et al., Scaling Data-Constrained Language Models**, 2023-05-25, v5 2025-06-28. https://arxiv.org/abs/2305.16264 . Experiments up to 9B parameters and 900B training tokens: up to four repeats of constrained data have little loss penalty relative to unique data at fixed compute, but repeated-data returns eventually decay toward zero. Repetition stretches a resource; does not manufacture unlimited independent information.

4. **DeepSeek-AI, DeepSeek-R1**, 2025-01-22, v2 2026-01-04; Nature 645,633–638(2025). https://arxiv.org/abs/2501.12948 . Shows reinforcement learning on verifiable tasks can elicit reasoning without human-labelled reasoning trajectories. This supplies an actual mechanism for learning beyond imitation of existing prose. It does not prove that reward signals in open-ended biology, robotics or political decisions are as cheap and reliable as math/code verification. Synthetic proposals require a source of error correction: proof checkers, tests, experiments, or trusted observations.

5. **OpenAI, Sharing AI progress in mathematics**, 2026-10-06; update Oct15. https://openai.com/index/sharing-ai-progress-in-mathematics/ . Released results by an internal frontier model, many with Lean formalizations, reasoning summaries and attempt statistics; claims average result equivalent to roughly three hours ChatGPT Pro thinking compute. Treat this as a provider's release with inspectable artifacts, not as an independently representative success rate. Selective solved-problem release must retain the denominator of attempted problems.

6. **OpenAI, Working with academic communities to build scientific understanding**, 2026-10-26. https://openai.com/index/building-scientific-understanding-with-academic-communities/ . Announces results in harmonic analysis, complexity and quantum field theory; describes manuscripts as raw research data. Claims local smoothing/Kakeya/restriction proofs in all dimensions and an ETH refutation, with Lean artifacts for the math and CS; physics artifacts deferred to external collaborators. Capability evidence is very strong if formal artifacts check the intended statements, but distinguish machine checking, statement adequacy, independent expert understanding, and experimental confirmation. Do not announce physics “proven” on a withheld artifact. ETH false does not imply practical P=NP or cheap solutions to every engineering problem.

7. **METR, Frontier Risk Report (Feb–Mar2026)**, published 2026-05-19. https://evals.alignment.org/blog/2026-05-19-frontier-risk-report/ . Independent evaluator with participating labs: public 50% software time horizon ~12h, interval [5h,61h], versus ~1.5h at 80% success; suite cannot reliably measure >16h horizons. Internal frontier modestly ahead, average ~2 months, with saturation uncertainty. This supports fast progress while showing reliability matters. These are human-equivalent task lengths, not continuous agent runtime, and software tasks do not establish the same horizon in medicine or construction.

8. **IEA, Key Questions on Energy and AI**, published 2026-04-16. https://www.iea.org/reports/key-questions-on-energy-and-ai ; supporting executive summary: https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary . Updated observed-estimate total data-centre electricity 485TWh in 2025; central projection 950TWh in 2030 (~3% global electricity), AI-focused consumption triples. Explicitly notes HBM shortages, grids, equipment and financing constraints. These include conventional cloud, cooling and training, not solely AI inference. Publication's 2026 capital expenditure figures are estimates. For a short article use these newer numbers, not only 2025 report's 415TWh(2024)→945(2030). The earlier 2025 Energy and AI report has ~1,200TWh consumption in 2035, but this is an older scenario, not a current independent second measurement.

9. **OpenAI CFO, A business that scales with the value of intelligence**, 2026-01-18. https://openai.com/index/a-business-that-scales-with-the-value-of-intelligence/ . Reports available compute capacity: 0.2GW2023;0.6GW2024;~1.9GW2025. Company-reported capacity across cloud partners; peak capacity differs from metered average electricity. Power basis may be IT rather than gross facility power; don't silently compare it to facility electricity.

10. **OpenAI, Building the compute infrastructure for the Intelligence Age**, 2026-04-29. https://openai.com/index/building-the-compute-infrastructure-for-the-intelligence-age/ . Reports surpassing goal of securing 10GW US infrastructure by2029, adding >3GW secured over previous90days. Says Abilene used for GPT-5.5 training. “Secured” means an infrastructure pipeline, not 10GW already operating. Prior 2025-09-23 announcement: https://openai.com/index/five-new-stargate-sites/ reported nearly7GW planned, >$400B over3years; don't add successive Stargate totals together or double-count GPU supply deals with the campuses housing them.

11. **Crusoe, New900MW Abilene campus for Microsoft**, 2026-03-27. https://www.crusoe.ai/resources/newsroom/crusoe-announces-new-900-mw-ai-factory-campus-in-abilene-texas-to-support-microsoft-ai-infrastructure . Establishes first two100MW buildings energized; second six-building phase of existing campus to reach1.2GW expected end2026. Separate adjacent900MW campus site preparation underway, first building energization expected mid2027; each new building336MW critical IT. The2.1GW site total is projected, not observed. This source gives an honest operational lower bound200MW as of March and actual construction schedule. It is NOT the latest complete Nov1 operational census: do not present200MW as today's exhaustive online capacity. September trackers conflict on completed building count; use dated primary observation and pending targets unless newer primary release is retrieved.

12. **NVIDIA H100 specifications**, page inspected2026-11-01 (product launched2022; page now has2026 material). https://www.nvidia.com/en-us/data-center/h100/ . H100 SXM BF16 Tensor peak1,979TFLOP/s *with sparsity*,700W. Dense peak is half, ~989TFLOP/s; peak arithmetic efficiency1.4×10^12FLOP/J. Beware quoting1,979 as dense and doubling inference capacity. FLOPs do not capture memory bandwidth, communication, attention, CPUs, cooling, idle power or serving latency.

Additional primary demographic support: UN2024 WPP press release,2024-07-11, https://www.un.org/sustainabledevelopment/blog/2024/07/press-release-wpp2024/ :8.2billion in2024,10.3billion peak in2080s. Use8.5×10^9 as a rounded2030 modelling denominator (not false precision); define a West scenario explicitly (~10^9 people), which makes same globally allocated capacity ~8.5times larger per person. It does not justify assuming everyone in the West receives all global compute.

## The calculation: keep units and allocation visible

A useful basic model:

processed_tokens_per_person_per_day = E_DC[TWh/year] ×3.6×10^15[J/TWh] × f_AI × f_inference / (365 × population × e_token[J/token]).

For a power basis:

q = P_facility[W] × f_AI × f_inference ×86400 / (population × e_token).

Here e_token is facility energy per processed model token. It includes hardware power, overhead and realized serving utilization but excludes the fraction allocated to other workloads. f_AI removes conventional cloud; f_inference removes training/R&D. Do not multiply utilization again if metered annual electricity and measured J/token already include it. “Processed” means a token-equivalent for a specified model/workload, not necessarily user-visible output. Prompt prefill, cached prompts, hidden reasoning, repeated sampling and tool use differ; log them separately as data improve.

FLOP cross-check for a dense or active-parameter-equivalent transformer:

F_token≈2N_active×k_context; e_token≈2N_active×k_context /(η_chip ×u×g).

Take N_active=10^11; k_context=1 (optimistic short-context baseline); η_chip=1.4×10^12FLOP/J denseH100 peak; realized arithmetic fraction u=0.03; GPU share of facility energy g=0.5. Then e_token≈9.5J/token≈10J/token. All of u,g,k_context,N are assumptions, NOT measured2026 frontier fleet parameters. With u=.3, energy is~1J; with u=.003,~100J. Bigger active models, long contexts or low latency requirements worsen it. New accelerators, quantization, sparse activation, batching and caching improve it. An SI token's cost is unknown: show10^0–10^2J as a sensitivity range, not a confidence interval or a forecast that SI fits current architectures. Memory-bound small batches can be much worse; future small models can be much better.

Baseline illustrative assumptions f_AI=.5, f_inference=.5, e_token=10J, population8.5billion:

-2025 E485TWh →1.75×10^18J total →4.37×10^17J allocated inference →5.14million processed tokens/person/year →14,100/person/day.
-2030 E950TWh →3.42×10^18J total →8.55×10^17J allocated inference →10.1million/person/year →27,600/person/day.
-2030 energy cost1J gives276,000/day;100J gives2,760/day. Token cost uncertainty dominates the factor2 uncertainty in aggregate electricity. At population1billion with all else same the2030 number is234,000/day at10J; purely a reallocation scenario.

For per-request utility, divide by tokens per successful completed job.10^5 tokens per successful research task at baseline2030 gives~100tasks/person/year;10^8 tokens per task gives0.1task/person/year. These are assumptions, not measured scientific productivity. Quality and success rate matter far more than raw verbosity. A system spending10^3hidden/search tokens per delivered token converts27,600processed tokens/day to only~28delivered/day. Never label raw tokens “human equivalents.”

## Years of capacity, not endpoint times duration

Cumulative tokens = ∫ P_online(t) f_AI(t) f_inference(t)/e_token(t) dt /population.

Illustrative2025–2030 all-data-centre linear energy ramp485→950TWh/year gives integrated~3,588TWh over5years. Constant25% inference allocation,10J/token,8.5billion people gives~3.8×10^7processed tokens/person over the interval. At100J it is3.8million;1J it is380million. This is a scenario, not an IEA token forecast; allocation, efficiency and population all evolve. An assumed tenfold annual efficiency gain must NOT be extrapolated indefinitely: use tested workload-specific trends and saturation scenarios.

For a new facility ramp1→10GW over5years: average5.5GW yields27.5GW-years=241TWh. Taking final10GW as available throughout falsely gives50GW-years=438TWh. If a10GW project waits3years then ramps linearly over2years, first5years contain10GW-years, five times less than the endpoint-times-duration shortcut. The construction date is as important as nameplate size. Operational capacity can be listed with online fractions and dates; contracts and connection applications cannot be summed as if all energize immediately.

## Updates that should move the probabilities

Upward P(SI): independent reproduction of intended new proofs; novel experimental discoveries confirmed prospectively; improved>=90% long-horizon project completion across domains; fixed-budget learning from new environments without fresh human demonstration; cheap credible verifiers.
Downward/delay P(SI): several model generations with flat held-out project success despite much more compute; inability to turn added test-time computation into verified gains; costly non-verifiable-domain data acquisition; chronic integrity or autonomy failures; cancelled infrastructure due to weak useful-output economics.
Capacity upward: metered/energized GW; achievedJ per successful task at specified quality; real efficiency improvement. Downward: commissioning delays, power contracts without GPUs, HBM shortages, grid waits, or higher hidden-token costs per useful answer. News stories from the same model release are correlated evidence and should not each get independent Bayes factors.

## Mathematical warning for the article

P(A by2050|SI by2050) depends strongly on arrival time: SI appearing in2049 leaves almost no time for factories or clinical evidence. Prefer P(A by2050|SI by2035) and P(D by2050|SI by2035), or explicitly integrate over arrival years: P(A|SI≤2050)=∫P(A|t_SI=t)p(t|SI≤2050)dt. If A and D are final mutually exclusive states, include a third mixed/stagnant outcome. If they are events at any time they can both occur (abundance followed by catastrophe), so don't force their probabilities to sum to1. P(D|SI) is not AI's causal contribution; compare P(D|do(SI)) to a counterfactual baseline, and name the confounding assumptions.
