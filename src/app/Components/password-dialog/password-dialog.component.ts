import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProjectDialogComponent } from '../project-dialog/project-dialog.component';

@Component({
  selector: 'app-password-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './password-dialog.component.html',
  styleUrl: './password-dialog.component.css',
})
export class PasswordDialogComponent {
  hide = true;

  password: string = '';
  correctPassword: string = 'your-secure-password';

  constructor(
    public dialogRef: MatDialogRef<PasswordDialogComponent>,
    private readonly dialog: MatDialog
  ) {}

  validatedPassword() {
    if (this.password === this.correctPassword) {
      this.dialogRef.close(true);
      this.dialog.open(ProjectDialogComponent, {
        width: '50vw',
        hasBackdrop: true,
        backdropClass: 'bdrop',
      });
    } else {
      alert('Incorrect Password!');
    }
  }
}
