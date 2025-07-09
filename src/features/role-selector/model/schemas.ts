import { z } from 'zod';

import { userRegisterSchema } from '@/entities/user';

export const roleUserSchema = userRegisterSchema().pick({ role: true }).strict();

export type TRoleUserSchema = z.infer<typeof roleUserSchema>;
