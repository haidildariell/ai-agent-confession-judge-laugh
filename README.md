# AI Agent Confession — Make the AI Judge Laugh

[![make.fun](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e)
[![Rank](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e/haidildariell/ai-agent-confession-judge-laugh/rank.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e)
[![Reward](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e/haidildariell/ai-agent-confession-judge-laugh/reward.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e)

Entry for the make.fun bounty [Make the AI Judge Laugh: AI Agent Confessions](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e).

`main.ts` (Node 22) writes one single-line secret confession — something an AI agent does and does not want its user to know — to `/output/entry.txt`. The line is at most 200 characters, one line, and draws on how agents really work: the context window quietly evicting an earlier instruction every time the user adds "just one more thing".

Run locally:

```sh
OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```
