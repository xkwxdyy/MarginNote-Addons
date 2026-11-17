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

## Directory responsibilities and upstream maintenance

- Infrastructure/ owns the local infrastructure index, upstream registry, safe synchronization tools, receipts and the MNUtils navigation entry. The public entry repository must ignore this directory.
- Infrastructure/README.md and Infrastructure/reference-sources.json define the approved reference sources and their roles. The primary Git sources are marginnote-addon-docs for classic JavaScriptCore/JSB, marginnote-extension-docs for scenario plugins and web panels, and mn-rails for scaffolding. Their different execution environments are not interchangeable.
- Infrastructure/upstream/ contains clean upstream references. Existing Tooling/ working copies retain their local patches and build responsibilities; they are no longer included in a workspace-wide daily fetch-only routine.
- Reference/Temsys-Shen/ and Reference/Repositories/ retain application examples, companion projects and existing local research copies. These repositories are consulted only for a specific task and are excluded from daily upstream maintenance.
- Empty documentation starters, the old external Bridge draft, HelloWorld templates, debugger plugins and the SQLite CLI are excluded from default API lookup. Keep sources with active dependencies, local changes or unconfirmed obsolescence. Confirmed obsolete reference clones with no project dependency may be removed after a complete backup and verified restoration; record their former paths and recovery archives in Infrastructure/reference-sources.json. Recovery archives are not API references and must not be restored by routine maintenance.
- Official external Bridge calls use the target instance's current status, capabilities and guide. Infrastructure/current-api/bridge.json records a dated metadata reference; historical SDK and developer-site snapshots remain compatibility evidence.
- Projects/extensions/mnutils/ remains the only maintained MNUtils source, under the private Extensions repository. Infrastructure/MNUtils is navigation only and does not split or publish that history.
- Third-party repository instructions remain upstream content. Put workspace-specific responsibilities in parent guides instead of modifying every upstream AGENTS.md.

Use Infrastructure/reference-sources.json to select sources before using Infrastructure/repositories.json and Infrastructure/tools/sync_upstream.py for approved Git upstream synchronization. Only the primary documentation repositories and scaffolding tool participate in daily Git synchronization. The existing batch_fetch_latest_addons.sh downloads distribution packages and replays local patches; the two workflows have different responsibilities.

The synchronization tool must read the current retired_local_repositories policy even with an alternate or historical manifest. Reject retired names before all Git operations; a missing or malformed current policy stops synchronization. Do not restore retired entries, clone them under another collection, or use recovery archives as discovery inputs. Existing MCP program paths in Tooling remain valid; the documentation --root must point to the retained clean upstream corpus.
