import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AuthService } from '../services/auth.service';
import { CertificatesService } from '../services/certificates.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [CertificatesService, AuthService]
})
export class DashboardComponent implements OnInit {

  showDashboard: any = false;
  certificates: any[] = [];
  loading: boolean = false;
  search: string = '';
  user: any = {};
  drafts: any[] = [];
  isOpenPopUp: boolean
  newCertificate: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private certificatesService: CertificatesService, private authService: AuthService, private loader: NgxUiLoaderService) { 
    
    // init vars
    this.isOpenPopUp = false


  }

  ngOnInit() {
    this.authService.me().subscribe((res: any) => {
      this.user = res.data;
    })
    this.route.params.subscribe((params) => {
      if(params['new']) {
        this.newCertificate = params['new'];
        return;
      }
      this.loadDashboard();
    })
  }

  loadDashboard() {
    this.loader.start();
    this.loading = true;
    this.newCertificate = false;
    this.certificatesService.getCertificates().subscribe((res: any) => {
      this.loading = false;
      // this.certificates = [];
      console.log(res)
      this.certificates = res.data;
      this.drafts = this.certificatesService.getDrafts();
      this.loader.stop();
    }, err => {
      this.loader.stop();
    })
  }

  navTo(page, params = null) {
    let route = params ? [page, params] : [page];
    this.router.navigate(route);
  }

  viewCertificate(certificate) {
    this.router.navigate(['view-certificate'], {
      queryParams: {
        id: certificate.id
      }
    });
  }

  viewCertificateNew() {
    this.viewCertificate({id: this.newCertificate});
    // this.router.navigate(['../view-certificate'], {
    //   queryParams: {
    //     id: this.newCertificate
    //   }
    // });
  }

}
