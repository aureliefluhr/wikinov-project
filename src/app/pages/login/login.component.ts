import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(public api: ApiService) { }

  email: string = "";
  password: string = "";

  login () {
    this.api.login(this.email, this.password).then(res =>{
      console.log(res);
    })
    .catch(err =>{
      console.log(err)
    })
  }

  ngOnInit(): void {
  }

}
