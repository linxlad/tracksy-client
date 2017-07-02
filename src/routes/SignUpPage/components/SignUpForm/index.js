import React, { Component } from 'react';
import { Form } from 'antd';
import { Input, Button, Label, Select, Card } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './SignUpForm.scss';
const colours = ['teal', 'blue', 'violet', 'purple', 'pink'];
const FormItem = Form.Item;

class SignUpFormComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submitHover: false
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

  assignRandomColour = () => {
    return colours[Math.floor(Math.random() * colours.length)];
  };

  /**
   * @param event
   */
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.form.validateFields((errors, values) => {
      if (!errors) {
      }
    });
  };

  /**
   * @return {XML}<
   */
  render() {
    const { getFieldDecorator, getFieldError } = this.props.form;
    const emailHasError = !!getFieldError('email');
    const passwordHasError = !!getFieldError('password');
    const confirmPasswordHasError = !!getFieldError('password');
    const bandArtistNameHasError = !!getFieldError('bandArtistName');
    let bandNameField = null;

    if (this.props.role === 'artist') {
      bandNameField = (
        <FormItem>
          <Label color={confirmPasswordHasError ? 'red' : this.props.colour} ribbon>Band or Artist name</Label>
          {getFieldDecorator('bandArtistName', {
            rules: [
              { required: true, message: 'Please enter your band or artist name' },
              { type: 'string', message: 'Please enter a valid band or artist name' }
            ],
            initialValue: ''
          })(
            <Input fluid type="password" size="huge" error={bandArtistNameHasError}/>
          )}
        </FormItem>
      );
    }

    return (
      <Form onSubmit={this.handleSubmit} className="signup-form">
        <FormItem>
          <Label color={emailHasError ? 'red' : this.props.colour} ribbon>Email</Label>
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
          <Label color={passwordHasError ? 'red' : this.props.colour} ribbon>password</Label>
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
        <FormItem>
          <Label color={confirmPasswordHasError ? 'red' : this.props.colour} ribbon>Confirm password</Label>
          {getFieldDecorator('confirmPassword', {
            rules: [
              { required: true, message: 'Please enter your confirm password' },
              { type: 'string', message: 'Please enter a valid confirm password' }
            ],
            initialValue: ''
          })(
            <Input fluid type="password" size="huge" error={confirmPasswordHasError}/>
          )}
        </FormItem>
        {bandNameField}
        <FormItem>
          <Button
            onMouseOver={() => this.handleSubmitMouseOver()}
            onMouseOut={() => this.handleSubmitMouseOut()}
            size='huge'
            loading={false}
            className=""
            color={confirmPasswordHasError ? 'red' : this.props.colour}
            basic={!this.state.submitHover}
            fluid >
            Sign Up
          </Button>
        </FormItem>
      </Form>
    );
  }
}

/**
 * @param state
 * @return {{changePasswordLoading: *, changePasswordSuccess: *, changePasswordError: *}}
 */
const mapStateToProps = (state) => {
  const {} = state;

  return {};
};

/**
 * @param dispatch
 * @return {{settingsChangePassword: *}|B|N}
 */
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({

  }, dispatch);
};

export const SignUpForm = connect(mapStateToProps, mapDispatchToProps)(Form.create()(SignUpFormComponent));