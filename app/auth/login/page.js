"use client";

import React from "react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
            
      <div className="max-w-md w-full bg-white p-8 shadow-md rounded">
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                
        <form className="space-y-4">
                    
          <div>
                        
            <label htmlFor="email" className="block text-gray-700">
                            Email Address             
            </label>
                        
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 w-full border border-gray-300 rounded p-2"
              placeholder="you@example.com"
            />
                      
          </div>
                    
          <div>
                        
            <label htmlFor="password" className="block text-gray-700">
                            Password             
            </label>
                        
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 w-full border border-gray-300 rounded p-2"
              placeholder="Enter your password"
            />
                      
          </div>
                    
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
                        Log In           
          </button>
                  
        </form>
                
        <p className="mt-4 text-center text-gray-600">
                    Don&apos;t have an account?           
          <Link href="/auth/register" className="text-blue-500 hover:underline">
                        Sign up here           
          </Link>
                  
        </p>
              
      </div>
          
    </div>
  );
}
