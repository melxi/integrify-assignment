import React from 'react';
import { Card } from 'semantic-ui-react';

const SiteLink = ({siteLink}) => {
  return (
    <Card.Content extra>
      <a>
        {siteLink}
      </a>
    </Card.Content>
  )
}

export default SiteLink;
