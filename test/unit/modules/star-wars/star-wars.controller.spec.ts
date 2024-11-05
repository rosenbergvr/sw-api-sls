import { Test, TestingModule } from '@nestjs/testing'
import { StarWarsService } from '../../../../src/modules/star-wars/star-wars.service'
import { StarWarsController } from '../../../../src/modules/star-wars/star-wars.controller'
import { PlanetMapper } from '../../../../src/modules/star-wars/mapper/planet.mapper'
import { HttpService } from '@nestjs/axios'
import { mockDeep } from 'jest-mock-extended'

describe('StarWarsController', () => {
  let controller: StarWarsController
  let service: StarWarsService
  let mapper: PlanetMapper
  const httpService = mockDeep<HttpService>()

  beforeEach(async () => {
    mapper = new PlanetMapper()
    service = new StarWarsService(httpService)
    controller = new StarWarsController(service, mapper)

    const module: TestingModule = await Test.createTestingModule({
      controllers: [StarWarsController],
      providers: [
        StarWarsService,
        PlanetMapper,
        {
          provide: HttpService,
          useValue: httpService,
        },
      ],
    }).compile()

    service = module.get<StarWarsService>(StarWarsService)
    mapper = module.get<PlanetMapper>(PlanetMapper)
    controller = module.get<StarWarsController>(StarWarsController)
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
