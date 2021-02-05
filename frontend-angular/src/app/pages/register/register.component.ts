import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user: any = {};
  public varValid = false;
  public varPassValid = false;

  constructor(private mainService: MainService, private router: Router) { }

  ngOnInit(): void {
  }

  register() {
    if (!this.isValid()) {
      this.varValid = false;
      if (!this.passIsValid()) {
        this.varPassValid = false;
        const data = {
          name: this.user.name,
          email: this.user.email,
          passwords: {
            password: this.user.password,
            confirmPassword: this.user.confirmPassword
          }
        }
        this.mainService.register(this.user).subscribe((res) => {
          console.log(res);
          if (res) {
            this.router.navigate(['/login']);
          }
        })
      } else {
        this.varPassValid = true;
      }
    } else {
      this.varValid = true;
    }
  }

  isValid() {
    const { name, email, password, confirm_password } = this.user;
    return !(name && email && password && confirm_password);
  }

  passIsValid() {
    const { password, confirm_password } = this.user;
    return !(password == confirm_password);
  }

  validateEmail(mail: string) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  }
}