// https://github.com/simoneb/axios-hooks
// GET APIリクエストを行うためのuseAxios。
// POST APIリクエストにaxiosを使用します。
// 「〜/ OfficePage / Edit.js」のコードサンプルを参照してください。
// import { useReducer, useEffect } from 'react'
import axios from "axios";

//APIを叩くのに必要なインスタンスはこれ！
export const instance = axios.create({
  baseURL: process.env.BASE_API_URL, //ローカルで定義しておく。
  timeout: 60000,
  withCredentials: true, //リクエストにクッキーを付与する
});

// type axiosProps = {//使い方わからん。＆この型宣言だとエラーになる。
//   method: string;
//   url: string;
//   value?: any;
//   token?: string;
// };

export const tempAxios = async (
  method: any,
  url: any,
  value: any,
  token: any
) => {
  let returnResponse;

  if (token) {
    //トークンが必要な場合
    await instance({
      url: url,
      method: method,
      data: { ...value },
      headers: {
        //どんな形式でリクエストしてるか
        "Content-Type": "application/json", //json形式でおくります。
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        returnResponse = response;
      })
      .catch((error) => {
        returnResponse = error.response;
      });
  } else {
    //トークンは不要な場合
    await instance({
      url: url,
      method: method,
      data: { ...value },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        returnResponse = response;
      })
      .catch((error) => {
        returnResponse = error.response;
      });
  }
  return returnResponse;
};
