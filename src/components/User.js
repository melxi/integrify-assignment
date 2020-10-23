import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Grid } from 'semantic-ui-react';

import Avatar from './Avatar';
import Heading from './Heading';
import Label from './Label';
import SiteLink from './SiteLink';
import PrimaryButton from './PrimaryButton';

const User = ({user}) => {
  const columnStyles = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem', 
    marginBottom: '2rem'
  }

  return (
    <Grid.Column style={columnStyles}>
      <Card>
        <Card.Content textAlign='center'>
          <Avatar name={user.name}/>
          <Heading name={user.name}/>
          <Label username={user.username} />
          <SiteLink siteLink={user.website} />
          <Link to={String(user.id)}>
            <PrimaryButton /> 
          </Link>
        </Card.Content>
      </Card>
    </Grid.Column>
  )
}

export default User;