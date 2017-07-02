import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';
import Layout from 'antd/lib/layout';
import { Footer } from '../../components/Footer';
import './PageLayout.scss';
const { Content } = Layout;

export const PageLayout = ({ children }) => (
  <Container fluid>
    <Content>
      {children}
    </Content>
    <Footer />
  </Container>
);

PageLayout.propTypes = {
  children: PropTypes.node
};

export default PageLayout;
