import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide:boolean = false;

  firstName = new FormControl('', [Validators.required]);
  middleName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  passwordRe = new FormControl('', [Validators.required]);

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  sendRegisterInfo():void {

  }

  goTo(url_Route:string):void {
    this._router.navigateByUrl("/"+url_Route);
  }

}
