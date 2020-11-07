import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

import { SessionInfo } from './session-info';
import { LoginData } from './login-data';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private sessionInfo = new Subject<SessionInfo>();

  constructor(private http: HttpClient) { }

  private triggerSessionInfoUpdate(): void {
    this.http.get<SessionInfo>('/api/v1/session').subscribe(it => this.sessionInfo.next(it));
  }

  getSessionInfo(): Observable<SessionInfo> {

    this.triggerSessionInfoUpdate();
    return this.sessionInfo;
  }

  postLogin(loginData: LoginData): Observable<void> {
    return this.http.post<void>('/api/v1/session/login', loginData)
      .pipe(map(it => {
        this.triggerSessionInfoUpdate();
        return it;
      }));
  }

  postLogout(): Observable<void> {
    return this.http.post<void>('/api/v1/session/logout', null)
    .pipe(map(it => {
      this.triggerSessionInfoUpdate();
      return it;
    }));
  }
}
