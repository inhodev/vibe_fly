import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors({
    origin: [
      'http://localhost:5000',
      '{https://port-next-vibe-fly-mhg0g6lx57507535.sel3.cloudtype.app/}',
    ],
    credentials: true,
  });
  
  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
