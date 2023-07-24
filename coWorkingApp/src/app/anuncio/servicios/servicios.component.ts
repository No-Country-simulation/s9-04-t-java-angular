import { Component } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {
  faLeft=faArrowLeft;

  services:any[]=[
    'Sala de reunion',
    'Wifi',
    'Estacionamiento',
    'Lockers',
    'Calefacción',
    'Aire acondicionado',
    'Impresora',
    'Espacio exterior',
  ]

}
