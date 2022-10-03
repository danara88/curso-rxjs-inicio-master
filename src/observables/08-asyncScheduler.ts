import { asyncScheduler, Subscription } from "rxjs";

// Estas funciones pueden crearse con el asynScheduler
// setTimeout(() => {}, 3000);
// setInterval(() => {}, 300);

const saludar = () => console.log("Hola mundo");
const saludar2 = (name: string) => console.log(`Hola ${name}`);

// Timer
// Despues de dos segundos ejecutar la función
// asyncScheduler.schedule(saludar, 2000);
asyncScheduler.schedule(saludar2, 2000, "Daniel");

// Interval
const subs: Subscription = asyncScheduler.schedule(
  function (state) {
    console.log("state: ", state);
    this.schedule(state + 1, 1000);
  },
  2000,
  0 // Estado inicial
);

// Formas de cancelar:
// setTimeout(() => subs.unsubscribe(), 6000);
asyncScheduler.schedule(() => subs.unsubscribe(), 6000);
