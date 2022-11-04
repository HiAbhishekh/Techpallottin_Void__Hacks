import React from 'react'
import "./Category.css"

import { UilArrowDown } from '@iconscout/react-unicons'

const Category = () => {
    return (
        <div className='Category'>
            <div>
                <span>ALL CATEGORY</span>

                <span><UilArrowDown /></span>
            </div>

        </div>
    )
}

export default Category