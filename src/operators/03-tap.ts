import { range } from "rxjs";
import { map, tap } from "rxjs/operators";

const numeros$ = range(1, 5);

numeros$
  .pipe(
    tap((x) => console.log("antes: ", x)),
    map((x) => x * 10),
    tap({
      next: (val) => console.log("despues:", val),
      complete: () => console.log("todo se termino"),
    })
  )
  .subscribe((val) => console.log("val:", val));
