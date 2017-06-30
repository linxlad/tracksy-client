import React, { PureComponent } from 'react';
import { Container, Grid, Icon, Header } from 'semantic-ui-react';
import './Reasons.scss';

export class Reasons extends PureComponent {
  buildReasons = () => {
    const { reasons, rows, iconSize } = this.props;
    const keyFilter = [[0, 2], [3, 5]];
    let keysToFilter = [];
    let renderedRows = [];

    for (let i = 0; i < rows; i++) {
      keysToFilter = keyFilter[i];

      renderedRows.push(
        <Grid.Row key={i}>
          {
            reasons.map((reason, key) => {
              return (
                <Grid.Column key={key} width={5}>
                  <Icon circular name={reason.icon} size={iconSize}/>
                  <Header as='h2'>{reason.heading}</Header>
                  <Header.Subheader as='p'>{reason.text}</Header.Subheader>
                </Grid.Column>
              );
            }).filter((reason, key) => key >= keysToFilter[0] && key <= keysToFilter[1])
          }
        </Grid.Row>
      );
    }

    return renderedRows;
  };

  render() {
    const rows = this.buildReasons();

    return (
      <section className="reasons">
        <Container type="text">
          <Grid celled='internally'>
            {rows}
          </Grid>
        </Container>
      </section>
    );
  }
}

export default Reasons;