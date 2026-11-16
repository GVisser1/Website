#!/usr/bin/env bash
# Runs the e2e tests in the same Linux container as CI, so screenshots match the committed baselines.
# Any arguments go to Playwright, e.g. `pnpm test:e2e-docker --update-snapshots=changed --project=webkit`.
set -euo pipefail
cd "$(dirname "$0")/.."

PLAYWRIGHT_VERSION=$(node -p 'require("./package.json").devDependencies["@playwright/test"]')
NODE_VERSION=$(cat .nvmrc)
PNPM_VERSION=$(node -p 'require("./package.json").packageManager.split("@")[1].split("+")[0]')
IMAGE="website-e2e:playwright-${PLAYWRIGHT_VERSION}-node-${NODE_VERSION}"

docker build --quiet --tag "$IMAGE" --file scripts/e2e.Dockerfile \
  --build-arg "PLAYWRIGHT_VERSION=$PLAYWRIGHT_VERSION" \
  --build-arg "NODE_VERSION=$NODE_VERSION" \
  --build-arg "PNPM_VERSION=$PNPM_VERSION" \
  scripts > /dev/null

# Linux needs its own node_modules (the Mac one has macOS binaries), kept in a volume between runs.
# CI=1 makes Playwright test the production build, like CI does.
docker run --rm --ipc=host \
  --env CI=1 \
  --volume "$PWD":/work \
  --volume website-e2e-node-modules:/work/node_modules \
  --volume website-e2e-pnpm-store:/root/.local/share/pnpm/store \
  --workdir /work \
  "$IMAGE" \
  bash -c 'pnpm install --frozen-lockfile --reporter=silent && pnpm exec playwright test "$@"' -- "$@"
