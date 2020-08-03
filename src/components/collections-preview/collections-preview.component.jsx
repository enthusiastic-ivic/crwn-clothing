import React from 'react';
import './collections-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionsPreview = ({title,items})=>{
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
              {items.filter((item,idx)=>idx<4).map(({id,...otherPreviewItems})=><CollectionItem key={id} {...otherPreviewItems}/>)}
            </div>
        </div>
    )
}

export default CollectionsPreview;