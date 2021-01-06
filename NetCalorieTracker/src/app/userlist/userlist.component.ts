import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
 
  data :any;

  tableObj={
		headers: [
			"Name","Gender"
		]
  }
      constructor( public router: Router,
      public userService : UserServiceService) { }


    ngOnInit(): void {
      this.userService.userlist().subscribe(resp => {
     this.data =resp;
     console.log(this.data)
      },err =>{
        alert("Error")
      })
  }

    gotouserinfo(userid:any){
     this.router.navigate(['userlist/user-info',userid])
          }

    deleteuser(userid: any){
    this.userService.userDelete(userid).subscribe(resp =>{
    console.log(resp)
    window.location.reload();
    alert("User deleted successfully");
    },err =>{
  alert("error")
})
    }

  }
