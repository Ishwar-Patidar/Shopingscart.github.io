import React from 'react'
import API from './FilterImageApi';
import './FilterImage.css'
import { useState } from 'react';
import ProductItem from './ProductItem';
import Category from './Category';

const allCategory = [...new Set(API.map((curelem) => { return (curelem.category) })), 'all'];

function Filter() {

    const [item, setItem] = useState(API);
    const [cateValue, setCateValue] = useState(allCategory);

    const filterItem = (cateItem) => {
        if (cateItem === 'all') {
            setItem(API)
            return;
        }

        const updateItems = API.filter((curElem) => {
            return curElem.category === cateItem;
        })
        setItem(updateItems);
    }
    return (
        <>
            <div className='Main_heading'>
                <h1>Our letest products</h1>
            </div>
            <hr />

            {/* This is category menu */}
            <Category filterItem={filterItem} cateValue={cateValue} />

            {/* This is category menu */}
            <ProductItem item={item} />

        </>


    )
}

export default Filter