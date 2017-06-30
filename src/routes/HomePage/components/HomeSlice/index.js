import React, { PureComponent } from 'react';
import { browserHistory } from 'react-router';
import { Container, Header, Grid, Image, Button} from 'semantic-ui-react';
import { MultiLine } from '../../../../components/MultiLine';
import { colours } from './../../../../constants/colours';
import './HomeSlice.scss';

const initialState = {
  ctaHover: false,
  ctaColour: null
};

export class HomeSlice extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      ...initialState,
      ctaColour: this.assignRandomColour()
    };
  }

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
    const colour = colours[Math.floor(Math.random() * colours.length)];
    let basicType = true;

    if (ctaHover) {
      basicType = false;
    }

    return (
      <Button
        onMouseOver={() => this.handleCtaMouseOver()}
        onMouseOut={() => this.handleCtaMouseOut()}
        onClick={() => browserHistory.push('/')}
        color={this.state.ctaColour}
        className="homeSlice-cta--button"
        size='large'
        basic={basicType}>Sign Up</Button>
    );
  };

  render() {
    const {heading, image, context, reverse} = this.props;
    const imageTag = <Image size="large" className="homeSlice--image" src={image}/>;
    const text = MultiLine(context);
    let order = [
      { type: 0, element: imageTag, class: 'homeSlice-media' },
      { type: 1, element: text, class: 'homeSlice-context right' }
    ];

    // If the reverse flag is true then swap the image and text positions.
    if (reverse) {
      const b = order[0];
      order[0] = order[1];
      order[1] = b;
      order[0].class = 'homeSlice-context';
    }

    const ctaButton = (
      <div className="homeSlice-cta">
        {this.CallToAction()}
      </div>
    );

    return (
      <section className="homeSlice">
        <Container type="text">
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column className={order[0].class} floated='left'>
                {order[0].type === 1 ? <Header as='h2'>{heading}</Header> : ''}
                {order[0].type === 1 ? <Header.Subheader as='p'>{order[0].element}</Header.Subheader> : order[0].element}
                {order[0].type === 1 ? ctaButton : ''}
              </Grid.Column>
              <Grid.Column className={order[1].class} floated='right'>
                {order[0].type === 0 ? <Header as='h2'>{heading}</Header> : ''}
                {order[0].type === 0 ? <Header.Subheader as='p'>{order[1].element}</Header.Subheader> : order[1].element}
                {order[0].type === 0 ? ctaButton : ''}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </section>
    );
  }
}

export default HomeSlice;
