import * as yup from 'yup';

export const invalidEmail = 'email 형식이 정상적이지 않습니다';
export const invalidPassword = '비밀번호는 최소 4자 이상 최대 42자 이하여야 합니다';

export const LoginValidator = yup.object().shape({
  email: yup
    .string()
    .email(invalidEmail)
    .required(),
  password: yup
    .string()
    .min(4, invalidPassword)
    .max(42, invalidPassword)
    .required(),
});
