import React from 'react';

// HobbyList component to display a list of hobbies
class HobbyList extends React.Component {
  render() {
    const { hobbies } = this.props;
    
    return (
      <div>
        <h3>Hobbies:</h3>
        <ul>
          {hobbies.map((hobby, index) => (
            <li > {hobby}</li>
          ))}
        </ul>
      </div>
    );
  }
}

// User component to display user information and their hobbies
class User extends React.Component {
  render() {
    const { name, email, hobbies } = this.props;
    console.log(this.props);
    
    return (
      <div >
        <h2>{name} ({email})</h2>
        <HobbyList hobbies={hobbies} />
      </div>
    );
  }
}

// UserList component to display a list of users
class UserList extends React.Component {
  render() {
    const { users } = this.props;
    
    return (
      <div>
        <h1>User List</h1>
        {users.map((user, index) => (
          <User 
            key = {index}
            name={user.name}
            email={user.email}
            hobbies={user.hobbies}
          />
        ))}
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: 'Sukhesh',
          email: 'Sukhesh@gmail.com',
          hobbies: ['Reading', 'Coding', 'Swimming']
        },
        {
          name: 'Hari Krishna',
          email: 'Krishna@gmail.com',
          hobbies: ['Eating', 'Sleeping']
        }
      ]
    };
  }
  
  render() {
    return (
      <div>
        <UserList users={this.state.users} />
      </div>
    );
  }
}

export default App;