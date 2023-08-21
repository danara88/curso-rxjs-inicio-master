import { ajax } from "rxjs/ajax";

const url: string = "https://httpbin.org/delay/1";

// Peticion post
ajax
  .post(
    url,
    {
      id: 1,
      name: "Daniel",
    },
    {
      "x-token": "abcd",
    }
  )
  .subscribe(console.log);

// Peticion put
ajax
  .put(
    url,
    {
      id: 1,
      name: "Daniel",
    },
    {
      "x-token": "abcd",
    }
  )
  .subscribe(console.log);

// Otra manera de hacer peticiones
ajax({
  url,
  method: "POST",
  headers: {
    "x-token": "123",
  },
  body: {
    id: 1,
    name: "Daniel",
  },
}).subscribe(console.log);
