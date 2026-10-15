import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { BaseApiEndpoint } from '../../../shared/infrastructure/base-api-endpoint';
import { ActivityType } from '../../domain/model/adventure-camp.entity';
import { ReservationItem } from '../../domain/model/reservation-item.entity';
import { ReservationItemAssembler } from '../assemblers/reservation-item.assembler';
import { CreateReservationItemRequest } from '../requests/create-reservation-item.request';
import { ReservationItemResource } from '../resources/reservation-item.resource';
import { ReservationItemsResponse } from '../responses/reservation-items.response';

/**
 * Endpoint client for trailquest reservation item operations.
 *
 * @author u20241d945
 */
export class ReservationItemsApiEndpoint extends BaseApiEndpoint<
  ReservationItem,
  ReservationItemResource,
  ReservationItemsResponse,
  ReservationItemAssembler
> {
  constructor(http: HttpClient) {
    super(
      http,
      `${environment.monitoringApiBaseUrl}${environment.reservationItemsEndpointPath}`,
      new ReservationItemAssembler()
    );
  }

  /** Retrieves the latest indicators registered for a trailquest type. */
  getLatestByActivityType(activityType: ActivityType): Observable<ReservationItem | null> {
    const query = `?activityType=${encodeURIComponent(activityType)}&_sort=year&_order=desc&_limit=1`;
    return this.http.get<ReservationItemResource[]>(`${this.endpointUrl}${query}`).pipe(
      map(resources => resources[0]
        ? this.assembler.toEntityFromResource(resources[0])
        : null),
      catchError(this.handleError('Failed to fetch trailquest reservation indicators'))
    );
  }

  /** Creates a record from the command payload used by the form. */
  createFromRequest(request: CreateReservationItemRequest): Observable<ReservationItem> {
    return this.http.post<ReservationItemResource>(this.endpointUrl, request).pipe(
      map(resource => this.assembler.toEntityFromResource(resource)),
      catchError(this.handleError('Failed to create trailquest reservation item'))
    );
  }
}
