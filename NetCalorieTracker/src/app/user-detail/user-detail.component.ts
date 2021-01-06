import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup , Validators} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  sexList = ["Female", "male"]
  responseData = <any>{};

  UserForm= new FormGroup( {
         Name: new FormControl(),
        Weight: new FormControl(),
        Height: new FormControl(),
       Sex : new FormControl(),
       age: new FormControl()
       })
        

  constructor(
    private formBuilder: FormBuilder,
     private http: HttpClient,
     public router: Router,
     public userService: UserServiceService) { }
  
  ngOnInit(): void {
    this.UserForm = this.formBuilder.group({
      name: ['', Validators.required],
      weight:  ['', Validators.required],
      height: ['', Validators.required],
     sex :  ['', Validators.required],
     age:['',Validators.required]
    });
  }

  onSubmit(){
    this.userService.userEntered(this.UserForm.value).subscribe(resp => {
     alert("User created successfully")
     this.router.navigate(['userlist'])
  }, err => {
    
    alert("Error")
    });
        
 
  }
}
