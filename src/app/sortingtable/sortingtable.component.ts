import { Data } from './../mock-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sortingtable',
  templateUrl: './sortingtable.component.html',
  styleUrls: ['./sortingtable.component.scss']
})
export class SortingtableComponent implements OnInit {
  elements: any;
  sortDirection: string;
  asc: string;
  desc: string;
  constructor() {
    this.elements = Data;
    this.asc = '../../assets/images/iconfinder_arrow-down-01_186411.svg';
    this.desc = '../../assets/images/iconfinder_arrow-up-01_186407.svg';
    this.sortDirection = this.asc;
  }

  sort(event) {
    if (event === this.asc) {
      this.sortDirection = this.desc;
    } else {
      this.sortDirection = this.asc;
    }
    console.log(event);
  }

  ngOnInit() {
  }
}
