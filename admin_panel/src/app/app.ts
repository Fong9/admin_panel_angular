import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Right } from './right/right';
import { Left } from './left/left';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Left, Right],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('admin_panel');
}
