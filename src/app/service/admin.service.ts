import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,  tap } from 'rxjs';



interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})

export class AdminService {

   private authToken: String | null   = null;

  constructor(private http : HttpClient  ) { }

  login(email : string, password : string) : Observable<LoginResponse> {
    return this.http.post<LoginResponse>('http://localhost:8080/api/v1/auth/market-admin', {email: email, password: password}).pipe(
      tap(res => {
        this.authToken = res.token;
        localStorage.setItem('authToken', this.authToken as string);
      })
    );
  }
  
}
