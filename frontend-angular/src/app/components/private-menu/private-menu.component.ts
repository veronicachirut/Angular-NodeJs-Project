import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-private-menu',
  templateUrl: './private-menu.component.html',
  styleUrls: ['./private-menu.component.css']
})
export class PrivateMenuComponent implements OnInit {

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.mainService.logout();
  }

}
