import React, { PureComponent } from 'react';
import './HomeView.scss';
import LandingLayout from '../../../layouts/LandingLayout';
import { Divider } from 'semantic-ui-react';
import { HomeSlice } from './HomeSlice';
import { Interjection } from './Interjection';
import sliceImage1 from '../assets/images/spotlight01.jpg';
import sliceImage2 from '../assets/images/spotlight02.jpg';
import sliceImage3 from '../assets/images/spotlight03.jpg';
import sliceImage4 from '../assets/images/spotlight04.jpg';
import sliceImage5 from '../assets/images/spotlight05.jpg';
import {
  HOMESLICE_ONE_HEADING,
  HOMESLICE_ONE_TEXT,
  HOMESLICE_TWO_HEADING,
  HOMESLICE_TWO_TEXT,
  HOMESLICE_THREE_HEADING,
  HOMESLICE_THREE_TEXT
} from '../constants/HomeText';

export class HomeView extends PureComponent {
  render() {
    return (
      <div>
        <LandingLayout>
          <Divider/>
          <HomeSlice
            heading={HOMESLICE_ONE_HEADING}
            image={sliceImage5}
            context={HOMESLICE_ONE_TEXT}
            reverse={false}
          />
          <Divider/>
          <HomeSlice
            heading={HOMESLICE_TWO_HEADING}
            image={sliceImage2}
            context={HOMESLICE_TWO_TEXT}
            reverse={true}
          />
          <Divider/>
          <HomeSlice
            heading={HOMESLICE_THREE_HEADING}
            image={sliceImage3}
            context={HOMESLICE_THREE_TEXT}
            reverse={false}
          />
          <Divider/>
          <Interjection/>
          <Divider/>
        </LandingLayout>
      </div>
    );
  }
}

export default HomeView;
