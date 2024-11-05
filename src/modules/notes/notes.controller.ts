import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common'
import { NotesService } from './notes.service'
import { CreateNoteDto } from './dto/create-note.dto'
import { UpdateNoteDto } from './dto/update-note.dto'

@Controller('notes')
export class NotesController {
  constructor(private readonly service: NotesService) {}

  @Post()
  @HttpCode(200)
  public async create(@Body() createNoteDto: CreateNoteDto) {
    return await this.service.create(createNoteDto)
  }

  @Get()
  @HttpCode(200)
  public async findAll() {
    return await this.service.findAll()
  }

  @Get(':id')
  @HttpCode(200)
  public async findOne(@Param('id') id: string) {
    return await this.service.findOne(id)
  }

  @Delete(':id')
  @HttpCode(200)
  public async remove(@Param('id') id: string) {
    return {
      result: await this.service.remove(id),
    }
  }

  @Patch(':id')
  @HttpCode(200)
  public async update(
    @Param('id') id: string,
    @Body() updateNoteDto: UpdateNoteDto
  ) {
    return this.service.update(id, updateNoteDto)
  }
}
