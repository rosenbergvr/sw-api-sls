import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .setTitle('Api for test')
    .setDescription('Api for crud in dynamoDb and middleware service SW')
    .setVersion('1.0')
    .addTag('StarWars')
    .build()

  const documentFactory = () => SwaggerModule.createDocument(app, config)
  const customOption = {
    explorer: true,
    swaggerOptions: {
      filter: true,
      displayRequestDuration: true,
    },
  }

  SwaggerModule.setup('api-docs', app, documentFactory, customOption)

  await app.listen(process.env.PORT ?? 3000)
  console.log(`listen port : ${process.env.PORT}`)
}
bootstrap()
