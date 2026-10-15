import { ActivityType } from '../../domain/model/adventure-camp.entity';

/*
Example of a trailquest reservation item:
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
 * Describes the payload sent when a new trailquest reservation item is created.
 *
 * @author u20241d945
 */
export interface CreateReservationItemRequest {
  id: number;
  adventureCampId: number;
  activityType: ActivityType;
  participantName: string;
  participants: number;
  weatherTemperature: number;
  reservedAt: string;
}
