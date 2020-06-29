import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public title:string;
  public name:string;
  public email:string;
  public isChecked:boolean;
  public password:string;
  constructor() { }

  ngOnInit() {
    this.email = 'abc@emcil.com'
    this.title = 'Angular Practice'
  }

  public printName(){
    return this.name = 'Anas ur Rasheed'
  }

  public onCheckBoxClick(event:any){
    this.isChecked=event.target.checked
  }

  public onSubmit(){
    console.log(`Email: ${this.email} and Password: ${this.password ? this.password : 'no password'}`)
  }

  public getEmail(event:any){
    console.log(`Entered Email: ${event.target.value}`)
  }
}
