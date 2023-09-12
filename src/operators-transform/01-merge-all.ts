import { Observable, debounceTime, fromEvent, map, mergeAll } from "rxjs";
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

// Se hace complicado manejar la cadena de observables
// input$
//   .pipe(
//     debounceTime(500),
//     pluck("target", "value"),
//     map((texto) => {
//       // Aqui estoy retornando un observable
//       return ajax.getJSON(`https://api.github.com/search/users?q=${texto}`);
//     })
//   )
//   .subscribe((resp) => {
//     resp.pipe().subscribe(console.log);
//   });

input$
  .pipe(
    debounceTime<KeyboardEvent>(500),
    map<KeyboardEvent, string>((resp) => resp.target["value"]),
    map<string, Observable<GithubUsersResp>>((texto) =>
      ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)
    ),
    mergeAll(), // Internamente se subscribe al observable
    map((resp) => resp.items)
  )
  .subscribe((users) => {
    console.log(users);
    displayUsers(users);
  });
