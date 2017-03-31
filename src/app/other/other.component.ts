import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'fa-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent {
  constructor(private router : Router){
  } 

  loginCheck(logindetails:NgForm){
    if(logindetails.value.password == "password"){
      localStorage.setItem("user", "1");
      this.router.navigate(['dashboard']);
    } else {
      alert("wrong password");
    }
  }

  isUser(){
    if(localStorage.getItem("user") == "1"){
      return true;
    } else {
      return false;
    }
  }
}
