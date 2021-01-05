import React from 'react';
import MenuItem from '../menu-item/MenuItem';
import './directory.styles.scss';

class Directory extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      sections: [
        {
          title: 'LAPTOP',
          imageUrl: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8bGFwdG9wfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          id: 1,
          linkUrl: 'laptops'
        },
        {
          title: 'DESKTOP',
          imageUrl: 'https://storage-asset.msi.com/event/spb/2019/best-gaming-desktop-pc/images/kv-pd.png',
          id: 2,
          linkUrl: ''
        },
        {
          title: 'ACCESSORIES',
          imageUrl: 'https://hips.hearstapps.com/bpc.h-cdn.co/assets/17/30/1501000275-iphone-accessories.jpg',
          id: 3,
          linkUrl: ''
        },
        {
          title: 'APPLE',
          imageUrl: 'https://images.macrumors.com/t/u5qFUnuK3qopG8nIsOOX74kgtk8=/1600x0/article-new/2019/02/MR-Future-Products-2020-2.png',
          size: 'large',
          id: 4,
          linkUrl: ''
        },
        {
          title: 'PC',
          imageUrl: 'https://cdn.mos.cms.futurecdn.net/vEcELHdn998wRTcCzqV5m9.jpg',
          size: 'large',
          id: 5,
          linkUrl: ''
        }
      ]
    }
  }
  
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherProps  }) => (
          <MenuItem key={id} {...otherProps} />
        ))}
      </div>
    )
  }
}

export default Directory;
