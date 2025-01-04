"use client";
import {
  SignedIn,
  SignIn,
  useUser,
} from '@clerk/nextjs'
import { WeatherWidget } from "@/components/widgets/weather/weather-widget";
import { NewsWidget } from "@/components/widgets/news/news-widget";
import { FinanceWidget } from "@/components/widgets/finance/finance-widget";
import { GitHubCard } from "@/components/widgets/github/github-card";
export default function Home() {
  const { user } = useUser()

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <SignIn />
      </div>
    );
  }
  return (
    
    
  
    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
       
  <SignedIn>
        <WeatherWidget />
        <NewsWidget />
        <FinanceWidget />
        <GitHubCard />
        </SignedIn>
      </div>
    
  );
}