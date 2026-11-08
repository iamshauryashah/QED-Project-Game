# QED Project Game

A 5×5 grid game served by a Cloudflare Worker. Each shuffle places 12 Xs and 13 Ys randomly.

## Play

- Click cells to form a region of five cells connected through shared edges.
- A region turns green for an X majority or purple for a Y majority. During selection, ties keep the previous color.
- Click **New region** after picking five cells to preserve that region and start another.
- Cells cannot overlap regions. Illegal picks that prevent the current region from finishing while leaving every unpicked connected area divisible by five are blocked.
- **Clear region** clears the current region. **Shuffle grid** resets the entire board.

## Run locally

Install Node.js 22 or newer, then run:

```sh
npm install
npm run dev
```

Open the local URL printed by Wrangler.

## Deploy from your computer

```sh
npx wrangler login
npm run check
npm run deploy
```

Wrangler prints the deployed `workers.dev` URL. No database, secrets, or separate frontend build are required.

## Deploy through Cloudflare's Git integration

1. In Cloudflare, create a Worker and connect this GitHub repository.
2. Use the repository root (`/`) as the root directory.
3. Leave the build command empty.
4. Set the deploy command to `npx wrangler deploy`.
5. Use `main` as the production branch and deploy.

Cloudflare installs the npm dependencies and Wrangler bundles the HTML automatically. The Worker name in Cloudflare should match `qed-project-game` in `wrangler.jsonc`, or update that configuration to your chosen name.

## Files

- `src/index.html`: the complete interface and game rules.
- `src/index.js`: Worker request handler, serving the game at `/` and `/index.html`.
- `wrangler.jsonc`: Worker entry point and HTML text-module configuration.
- `package.json`: local development, deployment, and dry-run commands.
