import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {

  constructor(private http: HttpClient) { }

  public getCertificates() {
    return this.http.get('certificate');
  }

  public getCertificateById(id) {
    return this.http.get('certificate/' + id);
  }

  public newCertificate(data) {
    return this.http.post('certificate', data);
  }

  public upload(data) {
    const headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.post('certificate/upload', data, { headers: headers });
  }

  public getDrafts() {
    let drafts = localStorage['iprotect__drafts'] || '[]';
    drafts = JSON.parse(drafts);
    return drafts;
  }

  public getDraftById(id) {
    let drafts = this.getDrafts();
    return drafts.find((d) => d.id == id);
  }

  public saveDraftById(draft, id) {
    let drafts = this.getDrafts();
    drafts = drafts.map((d) => {
      if(d.id == id) {
        d = draft;
        console.log(d);
      }
      return d;
    })
    console.log(drafts);
    localStorage['iprotect__drafts'] = JSON.stringify(drafts);
  }

  public deleteDraftById(id) {
    let drafts = this.getDrafts();
    drafts = drafts.filter((d) => d.id !== id);
    localStorage['iprotect__drafts'] = JSON.stringify(drafts);
  }

  public saveDraft(steps, currentStep, draftId = null) {
    if(draftId) {
      let draft = this.getDraftTemplate(steps, currentStep);
      this.saveDraftById(draft, draftId);
      console.log('esxisting');
      return;
    }
    let title = steps[0].fields['title'];
    if(!title) return;
    let drafts = this.getDrafts();
    let draft = this.getDraftTemplate(steps, currentStep);
    drafts.push(draft);
    localStorage['iprotect__drafts'] = JSON.stringify(drafts);
  }

  private getDraftTemplate(steps, currentStep) {
    let title = steps[0].fields['title'];
    return {
      id: uuid.v4(),
      title: title,
      created_at: new Date().getTime(),
      currentStep: currentStep,
      steps: steps
    }
  }
}
