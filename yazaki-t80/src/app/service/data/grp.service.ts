import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GrpService {

  constructor(private http: HttpClient) { }

  private baseUrl = "http://localhost:8000/api";


  InsertGroup($token,data) {
    var headers_object = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "bearer " + $token
    }); 

    const httpOptions = {
      headers: headers_object
    };

    return this.http.post(`${this.baseUrl}/AddGroup`, data,httpOptions)
  }




  Membergoup($token,data) {
    var headers_object = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "bearer " + $token
    });

    const httpOptions = {
      headers: headers_object
    };

    return this.http.post(`${this.baseUrl}/Addmember`, data,httpOptions)
  }
  Grpposts($token,$taq) {
    var headers_object = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "bearer " + $token
    });

    const httpOptions = {
      headers: headers_object
    };
   
    return this.http.get(`${this.baseUrl}/Groupposts/`+ $taq, httpOptions);
  }

  Groupmembers($token,$grpid) {
    var headers_object = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "bearer " + $token
    });

    const httpOptions = {
      headers: headers_object
    };
   
    return this.http.get(`${this.baseUrl}/Groupmembers/`+ $grpid, httpOptions);
  }





  GetAllGrps($token) {
    var headers_object = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "bearer " + $token
    });

    const httpOptions = {
      headers: headers_object
    };
   
    return this.http.get(`${this.baseUrl}/Group`, httpOptions);
  }

  addcomment($token,$data) {
    var headers_object = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "bearer " + $token
    });

    const httpOptions = {
      headers: headers_object
    };
    let data:null;
   
    return this.http.post(`${this.baseUrl}/commenadd`,$data, httpOptions);
  }
  
  Deletegrpmem($token,$idmem) {
    var headers_object = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "bearer " + $token
    });

    const httpOptions = {
      headers: headers_object
    };
    let data:null;
   
    return this.http.post(`${this.baseUrl}/deletemembergorup/`+ $idmem,data, httpOptions);
  }


  deletepost($token,$idmem) {
    var headers_object = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "bearer " + $token
    });

    const httpOptions = {
      headers: headers_object
    };
    let data:null;
   
    return this.http.post(`${this.baseUrl}/deletepost/`+ $idmem,data, httpOptions);
  }

  getusername($token,$aq) {
    var headers_object = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "bearer " + $token
    });

    const httpOptions = {
      headers: headers_object
    };
   
    return this.http.get(`${this.baseUrl}/username/`+ $aq, httpOptions);
  }


  deletecomnt($token,$idmem) {
    var headers_object = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "bearer " + $token
    });

    const httpOptions = {
      headers: headers_object
    };
    let data:null;
   
    return this.http.post(`${this.baseUrl}/deletecomnt/`+ $idmem,data, httpOptions);
  }


  GetGrp($token,$pre) {
    var headers_object = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "bearer " + $token
    });

    const httpOptions = {
      headers: headers_object
    };
   
    return this.http.get(`${this.baseUrl}/Group/`+ $pre, httpOptions);
  }

  Addposttogroup($token,$data) {
    var headers_object = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "bearer " + $token
    });

    const httpOptions = {
      headers: headers_object
    };
   
    return this.http.post(`${this.baseUrl}/AddPost`,$data, httpOptions);
  }

  




 





}
