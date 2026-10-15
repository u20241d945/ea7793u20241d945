import { AdventureCamp } from '../../domain/model/adventure-camp.entity';
import { BaseAssembler } from '../../../shared/infrastructure/base-assembler';
import { AdventureCampResource } from '../resources/adventure-camp.resource';
import { AdventureCampsResponse } from '../responses/adventure-camps.response';

/**
 * Converts camps API resources into domain entities.
 *
 * @author u20241d945
 */
export class AdventureCampAssembler implements BaseAssembler<
  AdventureCamp,
  AdventureCampResource,
  AdventureCampsResponse
> {
  /** Converts one API resource into a domain entity. */
  toEntityFromResource(resource: AdventureCampResource): AdventureCamp {
    return new AdventureCamp({
      id: resource.id,
      name: resource.name,
      activityType: resource.activityType
    });
  }

  /** Converts a domain entity into an API resource. */
  toResourceFromEntity(entity: AdventureCamp): AdventureCampResource {
    return { id: entity.id, name: entity.name, activityType: entity.activityType };
  }

  /** Converts a response envelope into domain entities. */
  toEntitiesFromResponse(response: AdventureCampsResponse): AdventureCamp[] {
    return response.adventureCamps.map(resource => this.toEntityFromResource(resource));
  }
}
