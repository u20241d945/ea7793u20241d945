import { ActivityType } from '../../domain/model/adventure-camp.entity';
import { BaseResource } from '../../../shared/infrastructure/base-response';

/**
 * Represents a camps station resource returned by the REST API.
 *
 * @author u20241d945
 */
export interface AdventureCampResource extends BaseResource {
  id: number;
  name: string;
  activityType: ActivityType;
}
