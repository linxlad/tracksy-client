import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import { Container, Header, Grid, Image, Button, Icon } from 'semantic-ui-react';
import Layout from 'antd/lib/layout';
import { MultiLine } from '../../components/MultiLine';
import { colours } from '../../constants/colours';
import './LandingLayout.scss';
import iPhone from './assets/images/iphone-7-plus-white.png';
import iPhoneScreen from './assets/images/listen-gesture-music-app-screens-02.jpg';
import { BRANDING_SUBHEADER } from './constants/LandingText';
const { Footer, Content } = Layout;

const initialState = {
  ctaHover: false,
  ctaColour: null
};

export class LandingLayout extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      ...initialState,
      ctaColour: this.assignRandomColour()
    };
  }

  static propTypes = {
    children: PropTypes.node
  };

  assignRandomColour = () => {
    return colours[Math.floor(Math.random() * colours.length)];
  };

  handleCtaMouseOver = () => {
    this.setState({
      ctaHover: true
    });
  };

  handleCtaMouseOut = () => {
    this.setState({
      ctaColour: colours[Math.floor(Math.random() * colours.length)],
      ctaHover: initialState.ctaHover
    });
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
        color={this.state.ctaColour} className="callToAction"
        size='huge'
        basic={basicType}>Sign Up</Button>
    );
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
                        <Header.Subheader as='p'>{MultiLine(BRANDING_SUBHEADER)}</Header.Subheader>
                        {this.CallToAction()}
                      </div>
                    </Grid.Column>
                    <Grid.Column className="iphone7PlusImage" floated='right'>
                      <Image className="iPhone7Plus" src={iPhone} fluid/>
                      <Image className="iPhone7Plus-screen" src={iPhoneScreen}/>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Container>
            </div>
          </div>

          {this.props.children}
        </Content>
        <Footer>
          <div className="footerIcons">
            <Grid textAlign="centre">
              <Grid.Column>
                <Icon size="large" circular name="twitter" />
              </Grid.Column>
              <Grid.Column>
                <Icon size="large" circular name="facebook f" />
              </Grid.Column>
              <Grid.Column>
                <Icon size="large" circular name="instagram" />
              </Grid.Column>
              <Grid.Column>
                <Icon size="large" circular name="mail" />
              </Grid.Column>
            </Grid>
          </div>
          <p>
            @ tracksy music ltd
          </p>
        </Footer>
      </Container>
    );
  }
}

export default LandingLayout;
