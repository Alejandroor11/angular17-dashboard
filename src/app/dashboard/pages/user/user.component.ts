import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleComponent } from '@shared/title/title.component';
import { User } from '../../../interfaces/req-response';
import { toSignal } from '@angular/core/rxjs-interop'
import { switchMap } from 'rxjs';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './user.component.html',
  styles: ``
})
export default class UserComponent {
  private route = inject(ActivatedRoute);
  private usersService = inject(UsersService);
  user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.usersService.getUserById(id))
    )
  )
  titleLabel = computed(() => {
    if (this.user()) {
      return `${this.user()?.first_name} ${this.user()?.last_name}`
    }
    return 'User Information'
  })

  constructor() {

  }
}
