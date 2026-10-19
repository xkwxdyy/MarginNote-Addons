import fs from 'node:fs';
import {execFileSync} from 'node:child_process';
const allowed = new Set(['.gitignore', 'AGENTS.md', 'README.md', 'addon-workspace.example.json',
  'batch_build_addons.sh', 'batch_fetch_latest_addons.sh']);
const paths = execFileSync('git', ['ls-files', '-z'], {encoding: 'utf8'}).split('\0').filter(Boolean);
for (const name of paths) {
  if (!allowed.has(name) && !['docs/', '.github/', 'ci/'].some(prefix => name.startsWith(prefix))) {
    throw new Error(`File is outside the public entry allowlist: ${name}`);
  }
  const text = fs.readFileSync(name, 'utf8');
  if (/\bsk-[A-Za-z0-9_-]{20,}|-----BEGIN [^-]*PRIVATE KEY-----|\/Users\//.test(text)) {
    throw new Error(`Private content pattern in ${name}`);
  }
}
const config = JSON.parse(fs.readFileSync('addon-workspace.example.json'));
if (config.version !== 1 || !config.projects || Object.values(config.projects).some(p =>
  typeof p.path !== 'string' || p.path.startsWith('/') || p.path.split('/').includes('..'))) {
  throw new Error('Invalid example workspace manifest');
}
console.log('Public entry file policy and example manifest passed');
