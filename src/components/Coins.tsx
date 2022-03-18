import CoinItem from "./CoinItem";
import {Coin} from "../models/Coin";
import {useEffect, useState} from "react";
import {GetCoinListByCurrencyCode} from "../api/Requests"
import {useQuery} from "react-query";
import axios from "axios";
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

export default function Coins() {
    const { data ,refetch: getCoinData } = useQuery<Coin[]>(
        "coinData",
        async () =>
            await axios.get<Coin[]>(
                await GetCoinListByCurrencyCode('AUD')
            ).then((res) => (res.data)));

    function getAllCoinData() {
        getCoinData();
        console.log(data);
    }

    let i = 1;

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Rank</TableCell>
                            <TableCell align="center"></TableCell>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Symbol</TableCell>
                            <TableCell align="center">Current Price ($AUD)</TableCell>
                            <TableCell align="center">Market Cap ($AUD)</TableCell>
                            <TableCell align="center">24H Change (%)</TableCell>
                            <TableCell align="center">Cir. Supply</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map((coin) => (
                            <TableRow key={coin.id}>
                                <TableCell align="center">{i++}</TableCell>
                                <TableCell align="center"><img alt="album" src={coin.image} width="50px" height="50px" className="center"/></TableCell>
                                <TableCell align="center">{coin.name}</TableCell>
                                <TableCell align="center">{coin.symbol}</TableCell>
                                <TableCell align="center">${coin.current_price.toFixed(2)}</TableCell>
                                <TableCell align="center">${coin.market_cap}</TableCell>
                                <TableCell align="center">{coin.price_change_percentage_24h}</TableCell>
                                <TableCell align="center">{coin.circulating_supply}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <CoinItem />
        </div>
    )
}