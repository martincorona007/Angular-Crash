import { Injectable } from '@angular/core';
import { retry,catchError,tap } from 'rxjs/operators';
import { ApiService } from './api.service';
import { HttpClient, HttpErrorResponse, HttpParams, HttpResponse } from "@angular/common/http";
import {  throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public first: string = "";  
  public prev: string = "";  
  public next: string = "";  
  public last: string = "";
  public SERVER_URL = "http://localhost:3000/products";
  
  constructor(private httpClient: HttpClient) { }
  parseLinkHeader(header: any) {
    if (header.length == 0) {
      return ;
    }

    let parts = header.split(',');
    var links: any = {};
    parts.forEach( (p: string) => {
    let section = p.split(';');
    var url = section[0].replace(/<(.*)>/, '$1').trim();
    var name = section[1].replace(/rel="(.*)"/, '$1').trim();
    links[name] = url;

    });

    this.first  = links["first"];
    this.last   = links["last"];
    this.prev   = links["prev"];
    this.next   = links["next"]; 
  }
  public sendGetRequestToUrl(url: string){  
    return this.httpClient.get(url, { observe: "response"}).pipe(retry(3), 			
    catchError(this.handleError), tap(res => {  
      console.log(res.headers.get('Link'));  
      this.parseLinkHeader(res.headers.get('Link'));
    }));  
  }
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  
}
