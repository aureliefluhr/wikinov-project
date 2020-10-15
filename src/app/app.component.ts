import { Component } from '@angular/core';
import { LocalStorageService } from './services/localStorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wikinov';

  constructor(
    private localstorage : LocalStorageService) { 
    }

  checkConnected() {
    console.log(this.checkConnected);
    return this.localstorage.checkLogin();
  }
  logout() {
    return this.localstorage.logout();
  }

  async ngOnInit() {
    this.localstorage.checkLogin();
  }
}
