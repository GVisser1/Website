# The same Linux image CI runs the e2e tests in, plus the project's Node and pnpm versions, so screenshots taken locally
# match CI. Built by scripts/e2eDocker.sh, which passes the versions from package.json and .nvmrc.
ARG PLAYWRIGHT_VERSION
FROM mcr.microsoft.com/playwright:v${PLAYWRIGHT_VERSION}-noble

ARG NODE_VERSION
ARG PNPM_VERSION
ARG TARGETARCH

RUN NODE_ARCH=$([ "$TARGETARCH" = "arm64" ] && echo arm64 || echo x64) \
  && curl -fsSL "https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}-linux-${NODE_ARCH}.tar.gz" \
  | tar -xz -C /usr/local --strip-components=1 \
  && npm install --global "pnpm@${PNPM_VERSION}"
