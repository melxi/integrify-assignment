import React from 'react';
import { Card } from 'semantic-ui-react';

const Label = ({username}) => {
  const labelStyles = {
    marginTop: '0.5rem',
    marginBottom: '0.5rem'
  }
  
  return (
    <Card.Meta style={labelStyles}>
      <span>@{username}</span>
    </Card.Meta>
  )
}

export default Label;