import { CreateNoteDto } from '../dto/create-note.dto'
import { v4 as uuidv4 } from 'uuid'

export class Note {
  noteId: string
  title?: string
  content: string
  createAt: Date
  updateAt?: Date

  static newInstanceFromDTO(data: CreateNoteDto) {
    const result = new Note()
    result.noteId = uuidv4()
    result.content = data.content
    result.title = data.title
    result.createAt = new Date()

    return result
  }

  static newInstanceFromDynamoDBObject(data: any): Note {
    const result = new Note()
    result.noteId = data.noteId.S
    result.title = data?.title?.S
    result.content = data.content.S
    result.createAt = new Date(Number(data.createAt.N))
    if (data.updateAt) {
      result.updateAt = new Date(Number(data.updateAt.N))
    }

    return result
  }
}
