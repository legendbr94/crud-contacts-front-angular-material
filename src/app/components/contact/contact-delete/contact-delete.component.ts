import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact.model';
import {ContactService} from '../contact.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-contact-delete',
  templateUrl: './contact-delete.component.html',
  styleUrls: ['./contact-delete.component.css']
})
export class ContactDeleteComponent implements OnInit {

  contact: Contact;

  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.contactService.readById(id).subscribe((contact) => {
      this.contact = contact;
    });
  }

  deleteContact(): void {
    this.contactService.delete(this.contact.id).subscribe(() => {
      this.contactService.showMessage('Contato excluido com sucesso');
      this.router.navigate(['/contacts']);
    });
  }


  cancel(): void {
    this.router.navigate(['/contacts']);
  }
}
