import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './src/app/components/header/header.component';
import { ProfilComponent } from './src/app/components/main-page/profil/profil.component';
import { KnowledgeComponent } from './src/app/components/main-page/knowledge/knowledge.component';
import { TechnologieComponent } from './src/app/components/main-page/technologie/technologie.component';
import { FormComponent } from './src/app/components/main-page/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';
import { ContactService }  from './src/app/components/service/contact.service';
import { PasswordGeneratorComponent } from './src/app/components/challenges/password-generator/password-generator.component';
import { MainPageComponent } from './src/app/components/main-page/main-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfilComponent,
    KnowledgeComponent,
    TechnologieComponent,
    FormComponent,
    PasswordGeneratorComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:  [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
