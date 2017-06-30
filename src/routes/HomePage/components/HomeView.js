import React, { PureComponent } from 'react';
import { Divider } from 'semantic-ui-react';
import './HomeView.scss';
import LandingLayout from '../../../layouts/LandingLayout';
import { SimpleImageSlider } from '../../../components/SimpleImageSlider';
import { HomeSlice } from './HomeSlice';
import { Interjection } from './Interjection';
import sliceImage2 from '../assets/images/spotlight02.jpg';
import sliceImage3 from '../assets/images/spotlight03.jpg';
import sliceImage5 from '../assets/images/spotlight05.jpg';
import {
  HOMESLICE_ONE_HEADING,
  HOMESLICE_ONE_TEXT,
  HOMESLICE_TWO_HEADING,
  HOMESLICE_TWO_TEXT,
  HOMESLICE_THREE_HEADING,
  HOMESLICE_THREE_TEXT,
  INTERJECTION_ONE_HEADING,
  INTERJECTION_ONE_TEXT,
  INTERJECTION_TWO_HEADING,
  INTERJECTION_TWO_TEXT
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
          <Interjection heading={INTERJECTION_ONE_HEADING} text={INTERJECTION_ONE_TEXT}/>
          {SimpleImageSlider([1, 2, 3, 4, 5, 6])}
          <Interjection heading={INTERJECTION_TWO_HEADING} text={INTERJECTION_TWO_TEXT}/>
          <Divider/>
        </LandingLayout>
      </div>
    );
  }
}

export default HomeView;
