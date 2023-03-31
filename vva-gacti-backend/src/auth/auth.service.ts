import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CompteService } from 'src/compte/compte.service';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtPayload } from './jwt.strategy';
import { Compte } from '@prisma/client';
import { IToken } from './dto/token.dao';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly compteService: CompteService,
    private readonly configService: ConfigService,
  ) {}
  async login(loginUserDto: LoginUserDto): Promise<any> {
    // find user in db
    const compte = await this.compteService.isPasswordMatch(
      loginUserDto.username,
      loginUserDto.password,
    );

    // generate and sign token
    const token = this._createToken(compte);

    return {
      data: {
        compte,
        token,
      },
    };
  }

  private _createToken({ username, type }): IToken {
    const compte: JwtPayload = { username, type };
    const authorization = this.jwtService.sign(compte);
    return {
      expiresIn: this.configService.get<string>('EXPIRES_IN'),
      authorization,
    };
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    const compte = await this.compteService.findByPayload(payload);
    if (!compte) {
      throw new HttpException('INVALID_TOKEN', HttpStatus.UNAUTHORIZED);
    }
    return compte;
  }
}

export interface RegistrationStatus {
  success: boolean;
  message: string;
  data?: Compte;
}
export interface RegistrationSeederStatus {
  success: boolean;
  message: string;
  data?: Compte[];
}
