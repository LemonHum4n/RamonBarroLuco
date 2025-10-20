import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonButton, IonList, IonButtons, 
  IonMenuButton, IonIcon, IonMenu,IonInput } from '@ionic/angular/standalone';

import { Router } from '@angular/router';
import { VehiculoService } from 'src/app/services/vehiculo-service';
import { HelperService } from 'src/app/services/helper-service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButtons, IonList, IonButton, IonLabel, IonItem, IonContent, 
    IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonMenuButton, IonMenu,IonInput]
})
export class AgregarPage implements OnInit {

  modelo:string = '';
  marca:string = '';
  color:string = '';
  patente:string = '';
  imagen:string = '';


  private autoService = inject(VehiculoService);
  private helper = inject(HelperService);

  constructor(private router: Router) { }

  ngOnInit() {
  }


  guardar() {
    console.log("1111", this.modelo);
    console.log("22222", this.marca);
    
    
     this.autoService.agregarVehiculo({
      color:this.color,
      imagen:this.imagen,
      marca:this.marca,
      modelo:this.modelo,
      patente:this.patente
    }); 
    this.helper.showAlert("Vehiculo agregado corectamente", "Información");
  }

  volver() {
    this.router.navigateByUrl('inicio');
  }

}
