import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {Response} from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class SiteService {
    url = 'http://localhost:3000/api/Sites';
    
    constructor(private http: HttpClient){ }

    createSite(site:any): Observable<any>{

        return this.http.post(this.url,site);
    } 

    getSites():Observable<any>{
        return this.http.get(this.url);
    }
}