import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, 
          IonToolbar,IonImg,IonInput,IonList, IonItem, IonIcon,IonButton,
        IonInputPasswordToggle } from '@ionic/angular/standalone';


        
import { addIcons } from 'ionicons';
import { eye, lockClosed } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent,
            IonHeader,
            IonTitle, 
            IonToolbar, 
            CommonModule, 
            FormsModule,
            IonImg,
            IonInput,
            IonList, 
            IonItem, 
            IonIcon,
            IonButton,
            IonInputPasswordToggle ]
})
export class LoginPage implements OnInit {

  correo:string = "";
  contrasena:string = "";

  constructor() { 
    addIcons({ eye, lockClosed });
  }

    private router = inject(Router);

  ngOnInit() {
  }


  login(){
    
    console.log(this.correo);
    console.log(this.contrasena);

    if(this.correo == "duoc" && this.contrasena == "123" ){
      this.router.navigateByUrl("inicio");
    }else{
      alert("Usuario o contraseña incorrecta.")
    }
    
    
    
  }

}
