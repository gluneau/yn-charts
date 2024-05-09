"use client";
import React, { useState, useEffect } from "react";
import { RewardRate, RoughData } from "@/types";
import { Bar } from "react-roughviz";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";

async function getData(network: string, api: string) {
  try {
    const response = await fetch(
      `https://${network}.yieldnest.finance/api/v1/${api}?chainId=17000`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(api, data);
    return data.data;
  } catch (error) {
    console.error("There was a problem fetching the data: ", error);
  }
}

function formatData(api: RewardRate[]): RoughData {
  const top = api.slice(0, 10);
  const labels = top.map((data) => data.date);
  const values = top.map((data) => data.value);
  return { labels, values };
}

function camelCaseToSentence(camelCase: string): string {
  // Insert a space before each uppercase letter, except the first one
  const withSpaces = camelCase.replace(/([A-Z])/g, ' $1').trim();
  const sentence = withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1);

  return sentence;
}

const RatesGraph = ({ network, api }: { network: string, api: string }) => {
  const [chartData, setData] = useState<RoughData>({ labels: [], values: [] });

  useEffect(() => {
    const fetchData = async () => {
      const apiData = await getData(network, api);
      if (apiData) {
        setData(formatData(apiData));
      }
    };

    fetchData();
  }, [network, api]);

  if (chartData.labels.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="p-2">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md" style={{ fontFamily: 'gaeguregular', fontWeight: '800', fontSize: '50px' }}>
            {camelCaseToSentence(api)}
          </p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="overflow-visible p-2">
        <Bar
          data={chartData}
          title="% last 10 days"
          colors={[
            "red",
            "orange",
            "blue",
            "green",
            "yellow",
            "purple",
            "lightblue",
          ]}
          roughness={3}
          strokeWidth={3}
        />
      </CardBody>
    </Card>
  );
};

export default RatesGraph;
