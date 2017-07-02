import React, { PureComponent } from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import './Footer.scss';

export class Footer extends PureComponent {
  render() {
    return (
      <div className="footer">
        <div className="footer-footerIcons">
          <Grid textAlign="center">
            <Grid.Column>
              <Icon link size="large" circular name="twitter" />
            </Grid.Column>
            <Grid.Column>
              <Icon link size="large" circular name="facebook f" />
            </Grid.Column>
            <Grid.Column>
              <Icon link size="large" circular name="instagram" />
            </Grid.Column>
            <Grid.Column>
              <Icon link size="large" circular name="mail" />
            </Grid.Column>
          </Grid>
        </div>
        <p>
          @ tracksy music ltd
        </p>
      </div>
    );
  }
}

export default Footer;
