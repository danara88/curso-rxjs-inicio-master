import { ajax } from "rxjs/ajax";

const url = "https://httpbin.org/delay/1";

const obs$ = ajax.getJSON(url, {
  "Content-Type": "application/json",
  "x-Token": "123",
});

obs$.subscribe(console.log);
