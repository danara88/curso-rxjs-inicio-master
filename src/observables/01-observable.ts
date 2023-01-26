import { Observable, Observer } from 'rxjs';

const observer: Observer<string> = {
    next: (value) => console.log('[Next: ]', value),
    error: (error) => console.warn('[Error: ]', error),
    complete: () => console.info('[Completado]'),
};

// Forma 1 para crear observables
// const obs$ = Observable.create(); // muy poco comun
// Es recomendable establecer el tipo de informacion que fluye en el observable
const obs$ = new Observable<string>((subscriber) => {
    // Esta definicion del observable va a permitirnos crear subscripciones
    // Subscripciones: Gente que esta pendiente de las emisiones de mi observable 

    subscriber.next('Hola'); // Esto va a emitir un valor a las peorsonas que subscritas al observable
    subscriber.next('mundo');

    // Forzar un error, una vez que se ejecuta el error el observable finaliza
    // const a = undefined;
    // a.nombre = 'Fernado';

    // Cuando se llama al complete, ninguna emision posterior va a ser notificada a sus subscriptores
    // Si un error sucede despues del complete, no se va a mostrar
    subscriber.complete();

    subscriber.next('Hola');
    subscriber.next('mundo');
});

// Para que un observable se ejecute tiene que tener una subscripsion
// obs$.subscribe(console.log);

// El 'resp' lo que hace es procesar el next() del subscriber
// obs$.subscribe((resp) => {
//     console.log(resp);
// });

// Argumentos posibles
// obs$.subscribe(
//     (valor) => console.log('next: ', valor),
//     (error) => console.warn('error: ', error),
//     () => console.info('Completado')
// );

obs$.subscribe(observer);
