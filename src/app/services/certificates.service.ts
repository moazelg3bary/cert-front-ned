import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {

  constructor(private http: HttpClient) { }

  public getCertificates() {
    return this.http.get('certificate');
  }

  public newCertificate(data) {
    return this.http.post('certificate', data);
  }

  public upload(data) {
    const headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.post('certificate/upload', data, {headers: headers});
  }
}
