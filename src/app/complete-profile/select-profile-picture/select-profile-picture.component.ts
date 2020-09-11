import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-select-profile-picture',
  templateUrl: './select-profile-picture.component.html',
  styleUrls: ['./select-profile-picture.component.scss'],
  providers: [AuthService]
})
export class SelectProfilePictureComponent implements OnInit {

  data: any = {};

  constructor(private router: Router, private location: Location, private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
    this.data = JSON.parse(JSON.stringify(this.route.snapshot.queryParams));
  }

  navTo(page) {
    this.router.navigate([page]);
  }

  skip() {
    this.authService.completeProfile(this.data).subscribe((res: any) => {
      localStorage.setItem('iprotect__user', JSON.stringify(res.data));
      this.navTo('dashboard');
    }, (err: any) => {
      let errors = err.error.errors;
      let errorString = '';
      for(let k in errors) {
        errorString += errors[k][0] + '\n';
      }
      alert(errorString);
    })
  }

  back() {
    this.location.back();
  }

}
