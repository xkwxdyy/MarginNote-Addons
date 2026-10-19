# MarginNote Addon Workspace

This directory is the canonical development workspace. Resolve projects through
the workspace manifest rather than assuming that the Git root contains addons.

- MNPinner and MNLiterature source, history and implementation materials are private.
- The entry repository contains reviewed public documentation and templates only.
- Keep each existing repository's history and local changes intact.
- Use the explicit workspace and project roots when building or updating addons.
- Ordinary checks must not upload, deploy, install addons, change versions or push.
- Report source checks, package verification and device acceptance separately.
- A merged pull request does not complete outstanding Mac or iPad acceptance.
- Do not read, modify, migrate or automate Cursor-specific content.

Private project decisions and migration records belong in the ignored MEMORY/
and Archive/ directories. Project-local instructions still apply.
