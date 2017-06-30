import React, { PureComponent } from 'react';
import { Container, Header, Grid} from 'semantic-ui-react';
import { MultiLine } from '../../../../components/MultiLine';
import './Interjection.scss';

export class Interjection extends PureComponent {
  render() {
    const { heading, text } = this.props;

    return (
      <section className="interjection">
        <Container type="text">
          <Grid columns={1}>
            <Grid.Row>
              <Grid.Column className="interjection-content">
                <Header className="interjection--header" as='h2'>{heading}</Header>
                <Header.Subheader className="interjection--subheader" as='p'>{MultiLine(text)}</Header.Subheader>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </section>
    );
  }
}

export default Interjection;
