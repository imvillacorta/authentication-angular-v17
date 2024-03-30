import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  #urlApi: string = environment.urlApi;
  #http = inject(HttpClient);
  #router = inject(Router);

  public sign(payload: { email: string | null | undefined; password: string | null | undefined }): Observable<any> {
    return this.#http
      .post<{ token: string }>(`${this.#urlApi}/sign`, payload)
      .pipe(
        map((res) => {
          localStorage.removeItem('access_token');
          localStorage.setItem('access_token', res.token);
          return this.#router.navigate(['home']);
        }),
        catchError((err) => {
          return throwError(() => err.error.message);
        })
      )
  }

  public logout() {
    localStorage.removeItem('access_token');
    return this.#router.navigate(['']);
  }
}
