"use client";

import { useState } from 'react';
import { StockSearch } from '@/components/finance/stock-search';
import { StockChart } from '@/components/finance/stock-chart';
import { NewsSection } from '@/components/finance/news-section';
import { TimeSeriesData } from '@/types/finance';

export default function FinancePage() {
  const [stockData, setStockData] = useState<TimeSeriesData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="container mx-auto p-4">
      <div className='dark:text-white text-gray-600' style={{ textAlign: 'center', fontSize: '48px', fontWeight: 'bold', marginBottom: '20px', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>Financial Dashboard</div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <StockSearch 
            onStockData={setStockData}
            onLoadingChange={setIsLoading}
          />
          {stockData && <StockChart data={stockData} />}
          {isLoading && (
            <div className="animate-pulse mt-4">
              <div className="h-[400px] bg-gray-200 rounded-lg"></div>
            </div>
          )}
        </div>
        <div>
          <NewsSection /> 
        </div>
      </div>
    </div>
  );
}