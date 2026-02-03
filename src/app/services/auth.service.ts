import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api = 'http://localhost:3000';
  private tokenKey = 'EMP_TOKEN';

  constructor(private http: HttpClient) {}

  signup(name: string, email: string, password: string) {
    const user = { name, email, password, token: `token-${Date.now()}` };
    return this.http.post(`${this.api}/users`, user).pipe(
      tap((res: any) => this.setToken(res.token))
    );
  }

  login(email: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(`${this.api}/users?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`)
      .pipe(
        map(users => {
          const u = users[0];
          if (u) {
            this.setToken(u.token);
            return true;
          }
          return false;
        })
      );
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
  }

  private setToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  token(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
}