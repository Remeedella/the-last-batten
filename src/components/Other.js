import React from "react";

export default function Other({children}) {

    return (
<div className="pt-5">
<div className="w-100 text-center start-0 text-secondary" style={{backgroundColor: 'lightgray'}}>
<h2 className="titlepf pt-1">OTHER GALLERIES</h2>
<div className="py-1" style={{minHeight: '70px', backgroundColor: '#fbfbe7'}}>
        {children}
</div>
</div>
</div>
    )
}