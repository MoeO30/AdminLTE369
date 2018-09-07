import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRouteSnapshot  } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    this.router.navigateByUrl('/home', {skipLocationChange: true}).then(()=>
    this.router.navigate(["/home"]));
  }

}
