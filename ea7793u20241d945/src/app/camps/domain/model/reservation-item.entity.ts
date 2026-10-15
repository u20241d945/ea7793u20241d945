import { ActivityType } from './adventure-camp.entity';
import { BaseEntity } from '../../../shared/domain/model/base-entity';


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
    }
 */


/**
 * Represents a registered international reservation item.
 *
 * @author u20241d945
 * */
export class ReservationItem implements BaseEntity {
  readonly #id: number;
  readonly #adventureCampId: number;
  readonly #activityType: ActivityType;
  readonly #participantName: string;
  readonly #participants: number;
  readonly #weatherTemperature: number;
  readonly #reservedAt: string;


  constructor(props: {
    id: number;
    adventureCampId: number;
    activityType: ActivityType;
    participantName: string;
    participants: number;
    weatherTemperature: number;
    reservedAt: string;
  }) {
    this.#id = props.id;
    this.#adventureCampId = props.adventureCampId;
    this.#activityType = props.activityType as ActivityType;
    this.#participantName = props.participantName;
    this.#participants = props.participants;
    this.#weatherTemperature = props.weatherTemperature;
    this.#reservedAt = props.reservedAt;
  }

  get id(): number { return this.#id; }
  get adventureCampId(): number { return this.#adventureCampId; }
  get activityType(): ActivityType { return this.#activityType; }
  get participantName(): string { return this.#participantName; }
  get participants(): number { return this.#participants; }
  get weatherTemperature(): number { return this.#weatherTemperature; }
  get reservedAt(): string { return this.#reservedAt; }

}
