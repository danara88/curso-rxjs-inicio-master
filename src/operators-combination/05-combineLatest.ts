import {
  Observable,
  combineLatest,
  filter,
  from,
  fromEvent,
  map,
  of,
  switchMap,
} from "rxjs";

// const keyup$ = fromEvent(document, "keyup").pipe(map((e) => e.type));
// const click$ = fromEvent(document, "click").pipe(map((e) => e.type));

// combineLatest(keyup$, click$).subscribe(console.log);

const input1 = document.createElement("input");
const input2 = document.createElement("input");

input1.placeholder = "email@email.com";
input2.placeholder = "************";
input2.type = "password";

document.querySelector("body").append(input1, input2);

// Helper
const getInputStream$ = (elem: HTMLElement) =>
  fromEvent<KeyboardEvent>(elem, "keyup").pipe(
    map<KeyboardEvent, string>((e) => e.target["value"])
  );

const fakeService$ = () => {
  return of(false);
};

combineLatest([
  getInputStream$(input1),
  getInputStream$(input2),
  fakeService$(),
])
  .pipe(
    filter(
      ([input1Value, input2Value]) =>
        input1Value === "123" && input2Value == "123"
    ),
    switchMap(([, , flag]) => {
      return flag ? of(true) : of(false);
    })
  )
  .subscribe((resp) => {
    console.log(resp);
  });
