import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { FamilyComponent } from './components/family/family.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './pagenotfound.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'family', component: FamilyComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
