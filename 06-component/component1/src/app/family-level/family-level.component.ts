import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-family-level',
  templateUrl: './family-level.component.html',
  styleUrls: ['./family-level.component.css']
})
export class FamilyLevelComponent implements OnInit {
  @Input() family;
  @Output() clicked = new EventEmitter();
  totalCounter = 0;

  constructor() { }

  ngOnInit() {
  }

  onClicked(person) {
    this.totalCounter++;
    this.clicked.emit(person);
  }

}
