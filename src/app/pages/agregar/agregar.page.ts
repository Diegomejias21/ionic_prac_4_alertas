import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  Apellido: string = "";
  edad: number = 0;
  Persona: any;
  
  constructor(private router: Router, private activedroute: ActivatedRoute) {
    //subscribirse al observable/promesa
    this.activedroute.queryParams.subscribe(param =>{
      //verificar si viene la variable de contexto
      if(this.router.getCurrentNavigation()?.extras.state){
        //recepcionar y guardar los datos
        this.Persona = this.router.getCurrentNavigation()?.extras?.state?.['pers'];
        this.Apellido = this.router.getCurrentNavigation()?.extras?.state?.['apellido'];
        this.edad = this.router.getCurrentNavigation()?.extras?.state?.['ed'];
      }
    });
   }

  ngOnInit() {
  }

}
