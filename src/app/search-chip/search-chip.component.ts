import {LiveAnnouncer} from '@angular/cdk/a11y';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  EventEmitter,
  inject,
  Input,
  model,
  Output,
  signal
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from "../material/material.module";
import {MatChipInputEvent} from "@angular/material/chips";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";

/**
 * @title Chips Autocomplete
 */
@Component({
  selector: 'app-search-chip',
  templateUrl: 'search-chip.component.html',
  styleUrl: 'search-chip.component.css',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchChipComponent {
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  readonly currentFruit = model('');
  readonly fruits = signal<string[]>([]);
  @Input() allFruits: string[] = [];
  @Output() fruitsChange = new EventEmitter<string[]>();
  readonly filteredFruits = computed(() => {
    const currentFruit = this.currentFruit().toLowerCase();
    return currentFruit
      ? this.allFruits.filter(fruit => fruit.toLowerCase().includes(currentFruit))
      : this.allFruits.slice();
  });

  readonly announcer = inject(LiveAnnouncer);

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    console.log(value);
    // Add our fruit
    if (value){
      this.fruits.update(fruits => [...fruits, value]);
      console.log(this.fruits());
    }

    // Clear the input value
    this.currentFruit.set('');
  }

  remove(fruit: string): void {
    this.fruits.update(fruits => {
      const index = fruits.indexOf(fruit);
      if (index < 0) {
        return fruits;
      }

      fruits.splice(index, 1);
      this.announcer.announce(`Removed ${fruit}`);
      this.fruitsChange.emit(this.fruits());
      console.log(this.fruits());
      return [...fruits];
    });
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.update(fruits => [...fruits, event.option.viewValue]);
    this.fruitsChange.emit(this.fruits());
    this.currentFruit.set('');
    event.option.deselect();
  }
}
