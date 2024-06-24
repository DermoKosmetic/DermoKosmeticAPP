import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css',
  animations: [
    trigger('dropdownAnimation', [
      state('hidden', style({
        opacity: 0,
        transform: 'translateY(-20px) rotateX(-90deg)'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'translateY(0) rotateX(0)'
      })),
      transition('hidden => visible', [
        animate('0.3s 0.1s ease-out')
      ]),
      transition('visible => hidden', [
        animate('0.3s 0.2s ease-in')
      ]),
    ]),
  ],
})
export class DropdownComponent {
  showMenu = false;

  constructor() {}

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  get menuState() {
    return this.showMenu ? 'visible' : 'hidden';
  }
}
