import React, { PureComponent } from 'react';
import { Button } from 'semantic-ui-react';
import './PillButton.scss';

export class PillButton extends PureComponent {
  render() {
    const { children, backgroundColour, size, basicType } = this.props;

    return (
      <Button
        className="pill-button"
        color={backgroundColour}
        size={size}
        basic={basicType}>
        {children}
      </Button>
    );
  }
}

export default PillButton;