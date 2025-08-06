## w wersji 0.1.0 wkradły się błędy

```shell
deno task start
Task start deno run --allow-net --allow-read --allow-write --allow-run --watch ./tasks/task-start.ts
Watcher Process started.
error: The module's source code could not be parsed: Expected ',', got 'string literal ();, ');)' at file:///C:/_TRY_TMP/nazwa-twojego-projektu/lib/log-box.ts:101:1

  ');
  ~~~
Watcher Process failed. Restarting on file change...
```
## w wersji 0.1.0 komenda `deno task start` 
nie pozwalała na przeprowadzenia 1 budowania, gdy nie było poprzedniego.

## w wersji 0.1.1 korekta tego błedu nie przyniosła poprawy, spróbujemy kolejne kroki podjąć

```shell
deno task start
Task start deno run --allow-net --allow-read --allow-write --allow-run --watch ./tasks/task-start.ts
Watcher Process started.
error: The module's source code could not be parsed: Expected ',', got 'string literal ();, ');)' at file:///C:/_TRY_TMP/nazwa-twojego-projektu/lib/log-box.ts:101:1

  ');
  ~~~
Watcher Process failed. Restarting on file change...

## w wersji 0.1.2 w dalszym ciągu mam problem z znakiem ucieczki `/n` podejmuje kolejną próbę 
## w wersji 0.1.3 w dalszym ciągu mam problem z znakiem ucieczki `/n` podejmuje kolejną próbę 
