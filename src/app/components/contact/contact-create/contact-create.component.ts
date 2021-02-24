import {Component, OnInit} from '@angular/core';
import {ContactService} from '../contact.service';
import {Router} from '@angular/router';
import {Contact} from '../contact.model';


@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {

  contact: Contact = {
    name: '',
    email: '',
    phone: ''
  };

  constructor(private contactService: ContactService,
              private router: Router) {
  }

  ngOnInit(): void {

  }

  createContact(): void {
    this.contactService.create(this.contact).subscribe(() => {
      this.contactService.showMessage('Contato criado');
      this.router.navigate(['/contacts']);
    });
  }

  cancel(): void {
    this.router.navigate(['/contacts']);
  }
}
