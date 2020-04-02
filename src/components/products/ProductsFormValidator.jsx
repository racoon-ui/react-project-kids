import * as yup from 'yup';

export const invalidName = 'username 은 최소 3자 이상 최대 32자 이하여야 합니다';
// export const invalidName = 'username 은 최소 3자 이상 최대 32자 이하여야 합니다';
// export const invalidName = 'username 은 최소 3자 이상 최대 32자 이하여야 합니다';
// export const invalidName = 'username 은 최소 3자 이상 최대 32자 이하여야 합니다';
// export const invalidName = 'username 은 최소 3자 이상 최대 32자 이하여야 합니다';

// 수정중
export const ProductsFormValidator = yup.object().shape({
  username: yup
    .string()
    .min(3, invalidName)
    .max(32, invalidName)
    .required(),
});
