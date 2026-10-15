import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseApi } from '../../../shared/infrastructure/base-api';
import { AdventureCamp, ActivityType } from '../../domain/model/adventure-camp.entity';
import { ReservationItem } from '../../domain/model/reservation-item.entity';
import { AdventureCampsApiEndpoint } from '../endpoints/adventure-camps-api.endpoint';
import { ReservationItemsApiEndpoint } from '../endpoints/reservation-items-api.endpoint';
import { CreateReservationItemRequest } from '../requests/create-reservation-item.request';

/**
 * Provides access to camps and trailquest reservation items.
 *
 * @author u20241d945
 */
@Injectable({ providedIn: 'root' })
export class CampApiService extends BaseApi {
  private readonly http = inject(HttpClient);
  private readonly stationsEndpoint = new AdventureCampsApiEndpoint(this.http);
  private readonly itemsEndpoint = new ReservationItemsApiEndpoint(this.http);

  /** Retrieves every registered trailquest reservation item. */
  getItems(): Observable<ReservationItem[]> {
    return this.itemsEndpoint.getAll();
  }

  /** Retrieves all available camps. */
  getStations(): Observable<AdventureCamp[]> {
    return this.stationsEndpoint.getAll();
  }

  /** Retrieves the latest automatic indicators for the selected trailquest type. */
  getLatestIndicators(activityType: ActivityType): Observable<ReservationItem | null> {
    return this.itemsEndpoint.getLatestByActivityType(activityType);
  }

  /** Creates a new trailquest reservation item. */
  createItem(request: CreateReservationItemRequest): Observable<ReservationItem> {
    return this.itemsEndpoint.createFromRequest(request);
  }
}
