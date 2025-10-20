import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,
  IonButtons,IonMenu,IonMenuButton, IonIcon, IonItem, 
  IonLabel, IonList, IonCard, IonCardContent, IonCardHeader,
  IonCardSubtitle, IonCardTitle,
  IonCol, IonGrid, IonRow 
 } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { addCircleOutline, airplane, bluetooth, call, homeOutline, peopleOutline, wifi } from 'ionicons/icons';

import { VehiculoService } from 'src/app/services/vehiculo-service';
import { Auto } from 'src/app/models/auto';
import { HelperService } from 'src/app/services/helper-service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, 
    IonToolbar, CommonModule, FormsModule,
    IonButtons,IonMenu, IonMenuButton,
    IonIcon, IonItem, IonLabel, IonList,
    IonCard, IonCardContent, IonCardHeader, 
    IonCardSubtitle, IonCardTitle,
    IonCol, IonGrid, IonRow 
  
  ]
})
export class InicioPage implements OnInit {

  private router = inject(Router);
  private autoService = inject(VehiculoService);
  private helper = inject(HelperService);

  autos:Auto[]=[];

  constructor() {
    addIcons({ airplane, bluetooth, call, wifi,addCircleOutline,peopleOutline,homeOutline });
   }

  ngOnInit() {
    this.cargarAutos();
  }


    add() {
    this.router.navigateByUrl("agregar");
  }

  async cargarAutos(){
    const loader = this.helper.showLoader("Cargando autitos!");
    const request = await this.autoService.obtenerVehiculos();
    this.autos = request.data;
    (await loader).dismiss();
  }


}
