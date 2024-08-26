import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  ape: string = "Perez";
  edad: number = 26;

  arregloPersona: any = {
    nombre: 'José',
    apellido: 'Rodriguez',
    edad: 25
  }

  listaP: any = [
    {
      id: 1,
      comuna: 'Huechuraba'
    },
    {
      id: 2,
      comuna: 'Lo Espejo'
    },
    {
      id: 3,
      comuna: 'Independencia'
    }
  ]
  constructor(private router:Router, private alertController:
    AlertController, private toastController: ToastController) { }

  ngOnInit() {
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Hello World!',
      duration: 2500,
      position: position,
    });

    await toast.present();
  }
  
  async presentAlert(titulo:string, texto:string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: texto,
      buttons: ['ok'],
    });

    await alert.present();
  }
  
  irPagina(){
    //crear logica de programación
    //creamos la variable de contexto

    this.presentToast('bottom')

    let navigationextras: NavigationExtras = {
      state:{
        apellido: this.ape,
        ed: this.edad,
        pers: this.arregloPersona
      }
    }
    this.presentAlert('titulo de alerta', 'texto de alerta');
    this.router.navigate(['/agregar'], navigationextras);
  }

}
