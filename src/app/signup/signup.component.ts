import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  
  signupForm!: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({

      signupName: this.fb.control('',Validators.required),
      signupEmail :this.fb.control('',[
        Validators.required,]),
      signupPassword : this.fb.control('test', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(8)]))

    })

    
  }
  signupclicked(this: any){
    localStorage.setItem("Name", this.loginForm.get('signupName').value);
    localStorage.setItem("Emailadress", this.loginForm.get('signupEmail').value);
    localStorage.setItem("password", this.loginForm.get('signupPassword').value);
    this.router.navigate(['/useraccount']);
    }
 
}
