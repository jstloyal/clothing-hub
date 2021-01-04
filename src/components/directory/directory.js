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
        },
        {
          title: 'DESKTOP',
          imageUrl: 'https://images.unsplash.com/photo-1593640495253-23196b27a87f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDR8fGRlc2t0b3B8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          id: 2,
        },
        {
          title: 'ACCESSORIES',
          imageUrl: 'https://hips.hearstapps.com/bpc.h-cdn.co/assets/17/30/1501000275-iphone-accessories.jpg',
          id: 3,
        },
        {
          title: 'APPLE',
          imageUrl: 'https://images.macrumors.com/t/lts0uH8gcDfjexvr-SHPBQIVQW8=/1600x900/smart/article-new/2018/07/appleproductlineup.jpg',
          size: 'large',
          id: 4,
        },
        {
          title: 'PC',
          imageUrl: 'https://www.ultrabookreview.com/wp-content/uploads/2016/06/smudgy-blade-clean-xps.jpg',
          size: 'large',
          id: 5,
        }
      ]
    }
  }
  
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    )
  }
}

export default Directory;
