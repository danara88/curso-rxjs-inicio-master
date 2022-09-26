import { Observable, Observer } from 'rxjs';

const observer: Observer<number> = {
    next: (value) => console.log('next: ', value),
    error: (error) => console.warn('error: ', error),
    complete: () => console.info('completado'),
};

const intervalo$ = new Observable<number>((subscriber) => {
    let i = 0;

    const interval = setInterval(() => {
        i++;
        subscriber.next(i);
    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 2500);

    // Necesario poner el return ya que es lo que se ejecutara cuando
    // se llame al metodo unsuscribe()
    // Inmediatamente despues de ejecutar el complete(), se va a disparar
    // el return.
    // Una vez llamado el return, si tenemos ejecutado algun unsuscribe(), este ya
    // no se ejecutara porque ya se hizo la limpieza respectiva.
    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido');
    };
});

// Cuando te subscribes a un observable, se ejecuta todo el codigo del observable
// Cuando te subscriber, se crea una nueva instancea del Observable
const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

// Cancelar la subscripsion despues de 3 segundos
// El unsuscribe() no es lo mismo que el complete del Observer
setTimeout(() => {
    subs1.unsubscribe(); // Cancelar subscripsion, solo se ejecutara si no se ha hecho anteriormente la limpieza
    subs2.unsubscribe(); // Cancelar subscripsion
    subs3.unsubscribe(); // Cancelar subscripsion

    console.log('Completado timeout');
}, 6000);

// Evitar fugas de memoria.
// Aun que se haya llamado el unsuscribe() despues de 3 segundos, el intervalo sigue ejecutandose
