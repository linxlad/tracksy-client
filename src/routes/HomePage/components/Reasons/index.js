import React, { PureComponent } from 'react';
import { Container, Grid, Icon, Header } from 'semantic-ui-react';
import { colours } from '../../../../constants/colours';
import './Reasons.scss';

export class Reasons extends PureComponent {
  /**
   * @param props
   */
  constructor(props) {
    super(props);

    this.state = {
      iconKey: null,
      iconColour: this.assignRandomColour()
    };
  }

  /**
   * Pick a random colour from the colour constants.
   */
  assignRandomColour = () => {
    const colour = colours[Math.floor(Math.random() * colours.length)];

    if (this.state && this.state.iconColour === colour) {
      return this.state.iconColour;
    }

    return colours[Math.floor(Math.random() * colours.length)];
  };

  /**
   * Return the assigned colour for that particular cell.
   * @param key
   * @returns {*}
   */
  getMyColour = (key) => {
    if (this.state.iconKey === key) {
      return this.state.iconColour;
    }

    return null;
  };

  /**
   * On cell mouse over identify the cell and assign a random colour.
   * @param key
   */
  handleCellMouseOver = (key) => {
    this.setState({
      iconKey: key,
      iconColour: this.assignRandomColour()
    });
  };

  /**
   * On cell mouse out identify the cell and reset the colour.
   * @param key
   */
  handleCellMouseOut = (key) => {
    this.setState({
      iconKey: key,
      iconColour: null
    });
  };

  /**
   * Build the cells containing the reasons.
   * @returns {Array}
   */
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
                <Grid.Column
                  onMouseOver={() => this.handleCellMouseOver(key)}
                  onMouseOut={() => this.handleCellMouseOut(key)}
                  key={key}
                  width={5} >
                  <Icon
                    color={this.getMyColour(key)}
                    circular
                    name={reason.icon}
                    size={iconSize} />
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

  /**
   * @returns {XML}
   */
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