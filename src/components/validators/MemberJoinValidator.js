import * as yup from 'yup';

export const invalidUsername = 'username은 영문과 숫자 조합이여야하며 최소 3자 이상 최대 42자 이하여야 합니다';
export const invalidEmail = 'email 형식이 정상적이지 않습니다';
export const invalidPassword = '비밀번호는 최소 4자 이상 최대 42자 이하여야 합니다';
export const invalidPasswordConfirmation = '비밀번호와 비밀번호 확인이 일치하지 않습니다';
export const invalidPhone = '휴대폰 번호 형식이 정상적이지 않습니다';
export const invalidRequired = '필수 항목입니다';

export const MemberJoinValidator = yup.object().shape({
  email: yup
    .string()
    .required(invalidRequired)
    .email(invalidEmail),
  name: yup
    .string()
    .required(invalidRequired)
    .matches(/[a-z]/g && /[0-9]/g, invalidUsername)
    .min(3, invalidUsername)
    .max(42, invalidUsername),
  phone: yup
    .string()
    .required(invalidRequired)
    .matches(/^\d{3}-\d{3,4}-\d{4}$/, invalidPhone),
  password: yup
    .string()
    .required(invalidRequired)
    .min(4, invalidPassword)
    .max(42, invalidPassword),
  password_confirm: yup
    .string()
    .required(invalidRequired)
    .oneOf([yup.ref('password'), null], invalidPasswordConfirmation),
});
