import { Test, TestingModule } from '@nestjs/testing'
import { StarWarsService } from '../../../../src/modules/star-wars/star-wars.service'
import { HttpService } from '@nestjs/axios'
import { mockDeep } from 'jest-mock-extended'

describe('StarWarsService', () => {
  let service: StarWarsService
  const httpService = mockDeep<HttpService>()

  beforeEach(async () => {
    service = new StarWarsService(httpService)

    const module: TestingModule = await Test.createTestingModule({
      controllers: [StarWarsService],
      providers: [
        {
          provide: HttpService,
          useValue: httpService,
        },
      ],
    }).compile()

    service = module.get<StarWarsService>(StarWarsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
