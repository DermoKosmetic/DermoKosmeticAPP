import {Component, Input} from '@angular/core';
import {WriterModel} from "../../models/writer.model";


@Component({
  selector: 'app-writer-card',
  templateUrl: './writer-card.component.html',
  styleUrl: './writer-card.component.css'
})
export class WriterCardComponent {
  @Input() writer!: WriterModel;

}
