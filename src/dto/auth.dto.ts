
import { z } from 'zod';

export const RegisterSchema = z.object({
  email: z.string().email('Некоректний email'),
  password: z.string().min(6, 'Пароль має містити мінімум 6 символів')
});

export const LoginSchema = z.object({
  email: z.string().email('Некоректний email'),
  password: z.string().min(1, 'Введіть пароль')
});
