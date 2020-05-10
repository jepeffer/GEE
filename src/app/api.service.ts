import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getUsers (usr, pwd){
    return this.httpClient.get('http://198.211.98.83:3002/users', {
      params:{
        username: usr,
        password: pwd
      }
    });
  }
  public getFeedback(fileid){
    return this.httpClient.get('http://198.211.98.83:3002/getfeedback', {
      params:{
       fileid:fileid
      }
    });
  }
  public submitFeedback(username, fileid, feedback){
    return this.httpClient.get('http://198.211.98.83:3002/submitfeedback', {
      params:{
       username: username,
        fileid:fileid,
        feedback: feedback
      }
    });
  }

  public download (filelocation:string){
    let filenamelist = filelocation.split("/");
    let filename = filenamelist[filenamelist.length - 1];
    let headers = new HttpHeaders({
       // Auth header
      //No other headers needed
  });
    return this.httpClient
    .get("http://198.211.98.83:3002/download", { params:{filelocation:filelocation}, headers, responseType: "blob" }) //set response Type properly (it is not part of headers)
    .toPromise()
    .then(blob => {
        saveAs(blob, filename); 
    })
    .catch(err => console.error("download error = ", err))
    return this.httpClient.get('http://198.211.98.83:3002/download', {
      params:{
        filelocation: filelocation 
      }
    });
  }

  public registerUser (usr, pwd, email){
    return this.httpClient.get('http://198.211.98.83:3002/registerUser', {
      params:{
        username: usr,
        password: pwd,
        email: email
      }
    });
  }

  public postFile(fileToUpload: File) {
    const endpoint = 'http://198.211.98.83:3002/api/upload';
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return this.httpClient
      .post(endpoint, formData, { })
}
  
  //public search (keywords, subject, contentType, gradeLevel){
  public search (keywords?, subject?, contentType?, gradeLevel?, includes?){
    return this.httpClient.get('http://198.211.98.83:3002/search', {
      params:{
        keywords: keywords,
        subject: subject,
        contentType: contentType,
        gradeLevel: gradeLevel,
        includes: includes
      }
    });
  }

  
  public searchall(term)
  {
    
    
      return this.httpClient.get('http://198.211.98.83:3002/searchall', {
      params:{
        keywords: term
      }}).toPromise()
      
    

  }
  public getFile(fileid) : Promise<any>
  {
    return this.httpClient
    .get("http://198.211.98.83:3002/getfile", { params:{fileid:fileid}}) //set response Type properly (it is not part of headers)
    .toPromise()
 
  }


  public getUserVotes (username){
    return this.httpClient.get('http://198.211.98.83:3002/getvotes', {
      params:{
        username:username
      }
    });
  }

  public submitUserVote(username, fileid, voteValue, originalVoteValue):Promise<any>{
    return this.httpClient.get('http://198.211.98.83:3002/submitvote', {params:{
      username:username,
      voteValue:voteValue,
      fileid:fileid,
      originalVoteValue: originalVoteValue
    }})
    .toPromise()
      
    
    
  }
  
  
  public upload (username, fileTitle, subject, gradeLevel, license, worksheets, labs, video, exams, description, tags){
    return this.httpClient.get('http://198.211.98.83:3002/upload', {
      params:{
        fileTitle: fileTitle,
        subject: subject,
        gradeLevel: gradeLevel,
        labs: labs,
        video: video,
        exams: exams,
        worksheets: worksheets,
        description: description,
        license: license,
        tags: tags,
        username: username
      }
    });
  }


}
