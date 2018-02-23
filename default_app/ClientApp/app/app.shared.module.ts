import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app/app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthenticationService } from './services/authentication.service';
import { AuthguardGuard } from './guards/authguard.guard';

const appRoutes: Routes = [

    {
        path: '',
        component: LoginComponent
    },   
    {
        path: 'dashboard',
        canActivate: [AuthguardGuard],
        component: DashboardComponent
    }
]

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HeaderComponent,
        FooterComponent,
        DashboardComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot(appRoutes),
        BrowserModule
    ],
    providers: [
        AuthenticationService,
        AuthguardGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModuleShared {
}
