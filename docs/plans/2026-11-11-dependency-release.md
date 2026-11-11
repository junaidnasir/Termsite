# Website dependency release, TSA-469

The production dependency audit reported 2 critical, 4 high and 1 moderate findings in the old Next.js 12/Axios tree. Upgrade the existing Pages Router site to patched Next 15.5.28 with React 18.3.1, Axios 1.21.1 and a refreshed lockfile. Keep the terminal UI and existing commands. Align ESLint's Next config and generated Next type references. Use a PostCSS 8.5.23 override because Next pins an affected nested version.

References: https://nextjs.org/docs/pages/guides/upgrading/version-15 (Pages Router supports React 18), https://github.com/vercel/next.js/security/advisories/GHSA-2464-fhr4-w9xw (patched Next 15.5.28), and the npm audit output for the exact dependency tree. Audit describes vulnerable dependencies, not proof of an exploited website.

Validate lint (existing formatting warnings separately), TypeScript, production build including Node 24, production npm audit and a live terminal interaction. Independent review before PR merge; verify Vercel deployment afterward. No site redesign.
