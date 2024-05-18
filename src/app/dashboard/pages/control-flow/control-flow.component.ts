import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

type Grade = 'A' | 'B' | 'F';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {
  showContent = signal(false);
  grade = signal<Grade>("A");
  frameworks = signal(['Angular', 'Vue', 'Svelte', 'Qwik', 'React']);
  frameworksEmpty = signal([]);

  toggleContent() {
    this.showContent.update(value => !value);
  }
}
