import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Container, Header, Card, Segment } from 'semantic-ui-react';
import PageLayout from '../../../layouts/PageLayout';
import { formColours as colours } from '../../../constants/colours';
import { colourStringToHex } from '../../../helpers/Colours';
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
            {/*<Header.Content>*/}
              {/*Log in*/}
            {/*</Header.Content>*/}
            <Header.Subheader>
              {/*Welcome back.*/}
              Log in to continue where you left off.
            </Header.Subheader>
          </Header>
          <Card fluid>
            <Card.Content>
              <LoginForm colour={this.state.formColour} ribbons={false} />
              <div style={{marginTop: '-10px'}} />
            </Card.Content>
            <Card.Content className='login-signup-link' extra>
              <span>Don't have an account yet? <a style={{color: colourStringToHex(this.state.formColour)}} onClick={() => browserHistory.push('/signup')}>Sign up</a></span>
            </Card.Content>
          </Card>
        </Container>
      </PageLayout>
    );
  }
}

export default LoginView;
