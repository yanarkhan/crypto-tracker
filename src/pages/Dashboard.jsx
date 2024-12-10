import Header from "@/components/Common/Header";
import TabsDashboard from "@/components/Dashboard/TabsDashboard";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.coingecko.com/api/v3/coins/markets",
      params: { vs_currency: "usd" },
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-Lftw956FyfwNLdZJx4STyqG4",
      },
    };

    axios
      .request(options)
      .then((res) => {
        console.log(res.data);
        setCoins(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Header />
      <TabsDashboard coins={coins} />
    </>
  );
};

export default Dashboard;
