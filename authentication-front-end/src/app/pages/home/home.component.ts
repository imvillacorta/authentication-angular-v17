import { Component, inject } from '@angular/core';
import { AuthenticationService } from '../../shared/services/authentication.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {

  #authenticationService = inject(AuthenticationService);

  public logout() {
    this.#authenticationService.logout();
  }

}
