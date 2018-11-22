import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(private fb:FormBuilder, private router:Router) { 
    this.loginForm = fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  ngOnInit() {
  }

  signIn(){
    let coreo = this.loginForm.value.email;
    let pass = this.loginForm.value.password;
    console.log("Inicio de secion: ",coreo,pass);
  }
  signUp(){
		this.router.navigate(['/register']);
  }
}
