"use client";

import { useState, useEffect } from "react";
import { StockChart } from "./stock-chart";

import { financeApiService } from "@/lib/axios";
import { TimeSeriesData } from "@/types/finance";


export function FinanceWidget() {
  const [stockData, setStockData] = useState<TimeSeriesData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  
    const fetchStockData = async () => {
      try {
            const response = await financeApiService.getDailyTimeSeries('AAPL');
            const transformedData: TimeSeriesData = {
              "Meta Data": response.data["Meta Data"],
              "Time Series (Daily)": response.data["Time Series (Daily)"]
            };
            setStockData(transformedData);
          } catch (error) {
            console.error('Error fetching stock data:', error);
          } finally {
            setIsLoading(false);
          }
       
        

      }
    fetchStockData();
  }, []);

  if (isLoading || !stockData) {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-4 bg-muted rounded w-3/4"></div>
        <div className="h-[200px] bg-muted rounded"></div>
      </div>
    );
  }

  return <StockChart data={stockData} />;
}