import * as yup from 'yup';

export const invalidCategory = '카테고리는 최소 2자 이상 최대 32자 이하여야 합니다';
export const invalidName = '메뉴이름은 최소 2자 이상 최대 32자 이하여야 합니다';
export const invaliImage = 'ex) http://bizvalley.co.kr/bt_templet/new_franchise02/images/sub/이미지이름.png';
export const invalidSummary = '메뉴상세는 최소 3자 이상 최대 32자 이하여야 합니다';
export const invalidPrice = '가격은 숫자만 입력가능합니다.';
export const invalidDescription = '메뉴상세정보는 최대 30자까지 가능합니다.';

export const ProductsFormValidator = yup.object().shape({
  category: yup.string().min(2, invalidCategory).max(32, invalidCategory).required(),
  name: yup.string().min(2, invalidName).max(32, invalidName).required(),
  image: yup.string().min(2, invaliImage).max(100, invaliImage).required(),
  summary: yup.string().min(3, invalidSummary).max(32, invalidSummary).required(),
  price: yup.string().min(1, invalidPrice).max(32, invalidPrice).required(),
  description: yup.string().max(30, invalidDescription).required(),
});
