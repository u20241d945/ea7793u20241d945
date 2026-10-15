import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { BaseApiEndpoint } from '../../../shared/infrastructure/base-api-endpoint';
import { AdventureCamp } from '../../domain/model/adventure-camp.entity';
import { AdventureCampAssembler } from '../assemblers/adventure-camp.assembler';
import { AdventureCampResource } from '../resources/adventure-camp.resource';
import { AdventureCampsResponse } from '../responses/adventure-camps.response';

/**
 * Endpoint client for trailquest camps station operations.
 *
 * @author u20241d945
 */
export class AdventureCampsApiEndpoint extends BaseApiEndpoint<
  AdventureCamp,
  AdventureCampResource,
  AdventureCampsResponse,
  AdventureCampAssembler
> {
  constructor(http: HttpClient) {
    super(
      http,
      `${environment.monitoringApiBaseUrl}${environment.adventureCampsEndpointPath}`,
      new AdventureCampAssembler()
    );
  }
}
