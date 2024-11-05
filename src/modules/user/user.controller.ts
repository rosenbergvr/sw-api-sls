import { Controller, Get, HttpCode } from '@nestjs/common'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get('')
  @HttpCode(200)
  public async User() {
    return 'hola user'
  }
}
