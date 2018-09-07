import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router,ActivatedRouteSnapshot  } from '@angular/router';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {

cargar:boolean;

  constructor(private router:Router) {

   }

  ngOnInit() {
   console.log(this.cargar);
    if(this.cargar==undefined){
        this.cargar=true;
this.home();
}
  }


home(){

  this.cargar=true;
  console.log('recargando');
 //window.location.reload();


}

OnDestroy(){
  this.cargar=undefined;
}

}
