import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../shared/services/authentication.service';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss'
})
export default class AuthenticationComponent {
  #formBuilder = inject(FormBuilder);
  #authenticationService = inject(AuthenticationService);

  public submitted: boolean = false;
  public msgError!: string;

  public form = this.#formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  public onSubmit() {
    this.submitted = true;
    let obj = {
      email: this.form.value.email,
      password: this.form.value.password
    }

    if (this.form.valid) {
      this.#authenticationService.sign(obj)
        .subscribe({
          next: (res) => res,
          error: (e) => (this.msgError = e),
        })
    }
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

}
