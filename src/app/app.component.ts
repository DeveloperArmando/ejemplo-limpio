import { Component } from '@angular/core';
import {LoginTestService} from "./login-test.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private loginTestService: LoginTestService) {
    loginTestService.connectTokenResponse();
  }

  title = 'ejemplo-limpio';
}
