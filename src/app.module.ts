import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { StarWarsModule } from './modules/star-wars/star-wars.module'
import { ConfigModule } from '@nestjs/config'
import { UserModule } from './modules/user/user.module'
import { NotesModule } from './modules/notes/notes.module'

const env = process.env.NODE_ENV || 'development'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `environments/${env}.env`,
    }),
    StarWarsModule,
    UserModule,
    NotesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
