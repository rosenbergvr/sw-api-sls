import { Injectable } from '@nestjs/common'
import { CreateNoteDto } from './dto/create-note.dto'
import { NotesRepository } from './notes.repository'
import { Note } from './entities/note.entity'
import { UpdateNoteDto } from './dto/update-note.dto'

@Injectable()
export class NotesService {
  constructor(private readonly repository: NotesRepository) {}

  public async create(createNoteDto: CreateNoteDto) {
    return await this.repository.upsertOne(
      Note.newInstanceFromDTO(createNoteDto)
    )
  }

  public async findAll() {
    return await this.repository.findAll()
  }

  public async findOne(noteId: string) {
    return await this.repository.findById(noteId)
  }

  public async remove(noteId: string) {
    return await this.repository.deleteById(noteId)
  }

  public async update(noteId: string, updateNoteDto: UpdateNoteDto) {
    const existNote = await this.repository.findById(noteId)
    if (updateNoteDto.content) {
      existNote.content = updateNoteDto.content
    }
    if (updateNoteDto.title) {
      existNote.title = updateNoteDto.title
    }

    existNote.updateAt = new Date()

    return this.repository.upsertOne(existNote)
  }
}
