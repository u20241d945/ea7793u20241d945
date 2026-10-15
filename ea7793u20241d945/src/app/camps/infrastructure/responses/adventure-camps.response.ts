import { BaseResponse } from '../../../shared/infrastructure/base-response';
import { AdventureCampResource } from '../resources/adventure-camp.resource';

/**
 * Response envelope supported by the camps endpoint.
 *
 * @author u20241d945
 */
export interface AdventureCampsResponse extends BaseResponse {
  adventureCamps: AdventureCampResource[];
}
