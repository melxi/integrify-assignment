import React from 'react';
import { Card } from 'semantic-ui-react';

const Heading = ({ name }) => {
  const headingStyles = {
    marginTop: '2rem'
  };

  return (
    <Card.Header style={headingStyles}>
      {name}
    </Card.Header>
  )
}

export default Heading;