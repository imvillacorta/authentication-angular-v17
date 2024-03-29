import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

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
  public submitted: boolean = false;

  public form = this.#formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  public onSubmit(){
    this.submitted = true;

    console.log(this.form);
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

}
