import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './change-detection.component.html',
  styles: ``
})
export default class ChangeDetectionComponent {
  currentFramework = computed<string>((): string => {
    return `Change Detection - ${this.frameworkAsSignal().name}`
  })
  frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  })
  frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016,
  }

  constructor() {
    setTimeout(() => {
      this.frameworkAsSignal.update(value => ({
        ...value,
        name: 'Vue'
      }))
    }, 3000)
  }
}
