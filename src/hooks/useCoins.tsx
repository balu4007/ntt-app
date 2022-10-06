import axios from "axios";
import { useState } from "react";
import { formatedCoinDetails } from "../components/helper";
import { AsyncStatus, COINS_URL } from "../Constants";
import { mockResponse } from "../mock";
import { CoinDetailsType, coinResponseType } from "../types";

export function useCoins() {
  const [coinsData, setCoinsData] = useState<{
    data: coinResponseType[];
    status: AsyncStatus;
    error: any;
  }>({
    data: [],
    status: AsyncStatus.Initial,
    error: null,
  });
  const [coinDetailsData, setCoinDetailsData] = useState<{
    data: CoinDetailsType | null;
    status: AsyncStatus;
    error: any;
  }>({
    data: null,
    status: AsyncStatus.Initial,
    error: null,
  });
  async function getCoins() {
    try {
      setCoinsData({ ...coinsData, status: AsyncStatus.Loading });
      const { data } = await axios.get(
        `${COINS_URL}/markets?vs_currency=EUR&per_page=10&page=1`
      );

      // const data = mockResponse;
      setCoinsData({
        status: AsyncStatus.Sucess,
        data: data,
        error: null,
      });
    } catch (err) {
      setCoinsData({
        status: AsyncStatus.Sucess,
        data: [],
        error: err,
      });
    }
  }

  async function getCoinById(id: string) {
    try {
      setCoinDetailsData({ ...coinDetailsData, status: AsyncStatus.Loading });
      const { data } = await axios.get(`${COINS_URL}/${id}`);

      setCoinDetailsData({
        status: AsyncStatus.Sucess,
        data: formatedCoinDetails(data),
        error: null,
      });
    } catch (err) {
      setCoinDetailsData({
        status: AsyncStatus.Sucess,
        data: null,
        error: err,
      });
    }
  }

  return {
    getCoins,
    coinsData,
    getCoinById,
    coinDetailsData,
  };
}
