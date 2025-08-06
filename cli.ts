import { ensureDir } from "jsr:@std/fs@^1.0.19/ensure-dir";
import { join } from "jsr:@std/path@^1.1.1";
import { parseArgs } from "jsr:@std/cli@^1.0.21/parse-args";

// Importuj wszystkie szablony
import { content as denoJsoncContent } from "./templates/deno_jsonc_ts.ts";
import { content as taskBuildContent } from "./templates/tasks/task_build_ts.ts";
import { content as taskStartContent } from "./templates/tasks/task_start_ts.ts";
import { content as logBoxContent } from "./templates/lib/log_box_ts.ts";
import { content as polyfillsContent } from "./templates/lib/polyfills_ts.ts";
import { content as timeSnapContent } from "./templates/lib/time_snap_ts.ts";
import { content as indexHtmlContent } from "./templates/app/out/index_html_ts.ts";
import { content as mainCssContent } from "./templates/app/dev/main_css_ts.ts";
import { content as mainTsxContent } from "./templates/app/dev/main_tsx_ts.ts";
import { content as pageIndexCssContent } from "./templates/app/dev/pages/index_css_ts.ts";
import { content as pageIndexTsxContent } from "./templates/app/dev/pages/index_tsx_ts.ts";

const args = parseArgs(Deno.args);
const command = args._[0];

if (command !== "init") {
  console.error("❌ Błąd: Nieznana komenda. Dostępna komenda to 'init'.");
  console.log("👉 Użycie: deno run -A jsr:@twoja-nazwa/twoj-super-starter init <nazwa-projektu>");
  Deno.exit(1);
}

const projectName = args._[1] as string;

if (!projectName) {
  console.error("❌ Błąd: Musisz podać nazwę dla nowego projektu.");
  console.log("👉 Użycie: deno run -A jsr:@twoja-nazwa/twoj-super-starter init <nazwa-projektu>");
  Deno.exit(1);
}

const projectDir = join(Deno.cwd(), projectName);

console.log(`🚀 Inicjalizacja nowego projektu w: ${projectDir}`);

// Mapa ścieżek docelowych i ich zawartości
const filesToCreate = new Map<string, string>([
    ["deno.jsonc", denoJsoncContent],
    ["tasks/task-build.ts", taskBuildContent],
    ["tasks/task-start.ts", taskStartContent],
    ["lib/log-box.ts", logBoxContent.replace(/__NEWLINE_PLACEHOLDER__/g, '\\n')],
    ["lib/polyfills.ts", polyfillsContent],
    ["lib/time-snap.ts", timeSnapContent],
    ["app/out/index.html", indexHtmlContent],
    ["app/dev/main.css", mainCssContent],
    ["app/dev/main.tsx", mainTsxContent],
    ["app/dev/pages/index.css", pageIndexCssContent],
    ["app/dev/pages/index.tsx", pageIndexTsxContent],
]);

try {
    // Tworzenie głównego katalogu projektu
    await ensureDir(projectDir);

    for (const [relativePath, content] of filesToCreate) {
        const fullPath = join(projectDir, relativePath);
        const dirOfFile = join(fullPath, "..");
        
        console.log(`  -> Tworzenie pliku: ${relativePath}`);
        await ensureDir(dirOfFile);
        await Deno.writeTextFile(fullPath, content);
    }

    console.log("\n✅ Projekt został pomyślnie utworzony!");
    console.log("\nNastępne kroki:");
    console.log(`  1. Wejdź do katalogu projektu: cd ${projectName}`);
    console.log("  2. Uruchom serwer deweloperski: deno task start");
    console.log("  3. Otwórz przeglądarkę pod adresem http://localhost:8008");
    console.log("  4. Zacznij edytować pliki w katalogu app/dev - strona będzie się odświeżać automatycznie!");

} catch (err) {
    // POPRAWKA: Sprawdzamy, czy 'err' jest instancją klasy Error
    if (err instanceof Error) {
        console.error(`\n🔥 Wystąpił krytyczny błąd podczas tworzenia projektu:`, err.message);
    } else {
        console.error(`\n🔥 Wystąpił nieznany krytyczny błąd podczas tworzenia projektu:`, err);
    }
    Deno.exit(1);
}
