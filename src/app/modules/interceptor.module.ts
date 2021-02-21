import { Router } from '@angular/router';
import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const SERVER = environment.production ? 'http://iprotect-mena.com/api' : 'http://localhost:8000/api';
// const SERVER = 'http://iprotect-mena.com/api';

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {

    constructor(private router: Router) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // if (localStorage.getItem("login") == null) {
        //     this.router.navigate(["login"]);
        // }

        if(req.url.includes('countries')) return next.handle(req);
        const dupReq = req.clone({
            url: `${SERVER}/${req.url}`,
            headers: new HttpHeaders({
                'Authorization': `Bearer ${localStorage.getItem('iprotect__token')}`,
            }),
        });
        console.log(dupReq, '132131');
        console.log(localStorage.getItem("iprotect__token"), "132131");
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
