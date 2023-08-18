import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './src/app/components/header/header.component';
import { ProfilComponent } from './src/app/components/profil/profil.component';
import { KnowledgeComponent } from './src/app/components/knowledge/knowledge.component';
import { TechnologieComponent } from './src/app/components/technologie/technologie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfilComponent,
    KnowledgeComponent,
    TechnologieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
