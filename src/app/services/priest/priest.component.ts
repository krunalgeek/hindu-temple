import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PriestServiceListComponent } from './priest-service-list/priest-service-list.component';

@Component({
  selector: 'app-priest',
  templateUrl: './priest.component.html',
  styleUrls: ['./priest.component.scss']
})
export class PriestComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  checkList() {
    const dialogRef = this.dialog.open(PriestServiceListComponent, {
      height: '80vh'
    });
  }
  ngOnInit() {
  }

}
