import { Component, OnInit } from '@angular/core';
import { ClientListService } from './rest.service';
import { Feeds} from './Feeds';

@Component({
  selector: 'app-referredCoach',
  templateUrl: './referredCoach.component.html',
  styleUrls: [ './referredCoach.component.css' ]
})
export class ReferredCoachComponent implements OnInit {
    title = 'LedgerAPI';

    constructor(private rs : ClientListService){}
  
    columns = [ "Coach Name ", " Date Joined ", " Email "," Referral Link "," Referror Email ", " Referror Name " ];
  
    
     feeds : Feeds[] = [];   
  
     ngOnInit(): void{
  
      this.rs.getClientFeedData().subscribe(
        {
        next : (response) =>
        {
          this.feeds = response;
          console.log( this.feeds);
        },
        error: (error) =>
        {
          console.log("Error Occured: "+error);
        }
  
      }
      )
     }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/