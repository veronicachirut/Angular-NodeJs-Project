import { Component } from '@angular/core';
import { MainService } from './services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-angular';
  logged = false;
  // user = undefined;

  constructor(private mainService: MainService) { }
  
  user = this.mainService.username;

  isLogged(): boolean {
    this.user = localStorage.getItem("username");
    if (localStorage.getItem("token") === null) {
      return true;
    }
    return false;
  }

  logout(): void {
    this.mainService.logout();
  }
}
