import React, { Component } from 'react';
import { Form } from 'antd';
import { Input, Button, Label, Divider, Icon } from 'semantic-ui-react';
import FacebookProvider, { Login } from 'react-facebook';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './LoginForm.scss';
const FormItem = Form.Item;

class LoginFormComponent extends Component {
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

    return (
      <div className="login-form-container">
        <FacebookProvider appId="121403878466788">
          <Login
            scope="email"
            onResponse={(response) => console.log(response)}
            onError={this.handleError}
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
        <Form onSubmit={this.handleSubmit} className="login-form">
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
          <FormItem>
            <Button
              onMouseOver={() => this.handleSubmitMouseOver()}
              onMouseOut={() => this.handleSubmitMouseOut()}
              size='huge'
              loading={false}
              className=""
              color={emailHasError || passwordHasError ? 'red' : colour}
              basic={!this.state.submitHover}
              fluid>
              Log in
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

export const LoginForm = connect(mapStateToProps, mapDispatchToProps)(Form.create()(LoginFormComponent));
