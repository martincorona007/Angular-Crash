import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";

import {  throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { DataService } from './data.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL = "http://localhost:3000/products";
  DataService: any;
  public first: string = "";  
  public prev: string = "";  
  public next: string = "";  
  public last: string = "";

  constructor(private httpClient: HttpClient) { }

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
  
  /*
  public sendGetRequest(){
    return this.httpClient.get(this.SERVER_URL).pipe(catchError(this.handleError));
  }*/
  public sendGetRequest(){
    // Add safe, URL encoded _page and _limit parameters 
    
    return this.httpClient.get(this.SERVER_URL, {  params: new HttpParams({fromString: "_page=1&_limit=20"}), observe: "response"}).pipe(retry(3), catchError(this.handleError), tap(res => {
      console.log(res.headers.get('Link'));
      this.DataService.parseLinkHeader(res.headers.get('Link'));
    }));
  }
  public sendGetRequestToUrl(url: string){  
    return this.httpClient.get(url, { observe: "response"}).pipe(retry(3), 			
    catchError(this.handleError), tap(res => {  
      console.log(res.headers.get('Link'));  
      this.DataService.parseLinkHeader(res.headers.get('Link'));
    }));  
  }
}