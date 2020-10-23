import React from 'react';
import { Button } from 'semantic-ui-react';

const PrimaryButton = () => {
  const buttonStyles = {
    marginTop: '2rem'
  };

  return (
    <Button primary style={buttonStyles}>More Details</Button>
  )
}

export default PrimaryButton;