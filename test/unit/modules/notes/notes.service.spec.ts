import { Test, TestingModule } from '@nestjs/testing'
import { NotesService } from '../../../../src/modules/notes/notes.service'
import { NotesRepository } from '../../../../src/modules/notes/notes.repository'
import { mockDeep } from 'jest-mock-extended'

describe('NotesService', () => {
  let service: NotesService
  const repository = mockDeep<NotesRepository>()

  beforeEach(async () => {
    service = new NotesService(repository)

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NotesService,
        {
          provide: NotesRepository,
          useValue: repository,
        },
      ],
    }).compile()

    service = module.get<NotesService>(NotesService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
