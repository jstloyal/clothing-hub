import React from 'react';
import { useSelector } from 'react-redux';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/MenuItem';
import './directory.styles.scss';

const Directory = () => {
  const sections = useSelector(state => selectDirectorySections(state));

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherProps  }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  )
}

export default Directory;
