import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MainService } from "src/app/services/main.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})

export class LoginComponent implements OnInit {
  public user: any = { email: "", password: "" };
  public error: string = "";
  constructor(private mainService: MainService, private router: Router) {}

  ngOnInit() {}

  doLogin(): void {
    console.log(this.user);
    if (this.validateEmail(this.user.email)) {
      this.mainService.login(this.user).subscribe((response: any) => {
        if (response && response.token) {
          this.router.navigate(["/"]);
        } else {
          this.error = "Invalid email or password";
        }
      });
    } else {
      this.error = "Email is invalid";
    }
  }

  isNotValid(): boolean {
    return !this.user.email || !this.user.password;
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}
