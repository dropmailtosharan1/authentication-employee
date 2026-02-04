import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent {
  readonly dialog = inject(MatDialog);
  readonly snackBar = inject(MatSnackBar);
  showPopup = false;
showPassword = false;

  user = {
    name: 'Chinni Krishna',
    bio: 'Angular developer & UI designer.',
  };

  openDialog(): void {
    const dialogRef = this.dialog.open(EditProfileComponent, {
      height: '400px',
      width: '600px',
      data: this.user,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.user = result;
        this.snackBar.open('Profile updated!', 'Close');
      }
    });
  }
  // pop-up methods
openPopup() {
  this.showPopup = true;
}

closePopup() {
  this.showPopup = false;
}

toggleShowPassword() {
  this.showPassword = !this.showPassword;
}

}
