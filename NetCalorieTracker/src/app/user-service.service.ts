import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
    constructor(private http: HttpClient) { }

 userEntered(data :any) {
  return this.http.post(`http://localhost:3000/createUser`, data);
}

userlist() {
  return this.http.get(`http://localhost:3000/`);
}

getFoodList(){
  //return this.http.get(`https://localhost:3000/foodList`);
}

getuserDetail(userid : any)
{
return this.http.get(`http://localhost:3000/${userid}`)

}
userDelete(userid: any){
  return this.http.delete(`http://localhost:3000/${userid}`)
}
}
