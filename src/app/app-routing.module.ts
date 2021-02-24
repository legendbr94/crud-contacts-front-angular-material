import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './views/home/home.component';
import {ContactCrudComponent} from './views/contact-crud/contact-crud.component';
import {ContactCreateComponent} from './components/contact/contact-create/contact-create.component';
import {ContactUpdateComponent} from './components/contact/contact-update/contact-update.component';
import {ContactDeleteComponent} from './components/contact/contact-delete/contact-delete.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contacts',
    component: ContactCrudComponent
  },
  {
    path: 'contacts/create',
    component: ContactCreateComponent
  },
  {
    path: 'contacts/update/:id',
    component: ContactUpdateComponent
  },
  {
    path: 'contacts/delete/:id',
    component: ContactDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
