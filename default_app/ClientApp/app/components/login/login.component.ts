import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [],
})
export class LoginComponent implements OnInit {

    constructor(private router: Router, private authenticate: AuthenticationService) { }

    ngOnInit() {

    }

    login(e:any) {
        e.preventDefault();
        console.log(e);
        var username = e.target.elements[0].value;
        var password = e.target.elements[1].value;

        if (username == 'admin' && password == 'admin') {
            this.authenticate.setUserLoggedIn();   
            this.router.navigate(['dashboard']);
        }
    }

}
    