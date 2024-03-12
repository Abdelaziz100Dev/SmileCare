import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { throwError as observableThrowError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {env} from "../../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getData(source: string) {
    return this.http.get(source).pipe(
      tap((res: any) => res),
      catchError(this.handleError)
    );
  }
  getDataFromRemoteSource(source: string) {
    console.log("source : ",source, " env.host : ",env.host + source);
    return this.http.get(env.host + source).pipe(
        tap((res: any) => res),
        catchError(this.handleError)
    );
  }

  sendData(source: string,data:any) {
    return this.http.post(env.host + source,data).pipe(
      tap((res: any) => res),
      catchError(this.handleError)
    );
  }
  putData(source: string,data:any) {
    return this.http.put(env.host + source,data).pipe(
      tap((res: any) => res),
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    return observableThrowError(error.error || 'Server error');
  }

  delete(url: string) {
    // return this.http.delete(env.host + url, { observe: 'response' }).pipe(
    //   tap((res: any) => res),
    //   catchError(this.handleError)
    // );
    return this.http.delete(env.host + url, { observe: 'response',responseType: 'text' });

  }
}
