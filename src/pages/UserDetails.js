import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Segment, Grid, Item, List } from 'semantic-ui-react';

import Spinner from '../components/Spinner';

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  
  useEffect(() => {
    Axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => setUser(res.data));
  }, [])

  if (user.length === 0) {
    return (
      <Spinner />
    )
  }

  return (
    <Grid centered columns={3}>
      <Segment textAlign='left' style={{margin: '2rem 0'}}>
        <Grid.Column>
          <Item.Group>
            <Item>
              <Item.Content>
                <Item.Meta>name: {user.name}</Item.Meta>
                <Item.Meta>username: {user.username}</Item.Meta>
                <Item.Meta>email: {user.email}</Item.Meta>
                <Item.Meta>phone: {user.phone}</Item.Meta>
                <Item.Meta>company: {user.company.name}</Item.Meta>
                <Item.Meta>website: {user.website}</Item.Meta>
                <Item.Meta>
                  address:
                  <List.Item as='ul'>
                    <List.Item as='li' value='*'>
                      street: {user.address.street}
                    </List.Item>
                    <List.Item as='li' value='*'>
                      suite: {user.address.suite}
                    </List.Item>
                    <List.Item as='li' value='*'>
                      city: {user.address.city}
                    </List.Item>
                    <List.Item as='li' value='*'>
                      zipcode: {user.address.zipcode}
                    </List.Item>
                  </List.Item>
                </Item.Meta>
              </Item.Content>
            </Item>
          </Item.Group>
        </Grid.Column>
      </Segment>
    </Grid>
  )
}

export default UserDetails;
