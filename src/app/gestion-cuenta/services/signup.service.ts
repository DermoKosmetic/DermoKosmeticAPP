import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../enviroment/enviroment';
import { catchError, map, Observable, throwError } from 'rxjs';
import { LoginRequest } from '../../models/login-request.model';
import { LoginResponse } from '../../models/login-response.model';
import { Profile } from '../../models/profile.model';
import { UpdateProfile } from '../../models/update-psw.model';
import { SignUpRequest } from '../../models/signup-request.model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {


  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }


  createUser(SignUp: SignUpRequest): Observable<Profile> {
    return this.http.post<Profile>(`${this.baseUrl}users`, SignUp)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    const errorMessage = error.error?.message || 'Algo salió mal, intente de nuevo.';
    console.error('Ocurrió un error:', errorMessage);
    return throwError(() => new Error(errorMessage));
  }



}
