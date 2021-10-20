import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodPartnerServiceService } from 'src/app/food-partner-service.service';
import { FoodUser } from 'src/app/food-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  tableId: string | null | undefined;
  username!: string;
  password!: string;
  user!: FoodUser
  message: string = "WELCOME";
  checkVar: boolean = false;

  constructor(private service: FoodPartnerServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.tableId = (this.route.snapshot.paramMap.get('id'));
    //console.log(this.checkVar);
    if (this.tableId !== null && this.tableId !== "null") {
      //console.log(this.tableId);
      //console.log("inside if");
      sessionStorage.setItem('tableid', this.tableId);
      this.checkVar = true;
      //console.log(this.checkVar);
    }
  }

  doLogin() {
    this.service.getUser(this.username, this.password).subscribe(data => {
      this.user = data;
      console.log(this.user);
      sessionStorage.setItem('username', this.user.username);
      sessionStorage.setItem('isLoggedIn', "true");
    },
      error => {
        console.log(error);
        this.message = "BAD CREDENTIALS";
      });
      window.location.reload();
  }


}


