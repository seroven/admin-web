import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { RegexValidator } from 'src/app/shared/constants/regex-validator';
import { ValidateInputClass } from 'src/app/shared/classes/validate-input.class';
import { ErrorInputMessage } from 'src/app/shared/constants/error-input-messages';
import { EnumTypeMessage } from 'src/app/shared/enums/type-message.enum';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  
  public formAuth: FormGroup;
  public validateFormAuth:ValidateInputClass;
  public errorInputMessage = ErrorInputMessage;
  public loadSubmit:boolean = false;
  

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService, private toastService:ToastService) {
    this.formAuth = this.formBuilder.group({
      email: new FormControl(null, [Validators.required, Validators.pattern(RegexValidator.email)]),
      password: new FormControl(null, [Validators.required, Validators.maxLength(12)]),
      rememberMe: new FormControl(false)
    });
    this.validateFormAuth = new ValidateInputClass(this.formAuth);
  }

  ngOnInit(): void {
  }

  submit() {
    if (!this.formAuth.valid) return;
    this.loadSubmit = true;
    const { email, password, rememberMe } = this.formAuth.value;
    this.router.navigate(['/panel/product']);
    // this.authService.login({
    //   email,
    //   password
    // }).subscribe(response => {
    //   this.loadSubmit = false;
    //   if (response.success){
    //     this.toastService.showMessage(EnumTypeMessage.LOGIN_SUCCESS);
    //     this.authService.setUserLogged(response);
    //     this.router.navigate(['/panel/about']);
    //   } else {
    //     this.toastService.showMessage(EnumTypeMessage.LOGIN_ERROR);
    //   }
    // });

  }

  // validation(controlName: string): boolean | undefined {
  //   const control = this.formAuth.get(controlName);
  //   return (control?.dirty || control?.touched) ? control?.valid : true;
  // }
  
  // validationClass(controlName:string, className:string):string{
  //   console.log(`Controlname: ${controlName} | ${this.validation(controlName)}`);
  //   return this.validation(controlName) ? `ng-invalid ng-dirty ${className}` : className;
  // }

  // validationClassPassword(controlName:string, className:string){
  //   return this.validation(controlName) ? className : `ng-invalid ng-dirty ${className}`;
  // }

}
