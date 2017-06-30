import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import { Container, Header, Grid, Image, Button } from 'semantic-ui-react';
import Layout from 'antd/lib/layout';
import './LandingLayout.scss';
const { Footer, Content } = Layout;
import iPhone from './assets/images/iphone-7-plus-white.png';

const initialState = {
  ctaHover: false,
  ctaBgColour: null
};

export class LandingLayout extends PureComponent {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  static propTypes = {
    children: PropTypes.node
  };

  CallToAction = () => {
    const { ctaHover } = this.state;
    let basicType = true;

    if (ctaHover) {
      basicType = false;
    }

    return (
      <Button
        onMouseOver={() => this.handleCtaMouseOver()}
        onMouseOut={() => this.handleCtaMouseOut()}
        onClick={() => browserHistory.push('/signup')}
        color={this.state.ctaBgColour} className="callToAction"
        size='huge'
        basic={basicType}>Sign Up</Button>
    );
  };

  handleCtaMouseOver = () => {
    this.setState({
      ctaHover: true,
      ctaBgColour: 'green'
    });
  };

  handleCtaMouseOut = () => {
    this.setState({
      ctaHover: initialState.ctaHover,
      ctaBgColour: initialState.ctaBgColour
    });
  };

  render() {
    return (
      <Container fluid>
        <Content>
          <div className="main-header">
            <div className="branding">
              <Container type="text">
                <Grid columns={2}>
                  <Grid.Row>
                    <Grid.Column className="ctaContainer" floated='left'>
                      <div className="cta">
                        <Header as='h1' className="logo">tracksy.</Header>
                        <Header.Subheader as='p'>
                          An online platform for unsigned and inspiring musicians to<br/>
                          upload and publish music for free. Take back control.
                        </Header.Subheader>
                        {this.CallToAction()}
                      </div>
                    </Grid.Column>
                    <Grid.Column className="iphone7PlusImage" floated='right'>
                      <Image className="iPhone7Plus" src={iPhone} fluid/>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Container>
            </div>
          </div>

          {this.props.children}
        </Content>
        <Footer>@ tracksy music ltd</Footer>
      </Container>
    );
  }
}

export default LandingLayout;
