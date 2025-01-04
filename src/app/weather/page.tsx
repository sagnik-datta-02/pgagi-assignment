"use client";

import { useState } from 'react';
import { WeatherCard } from '@/components/weather/weather-card';
import { StateSelect } from '@/components/weather/state-select';
import { WeatherResponse } from '@/types/weather';

export default function WeatherPage() {
  const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Weather Information</h1>
      <div className="max-w-md mx-auto">
        <StateSelect 
          onWeatherData={setWeatherData}
          onLoadingChange={setIsLoading}
        />
        {weatherData && <WeatherCard data={weatherData} />}
        {isLoading && (
          <div className="animate-pulse mt-4">
            <div className="h-48 bg-gray-200 rounded-lg"></div>
          </div>
        )}
      </div>
    </div>
  );
}