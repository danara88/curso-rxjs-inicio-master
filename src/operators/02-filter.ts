import { range, from, fromEvent } from "rxjs";
import { filter, map } from "rxjs/operators";

range(20, 30).pipe(
  filter((x, i) => {
    console.log(i);
    return x % 2 === 1;
  })
);
// .subscribe(console.log);
interface Person {
  type: string;
  name: string;
}

const persons: Person[] = [
  {
    type: "heroe",
    name: "Batman",
  },
  {
    type: "heroe",
    name: "Spider man",
  },
  {
    type: "villano",
    name: "Joker",
  },
];

const obs$ = from<Person[]>(persons);
obs$
  .pipe(filter((person) => person.type === "heroe"))
  .subscribe((person) => console.log(person));

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup").pipe(
  map((event) => event.code), // KeyboardEvent, string
  filter((key) => key === "Enter")
);

keyup$.subscribe(console.log);
