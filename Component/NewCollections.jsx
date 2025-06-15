import './NewCollections.css'
import React from 'react'
import NewCollectionData from '../../Ecommerce_Frontend_Assets/new_collections'
import Item from './Item'
import NewsLetter from '../Components/NewsLetter'
const NewCollections = () => {
  return (
    <div className='new-collection'>
        <br /><br />
        <br />
        <br />
        <h2>New Collections</h2>
        <div className='collection-item'>
            {NewCollectionData.map((data,i)=>{
            return <Item 
                key={i} 
                id={data.id}
                image={data.image} 
                name={data.name} 
                old_price={data.old_price}
                new_price={data.new_price}
            />
        })}
        </div>
         <NewsLetter/>
    </div>
  )
}

export default NewCollections