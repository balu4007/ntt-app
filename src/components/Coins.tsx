import { Box, Paper, Typography } from "@mui/material";
import { useEffect } from "react";
import { AsyncStatus } from "../Constants";
import { useCoins } from "../hooks/useCoins";
import { CoinsTable } from "./CoinsTable";

function Coins() {
  const { getCoins, coinsData } = useCoins();
  useEffect(() => {
    getCoins();
  }, []);
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h3">Coin List</Typography>
      {coinsData.status === AsyncStatus.Sucess ? (
        <Paper sx={{ maxWidth: "80%", margin: "20px auto" }}>
          <CoinsTable coinsData={coinsData.data} />
        </Paper>
      ) : (
        "Loading...."
      )}
    </Box>
  );
}

export default Coins;
