import React from 'react'

function SearchResult(props) {
    const img = `https://source.unsplash.com/300x400/?${props.name}`
    return (
        <>
            <div>
                <img src={img} alt="Serching....." />
            </div>
        </>
    )
}

export default SearchResult