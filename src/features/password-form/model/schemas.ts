import { z } from 'zod';

import { userRegisterSchema } from '@/entities/user';

export const passwordUserSchema = userRegisterSchema().pick({ password: true });

export type TPasswordUserSchema = z.infer<typeof passwordUserSchema>;
