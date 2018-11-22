import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import {SiteService} from '../services/site.service';


@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})



export class ReservationsComponent implements OnInit {
	public sites: any;
  constructor( private siteService:SiteService) {
  	this.sites = this.siteService.getSites();
   }

  ngOnInit() {
  }

  onClick(){
  	console.log(this.sites);
  }
}
