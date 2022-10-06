import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Coin from "./components/Coin";
import Coins from "./components/Coins";

function App() {
  const navigate = useNavigate();
  return (
    <Box>
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              cursor: "pointer",
              display: { xs: "none", sm: "block" },
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            Coins
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="main">
        <Toolbar />
        <Routes>
          <Route path="/" element={<Coins />} />
          <Route path="/coins/:id" element={<Coin />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
