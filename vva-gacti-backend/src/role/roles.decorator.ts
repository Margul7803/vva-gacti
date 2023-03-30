import { SetMetadata } from '@nestjs/common';

export const PROFILS_KEY = 'profils';
export const Roles = (...roles) => SetMetadata(PROFILS_KEY, roles);
