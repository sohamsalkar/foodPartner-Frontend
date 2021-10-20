import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodPartnerServiceService } from './food-partner-service.service';
import { FoodUser } from './food-user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
]
})
export class AppComponent {
  title = 'foodPartner';
  checkVar:boolean=false;



  constructor(private service:FoodPartnerServiceService,private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    console.log(sessionStorage.getItem('username'),"is logged in:"+sessionStorage.getItem('isLoggedIn'));
    console.log(sessionStorage.getItem('tableid'));
    if(sessionStorage.getItem('isLoggedIn')) {
      //console.log("inside if");
      sessionStorage.setItem('isLoggedIn',"true");
      this.checkVar=true;
    }
  }
}
