import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthService } from '../demo/components/auth/auth.service';
import { UserPermissionService } from '../infra/services/user-permission.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: './login.component.html'
})
export class LoginComponent {

  loginForm: FormGroup;
  rememberMe: boolean = false;
  user: any;
  errorLogin: string = ''

  constructor(private formBuilder: FormBuilder, private layoutService: LayoutService, private userPermissionService: UserPermissionService, private authService: AuthService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['ezio@databoxsistemas.com.br', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required, Validators.minLength(6)]]
    });
    // this.loginForm = new FormGroup({
    //   email: new FormControl('',[Validators.required]),
    //   password: new FormControl('',[Validators.required]),
    // }) 
    this.userPermissionService.clearTable();
  }

  get dark(): boolean {
    return this.layoutService.config.colorScheme !== 'light';
  }
  login(): void {
    if (this.loginForm.invalid) {
      return Object.values(this.loginForm.controls).forEach(control => {
        control.markAsTouched();
      });
    } else {
      this.setUser();
      this.authService.login(this.user).subscribe({
        next: (res) => {
          this.authService.setUserPermissions(res.user.permissions);
          this.router.navigate(['/']);
        },
        error: (err) => {
          // loginMsgError('');
          this.errorLogin = 'Endereço de e-mail ou senha estão incorretos.'
        }
      })
    }
  }
  setUser(): void {
    this.user = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
  }

  ngAfterContentChecked() {
    document.body.classList.toggle("light");
  }

  resetMyPassword() {
    // this.router.navigate(["/recuperar-senha"]);
  }
}
