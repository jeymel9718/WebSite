import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//import {ClientService} from '../services/client.service';
import {ClientService} from '../services/client.service';
//import { ClientService } from 'app/services/client.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
	public registerForm: FormGroup;
  constructor(private fb:FormBuilder, private router:Router, private clientService:ClientService) { 
    this.registerForm = fb.group({
      username: ['',Validators.required],
      identificaionNumber: ['',Validators.required],
      fullName: ['',Validators.required],
      password: ['',Validators.required],
      phoneNumber: ['',Validators.required],
      email: ['',Validators.required],
      birthdate: ['',Validators.required],
    });
  }
  
  ngOnInit() {
  }



  register(){
  	var postData = {
		  "Ssid": this.registerForm.value.identificaionNumber,
		  "Name": this.registerForm.value.fullName,
		  "Phone": this.registerForm.value.phoneNumber,
		  "Email": this.registerForm.value.email,
		  "Birthdate": this.registerForm.value.birthdate,
		  "Username": this.registerForm.value.username,
		  "Password": this.registerForm.value.password
		};
		this.clientService.createClient(postData).subscribe(res=>{
      if(res.id != 0){
        this.router.navigate(['/login']);
      }else{
      	alert("Something is wrong");
      }
    });
  }

}
