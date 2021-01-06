import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesignComponent } from './pages/design/design.component';
import { SalesforceComponent } from './pages/salesforce/salesforce.component';
import { AdministrativeComponent } from './pages/administrative/administrative.component';
import { AdminComponent } from './pages/admin/admin.component';
import { DigitalComponent } from './pages/digital/digital.component';
import { DropboxComponent } from './pages/dropbox/dropbox.component';
import { CommercialComponent } from './pages/commercial/commercial.component';
import { HomeComponent } from './pages/home/home.component';
import { BackofficeComponent } from './pages/digital/backoffice/backoffice.component';
import { DeveloppementComponent } from './pages/digital/developpement/developpement.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { QuillModule } from 'ngx-quill';
import { UnderlineComponent } from './composants/underline/underline.component';

@NgModule({
  declarations: [
    AppComponent,
    DesignComponent,
    SalesforceComponent,
    AdministrativeComponent,
    AdminComponent,
    DigitalComponent,
    DropboxComponent,
    CommercialComponent,
    HomeComponent,
    BackofficeComponent,
    DeveloppementComponent,
    LoginComponent,
    UnderlineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    QuillModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
