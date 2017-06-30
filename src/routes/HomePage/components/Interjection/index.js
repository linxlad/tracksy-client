import React, { PureComponent } from 'react';
import { Container, Header, Grid, Image} from 'semantic-ui-react';
import { MultiLine } from '../../../../components/MultiLine';
import './Interjection.scss';

export class Interjection extends PureComponent {
  render() {
    return (
      <section className="interjection">
        <Container type="text">
          <Grid columns={1}>
            <Grid.Row>
              <Grid.Column className="interjection-content">
                <Header className="interjection--header" as='h2'>Let's get started...</Header>
                <Header.Subheader className="interjection--subheader"  as='p'>Check out our favourite and best selling artists or, if you're a musician, upload your own music and start selling now!</Header.Subheader>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </section>
    );
  }
}

export default Interjection;
