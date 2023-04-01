import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AnimationModule } from './animation/animation.module';
import { ActiviteModule } from './activite/activite.module';
import { CompteModule } from './compte/compte.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { config } from './config/config';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth/auth.service';
import { AnimationService } from './animation/animation.service';
import { ActiviteService } from './activite/activite.service';
import { CompteService } from './compte/compte.service';
import { InscriptionModule } from './inscription/inscription.module';

@Module({
  imports: [
    PrismaModule,
    AnimationModule,
    ActiviteModule,
    CompteModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    AuthModule.registerAsync({
      secretKey: new ConfigService().get<string>('SECRET_KEY'),
      defaultStrategy: 'jwt',
      session: false,
      epiresIn: new ConfigService().get<string>('EXPIRES_IN'),
    }),
    InscriptionModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    AnimationService,
    ActiviteService,
    CompteService,
    AuthService,
    JwtService,
  ],
})
export class AppModule {}
