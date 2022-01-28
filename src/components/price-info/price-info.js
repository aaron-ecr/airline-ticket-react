import React from 'react';

export const PriceInfo = (props) => {
  return (
    <div className="detail-label">
      <h4>{props.mainText}</h4>
      <p>{props.amount} MXN</p>
    </div>
  )
}