import { Component } from '@angular/core';
import { MainComponent } from './components/main/main.component';
import { BottomSectionComponent } from './components/bottom-section/bottom-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainComponent, BottomSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  scrollToTop() {
    window.scrollTo(0, 0);
  }

}
