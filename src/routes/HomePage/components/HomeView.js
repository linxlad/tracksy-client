import React, { PureComponent } from 'react';
import './HomeView.scss';
import LandingLayout from '../../../layouts/LandingLayout';
import { Divider } from 'semantic-ui-react';
import { HomeSlice } from './HomeSlice';
import sliceImage1 from '../assets/images/hans-vivek-176134.jpg';

export class HomeView extends PureComponent {
  render() {
    return (
      <div>
        <LandingLayout>
          <Divider/>
          <HomeSlice
            heading="Simple and free"
            image={sliceImage1}
            context="Getting your music online can be difficult and costly so we've made it easy and free. Musicians
                    already have to pay out for travel, equipment, rehearsal rooms, recording, mixing, mastering and
                    distribution... so with no sign-up or publishing fees, you're free to use tracksy and start making
                    money for your hard work."
            reverse={false} />
        </LandingLayout>
      </div>
    );
  }
}

export default HomeView;
