import {
  Avatar,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { coinResponseType } from "../types";
type CoinsTableProps = {
  coinsData: coinResponseType[];
};

export function CoinsTable(props: CoinsTableProps) {
  const { coinsData } = props;
  const navigate = useNavigate();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Symbol</TableCell>
            <TableCell align="right">Current Price</TableCell>
            <TableCell align="right">High 24 hour Price</TableCell>
            <TableCell align="right">Low 24 hour Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {coinsData.map((row) => (
            <TableRow
              key={row.name}
              sx={{ cursor: "pointer" }}
              onClick={() => {
                navigate(`/coins/${row.id}`);
              }}
            >
              <TableCell>
                <Avatar alt={row.name} src={row.image} />
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.symbol}</TableCell>
              <TableCell align="right">{row.current_price}</TableCell>
              <TableCell align="right">{row.high_24h}</TableCell>
              <TableCell align="right">{row.low_24h}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
