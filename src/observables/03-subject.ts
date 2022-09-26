import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<number> = {
    next: (value) => console.log('next: ', value),
    error: (error) => console.warn('error: ', error),
    complete: () => console.info('completado'),
};

const intervalo$ = new Observable<number>((subscriber) => {
    const intervalID = setInterval(() => subscriber.next(Math.random()), 1000);

    // Esta solo se ejecutara solo y si se llama el unsuscribe() de mi subscripsion
    return () => {
        clearInterval(intervalID);
        console.log('Intervalo destruido');
    };
});

// const subs1 = intervalo$.subscribe((rnd) => console.log('subs1: ', rnd));
// const subs2 = intervalo$.subscribe((rnd) => console.log('subs2: ', rnd));

// Cuando tenemos dos subs, estos emiten valores distintos.
// Que pasa si necesito subscripsiones que emitan el mismo valor (y no diferentes)
/**
 * 1 - Casteo multiple: Muchas subscripsiones estaran sujetas a este mismo Subject o Observable.
 * 2 - Tambien el Subject se puede comportar como un observer: Podemos mandarle un Observer.
 * 3 - Se puede manejar el Next, error y complete.
 */
const subject$ = new Subject<number>(); // Tipo especial de Observable
const subscrtiption = intervalo$.subscribe(subject$);

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

// El subject tambien se comporta como un Observer, por lo que puedo usar su metodos
setTimeout(() => {
    subject$.next(10); // Puedo ingresar informacion al flujo de datos del observable
    subject$.complete(); // Puedo completarlo. OJO: Esto no llama al return del Observable
    subscrtiption.unsubscribe(); // Lla al return del Observable
}, 3500);

/**
 * Cold Observable: Cuando la data es producida dentro del Observable
 * Hot Observable: Cuando la data es producida fuera del Observable
 *
 * Un Subject nos permite convertir un Cold Observbale en un Hot Observable
 */
