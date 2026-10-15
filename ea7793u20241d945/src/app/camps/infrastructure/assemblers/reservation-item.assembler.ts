import { ReservationItem } from '../../domain/model/reservation-item.entity';
import { BaseAssembler } from '../../../shared/infrastructure/base-assembler';
import { ReservationItemResource } from '../resources/reservation-item.resource';
import { ReservationItemsResponse } from '../responses/reservation-items.response';

/*
Example of a reservation item resource:
    {
      "id": 1,
      "adventureCampId": 1,
      "activityType": "hiking",
      "participantName": "Ana Torres",
      "participants": 12,
      "weatherTemperature": 19.5,
      "reservedAt": "2026-10-10T09:00:00-05:00"
    },
 */

/**
 * Converts trailquest quality API resources into domain entities.
 *
 * @author u20241d945
 */
export class ReservationItemAssembler implements BaseAssembler<
  ReservationItem,
  ReservationItemResource,
  ReservationItemsResponse
> {
  /** Converts one API resource into a domain entity. */
  toEntityFromResource(resource: ReservationItemResource): ReservationItem {
    return new ReservationItem({
      id: resource.id,
      adventureCampId: resource.adventureCampId,
      activityType: resource.activityType,
      participantName: resource.participantName,
      participants: resource.participants,
      weatherTemperature: resource.weatherTemperature,
      reservedAt: resource.reservedAt
    });
  }

  /** Converts a domain entity into an API resource. */
  toResourceFromEntity(entity: ReservationItem): ReservationItemResource {
    return {
      id: entity.id,
      adventureCampId: entity.adventureCampId,
      activityType: entity.activityType,
      participantName: entity.participantName,
      participants: entity.participants,
      weatherTemperature: entity.weatherTemperature,
      reservedAt: entity.reservedAt
    };
  }

  /** Converts a response envelope into domain entities. */
  toEntitiesFromResponse(response: ReservationItemsResponse): ReservationItem[] {
    return response.reservationItems.map(resource => this.toEntityFromResource(resource));
  }
}
