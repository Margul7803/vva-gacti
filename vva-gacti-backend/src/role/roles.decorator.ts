import { SetMetadata } from '@nestjs/common';

export const PROFILS_KEY = 'profils';
export const Profils = (...profils) => SetMetadata(PROFILS_KEY, profils);
