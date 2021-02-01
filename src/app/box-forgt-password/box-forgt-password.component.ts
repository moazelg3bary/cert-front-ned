import { Observable } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  EventEmitter,
} from "@angular/core";

@Component({
  selector: "app-box-forgt-password",
  templateUrl: "./box-forgt-password.component.html",
  styleUrls: ["./box-forgt-password.component.scss"],
})
export class BoxForgtPasswordComponent {
  // init all props & input come form parent component
  @Input("isLoading") isLoading: boolean;

  // init all Output data send to parent component
  @Output() eventClosePopup: EventEmitter<boolean> = new EventEmitter();
  @Output() eventSucces: EventEmitter<boolean> = new EventEmitter();
  @Output() eventIsLoading: EventEmitter<boolean> = new EventEmitter();

  // names vars & types return
  email: string;

  constructor(private Auth: AuthService) {
    // init vars
    this.email = "";
  }

  // if this func run =>
  // Output eventIsLoading & eventSucces will back data to parent component
  // and run func this.Auth.forgotPassword => api will send rest password to email user
  forgotPassword() {
    this.eventIsLoading.emit(true);
    this.Auth.forgotPassword({ email: this.email }).subscribe((res: any) => {
      this.eventIsLoading.emit(false);
      const { success, message } = res;
      this.eventSucces.emit(success);
    });
  }

  // if this func run => Output eventClosePopup will back data to parent component and
  //  the app-box-forgt-password is hide
  closePopup() {
    // run this code if time api is end
    if (!this.isLoading) {
      this.eventClosePopup.emit(false);
    }
  }
}
