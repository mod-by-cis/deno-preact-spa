export const content = `import { join, relative } from "$deno-path";
import * as esbuild from "$esbuild/mod.js";
import { denoPlugins } from "$esbuild-deno";
import { TimeSnap } from "$$lib/time-snap.ts";
import logBox,{ type logBoxColorOptions, type logBoxStyleOptions } from "$$lib/log-box.ts";

const logBox_Hue1:logBoxColorOptions = { color: 0xC0B194, bgColor: 0x5D4E30, boxColor: 0x403521 };
const logBox_Hue3:logBoxColorOptions = { color: 0xA9C094, bgColor: 0x455D30, boxColor: 0x2D4021 };
const logBox_Hue2:logBoxColorOptions = { color: 0x94B7C0, bgColor: 0x30545D, boxColor: 0x213940 };
const logBox_Bold:logBoxStyleOptions = { bold: true };

// --- GŁÓWNA KONFIGURACJA ---

/** Katalog wyjściowy dla wszystkich generowanych plików. */
const OUTPUT_DIR = "app/out/gen";

/** Wersja wydania generowana na podstawie aktualnego czasu. */
const VERSION = TimeSnap.stampWRITE('-');

/**
 * Definicja konfiguracji dla pojedynczego zadania budowania.
 */
interface BuildTaskConfig {
  subject: string;
  entryPoints: string[];
  outputFilename: string;
  outputExt: ".mjs" | ".css";
  options?: {
    isCssOnly?: boolean;
    usePreact?: boolean;
    define?: { [key: string]: string };
  };
}

/**
 * Mapa przechowująca wszystkie zadania do wykonania.
 * Klucz (np. "MAIN_MJS") służy tylko do identyfikacji.
 */
const BUILD_TASKS: ReadonlyMap<string, BuildTaskConfig> = new Map([
  [
    "MAIN_MJS", {
      subject: "Główna aplikacja (TSX -> MJS)",
      entryPoints: ["app/dev/main.tsx"],
      outputFilename: "main",
      outputExt: ".mjs",
      options: {
        define: { "APP_VERSION": JSON.stringify(VERSION) },
        usePreact: true,
      },
    },
  ],
  [
    "MAIN_CSS", {
      subject: "Główny arkusz stylów (CSS)",
      entryPoints: ["app/dev/main.css"],
      outputFilename: "main",
      outputExt: ".css",
      options: { isCssOnly: true },
    },
  ],
]);

// --- LOGIKA SKRYPTU ---

/**
 * Główna funkcja orkiestrująca proces budowania.
 * @param tasks Mapa zadań do wykonania.
 * @param outputDir Katalog docelowy dla zbudowanych plików.
 */
async function runBuildProcess(tasks: ReadonlyMap<string, BuildTaskConfig>, outputDir: string) {
  const pathRoot = Deno.cwd();
  const pathDenoJson = join(pathRoot, "deno.jsonc");
  const pathOutput = join(pathRoot, outputDir);

  logBox(\`- Katalog projektu : \${pathRoot}\n- Katalog wyjściowy: \${pathOutput}\`, logBox_Hue2, logBox_Bold);


  for (const [taskName, config] of tasks) {
    console.log('-'.repeat(40))
    logBox(\`[\${taskName}] 🚀 Start...\`, logBox_Hue1, logBox_Bold);
    await executeSingleTask(config, { pathRoot, pathDenoJson, pathOutput });
    
    logBox(\`[\${taskName}] ✅ Zakończono pomyślnie.\`, logBox_Hue3, logBox_Bold);
    console.log('-'.repeat(40))
  }

  logBox(\`⚙️  Zatrzymywanie serwisu esbuild...\`, logBox_Hue2, logBox_Bold);
  esbuild.stop();
  logBox(\`✅ Serwis esbuild został zatrzymany.\`, logBox_Hue2, logBox_Bold);
}

/**
 * Wykonuje pojedyncze zadanie budowania zdefiniowane w konfiguracji.
 * @param config Konfiguracja zadania.
 * @param paths Obiekt z kluczowymi ścieżkami.
 */
async function executeSingleTask(config: BuildTaskConfig, paths: { pathRoot: string; pathDenoJson: string; pathOutput: string; }) {
  // Weryfikacja, czy pliki wejściowe istnieją
  for (const entryPoint of config.entryPoints) {
    await Deno.stat(join(paths.pathRoot, entryPoint));
  }

  const outputFilename = \`\${config.outputFilename}\${config.outputExt}\`;
  const pathOutputRelative = relative(paths.pathRoot, join(paths.pathOutput, outputFilename));

  const esbuildOptions: esbuild.BuildOptions = {
    entryPoints: config.entryPoints,
    outfile: pathOutputRelative,
    bundle: true,
    minify: true,
    metafile: true,
    logLevel: "info",
    ...getEsbuildSpecificOptions(config.options, paths.pathDenoJson),
  };

  console.log(\`  -> Wydawanie '\${config.subject}'...\`);
  const startTime = performance.now();
  
  const result = await esbuild.build(esbuildOptions);
  
  const endTime = performance.now();
  console.log(\`  -> Zakończono w: \${(endTime - startTime).toFixed(0)}ms\`);

  // Zapisywanie plików meta i wersji
  await writeMetaAndVersionFiles(paths.pathOutput, outputFilename, result.metafile);
}

/**
 * Zwraca specyficzne opcje dla esbuild na podstawie konfiguracji zadania.
 * @param options Opcje z konfiguracji zadania.
 * @param pathDenoJson Ścieżka do pliku deno.jsonc.
 */
function getEsbuildSpecificOptions(options: BuildTaskConfig['options'] = {}, pathDenoJson: string): esbuild.BuildOptions {
  if (options.isCssOnly) {
    return { loader: { ".css": "css" } };
  }
  
  const jsOptions: esbuild.BuildOptions = {
    format: "esm",
    plugins: [...denoPlugins({ configPath: pathDenoJson })] as esbuild.Plugin[],
    sourcemap: "linked",
    target: ["esnext"],
  };

  if (options.usePreact) {
    jsOptions.loader = { ".ts": "ts", ".tsx": "tsx" };
    jsOptions.jsx = "automatic";
    jsOptions.jsxImportSource = "preact";
  }
  if (options.define) {
    jsOptions.define = options.define;
  }

  return jsOptions;
}

/**
 * Zapisuje plik .meta.json oraz plik wersji .snapVERSION.txt.
 * @param outputDir Absolutna ścieżka do katalogu wyjściowego.
 * @param filename Nazwa pliku docelowego.
 * @param metafile Obiekt metafile zwrócony przez esbuild.
 */
async function writeMetaAndVersionFiles(outputDir: string, filename: string, metafile?: esbuild.Metafile) {
  // Zapis pliku .meta.json
  if (metafile) {
    const pathMetafile = join(outputDir, \`\${filename}.meta.json\`);
    await Deno.writeTextFile(pathMetafile, JSON.stringify(metafile, null, 2));
    console.log(\`  -> Zapisano metafile: \${relative(Deno.cwd(), pathMetafile)}\`);
  }

  // Zapis pliku .snapVERSION.txt
  const pathSnapFile = join(outputDir, \`\${filename}.snapVERSION.txt\`);
  await Deno.writeTextFile(pathSnapFile, VERSION);
  console.log(\`  -> Zapisano wersję: \${relative(Deno.cwd(), pathSnapFile)}\`);
}


// --- URUCHOMIENIE ---

try {
  await runBuildProcess(BUILD_TASKS, OUTPUT_DIR);
} catch (err) {
  if (err instanceof Error) {
    console.error(\`\n❌ Krytyczny błąd podczas procesu budowania:\`, err.message);
  } else {
    console.error(\`\n❌ Wystąpił nieznany błąd podczas procesu budowania:\`, err);
  }
  esbuild.stop(); // Upewnij się, że esbuild jest zatrzymany nawet po błędzie
  Deno.exit(1);
}
`;
