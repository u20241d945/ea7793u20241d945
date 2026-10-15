import { Component } from '@angular/core';
import { Layout } from './shared/presentation/components/layout/layout';

/**
 * Root shell for Trailquest Adventure Camps Platform.
 *
 * @author u20241d945
 */
@Component({
  selector: 'app-root',
  imports: [Layout],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
