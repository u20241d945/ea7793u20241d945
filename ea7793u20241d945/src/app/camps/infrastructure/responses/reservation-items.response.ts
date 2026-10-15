import { BaseResponse } from '../../../shared/infrastructure/base-response';
import { ReservationItemResource } from '../resources/reservation-item.resource';

/**
 * Response envelope supported by the trailquest quality endpoint.
 *
 * @author u20241d945
 */
export interface ReservationItemsResponse extends BaseResponse {
  reservationItems: ReservationItemResource[];
}
