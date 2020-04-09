/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2019 STUnitas-UI, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
import { useEffect, useReducer } from 'react';
import axios from 'axios';
// import store from 'store';
import { getToken, isLogin } from './auth';
import { baseURL as apiurl } from '../config';
/**
 * useReducer hook 을 이용하기 위한 action 처리
 * REST API 호출의 시작과 종료에 해당하는 액션입니다.
 * author: dante@stunitas.com (2019.08.27)
 */

const actions = {
  REQUEST_START: 'REQUEST_START',
  REQUEST_END: 'REQUEST_END',
};
/**
 * 모든 요청에 access_token 을 추가하기 위한 인터셉터
 * async / wait 모듈에서도 상관없이 사용할 수 있습니다.
 * author: dante@stunitas.com (2019.08.27)
 */
const axiosInstance = axios.create({
  baseURL: apiurl,
});
axiosInstance.interceptors.request.use(
  (config) => {
    if (isLogin()) {
      config.headers.Authorization = getToken();
    }
    config.headers.ContentType = 'application/json';
    return config;
  },
  (err) => Promise.reject(err),
);
/**
 * @param {hash} options
 * 최초 state 를 options 으로 넘겨줄 수 있습니다.
 * 페이지가 로드될 때 (componentMount) data fetching 하고자 하면 manual: false 로 전달합니다.
 * 버튼을 눌렀을 때 data fetching 하는 방식이면 manual: true 로 전달합니다.
 * author: dante@stunitas.com (2019.08.27)
 */
function createInitialState(options) {
  return {
    loading: !options.manual,
  };
}
/**
 * useReducer 에 의해 관리되는 reducer 입니다.
 * @param {hash} state : 최초 상태
 * @param {hash} action : useReducer 에서 관리되는 상태
 */
function reducer(state, action) {
  switch (action.type) {
    case actions.REQUEST_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actions.REQUEST_END:
      return {
        ...state,
        loading: false,
        ...(action.error ? {} : { data: action.payload.data }),
        [action.error ? 'error' : 'response']: action.payload,
      };
    default:
      return state;
  }
}
async function request(config, dispatch) {
  try {
    dispatch({ type: actions.REQUEST_START });
    const response = await axiosInstance(config);
    dispatch({ type: actions.REQUEST_END, payload: response });
  } catch (error) {
    dispatch({ type: actions.REQUEST_END, payload: error, error: true });
  }
}
/**
 *
 * @param config : GET 방식의 요청을 위해서는 config 항목에 url 에 해당하는 string 을 넘겨야 합니다.
 * @param options : 요청방식에 따라 추가적으로 필요한 데이터 (data, method 등의 정보) 를 넘겨야 합니다.
 * author: dante@stunitas.com (2019.08.27)
 */
export default function useRestApi(config, options) {
  if (typeof config === 'string') {
    config = {
      url: config,
    };
  }
  const [state, dispatch] = useReducer(reducer, createInitialState(options));
  useEffect(() => {
    if (!options.manual) {
      request(config, dispatch);
    }
  }, [JSON.stringify(config)]);
  return [
    state,
    (configOverride) => {
      return request({ ...config, ...configOverride }, dispatch);
    },
  ];
}
