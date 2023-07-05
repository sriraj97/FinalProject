import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-postfeedback',
  templateUrl: './postfeedback.component.html',
  styleUrls: ['./postfeedback.component.css']
})
export class PostfeedbackComponent implements OnInit {
  factors:string[]=["Breakfast","Lunch","Snacks","Bevarages","others"]
  ufactor:string=""
  usdate:string=""
  ufeedback:string=""
  uname:string=""
  uid:number=0
  rerror:string=""
  constructor(private adsrvc:AdminService) { }
  ngOnInit(): void {
    
  }
  postFeedback():void{
    this.rerror="";
    if(this.usdate.length==0 && this.ufeedback.length==0 && this.ufactor.length==0 )
     this.rerror="Fill all the fields";
     else if(this.usdate.length==0)
     this.rerror="please select date"
     else if(this.ufeedback.length==0)
     this.rerror="please give some feedback"
     else if(this.ufactor.length==0)
     this.rerror="please select root cause"

     else{
        let obj={sdate:this.usdate,feedback:this.ufeedback,factor: this.ufactor}
        this.adsrvc.submitFeedback(obj).subscribe({
          next:(result:any)=>{
                alert("Feedback submitted successfully")
          },
          error:()=>{
            alert("Unable to submit Feedback...")
          }
        })
     }
  }
}
