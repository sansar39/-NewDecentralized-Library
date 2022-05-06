import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide:boolean = true;

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  goTo(url_Route:string):void {
    this._router.navigateByUrl("/"+url_Route);
  }

  sendLogInInfo(): void {
  }
}
