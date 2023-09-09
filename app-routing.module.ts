
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from 'app.component'
import { PasswordGeneratorComponent } from 'src/app/components/challenges/password-generator/password-generator.component'
import { SplitterComponent } from 'src/app/components/challenges/splitter/splitter.component'
import { MainPageComponent } from 'src/app/components/main-page/main-page.component'
import { ProfilComponent } from 'src/app/components/main-page/profil/profil.component'
import { BirthdayCountdownComponent } from 'src/app/components/challenges/birthday-countdown/birthday-countdown.component'
import { MultiStepFormComponent } from 'src/app/components/challenges/multi-step-form/multi-step-form.component'
 const routes: Routes = [
    // { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: MainPageComponent },
    { path: 'password', component: PasswordGeneratorComponent },
    { path: 'splitter', component: SplitterComponent },
    { path: 'form', component: MultiStepFormComponent },
    { path: '**', component: MainPageComponent}
  ]
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {}
