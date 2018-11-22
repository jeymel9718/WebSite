import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {Response} from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ClientService {
    url = 'http://localhost:3000/api/Clients';
    
    constructor(private http: HttpClient){ }

    createClient(client:any): Observable<any>{

        return this.http.post(this.url,client);
    }    
}