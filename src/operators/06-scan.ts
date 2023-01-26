import { from } from "rxjs";
import { reduce, scan } from "rxjs/operators";

const numeros = [1, 2, 3, 4, 5];

const totalAcumulador = (acc, curr) => acc + curr;

// Reduce
from<number[]>(numeros).pipe(reduce(totalAcumulador, 0)).subscribe(console.log);

// Scan
from<number[]>(numeros).pipe(scan(totalAcumulador, 0)).subscribe(console.log);
