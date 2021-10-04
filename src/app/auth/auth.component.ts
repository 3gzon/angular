import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: "app-auth",
    templateUrl: "./auth.component.html"
})
export class AuthComponent {
    authForm: FormGroup;
    isLoginMode = true;
    ngOnInit(): void {
        this.buildForm();
    }
    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode
    }
    private buildForm(): void {
        this.authForm = new FormGroup({
            email: new FormControl(),
            password: new FormControl()
        })
        console.log(this.authForm);
    }
}