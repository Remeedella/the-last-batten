import React from "react";

export default function Layout({ children }) {
  return (
    
    <div className="container">
        <div className="container pt-4">
            { children }
            </div>
    </div>
  )
}