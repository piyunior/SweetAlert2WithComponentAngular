import { Component, ViewChild } from '@angular/core';
import { SwalComponent, SwalPortalTargets } from '@sweetalert2/ngx-sweetalert2';
import { User } from './entity/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('openSwal') minSwal!: SwalComponent;
  showData: boolean = false;
  user: User;
  title = 'sweet-alert2-component-angularjs';
  constructor(public readonly swalTargets: SwalPortalTargets) {
    this.user = {
      name: '',
      surname: ''
    };
  }

  checkData(info: User) {
    this.user = info;
    this.minSwal.close();
    this.showData = true;
  }
}
