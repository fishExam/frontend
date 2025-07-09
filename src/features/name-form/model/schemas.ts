import { z } from 'zod';

import { userRegisterSchema } from '@/entities/user';

export const nameUserSchema = userRegisterSchema().pick({ name: true });

export type TNameFormSchema = z.infer<typeof nameUserSchema>;
