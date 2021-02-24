import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact.model';
import {ContactService} from '../contact.service';

@Component({
  selector: 'app-contact-read',
  templateUrl: './contact-read.component.html',
  styleUrls: ['./contact-read.component.css']
})
export class ContactReadComponent implements OnInit {

  contacts: Contact[];
  displayedColumns = ['id', 'name', 'email', 'phone', 'action'];

  constructor(private contactService: ContactService) {
  }

  ngOnInit(): void {
    this.contactService.read().subscribe(contacts => {
      this.contacts = contacts;
    });

  }

}
