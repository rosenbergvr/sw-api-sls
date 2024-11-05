import { Test, TestingModule } from '@nestjs/testing'
import { NotesController } from '../../../../src/modules/notes/notes.controller'
import { NotesService } from '../../../../src/modules/notes/notes.service'
import { NotesRepository } from '../../../../src/modules/notes/notes.repository'
import { mockDeep } from 'jest-mock-extended'

describe('NotesController', () => {
  let controller: NotesController
  const repository = mockDeep<NotesRepository>()
  let service: NotesService

  beforeEach(async () => {
    service = new NotesService(repository)
    controller = new NotesController(service)

    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotesController],
      providers: [
        NotesService,
        {
          provide: NotesRepository,
          useValue: repository,
        },
      ],
    }).compile()

    service = module.get<NotesService>(NotesService)
    controller = module.get<NotesController>(NotesController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
