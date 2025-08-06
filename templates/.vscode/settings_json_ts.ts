export const content = `{  

  "cSpell.language": "en,pl-PL,pl",
  "deno.enable": true,
  "deno.enablePaths": [
    "./"
  ],
  "deno.lint": true,
  "deno.cacheOnSave": true,
  "deno.codeLens.implementations": true,
  "deno.codeLens.references": true,
  "deno.codeLens.referencesAllFunctions": true,
  "deno.codeLens.test": true,
  "deno.trace.server": "verbose",
  "git.autofetch": true,
  "terminal.integrated.fontLigatures": true,
  "terminal.integrated.fontSize": 12,
  "files.insertFinalNewline": true,
  "files.exclude": {
    "**/deno.lock": true,
    "**/node_modules": true
  },
  "search.exclude": {
    "**/.unotes": true,
    "**/.git": true,
    "**/.history": true,
    "**/deno.lock": true,
    "**/app/out/gen": true,
    "**/node_modules": true
  },
  "files.readonlyInclude": {
    "**/app/out/gen/**": true,
    "**/.git/**": true,
    "**/.history/**": true
  },
  "typescript.tsserver.experimental.enableProjectDiagnostics": false
}`;
