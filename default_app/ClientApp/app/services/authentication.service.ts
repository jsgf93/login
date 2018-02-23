import { Injectable } from '@angular/core';

@Injectable()

export class AuthenticationService {
    private isUserLoggedIn:boolean;
    private usernamee:string;

    constructor() {
        this.isUserLoggedIn = false;
    }

    setUserLoggedIn() {
        this.isUserLoggedIn = true;
    }

    getUserLoggedIn() {
        return this.isUserLoggedIn;
    }

}