import React from "react";

function Search() {
    return (
        <div className="search">
            <p>Looking for</p>
            <input id="search" type="text" placeholder="start typing here..." />
            
            <p>Or filter</p>
            <button>Brazil</button>
            <button>Kenya</button>
            <button>Columbia</button>
        </div>
    );
}

export default Search;
