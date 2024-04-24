import { Inject, Injectable } from '@nestjs/common';
import { CityEntity } from './entities/city.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';

@Injectable()
export class CityService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    @InjectRepository(CityEntity)
    private readonly cityEntity: Repository<CityEntity>,
  ) {}

  async getAllCitiesByStateId(stateId: number): Promise<CityEntity[]> {
    const citiesCache: CityEntity[] = await this.cacheManager.get(
      `state_${stateId}`,
    );

    if (citiesCache) {
      return citiesCache;
    }

    const cities = await this.cityEntity.find({
      where: {
        stateId: stateId,
      },
    });

    await this.cacheManager.set(`state_${stateId}`, cities);

    return cities;
  }
}

/*
  async getAllCitiesByStateId(stateID: number): Promise<CityEntity[]> {
    return this.cityEntity.findBy({ stateId: stateID });
  }

*/
