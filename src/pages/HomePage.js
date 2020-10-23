import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Grid } from 'semantic-ui-react';

import User from '../components/User';
import Spinner from '../components/Spinner';

const HomePage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data));
  }, [])

  if (users.length === 0) {
    return (
      <Spinner />
    )
  }

  return (
    <Container>
      <Grid columns={3} stackable>
        <Grid.Row>
          {users.map(user => (
            <User key={user.username} user={user}/>
          ))}
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default HomePage;