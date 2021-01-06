import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {DesignComponent} from './pages/design/design.component';
import {SalesforceComponent} from './pages/salesforce/salesforce.component';
import {AdministrativeComponent} from './pages/administrative/administrative.component';
import {AdminComponent} from './pages/admin/admin.component';
import {DigitalComponent} from './pages/digital/digital.component';
import {DropboxComponent} from './pages/dropbox/dropbox.component';
import {AcademyComponent} from './pages/academy/academy.component';
import {CommercialComponent} from './pages/commercial/commercial.component';
import {BackofficeComponent} from './pages/digital/backoffice/backoffice.component';
import {DeveloppementComponent} from './pages/digital/developpement/developpement.component';
import {LoginComponent} from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'design', component: DesignComponent },
  { path: 'salesforce', component: SalesforceComponent},
  { path: 'administration', component: AdministrativeComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'digital', component: DigitalComponent},
  { path: 'dropbox', component: DropboxComponent},
  { path: 'commercial', component: CommercialComponent},
  { path: 'academy', component: AcademyComponent},
  { path: 'digital/backoffice', component: BackofficeComponent},
  { path: 'digital/developpement', component: DeveloppementComponent},
  { path: 'auth', component: LoginComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
