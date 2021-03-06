import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { stringify } from 'querystring';
import { Router, ActivatedRoute } from "@angular/router";
import {SessionStorageService, SessionStorage } from 'angular-web-storage';
import { FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  SearchForm: FormGroup
  searchValue: String = null;
  keywords:String = null;
  gradeLevel:String = null;
  contentType:String = null;
  worksheets:String = null;
  labs:String = null;
  exams:String = null;
  constructor(private apiService: ApiService, public session: SessionStorageService, private router: Router) { }
  
  ye(test:string)
  {
    console.log("This is test: " + test);
  }
  searcher(keywords:string, subject:string, gradeLevel:string, worksheets:string, labs:string, exams:string){
    let includes = labs + "," + worksheets;
    this.apiService.search(keywords, subject, gradeLevel, includes).then((data)=>{
     console.log(data);
     if (data["data"] === 0)
     {
      alert("Bad News");
     } 
     else{
      this.session.set("data", data);
      this.router.navigateByUrl("results");
    }
  });}

  ngOnInit() {
    
    this.SearchForm = new FormGroup({
    });
  }

}
