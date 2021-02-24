import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './components/template/header/header.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {FooterComponent} from './components/template/footer/footer.component';
import {NavComponent} from './components/template/nav/nav.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {HomeComponent} from './views/home/home.component';
import {ContactCrudComponent} from './views/contact-crud/contact-crud.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {RedDirective} from './directives/red.directive';
import {ForDirective} from './directives/for.directive';
import {ContactCreateComponent} from './components/contact/contact-create/contact-create.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ContactReadComponent} from './components/contact/contact-read/contact-read.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';

import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
import {ContactUpdateComponent} from './components/contact/contact-update/contact-update.component';
import {ContactDeleteComponent} from './components/contact/contact-delete/contact-delete.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ContactCrudComponent,
    RedDirective,
    ForDirective,
    ContactCreateComponent,
    ContactReadComponent,
    ContactUpdateComponent,
    ContactDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
