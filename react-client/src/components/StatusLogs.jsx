import React from 'react';
import StatusLogItem from './StatusLogItem.jsx';

const StatusLogs = ({log}) => (
  <div>
    {log.map((logItem, index) => <StatusLogItem item={logItem} key={index}/> )}
  </div>
)
export default StatusLogs;