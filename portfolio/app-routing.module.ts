import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from 'app.component';
import { PasswordGeneratorComponent } from 'src/app/components/challenges/password-generator/password-generator.component';
import { MainPageComponent } from 'src/app/components/main-page/main-page.component';
import { ProfilComponent } from 'src/app/components/main-page/profil/profil.component';


 const routes: Routes = [
    { path: '', redirectTo: '/profil', pathMatch: 'full' },
    { path: 'profil', component: MainPageComponent },
    { path: 'password', component: PasswordGeneratorComponent }
  ]
  
  @NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
 }

  
