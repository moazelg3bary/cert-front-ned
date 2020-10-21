import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CertificatesService } from '../services/certificates.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [CertificatesService, AuthService]
})
export class DashboardComponent implements AfterViewInit {

  showDashboard: any = false;
  certificates: any[] = [];
  loading: boolean = true;
  search: string = '';
  user: any = {};
  drafts: any[] = [];

  constructor(private router: Router, private certificatesService: CertificatesService, private authService: AuthService) { }

  ngAfterViewInit() {
    this.authService.me().subscribe((res: any) => {
      this.user = res.data;
    })
    this.certificatesService.getCertificates().subscribe((res: any) => {
      this.loading = false;
      this.certificates = res.data;
      this.drafts = this.getDrafts();
    })
  }

  getDrafts() {
    let drafts = localStorage['iprotect__drafts'] || '[]';
    console.log(drafts);
    drafts = JSON.parse(drafts);
    return drafts;
  }

  navTo(page) {
    this.router.navigate([page]);
  }

}
