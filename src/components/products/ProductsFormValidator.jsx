import * as yup from 'yup';

export const invalidCategory = 'category 은 최소 2자 이상 최대 32자 이하여야 합니다';
export const invalidName = '메뉴이름은 최소 2자 이상 최대 32자 이하여야 합니다';
export const invaliImage = 'http://bizvalley.co.kr/bt_templet/new_franchise02/images/sub/이미지이름.png",';
export const invalidSummary = 'summary은 최소 3자 이상 최대 32자 이하여야 합니다';
export const invalidPrice = 'price는 숫자만 입력가능합니다.';
export const invalidDescription = 'Description 최대 50자까지 가능합니다.';

export const ProductsFormValidator = yup.object().shape({
  category: yup.string().min(2, invalidCategory).max(32, invalidCategory).required(),
  name: yup.string().min(2, invalidName).max(32, invalidName).required(),
  image: yup.string().required(),
  summary: yup.string().min(3, invalidSummary).max(32, invalidSummary).required(),
  price: yup.string().min(1, invalidPrice).max(32, invalidPrice).required(),
  description: yup.string().max(50, invalidDescription).required(),
});
