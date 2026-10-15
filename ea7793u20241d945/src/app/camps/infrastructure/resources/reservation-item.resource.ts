import { ActivityType } from '../../domain/model/adventure-camp.entity';
import { BaseResource } from '../../../shared/infrastructure/base-response';

/*
Example of a reservation item JSON representation:
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
 * Represents a trailquest quality resource returned by the REST API.
 *
 * @author u20241d945
 */
export interface ReservationItemResource extends BaseResource {
  id: number;
  adventureCampId: number;
  activityType: ActivityType;
  participantName: string;
  participants: number;
  weatherTemperature: number;
  reservedAt: string;
}
