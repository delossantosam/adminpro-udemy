import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @Input() leyenda: string = 'Leyenda';
  @Input() procentaje: number = 50;

  @ViewChild('txtProgress') txtProgress: ElementRef;
  @Output() cambnioValor: EventEmitter<number> = new EventEmitter();

  constructor() {

   }

  ngOnInit() {
  }

  cambiarvalor(valor: number) {
    if (this.procentaje >= 100 && valor > 0) {
      this.procentaje = 100;
      return;
    }

    if (this.procentaje <= 0 && valor < 0) {
      this.procentaje = 0;
      return;
    }

    this.procentaje = this.procentaje + valor;
    this.cambnioValor.emit( this.procentaje );
    this.txtProgress.nativeElement.focus();

  }

  onChanges ( newValue: number ) {

    if ( newValue >= 100 ) {
      this.procentaje = 100;
    } else if ( newValue <= 0 ) {
      this.procentaje = 0;
    } else {
      this.procentaje = newValue;
    }

    this.txtProgress.nativeElement.value = this.procentaje;
    this.cambnioValor.emit(this.procentaje);

  }

}
