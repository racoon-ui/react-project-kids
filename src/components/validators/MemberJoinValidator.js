import * as yup from 'yup';

export const invalidUsername = 'username은 영문과 숫자 조합이여야하며 최소 3자 이상 최대 42자 이하여야 합니다';
export const invalidEmail = 'email 형식이 정상적이지 않습니다';
export const invalidPassword = '비밀번호는 최소 4자 이상 최대 42자 이하여야 합니다';
export const invalidPasswordConfirmation = '비밀번호와 비밀번호 확인이 일치하지 않습니다';

export const MemberJoinValidator = yup.object().shape({
  email: yup
    .string()
    .email(invalidEmail)
    .required(),
  name: yup
    .string()
    .matches(/[a-z]/g && /[0-9]/g)
    .min(3, invalidUsername)
    .max(42, invalidUsername)
    .required(),
  phone: yup.string().matches(/^\d{3}-\d{3,4}-\d{4}$/),
  password: yup
    .string()
    .min(4, invalidPassword)
    .max(42, invalidPassword)
    .required(),
  password_confirm: yup
    .string()
    .oneOf([yup.ref('password'), null], invalidPasswordConfirmation)
    .required(),
});
