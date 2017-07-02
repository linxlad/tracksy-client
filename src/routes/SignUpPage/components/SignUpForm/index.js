import React, { Component } from 'react';
import { Form } from 'antd';
import { Input, Button, Label, Select, Card } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './SignUpForm.scss';
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
    const { colour, ribbons } = this.props;
    const emailHasError = !!getFieldError('email');
    const passwordHasError = !!getFieldError('password');
    const artistNameHasError = !!getFieldError('artistName');
    let bandNameField = null;

    if (this.props.role === 'artist') {
      bandNameField = (
        <FormItem>
          <Label
            style={!ribbons ? {padding: 0} : {}}
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
            <Input fluid type="password" size="huge" error={artistNameHasError}/>
          )}
        </FormItem>
      );
    }

    return (
      <Form onSubmit={this.handleSubmit} className="signup-form">
        <FormItem>
          <Label
            style={!ribbons ? {padding: 0} : {}}
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
            style={!ribbons ? {padding: 0} : {}}
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
            loading={false}
            className=""
            color={emailHasError || passwordHasError || artistNameHasError ? 'red' : colour}
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