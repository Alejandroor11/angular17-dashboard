import { Component, Input, Signal, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
})
export class TitleComponent {
  @Input({ required: true }) title!: string | Signal<string>;
  @Input({ transform: booleanAttribute }) withShadow: boolean = true;
}
