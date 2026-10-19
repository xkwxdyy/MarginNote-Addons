#!/bin/sh
set -eu
workspace=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
launcher="$workspace/Tooling/internal/bin/batch_fetch_latest_addons.sh"
if [ ! -f "$launcher" ]; then
  printf '%s\n' 'The private workspace tooling is required for this entry point.' >&2
  exit 2
fi
exec sh "$launcher" --workspace "$workspace" "$@"
