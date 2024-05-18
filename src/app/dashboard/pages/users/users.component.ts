import { Component, inject } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { TitleComponent } from '@shared/title/title.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [TitleComponent, RouterModule],
  templateUrl: './users.component.html',
  styles: ``
})
export default class UsersComponent {
  usersService = inject(UsersService)


}
