import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('isLoggedIn')===null || (!(sessionStorage.getItem('isLoggedIn')))){
      console.log("inside home again");
      console.log(sessionStorage.getItem('isLoggedIn'));
      this.router.navigateByUrl(`table/${sessionStorage.getItem('tableid')}`);
    }
  }

}
