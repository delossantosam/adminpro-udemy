import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    this.contarTres().then( messaje => console.log('Termino!', messaje) )
                     .catch( error => console.error('Error de la promesa', error));

   }

  ngOnInit() {
  }

  contarTres(): Promise<boolean> {
    return new Promise( (resolve, reject) => {

      let contador = 0;
      let iteracion = setInterval(() => {

        contador += 1;
        console.log( contador );

        if (contador === 3) {
          resolve( true );
          clearInterval( iteracion );
        }

      }, 1000);
    });
  }

}
