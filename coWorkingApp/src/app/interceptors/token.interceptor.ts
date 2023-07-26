import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private tokenService: TokenService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // request = this.addHeaders(request)
    return next.handle(request);
  }

  // private addHeaders(request: HttpRequest<any>) {
	// 	let token: string | null = '';
  //   token = this.tokenService.getToken();
	// 	if (token) {
	// 	  return request.clone({
  //       setHeaders: {
  //           Authorization: `Bearer ${token}`
  //         }
  //     });
  //   } else {
	// 	  return request;
	// 	}
  // }
}
