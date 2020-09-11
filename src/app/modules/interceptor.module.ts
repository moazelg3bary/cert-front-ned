import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';

const SERVER = 'http://localhost:8000/api';

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(req.url.includes('countries')) return next.handle(req);
        const dupReq = req.clone({
            url: `${SERVER}/${req.url}`,
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem('iprotect__token')}`,
            }),
        });
        return next.handle(dupReq);
    }
};
@NgModule({
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: HttpsRequestInterceptor,
        multi: true
    }]
})
export class InterceptorModule { }
