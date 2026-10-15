import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TranslatePipe } from '@ngx-translate/core';
import { ReservationItem } from '../../../domain/model/reservation-item.entity';

/**
 * Displays the summary of one trailquest quality record in a Material card.
 *
 * @author u20241d945
 */
@Component({
  selector: 'app-trailquest-quality-summary',
  imports: [DatePipe, MatCardModule, TranslatePipe],
  templateUrl: './reservation-summary.html',
  styleUrl: './reservation-summary.css'
})
export class ReservationSummary {
  readonly item = input.required<ReservationItem>();
}
