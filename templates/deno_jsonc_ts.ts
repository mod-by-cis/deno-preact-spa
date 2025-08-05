export const content = `{
  "tasks": {
    "start": "deno run --allow-net --allow-read --allow-write --allow-run --watch ./tasks/task-start.ts",
    "build": "deno run --allow-read --allow-write --allow-net --allow-env --allow-run ./tasks/task-build.ts"
  },
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "preact",
    "strict": true,
    "lib": [
      "deno.ns", "deno.window", "deno.unstable", "deno.worker",
      "dom", "dom.iterable", "dom.asynciterable",
      "webworker", "webworker.asynciterable", "webworker.importscripts", "webworker.iterable",
      "esnext", "es2024",
      "decorators", "decorators.legacy"
    ]
  },
  "imports": {
    "$deno-assert": "jsr:@std/assert@^1.0.13",
    "$deno-cli": "jsr:@std/cli@^1.0.21",
    "$deno-cli-format": "jsr:@std/fmt@^1.0.8",
    "$deno-fs": "jsr:@std/fs@^1.0.19",
    "$deno-http": "jsr:@std/http@^1.0.20",
    "$deno-path": "jsr:@std/path@^1.1.1",
    "$tsx-preact": "https://esm.sh/preact@10.27.0",
    "$tsx-preact/": "https://esm.sh/preact@10.27.0/",
    "$tsx-preact-signal": "https://esm.sh/@preact/signals@2.2.1",
    "$tsx-preact-signal/": "https://esm.sh/@preact/signals@2.2.1/",
    "$tsx-preact-hooks": "https://esm.sh/@preact/hooks@10.27.0",
    "$tsx-preact-hooks/": "https://esm.sh/@preact/hooks@10.27.0/",
    "$tsx-preact-router": "https://esm.sh/preact-router@4.1.2",
    "$tsx-preact-router/": "https://esm.sh/preact-router@4.1.2/",
    "$tsx-preact-animate": "https://esm.sh/preact-transition-group@2.0.0",
    "$tsx-preact-custom-element": "https://esm.sh/preact-custom-element@4.3.0",
    "$tsx-preact-custom-element/": "https://esm.sh/preact-custom-element@4.3.0/",
    "$esbuild": "https://deno.land/x/esbuild@v0.25.8",
    "$esbuild/": "https://deno.land/x/esbuild@v0.25.8/",
    "$esbuild-deno": "jsr:@luca/esbuild-deno-loader@^0.11.1",
    "$$lib/": "./lib/"
  },
  "lint": {
    "rules": {
      "tags": [
        "recommended"
      ]
    }
  }
}`;
