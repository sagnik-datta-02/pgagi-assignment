"use client";
import React from 'react';
import { NewsSearch } from '@/components/news/news-search';
import {
    SignedIn,
    SignIn,
    useUser,
  } from '@clerk/nextjs'
export default function NewsPage () {
    const { user } = useUser()
  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <SignIn />
      </div>
    );
  }
    return (
        <SignedIn>
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <div className='dark:text-white text-gray-600' style={{ textAlign: 'center', fontSize: '48px', fontWeight: 'bold', marginBottom: '20px', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>News Page</div>
            <div style={{ marginBottom: '20px' }}>
            <NewsSearch />
            </div>
            
        </div>
        </SignedIn>
    );
};

