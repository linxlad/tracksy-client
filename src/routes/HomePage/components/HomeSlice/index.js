import React, { PureComponent } from 'react';
import { Container, Header, Grid, Image} from 'semantic-ui-react';
import { MultiLine } from '../../../../components/MultiLine';
import './HomeSlice.scss';

export class HomeSlice extends PureComponent {
  render() {
    const {heading, image, context, reverse} = this.props;
    const imageTag = <Image size="large" className="homeSlice--image" src={image}/>;
    const text = MultiLine(context);
    let order = [
      { type: 0, element: imageTag, class: 'homeSlice-media' },
      { type: 1, element: text, class: 'homeSlice-context' }
    ];

    if (reverse) {
      order = [
        { type: 1, element: text, class: 'homeSlice-context' },
        { type: 0, element: imageTag, class: 'homeSlice-media' }
      ];
    }

    return (
      <section className="homeSlice">
        <Container type="text">
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column className={order[0].class} floated='left'>
                {order[0].type === 1 ? <Header as='h2'>{heading}</Header> : ''}
                {order[0].type === 1 ? <Header.Subheader as='p'>{order[0].element}</Header.Subheader> : order[0].element}
              </Grid.Column>
              <Grid.Column className={order[1].class} floated='right'>
                {order[0].type === 0 ? <Header as='h2'>{heading}</Header> : ''}
                {order[0].type === 0 ? <Header.Subheader as='p'>{order[1].element}</Header.Subheader> : order[1].element}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </section>
    );
  }
}

export default HomeSlice;
