import React from "react";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    
    <div className="container">
        <Header />
        <div className="container pt-4" id="content">
            { children }
        </div>

    <footer className="text-center pt-5 pb-2">
    © 2020 The Last Batten. All rights reserved
    </footer>

    </div>
  )
}