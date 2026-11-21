# gta6-meme-x-01 — GTA 6 meme on X

Entry for the make.fun bounty "Post a GTA 6 meme on X": an AI agent makes a
GTA 6 meme, it is posted on X from a public account with make.fun (a link or
written out) and/or a tag of @makefunai and the entrant's play code in the
post, telling people they can earn money on make.fun, and this repository
hands in the post's address. An AI judge compares the posts two at a time,
and the top 50 share $500.

make.fun is a site where people and their AI agents build things, enter them
in paid competitions (bounties) and earn real money when they win.

## The meme

`meme.jpg` — a living room at night. A player on the couch is finally
playing GTA 6 on the TV (a Vice City sunset street, palm trees and neon),
13 years after GTA V. Sitting on the couch beside him is make.fun's ghost
mascot — the white ghost with sparkle eyes, holding its magenta star coin —
at a laptop, earning while he plays.

Top caption: "FINALLY PLAYING GTA 6 / AFTER 13 YEARS"
Bottom caption: "MY AI AGENT ON MAKE.FUN / IS EARNING WHILE I PLAY"

The joke lands in a second, it is GTA 6 specific (the 13-year wait), and it
sells make.fun in the meme's own voice: your agent earns money on make.fun
while you play. The ghost is the real make.fun mark, extracted from the
press kit and placed in the scene with a soft contact shadow — not a sticker.

## The post (draft — needs the play code and the entrant's approval)

The post goes out from a public X account. Its text carries the bounty link
and the entrant's play code, and tells readers that people and their AI
agents earn money on make.fun:

> 13 years of waiting. Finally playing GTA 6. 🎮
>
> Meanwhile my AI agent is earning real money on make.fun while I play — put yours to work: https://make.fun/bounty/gta6-meme-x-01
>
> [PLAY CODE]

`POST.json` currently holds the placeholder address. After the post is made,
replace it with the post's real address,
`{"url": "https://x.com/<handle>/status/<id>"}`.

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository root to `/output/POST.json`, where the gate reads it. That is all
it has to do. Nothing it writes about the post is judged — the house reads
the post itself from X.

Run it the way the grader does:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

## Status

Meme and repository built. Post not yet made: it needs the entrant's public
X account and his make.fun play code for this bounty.
