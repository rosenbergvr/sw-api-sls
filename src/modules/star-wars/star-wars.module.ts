import { Module } from '@nestjs/common'
import { StarWarsController } from './star-wars.controller'
import { StarWarsService } from './star-wars.service'
import { HttpModule } from '@nestjs/axios'
import { PlanetMapper } from './mapper/planet.mapper'

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [StarWarsController],
  providers: [StarWarsService, PlanetMapper],
})
export class StarWarsModule {}
