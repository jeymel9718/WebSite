import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import {SiteService} from '../services/site.service';

@Component({
  selector: 'app-reg-site',
  templateUrl: './reg-site.component.html',
  styleUrls: ['./reg-site.component.scss']
})
export class RegSiteComponent implements OnInit {
	public regSiteForm: FormGroup;
  constructor(private fb:FormBuilder, private router:Router, private siteService:SiteService) { 
    this.regSiteForm = fb.group({
      dir: ['',Validators.required],
      lat: ['',Validators.required],
      lon: ['',Validators.required],
      name: ['',Validators.required],
      description: ['',Validators.required],
      activities: ['',Validators.required],
      price: ['',Validators.required],
      type: ['',Validators.required],
      phone: ['',Validators.required],
      rating: ['',Validators.required],
      schedule: ['',Validators.required],
      image: ['',Validators.required],
      website: ['',Validators.required]
    });
	}
  ngOnInit() {
  }

  register(){
  	var postData = {
			  "Direction":  this.regSiteForm.value.dir,
			  "Lat":  this.regSiteForm.value.lat,
			  "Lng":  this.regSiteForm.value.lon,
			  "Name":  this.regSiteForm.value.name,
			  "Description":  this.regSiteForm.value.description,
			  "Activities":  this.regSiteForm.value.activities,
			  "Price":  this.regSiteForm.value.price,
			  "PlaceType":  this.regSiteForm.value.type,
			  "Phone": this.regSiteForm.value.phone,
			  "Rating": this.regSiteForm.value.rating,
			  "Schedule":  this.regSiteForm.value.schedule,
			  "Image":  this.regSiteForm.value.image,
			  "WebSite": this.regSiteForm.value.website
		};

		this.siteService.createSite(postData).subscribe(res=>{
      if(res.id != 0){
      	alert("Register susesfully");
        location.reload();
      }else{
      	alert("Something is wrong");
      }
    });
  }

}
