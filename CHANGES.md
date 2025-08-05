## w wersji 0.1 wkradły się błędy

```shell
deno task start
Task start deno run --allow-net --allow-read --allow-write --allow-run --watch ./tasks/task-start.ts
Watcher Process started.
error: The module's source code could not be parsed: Expected ',', got 'string literal ();, ');)' at file:///C:/_TRY_TMP/nazwa-twojego-projektu/lib/log-box.ts:101:1

  ');
  ~~~
Watcher Process failed. Restarting on file change...
```
## w wersji 0.1 komenda `deno task start` 
nie pozwalała na przeprowadzenia 1 budowania, gdy nie było poprzedniego.
