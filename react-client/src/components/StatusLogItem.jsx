import React from 'react';
import SuccessLogItem from './SuccessLogItem.jsx';
import ErrorLogItem from './ErrorLogItem.jsx';

const StatusLogItem = ({item}) => {
  if (item.success) {
    return <SuccessLogItem item={item}/>
  } else {
    return <ErrorLogItem item={item}/>
  }
}

export default StatusLogItem;