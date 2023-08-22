import React from "react";
export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex flex-col items-center justify-center">
                <img src="/assets/logo.svg" alt="logo" className="w-24 h-24 animate-pulse" />
                <h1 className="text-2xl font-bold text-center text-primary-500">Loading...</h1>
            </div>
        </div>
    )
}