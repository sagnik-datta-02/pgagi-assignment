"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TimeSeriesData } from "@/types/finance";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface StockChartProps {
  data: TimeSeriesData;
}

export function StockChart({ data }: StockChartProps) {
  const chartData = Object.entries(data["Time Series (Daily)"])
    .slice(0, 30)
    .map(([date, values]) => ({
      date,
      close: parseFloat(values["4. close"]),
      open: parseFloat(values["1. open"]),
      high: parseFloat(values["2. high"]),
      low: parseFloat(values["3. low"]),
    }))
    .reverse();

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{data["Meta Data"]["2. Symbol"]} Stock Price</span>
          <span className="text-sm text-muted-foreground">
            Last updated: {data["Meta Data"]["3. Last Refreshed"]}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
              dataKey="date"
              tickFormatter={(date) => new Date(date).toLocaleDateString()}
              />
              <YAxis />
              <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--background))",
                border: "1px solid hsl(var(--border))",
              }}
              labelFormatter={(date) => new Date(date).toLocaleDateString()}
              />
              <Legend />
              <Line
              type="monotone"
              dataKey="close"
              stroke="#8884d8"
              dot={false}
              name="Close"
              />
              <Line
              type="monotone"
              dataKey="open"
              stroke="#82ca9d"
              dot={false}
              name="Open"
              />
              <Line
              type="monotone"
              dataKey="high"
              stroke="#ffc658"
              dot={false}
              name="High"
              />
              <Line
              type="monotone"
              dataKey="low"
              stroke="#ff7300"
              dot={false}
              name="Low"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}