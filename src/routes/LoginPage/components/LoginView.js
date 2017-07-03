import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Container, Header, Card, Segment } from 'semantic-ui-react';
import PageLayout from '../../../layouts/PageLayout';
import { formColours as colours } from '../../../constants/colours';
import { LoginForm } from './LoginForm';
import './LoginView.scss';

export class LoginView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formColour: this.assignRandomColour()
    };
  }

  assignRandomColour = () => {
    return colours[Math.floor(Math.random() * colours.length)];
  };

  render() {
    return (
      <PageLayout>
        <Segment>
          <Header
            style={{ fontSize: '30px', cursor: 'pointer' }}
            textAlign='center'
            className="login-header" onClick={() => browserHistory.push('/')}>
            tracksy.
          </Header>
        </Segment>
        <Container className="login-container">
          <Header as='h2' icon textAlign='center' className="login-header">
            <Header.Content>
              Log in
            </Header.Content>
            <Header.Subheader>
              Welcome back.
            </Header.Subheader>
          </Header>
          <Card fluid>
            <Card.Content>
              <LoginForm colour={this.state.formColour} ribbons={false} />
            </Card.Content>
          </Card>
        </Container>
      </PageLayout>
    );
  }
}

export default LoginView;
