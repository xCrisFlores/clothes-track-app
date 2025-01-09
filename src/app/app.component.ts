import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestapiComponent } from "./Components/testapi/testapi.component";
import { ClotheFormComponent } from "./Components/clothe-form/clothe-form.component";

@Component({
  selector: 'app-root',
  imports: [TestapiComponent, ClotheFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clothes-track-app';
}
