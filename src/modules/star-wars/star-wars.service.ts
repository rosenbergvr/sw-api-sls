import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'
import { Planet } from './dto/planet.dto'
import { lastValueFrom, map } from 'rxjs'

@Injectable()
export class StarWarsService {
  constructor(private readonly httpService: HttpService) {}

  public async findPlanet(id: string): Promise<Planet> {
    const url = `https://swapi.py4e.com/api/planets/${id}` //single first planet for demo
    try {
      const response = await this.httpService
        .get<Planet>(url)
        .pipe(map(res => res.data))

      return lastValueFrom(response)
    } catch (error) {
      console.error(error)

      throw new HttpException(
        {
          message: 'SWAPI_ERROR',
          error: 'service_swapi_not_available',
        },
        HttpStatus.SERVICE_UNAVAILABLE
      )
    }
  }
}
