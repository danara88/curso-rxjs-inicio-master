import { catchError, of } from "rxjs";
import { AjaxError, ajax } from "rxjs/ajax";

const url = "https://httpbinxx.org/delay/1";

const handleError = (resp: AjaxError) => {
  console.error("error: ", resp.message);
  return of({
    ok: false,
    users: [],
  });
};

// const obs$ = ajax.getJSON(url).pipe(catchError(handleError));
// const obs2$ = ajax(url).pipe(catchError(handleError));

const obs$ = ajax.getJSON(url);
const obs2$ = ajax(url);

// getJSON saca la "response" de la informacion del ajax
obs$.pipe(catchError(handleError)).subscribe({
  next: (val) => console.log("next", val),
  // Este error no se va a disparar porque ya lo estamos manejando con el catchError
  error: (err) => console.error("error en subs", err),
  complete: () => console.log("Complete"),
});

// ajax te da mas informacion aparte de la "response"
// obs2$.subscribe((data) => console.log("ajax: ", data));
