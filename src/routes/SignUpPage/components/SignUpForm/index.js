import React, { Component } from 'react';
import { Form } from 'antd';
import { Input, Button, Label, Divider, Icon } from 'semantic-ui-react';
import FacebookProvider, { Login } from 'react-facebook';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { signUpAction } from '../../modules/SignUp';
import './SignUpForm.scss';
const FormItem = Form.Item;

class SignUpFormComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submitHover: false,
      artistEncouragement: null
    };
  }

  handleSubmitMouseOver = () => {
    this.setState({
      submitHover: true
    });
  };

  handleSubmitMouseOut = () => {
    this.setState({
      submitHover: false
    });
  };

  /**
   * @param event
   */
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.form.validateFields((errors, values) => {
      if (!errors) {
        this.props.signUpAction(values, (hasError) => console.log(hasError));
      }
    });
  };

  handleFacebookResponse = (response) => {
    console.log(response);
  };

  handleFacebookError = (error) => {
    console.log(error);
  };

  handleArtistChange = () => {
    this.setState({ artistEncouragement: '...this is sounding awesome' });
  };

  /**
   * @return {XML}<
   */
  render() {
    const { getFieldDecorator, getFieldError } = this.props.form;
    const { role, colour, ribbons, signup } = this.props;

    if (null === role) {
      return null;
    }

    const emailHasError = !!getFieldError('email');
    const passwordHasError = !!getFieldError('password');
    const artistNameHasError = !!getFieldError('artistName');
    let bandNameField = null;

    if (role === 'artist') {
      bandNameField = (
        <FormItem>
          <Label
            style={!ribbons ? {border: 'none', padding: 0} : {}}
            basic={!ribbons}
            color={artistNameHasError ? 'red' : colour}
            ribbon={ribbons}>
            Artist/Band name
          </Label>
          {getFieldDecorator('artistName', {
            rules: [
              { required: true, message: 'Please enter your Artist/Band name' },
              { type: 'string', message: 'Please enter a valid Artist/Band name' }
            ],
            initialValue: ''
          })(
            <div>
              <Input fluid type="text" size="huge" error={artistNameHasError} onChange={() => this.handleArtistChange()}/>
              <span>{this.state.artistEncouragement}</span>
            </div>
          )}
        </FormItem>
      );
    }

    return (
      <div className="signup-form-container">
        <Divider/>
        <FacebookProvider appId="121403878466788">
          <Login
            scope="email"
            onResponse={(response) => this.handleFacebookResponse(response)}
            onError={(error) => this.handleFacebookError(error)}
            render={({ isLoading, isWorking, onClick }) => (
              <Button.Group fluid>
                <Button
                  color='facebook'
                  loading={isLoading || isWorking}
                  onClick={onClick}>
                  <Icon name='facebook' /> Facebook
                </Button>
              </Button.Group>
            )}
          />
        </FacebookProvider>
        <Divider horizontal>Or</Divider>
        <Form onSubmit={this.handleSubmit} className="signup-form">
          <FormItem>
            <Label
              style={!ribbons ? {border: 'none', padding: 0} : {}}
              basic={!ribbons}
              color={emailHasError ? 'red' : colour}
              ribbon={ribbons}>
              Email
            </Label>
            {getFieldDecorator('email', {
              rules: [
                { required: true, message: 'Please enter a valid email' },
                { type: 'email', message: 'Please enter a valid email' }
              ],
              initialValue: ''
            })(
              <Input fluid type="email" size="huge" error={emailHasError}/>
            )}
          </FormItem>
          <FormItem>
            <Label
              style={!ribbons ? {border: 'none', padding: 0} : {}}
              basic={!ribbons}
              color={passwordHasError ? 'red' : colour}
              ribbon={ribbons}>
              Password
            </Label>
            {getFieldDecorator('password', {
              rules: [
                { required: true, message: 'Please enter your password' },
                { type: 'string', message: 'Please enter a password' }
              ],
              initialValue: ''
            })(
              <Input fluid type="password" size="huge" error={passwordHasError}/>
            )}
          </FormItem>
          {bandNameField}
          <FormItem>
            <Button
              onMouseOver={() => this.handleSubmitMouseOver()}
              onMouseOut={() => this.handleSubmitMouseOut()}
              size='huge'
              loading={signup.loading}
              className=""
              color={emailHasError || passwordHasError || artistNameHasError ? 'red' : colour}
              basic={!this.state.submitHover}
              fluid>
              Sign Up
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

/**
 * @param state
 * @return {{changePasswordLoading: *, changePasswordSuccess: *, changePasswordError: *}}
 */
const mapStateToProps = (state) => {
  const { signup } = state;

  return {
    signup: signup
  };
};

/**
 * @param dispatch
 * @return {{signUpAction: *}|B|N}
 */
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    signUpAction
  }, dispatch);
};

export const SignUpForm = connect(mapStateToProps, mapDispatchToProps)(Form.create()(SignUpFormComponent));
