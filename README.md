# @cis/deno-preact-spa@0.1.6

- ([GIThub](https://github.com/mod-by-cis/deno-preact-spa))
- ([JSR](https://jsr.io/@cis/deno-preact-spa@latest))

---

## [PL] 

Błyskawicznie twórz nowoczesne aplikacje SPA (Single Page Application) z Deno i Preact. Ten szablon startowy zawiera wszystko, czego potrzebujesz, aby od razu zacząć kodować, bez konieczności ręcznej konfiguracji.

### [PL] Główne Funkcje

- **🚀 Nowoczesny Stos Technologiczny**: Połączenie szybkości i bezpieczeństwa Deno z lekkością i wydajnością Preact.
- **⚡ Błyskawiczne Budowanie**: Skonfigurowany `esbuild` do natychmiastowego bundlowania kodu TypeScript, JSX i CSS.
- **🔥 W pełni zautomatyzowany Live-Reload**: Zintegrowany serwer deweloperski, który nie tylko obserwuje zmiany w plikach, ale także **automatycznie uruchamia proces budowania** i inteligentnie odświeża przeglądarkę, zapobiegając nadmiernym przeładowaniom dzięki mechanizmowi "cooldown".
- **📦 Inicjalizacja Jedną Komendą**: Utwórz w pełni skonfigurowany, gotowy do pracy projekt za pomocą jednego polecenia.

### [PL] Użycie

Aby utworzyć nowy projekt, uruchom w terminalu następującą komendę:

```bash
deno run -A --reload jsr:@cis/deno-preact-spa init nazwa-twojego-projektu
```

Narzędzie automatycznie utworzy nowy folder `nazwa-twojego-projektu` z całą strukturą plików i potrzebnymi zależnościami.

### [PL] Proces Deweloperski

Po utworzeniu projektu, praca z nim jest niezwykle prosta:

1.  **Wejdź do katalogu projektu:**
    ```bash
    cd nazwa-twojego-projektu
    ```

2.  **Uruchom serwer deweloperski:**
    ```bash
    deno task start
    ```

To wszystko! Serwer uruchomi się, zbuduje projekt i będzie nasłuchiwał na zmiany w katalogu `app/dev`. Otwórz przeglądarkę pod adresem `http://localhost:8008` i zacznij kodować.


### [PL] Licencja

Ten projekt jest udostępniony na licencji **Mozilla Public License Version 2.0**.

## [EN] @cis/deno-preact-spa

Instantly create modern Single Page Applications (SPAs) with Deno and Preact. This starter template includes everything you need to start coding right away, without the need for manual configuration.

### [EN] Core Features

- **🚀 Modern Tech Stack**: Combines the speed and security of Deno with the lightness and performance of Preact.
- **⚡ Lightning-Fast Builds**: Pre-configured `esbuild` for instant bundling of your TypeScript, JSX, and CSS code.
- **🔥 Fully Automated Live-Reload**: An integrated development server that not only watches for file changes but also **automatically triggers the build process** and intelligently reloads the browser, preventing excessive reloads with a "cooldown" mechanism.
- **📦 Single-Command Initialization**: Create a fully configured, ready-to-work project with a single command.

### [EN] Usage

To create a new project, run the following command in your terminal:

```bash
deno run -A --reload jsr:@cis/deno-preact-spa init your-project-name
```

The tool will automatically create a new folder `your-project-name` with the complete file structure and necessary dependencies.

### [EN] Development Workflow

Once the project is created, working with it is incredibly simple:

1.  **Navigate into the project directory:**
    ```bash
    cd your-project-name
    ```

2.  **Start the development server:**
    ```bash
    deno task start
    ```

That's it! The server will start, build the project, and begin watching for changes in the `app/dev` directory. Open your browser to `http://localhost:8008` and start coding.

### [EN] License

This project is licensed under the **Mozilla Public License Version 2.0**.

---

## deno.jsonc

> ```jsonc
> {
>   "tasks": {
>     "start": "deno run --allow-net --allow-read --allow-write --allow-run --watch ./tasks/task-start.ts",
>     "build": "deno run --allow-read --allow-write --allow-net --allow-env --allow-run ./tasks/task-build.ts"
>   },
>   "compilerOptions": {
>     "jsx": "react-jsx",
>     "jsxImportSource": "preact",
>     "strict": true,
>     "lib": [
>       "deno.ns", "deno.window", "deno.unstable", "deno.worker",
>       "dom", "dom.iterable", "dom.asynciterable",
>       "webworker", "webworker.asynciterable", "webworker.importscripts", "webworker.iterable",
>       "esnext", "es2024",
>       "decorators", "decorators.legacy"
>     ]
>   },
>   "imports": {
>     "$deno-assert": "jsr:@std/assert@^1.0.13",
>     "$deno-cli": "jsr:@std/cli@^1.0.21",
>     "$deno-cli-format": "jsr:@std/fmt@^1.0.8",
>     "$deno-fs": "jsr:@std/fs@^1.0.19",
>     "$deno-http": "jsr:@std/http@^1.0.20",
>     "$deno-path": "jsr:@std/path@^1.1.1",
>     "$tsx-preact": "https://esm.sh/preact@10.27.0",
>     "$tsx-preact/": "https://esm.sh/preact@10.27.0/",
>     "$tsx-preact-signal": "https://esm.sh/@preact/signals@2.2.1",
>     "$tsx-preact-signal/": "https://esm.sh/@preact/signals@2.2.1/",
>     "$tsx-preact-hooks": "https://esm.sh/@preact/hooks@10.27.0",
>     "$tsx-preact-hooks/": "https://esm.sh/@preact/hooks@10.27.0/",
>     "$tsx-preact-router": "https://esm.sh/preact-router@4.1.2",
>     "$tsx-preact-router/": "https://esm.sh/preact-router@4.1.2/",
>     "$tsx-preact-animate": "https://esm.sh/preact-transition-group@2.0.0",
>     "$tsx-preact-custom-element": "https://esm.sh/preact-custom-element@4.3.0",
>     "$tsx-preact-custom-element/": "https://esm.sh/preact-custom-element@4.3.0/",
>     "$esbuild": "https://deno.land/x/esbuild@v0.25.8",
>     "$esbuild/": "https://deno.land/x/esbuild@v0.25.8/",
>     "$esbuild-deno": "jsr:@luca/esbuild-deno-loader@^0.11.1",
>     "$$lib/": "./lib/"
>   },
>   "lint": {
>     "rules": {
>       "tags": [
>         "recommended"
>       ]
>     }
>   }
> }
> ```

---

## CHANGES 

## w wersji 0.1.0 komenda `deno task start` 
nie pozwalała na przeprowadzenia 1 budowania, gdy nie było poprzedniego.

## w wersji 0.1.0 wkradł się błądy z znakiem ucieczki

```shell
deno task start
Task start deno run --allow-net --allow-read --allow-write --allow-run --watch ./tasks/task-start.ts
Watcher Process started.
error: The module's source code could not be parsed: Expected ',', got 'string literal ();, ');)' at file:///C:/_TRY_TMP/nazwa-twojego-projektu/lib/log-box.ts:101:1

  ');
  ~~~
Watcher Process failed. Restarting on file change...
```
- w wersji 0.1.1 korekta tego błedu nie przyniosła poprawy, spróbujemy kolejne kroki podjąć 
- w wersji 0.1.2 w dalszym ciągu mam problem z znakiem ucieczki `/n` podejmuje kolejną próbę 
- w wersji 0.1.3 w dalszym ciągu mam problem z znakiem ucieczki `/n` podejmuje kolejną próbę 
- w wersji 0.1.4 w dalszym ciągu mam problem z znakiem ucieczki `/n` podejmuje kolejną próbę 
- w wersji 0.1.5 odkryłem że poprawa była już w wersji 0.1.3 ale problem stanowiła błedna komenda inicjująca `deno run -A jsr:@cis/deno-preact-spa init nazwa-twojego-projektu` zamiast `deno run -A --reload jsr:@cis/deno-preact-spa init nazwa-twojego-projektu`
  
---
