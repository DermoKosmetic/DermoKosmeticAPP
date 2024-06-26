import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../enviroment/enviroment';

import { catchError, map, Observable, throwError } from 'rxjs';
import { LoginRequest } from '../../models/login-request.model';
import { LoginResponse } from '../../models/login-response.model';
import { Profile } from '../../models/profile.model';
import { UpdateProfile } from '../../models/update-psw.model';
import { SignUp } from '../../models/signup-request.model';

const authKey = 'banking_auth';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private http = inject(HttpClient);
  private _auth = signal<LoginResponse | null>(null);

  auth = computed(() => this._auth());

  constructor() {
    const authString = localStorage.getItem(authKey);

    if (authString) {
      this._auth.set(JSON.parse(authString));
    }
  }

  getAllUsers(): Observable<Profile[]> {
    return this.http.get<Profile[]>(`${environment.apiUrl}/users`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getUserByUsername(username: string): Observable<Profile> {
    return this.http.get<Profile>(`${environment.apiUrl}/users/username/${username}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getUserById(id: number): Observable<Profile> {
    return this.http.get<Profile>(`${environment.apiUrl}/users/id/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }



  validateUser(LoginRequest: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${environment.apiUrl}/users/login`, LoginRequest)
      .pipe(
        map(response => {
          if (response) {
            localStorage.setItem(authKey, JSON.stringify(response));
            this._auth.set(response);
          }
          return response;
        }),
        catchError(this.handleError)
      );
  }

  deleteUser(LoginRequest: LoginRequest): Observable<void> {
    return this.http.request<void>('delete', `${environment.apiUrl}/users`, { body: LoginRequest })
      .pipe(
        catchError(this.handleError)
      );
  }

  updateUser(username: string, SignUp: SignUp): Observable<Profile> {
    return this.http.put<Profile>(`${environment.apiUrl}/users/username/${username}`, SignUp)
      .pipe(
        catchError(this.handleError)
      );
  }

  patchUser(username: string, UpdateProfile: UpdateProfile): Observable<Profile> {
    return this.http.patch<Profile>(`${environment.apiUrl}/users/username/${username}`, UpdateProfile)
      .pipe(
        catchError(this.handleError)
      );
  }

  logout() {
    localStorage.removeItem(authKey);
    this._auth.set(null);
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Ocurrió un error:', error.error.message);
    return throwError(() => new Error('Algo salió mal intente de nuev'));
  }
  
  

}
