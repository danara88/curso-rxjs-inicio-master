import { catchError, of, pluck } from "rxjs";
import { AjaxError, ajax } from "rxjs/ajax";
const url = "https://api.github.com/users?per_page=5";

const handleErrors = (response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
};

const handleError2 = (err: AjaxError) => {
  console.warn("err: ", err.message);
  return of([]); // lo que retorne aqui se ire a users
};

// Desventajas del fetch:
// No permite el uso de observables, solo de promesas.
// No se puede cancelar, ejemplo si se hizo dos veces las peticion no puedes cancelar la segunda. Con RxJs puedes hacerlo.
const fetchPromesa = fetch(url);

// El ReadableStream se ejecuta con otra promesa
// fetchPromesa
//   .then((resp) => resp.json())
//   .then((data) => console.log("Data:", data)) // Aqui solo se maneja cuando hay usuarios cargados, no para errores.
//   .catch((error) => console.warn("Error en usuarios", error)); // No se llega a este punto cuando hay un error.

// fetchPromesa
//   .then(handleErrors)
//   .then((resp) => resp.json())
//   .then((data) => console.log("Data:", data)) // Aqui solo se maneja cuando hay usuarios cargados, no para errores.
//   .catch((error) => console.warn("Error en usuarios", error)); // No se llega a este punto cuando hay un error.

ajax(url)
  .pipe(pluck("response"), catchError(handleError2))
  .subscribe((users) => console.log("Users: ", users));
