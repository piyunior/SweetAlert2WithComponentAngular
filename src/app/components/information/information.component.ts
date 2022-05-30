import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { User } from 'src/app/entity/user';
import { UserEnum } from 'src/app/entity/user-enum';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  @Output() userData = new EventEmitter<User>();
  name: string = UserEnum[0];
  surname: string = UserEnum[1];

  constructor() { }

  ngOnInit(): void {
  }

  movingInformation() {
    this.userData.emit({
      name: this.name,
      surname: this.surname
    });
  }

}
