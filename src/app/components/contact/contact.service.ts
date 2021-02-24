import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {HttpClient} from '@angular/common/http';
import {Contact} from './contact.model';
import {EMPTY, Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {


  constructor(private snackBar: MatSnackBar, private  http: HttpClient) {
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  create(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(environment.BASE_URL, contact).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }


  read(): Observable<Contact[]> {
    return this.http.get<Contact[]>(environment.BASE_URL).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Contact> {
    const url = `${environment.BASE_URL}/${id}`;
    return this.http.get<Contact>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(contact: Contact): Observable<Contact> {
    const url = `${environment.BASE_URL}/${contact.id}`;
    return this.http.put<Contact>(url, contact).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Contact> {
    const url = `${environment.BASE_URL}/${id}`;
    return this.http.delete<Contact>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    console.log(e);
    this.showMessage('Ocorreu um erro inesperado!', true);
    return EMPTY;
  }
}
