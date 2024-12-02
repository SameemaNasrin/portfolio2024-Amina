import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Project } from '../../Common/Project';
import { PasswordDialogComponent } from '../../Components/password-dialog/password-dialog.component';
import { DataService } from '../../Shared/data.service';
import { LinkLogoComponent } from '../link-logo/link-logo.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, LinkLogoComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  isDarkTheme: boolean = true;
  @Input() project!: Project;

  constructor(private readonly dataService: DataService, private readonly dialog: MatDialog){}

  ngOnInit(): void {
    this.dataService.isDarkTheme$.subscribe((e)=>{
      this.isDarkTheme = e;
    })
  }

  openProjectDialog(){
    this.dialog.open(PasswordDialogComponent, {
      width: '50vw',
      hasBackdrop: true,
      backdropClass: 'bdrop',
    });
  }

}
