import React, { useState } from 'react';
import shopData from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import './shop.styles.scss'

export default function ShopPage() {

    const [collections] = useState(shopData)

  return (
    <div className='shop-page'>
        {
           collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))
        }
      </div>
  )
}
