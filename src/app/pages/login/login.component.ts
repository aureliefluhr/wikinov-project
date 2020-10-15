import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { LocalStorageService } from '../../services/localStorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(
    public api: ApiService, 
    private localstorage : LocalStorageService) { }

  email: string = "";
  password: string = "";

  async login () {
    await this.api.login(this.email, this.password).then(res => {
      this.localstorage.login(res);
    })
    .catch(err =>{
      console.log(err)
    })
  }

  async ngOnInit() {
    this.localstorage.checkLogin();
  }

}
