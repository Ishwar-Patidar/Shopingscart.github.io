import React from 'react'
import { useState } from 'react'
import SearchResult from './SearchResult';
function Search() {

    const [img, setImg] = useState("");

    const inputEvent = (event) => {
        const data = event.target.value;
        setImg(data);
        console.log(data)
    }
    return (
        <>
            <div className="container d-flex flex-column justify-content-center">
                <h1> Live Search Image Site</h1>
                <br />
                <input type="text" value={img} placeholder='Search Image' onChange={inputEvent} />
                {img === "" ? null : <SearchResult name={img} />}
            </div>

        </>
    )
}

export default Search