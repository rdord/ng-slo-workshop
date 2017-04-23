import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-family-tree',
  templateUrl: './family-tree.component.html',
  styleUrls: ['./family-tree.component.css']
})
export class FamilyTreeComponent implements OnInit {
  familyOne = [
    {
      firstName: 'Rika',
      lastName: 'Bordebic',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      connection: 'me',
      level: 1
    },
    {
      firstName: 'Rika',
      lastName: 'Bordebic',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      connection: 'me',
      level: 1
    }
  ]

  familyTwo = [
    {
      firstName: 'Borka',
      lastName: 'Bordebic',
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
      connection: 'mother',
      level: 2
    },
    {
      firstName: 'Borec',
      lastName: 'Bordebic',
      image: 'https://randomuser.me/api/portraits/women/4.jpg',
      connection: 'father',
      level: 2
    }
  ]

  familyThree = [
    {
      firstName: 'Prabormama',
      lastName: 'Ordebic',
      image: 'https://randomuser.me/api/portraits/women/5.jpg',
      connection: 'gradmother',
      level: 3
    },
    {
      firstName: 'Praborekek',
      lastName: 'Bordebic',
      image: 'https://randomuser.me/api/portraits/women/6.jpg',
      connection: 'gradfather',
      level: 3
    },
    {
      firstName: 'Prebormama',
      lastName: 'Aordebic',
      image: 'https://randomuser.me/api/portraits/women/7.jpg',
      connection: 'gradmother',
      level: 3
    },
    {
      firstName: 'Praborakek',
      lastName: 'Bordebic',
      image: 'https://randomuser.me/api/portraits/women/8.jpg',
      connection: 'gradfather',
      level: 3
    }
  ]

  family = [ this.familyOne, this.familyTwo, this.familyThree ]
  totalCounter = 0;
  lovedMember = {};

  constructor() { }

  ngOnInit() {
  }

  onClicked(member) {
    this.totalCounter++;
    this.lovedMember = member;
  }
}
