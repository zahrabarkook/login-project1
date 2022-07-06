import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-useraccount',
  templateUrl: './useraccount.component.html',
  styleUrls: ['./useraccount.component.scss']
})
export class UseraccountComponent implements OnInit {

  constructor() { }
  
   emailadresssave = localStorage.getItem('EmailAddress');

  ngOnInit(): void {}

}
