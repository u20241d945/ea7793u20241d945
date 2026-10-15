import { BaseEntity } from '../../../shared/domain/model/base-entity';

/** Supported trailquest categories in the camps domain. */
export type ActivityType =
  | 'hiking'
  | 'trekking'
  | 'camping'
  | 'climbing';

/**
 * Represents a physical trailquest camps.
 *
 * @author u20241d945
 */
export class AdventureCamp implements BaseEntity {
  readonly #id: number;
  readonly #name: string;
  readonly #activityType: ActivityType;

  constructor(props: { id: number; name: string; activityType: ActivityType }) {
    this.#id = props.id;
    this.#name = props.name;
    this.#activityType = props.activityType;
  }

  get id(): number {
    return this.#id;
  }

  get name(): string {
    return this.#name;
  }

  get activityType(): ActivityType {
    return this.#activityType;
  }
}
