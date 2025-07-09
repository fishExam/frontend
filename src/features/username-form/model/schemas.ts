import { z } from 'zod';

import { userRegisterSchema } from '@/entities/user';

export const usernameUserSchema = userRegisterSchema().pick({ username: true });

export type TUsernameUserSchema = z.infer<typeof usernameUserSchema>;
