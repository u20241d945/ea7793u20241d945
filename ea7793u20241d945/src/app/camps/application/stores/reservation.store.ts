import { inject, Injectable, signal } from '@angular/core';
import { finalize, Observable, tap } from 'rxjs';
import { ReservationItem } from '../../domain/model/reservation-item.entity';
import { CreateReservationItemRequest } from '../../infrastructure/requests/create-reservation-item.request';
import { MonitoringApiService } from '../../infrastructure/services/monitoring-api.service';

/**
 * Manages trailquest reservation collection state with Angular Signals.
 *
 * @author u20241d945
 */
@Injectable({ providedIn: 'root' })
export class ReservationStore {
  private readonly api = inject(MonitoringApiService);
  private readonly itemsSignal = signal<ReservationItem[]>([]);
  private readonly loadingSignal = signal(false);
  private readonly errorSignal = signal(false);

  readonly items = this.itemsSignal.asReadonly();
  readonly loading = this.loadingSignal.asReadonly();
  readonly hasError = this.errorSignal.asReadonly();

  /** Loads all records from the local REST API. */
  load(): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(false);
    this.api.getItems()
      .pipe(finalize(() => this.loadingSignal.set(false)))
      .subscribe({
        next: items => this.itemsSignal.set(items),
        error: () => this.errorSignal.set(true)
      });
  }

  /** Creates a record and updates local state after the API confirms it. */
  create(request: CreateReservationItemRequest): Observable<ReservationItem> {
    return this.api.createItem(request).pipe(
      tap(created => this.itemsSignal.update(items => [...items, created]))
    );
  }
}
