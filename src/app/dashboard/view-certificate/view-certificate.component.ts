import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CertificatesService } from 'src/app/services/certificates.service';

import { environment } from 'src/environments/environment';
const SERVER = environment.production ? 'http://iprotect-mena.com/api' : 'http://localhost:8000/api';

@Component({
  selector: 'app-view-certificate',
  templateUrl: './view-certificate.component.html',
  styleUrls: ['./view-certificate.component.scss']
})
export class ViewCertificateComponent implements OnInit {
  certificate: any = {};
  loading: boolean = true;

  constructor(private router: Router, private location: Location, private route: ActivatedRoute, private certificateService: CertificatesService, private loader: NgxUiLoaderService) { }

  ngOnInit() {
    this.loader.start();
    this.route.params.subscribe((params) => {
      this.certificateService.getCertificateById(params['id']).subscribe((res: any) => {
        this.certificate = res.data;
        console.log(res);
        this.loading = false;
        this.loader.stop();
      })      
    }); 

    console.log(this.certificate);
  }

  download() {
    window.open(SERVER + '/view/certificate/' + this.certificate.id + '?access_token=' + localStorage.getItem('iprotect__token'), "_blank");
  }

  back(path: string) {
    this.router.navigate([path])
  }

}
