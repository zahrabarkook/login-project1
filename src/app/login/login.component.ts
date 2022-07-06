import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private router: Router) { }


  ngOnInit(): void {
  
      this.loginForm= new FormGroup({
      loginEmail :new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
      ])),
      loginPassword : new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(8)]))
    })
}
        logincliked(this: any){
        localStorage.setItem("EmailAddress", this.loginForm.get('loginEmail').value);
        localStorage.setItem("password", this.loginForm.get('loginPassword').value);
        this.router.navigate(['/useraccount']);
        }
}

