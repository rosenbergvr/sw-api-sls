import {
  Controller,
  Get,
  HttpCode,
  Param,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { StarWarsService } from './star-wars.service'
import { PlanetMapper } from './mapper/planet.mapper'
import { PlanetSpain } from './dto/planetSpain.dto'

@Controller('star-wars')
export class StarWarsController {
  constructor(
    private readonly service: StarWarsService,
    private readonly mapper: PlanetMapper
  ) {}

  @Get('planet/:id')
  @HttpCode(200)
  @UsePipes(new ValidationPipe({ transform: true }))
  async planet(@Param('id') idPlanet: string): Promise<PlanetSpain> {
    const planet = await this.service.findPlanet(idPlanet)
    const planetMap = this.mapper.getPlanetMapper(planet)

    return planetMap
  }
}
