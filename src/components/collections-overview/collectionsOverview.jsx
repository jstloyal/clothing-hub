import React from 'react';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../preview-collection/collectionPreview';

import { selectCollections } from '../../redux/shop/shop.selectors'

import './collectionsOverview.styles.scss';

function CollectionsOverview() {
  const collections = useSelector(state => selectCollections(state));

  return (
    <div className='collections-overview'>
      {collections.map(({id, ...otherCollectionProps}) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
}

export default CollectionsOverview;
