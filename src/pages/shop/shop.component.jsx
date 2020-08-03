import React from 'react';
import './shop.styles.scss';
import SHOP_DATA from './shop.data';
import CollectionsPreview from '../../components/collections-preview/collections-preview.component';

class ShopPage extends React.Component{
    constructor(props){
        super(props);
        this.states={
            collections: SHOP_DATA
        }
    }
    render(){
        const {collections} = this.states;
        return (
            <div>
                {
                    collections.map(({id,...otherCollectionsItems})=>(
                        <CollectionsPreview id={id} {...otherCollectionsItems}/>
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;