import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { ReservationStore } from '../../../application/stores/reservation.store';
import { ReservationSummary } from '../../components/reservation-summary/reservation-summary';

/**
 * Presents the home view and registered trailquest records.
 *
 * @author u20241d945
 */
@Component({
  selector: 'app-home',
  imports: [MatButtonModule, RouterLink, TranslatePipe, ReservationSummary],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  readonly store = inject(ReservationStore);

  /** Loads trailquest records when the route is opened. */
  ngOnInit(): void {
    this.store.load();
  }
}
