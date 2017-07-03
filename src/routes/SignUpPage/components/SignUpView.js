import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Container, Header, Card, Button, Icon, Segment } from 'semantic-ui-react';
import PageLayout from '../../../layouts/PageLayout';
import { formColours as colours } from '../../../constants/colours';
import { colourStringToHex } from '../../../helpers/Colours';
import { SignUpForm } from './SignUpForm';
import './SignUpPage.scss';

const initialState = {
  fanHover: false,
  artistHover: false,
  fanSelected: false,
  artistSelected: false,
  role: null
};

export class SignUpView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...initialState,
      formColour: this.assignRandomColour()
    };
  }

  assignRandomColour = () => {
    return colours[Math.floor(Math.random() * colours.length)];
  };

  handleRoleSelection = (role) => {
    this.setState({
      ...initialState,
      role: role,
      [`${role}Selected`]: true
    });
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
        <Container className="signup-container">
          <Header as='h2' icon textAlign='center' className="signup-header">
            {/*<Header.Content>*/}
              {/*Sign up*/}
            {/*</Header.Content>*/}
            <Header.Subheader>
              This is the beginning of something beautiful.
            </Header.Subheader>
          </Header>
          <Card fluid>
            <Card.Content>
              <Card.Header>
                I am a signing up as a...
              </Card.Header>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button
                  onMouseOver={() => this.setState({ fanHover: true })}
                  onMouseOut={() => this.setState({ fanHover: false })}
                  onClick={() => this.handleRoleSelection('fan')}
                  basic={!this.state.fanHover && !this.state.fanSelected}
                  color={this.state.formColour}>
                  <Icon name='child'/>
                  Fan
                </Button>
                <Button
                  onMouseOver={() => this.setState({ artistHover: true })}
                  onMouseOut={() => this.setState({ artistHover: false })}
                  onClick={() => this.handleRoleSelection('artist')}
                  basic={!this.state.artistHover && !this.state.artistSelected}
                  color={this.state.formColour}>
                  <Icon name='unmute'/>
                  Artist
                </Button>
              </div>
              <SignUpForm role={this.state.role} colour={this.state.formColour} ribbons={false} />
            </Card.Content>
            <Card.Content className='signup-login-link' extra>
              <span>Already have an account? <a style={{color: colourStringToHex(this.state.formColour)}} onClick={() => browserHistory.push('/login')}>Log in</a></span>
            </Card.Content>
          </Card>
        </Container>
      </PageLayout>
    );
  }
}

export default SignUpView;
