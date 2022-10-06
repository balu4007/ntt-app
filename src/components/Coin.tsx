import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { AsyncStatus } from "../Constants";
import { useCoins } from "../hooks/useCoins";

function Coin() {
  const { id } = useParams();
  const {
    getCoinById,
    coinDetailsData: { status, data, error },
  } = useCoins();
  useEffect(() => {
    getCoinById(id || "");
  }, []);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Typography variant="h3">Coins List</Typography>
      </div>
      {status === AsyncStatus.Sucess ? (
        <>
          <div>
            <Typography variant="h5">Name:</Typography>
            <Typography>{data?.name}</Typography>
          </div>
          <div>
            <Typography variant="h5">Symbol:</Typography>
            <Typography>{data?.symbol}</Typography>
          </div>
          <div>
            <Typography variant="h5">Hashing Algorithm:</Typography>
            <Typography>{data?.hashingAlgorithm}</Typography>
          </div>
          <div>
            <Typography variant="h5">Description:</Typography>
            <Typography>{data?.description}</Typography>
          </div>
          <div>
            <Typography variant="h5">Market cap in Euro:</Typography>
            <Typography>{data?.marketCapEur}</Typography>
          </div>
          <div>
            <Typography variant="h5">Home page:</Typography>
            <Typography>{data?.homepage}</Typography>
          </div>
          <div>
            <Typography variant="h5">Genesis Date:</Typography>
            <Typography>{data?.genesisDate}</Typography>
          </div>
        </>
      ) : (
        "loading..."
      )}
    </>
  );
}

export default Coin;
