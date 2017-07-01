import React, { PureComponent } from 'react';
import { Divider } from 'semantic-ui-react';
import './HomeView.scss';
import LandingLayout from '../../../layouts/LandingLayout';
import { SimpleImageSlider } from '../../../components/SimpleImageSlider';
import { HomeSlice } from './HomeSlice';
import { Interjection } from './Interjection';
import { Reasons } from './Reasons';
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
  INTERJECTION_TWO_TEXT,
  REASONS
} from '../constants/HomeText';

export class HomeView extends PureComponent {
  render() {
    let images = [];
    for (let i = 0; i < 100; i++) {
      images.push('http://lorempixel.com/400/250/');
    }

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
          <Interjection heading={INTERJECTION_ONE_HEADING} text={INTERJECTION_ONE_TEXT}/>
          <SimpleImageSlider images={images} />
          <Interjection heading={INTERJECTION_TWO_HEADING} text={INTERJECTION_TWO_TEXT}/>
          <Reasons reasons={REASONS} rows={2} iconSize="big" />
        </LandingLayout>
      </div>
    );
  }
}

export default HomeView;
