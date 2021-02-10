import React from 'react';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../preview-collection/collectionPreview';

import { selectCollectionForPreview } from '../../redux/shop/shop.selectors'

import './collectionsOverview.styles.scss';

function CollectionsOverview() {
  const collections = useSelector(state => selectCollectionForPreview(state));

  return (
    <div className='collections-overview'>
      {collections.map(({id, ...otherCollectionProps}) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
}

export default CollectionsOverview;
