import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-family-person',
  templateUrl: './family-person.component.html',
  styleUrls: ['./family-person.component.css']
})
export class FamilyPersonComponent implements OnInit {
  @Input() person;
  @Output() clicked = new EventEmitter();
  counter = 0;

  constructor() { }

  ngOnInit() {
  }

  increaseCounter() {
    this.counter++;
    this.clicked.emit(this.person);
  }
}
