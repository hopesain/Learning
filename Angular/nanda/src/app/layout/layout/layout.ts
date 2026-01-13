import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header';
import { SidebarComponent } from '../sidebar/sidebar';
import { FooterComponent } from '../footer/footer';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    MatButtonModule,
    MatTableModule
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})


export class Layout {
  students = [
    { id: 1, name: 'John Banda', grade: 'A', score: 87 },
    { id: 2, name: 'Mary Phiri', grade: 'B', score: 74 },
    { id: 3, name: 'Peter Mwale', grade: 'A', score: 91 },
    { id: 4, name: 'Grace Tembo', grade: 'C', score: 65 }
  ];
}
