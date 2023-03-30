import { DynamicModule, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { CompteModule } from 'src/compte/compte.module';
import { AuthModuleOptions } from './auth.module-definition';
import { AuthController } from './auth.controller';

@Module({})
export class AuthModule {
  static registerAsync(authConfig: AuthModuleOptions): DynamicModule {
    return {
      module: AuthModule,
      imports: [
        CompteModule,
        PassportModule.register({
          defaultStrategy: authConfig.defaultStrategy,
          property: 'compte',
          session: authConfig.session,
        }),
        JwtModule.register({
          secret: authConfig.secretKey,
          signOptions: {
            expiresIn: authConfig.epiresIn,
          },
        }),
      ],
      controllers: [AuthController],
      providers: [AuthService, JwtStrategy],
      exports: [AuthService],
    };
  }
}
