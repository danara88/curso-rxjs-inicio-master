import {
  Observable,
  debounceTime,
  fromEvent,
  map,
  mergeAll,
  mergeMap,
  switchMap,
} from "rxjs";
import { ajax } from "rxjs/ajax";
import { GithubUsersResp } from "../Interfaces/github-users.interface";
import { GithubUser } from "../Interfaces/github-user.interface";

// Referencias
const body = document.querySelector("body");
const textInput = document.createElement("input");
const orderList = document.createElement("ol");

body.append(textInput, orderList);

// Helpers
const displayUsers = (users: GithubUser[]) => {
  orderList.innerHTML = "";

  for (const user of users) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = user.avatar_url;
    const anchor = document.createElement("a");
    anchor.text = "Ver pagina";
    anchor.target = "_blank";
    anchor.href = user.html_url;
    li.append(img);
    li.append(user.login + " ");
    li.append(anchor);

    orderList.append(li);
  }
};

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");

input$.pipe(
  debounceTime<KeyboardEvent>(500),
  map<KeyboardEvent, string>((resp) => resp.target["value"]),
  mergeMap<string, Observable<GithubUsersResp>>(
    (
      texto // El merge map lo va a aplanar
    ) => ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)
  ),
  map((resp) => resp.items)
);
// .subscribe((users) => {
//   console.log(users);
//   displayUsers(users);
// });

const url = "https://httpbin.org/delay/1?arg=";

// El merge map aqui no es muy util porque genera peticiones basura
// con cada letra que escribo.
// Es mejor usar el switchMap
input$
  .pipe(
    map<KeyboardEvent, string>((resp) => resp.target["value"]),
    switchMap((text) => ajax.getJSON(url + text)) // El merge map lo va a aplanar
  )
  .subscribe((value) => console.log(value));
