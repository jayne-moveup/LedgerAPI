

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, BehaviorSubject } from "rxjs";
import { map, filter, switchMap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Feeds } from './Feeds';




@Injectable({
  providedIn: 'root'
})
export class ClientListService {
  constructor(private http: HttpClient) {}


  // Client List Feeds
  getClientFeedData(): Observable<any> {        

    
//http://ec2-18-142-159-98.ap-southeast-1.compute.amazonaws.com/api/User/getLedgerCoachReferred
    return this.http.get<any>("http://ec2-18-142-159-98.ap-southeast-1.compute.amazonaws.com/api/User/getLedgerCoachReferred")
    .pipe(
      map((res) => <Feeds[]>res.data),
      catchError(this.handleError)
    );
  
  }

  // error handler
  private handleError(error: any, caught: any): any {
    throw error;
  }

}
