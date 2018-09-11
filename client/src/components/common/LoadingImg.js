import React from 'react';
import LoadingImg from './loading.gif';

export default () => {
  return (
    <div>
      <img 
        src={LoadingImg} 
        style={{width: '100px', margin: 'auto', display: 'block'}}
        alt="Loading..." />
    </div>
  )
}
