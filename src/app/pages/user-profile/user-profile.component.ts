import { Component, inject } from '@angular/core';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-user-profile',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {

  readonly dialog = inject(MatDialog);
  readonly snackBar = inject(MatSnackBar);

  user = {
    name: 'Chinni Krishna',
    bio: 'Angular developer & UI designer.'
  };

  openDialog(): void {
    const dialogRef = this.dialog.open(EditProfileComponent, {
      height: '400px',
      width: '600px',
      data: this.user
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.user = result
        this.snackBar.open("Profile updated!", "Close")
      }
    })
  }

}