import { catchError, exhaustMap, fromEvent, map, of, tap } from "rxjs";
import { ajax } from "rxjs/ajax";

// Interfaces
interface IUserCredentials {
  email: string;
  password: string;
}

// Helper
const login = (user: IUserCredentials) =>
  ajax.post("https://reqres.in/api/login?delay=1", user).pipe(
    map((resp) => resp.response["token"]),
    catchError((error) => of(""))
  );

// Form
const form = document.createElement("form");
const inputEmail = document.createElement("input");
const inputPassword = document.createElement("input");
const submitBtn = document.createElement("button");

// Settings
inputEmail.type = "email";
inputEmail.placeholder = "Email";
inputEmail.value = "eve.holt@reqres.in";
inputPassword.type = "password";
inputPassword.placeholder = "Password";
inputPassword.value = "cityslicka";
submitBtn.innerHTML = "Log in";
form.append(inputEmail, inputPassword, submitBtn);
document.querySelector("body").append(form);

// Streams
const submitForm$ = fromEvent<Event>(form, "submit").pipe(
  tap((event) => event.preventDefault()),
  map<Event, IUserCredentials>((event) => ({
    email: event.target[0].value,
    password: event.target[1].value,
  })),
  // mergeMap(login),
  // switchMap(login),
  // concatMap(login),
  exhaustMap(login)
);

submitForm$.subscribe((token) => console.log(token));
