import { Test, TestingModule } from '@nestjs/testing'
import { UserController } from '../../../../src/modules/user/user.controller'
import { UserService } from '../../../../src/modules/user/user.service'

describe('UserController', () => {
  let controller: UserController
  let service: UserService

  beforeEach(async () => {
    service = new UserService()
    controller = new UserController(service)

    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile()

    service = module.get<UserService>(UserService)
    controller = module.get<UserController>(UserController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
