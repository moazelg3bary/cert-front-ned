import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DomSanitizer } from '@angular/platform-browser';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { Toaster } from 'ngx-toast-notifications';

@Component({
  selector: 'app-select-profile-picture',
  templateUrl: './select-profile-picture.component.html',
  styleUrls: ['./select-profile-picture.component.scss'],
  providers: [AuthService]
})
export class SelectProfilePictureComponent implements OnInit {

  data: any = {};
  files: any = [];
  allowedExt: any[] = ['png', 'jpg', 'jpeg'];
  avatar: any;
  avatar_background: any = '';
  loading: boolean;

  constructor(private router: Router,
    private location: Location,
    private route: ActivatedRoute,
    private authService: AuthService,
    private cdr: ChangeDetectorRef,
    private sanitization: DomSanitizer,
    private toast: Toaster) { }

  ngOnInit() {
    this.data = JSON.parse(JSON.stringify(this.route.snapshot.queryParams));
  }

  navTo(page) {
    this.router.navigate([page]);
  }

  fileSelected(event) {
    if (this.allowedExt.includes(event[0].name.split('.').pop())) {
      this.files = event[0];

      let self = this;
      var reader = new FileReader();
      reader.onload = function () {
        self.avatar_background = self.sanitization.bypassSecurityTrustStyle(`url(${reader.result})`);
        self.avatar = reader.result;
      };
      reader.readAsDataURL(this.files);
    }
  }

  uploadBase64(avatar) {
    this.authService.upload({ avatar }).subscribe((res: any) => {
      this.loading = false;
    })
  }

  submit() {
    this.loading = true;
    this.complete(() => this.avatar ? () => this.uploadBase64(this.avatar) : () => this.navTo('dashboard'));
  }

  skip() {
    this.complete(() => this.navTo('dashboard'));
  }

  complete(callback?) {
    this.authService.completeProfile(this.data).subscribe((res: any) => {
      localStorage.setItem('iprotect__user', JSON.stringify(res.data));
      if(callback) callback();
    }, (err: any) => {
      let errors = err.error.errors;
      let errorString = '';
      for (let k in errors) {
        errorString += errors[k][0] + '\n';
      }
      this.toast.open({text: errorString, type: 'danger'});
      this.loading = false;
    })
  }



  back() {
    this.location.back();
  }

}
