import React from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import Layout from 'antd/lib/layout';
import './PageLayout.scss';
const { Header, Footer, Content } = Layout;

export const PageLayout = ({ children }) => (
  <div>
    <Layout>
      <Header style={{ position: 'fixed', width: '100%' }}>
        <div
          onClick={() => browserHistory.push('/')} className="logo"
          style={{ cursor: 'pointer' }}>
          <span>Logo</span>
        </div>
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        {children}
      </Content>
      <Footer>Nathan Daly {'<justlikephp@gmail.com>'}</Footer>
    </Layout>
  </div>
);

PageLayout.propTypes = {
  children: PropTypes.node
};

export default PageLayout;
