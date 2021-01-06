import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder ,ReactiveFormsModule,Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
userid:any;
userDetail : any;
foodName=[];
UserFoodDetails:any;
timeDuration: any;
carlorieIn: any;
caloriesOut:any;
timeTaken:any;
netCalories:any;
activitiesMetVal:any;
timeInMinutes: any;
DiffOut:any;
@ViewChild('quantity') quantity :any; ElementRef: any;
@ViewChild('time') time :any; ElementRef2: any;
@ViewChild('mets') mets :any; ElementRef1: any;
 
foodList=[
  {
    "ID":"167512",
"name":"Pillsbury Golden Layer Buttermilk Biscuits Artificial Flavor Refrigera...",
"Food Group":"Baked Foods",
"Calories":"307",
"Fat (g)":"13.24",
"Protein (g)":"5.88",
"Carbohydrate (g)":"41.18",
"Serving Description 1 (g)":"1 serving",
},
{
  "ID":"167530",
"name":"Crackers Cream Gamesa Sabrosas",
"Food Group":"Baked Foods",
"Calories":"484",
"Fat (g)":"20.37",
"Protein (g)":"7.01",
"Carbohydrate (g)":"64.55",
"Serving Description 1 (g)":"11 crackers (1 nlea serving)",
}];
TimeList= ["Breakfast","Lunch","Snack","Dinner"];

activityList=[{"ACTIVITY":"bicycling",
"SPECIFIC MOTION":"bicycling, mountain, competitive, racing",
"METs":"16"
},{
"ACTIVITY":"bicycling",
"SPECIFIC MOTION":"bicycling, BMX",
"METs":"8.5",
},
{
"ACTIVITY":"bicycling",
"SPECIFIC MOTION":"bicycling, mountain, general",
"METs":"8.5"
}];
  constructor(private route: ActivatedRoute,
    public formBuilder: FormBuilder,
    public userService: UserServiceService) { 
    this.route.paramMap.subscribe((paramMap: any) => {
			this.userid = paramMap.params.userid;
  })
  this.userService.getuserDetail(this.userid).subscribe(resp => {
    this.userDetail =resp;
    console.log(this.userDetail)
     },err =>{
       alert("Error")
     })
  
  }
  ngOnInit(): void {
    
    this.UserFoodDetails = this.formBuilder.group({
      foodName : ['', Validators.required],
      foodTime:  ['', Validators.required],
      activitiesName: ['', Validators.required],
      activitiesTime :  ['', Validators.required]
    }); 
        }
       
        onTimeChanged1(x:any){
          this.carlorieIn=   this.quantity.nativeElement.value
          console.log(this.carlorieIn)
                }
        onTimeChanged2(x :any){
             this.timeTaken=this.time.nativeElement.value
             console.log( this.timeTaken)
                }
        
         onTimeChanged3(x:any){
                    this.activitiesMetVal=this.mets.nativeElement.value
                    console.log(this.activitiesMetVal)
                     }

         
         saveRange(data : any){
                  this.timeInMinutes = data.target.value;
                 console.log(this.timeInMinutes)
               }   
               
onSubmit(){
console.log(this.UserFoodDetails.value);
this.caloriesOut= (this.activitiesMetVal*this.userDetail.weight*this.timeInMinutes)/60
  if(this.userDetail.sex =="Female")
  {
    var bmr = (655.0955 + (9.5634 * this.userDetail.weight) +
     (1.8496 * this.userDetail.height) - (4.6756 * this.userDetail.age))
    var BMR = (655.0955+(9.5634*this.userDetail.weight)+
    (1.8496*this.userDetail.height)-(4.6756*this.userDetail.age));
     this.netCalories = (this.carlorieIn-bmr-this.caloriesOut);
     this.netCalories= (Math.abs(this.netCalories))
  }
  else{
       var BMR = (66.4730 + (13.7516*this.userDetail.weight) +
    (5.0033*this.userDetail.height)-(6.7550 *this.userDetail.age));
    this.netCalories= (this.carlorieIn-BMR-this.caloriesOut);
    this.netCalories= (Math.abs(this.netCalories))
  }
 this.DiffOut = this.caloriesOut-this.carlorieIn;
}           
}
