import React from 'react'
import { Layout } from 'antd';

const { Content } = Layout;

const ContentTwoComponent: React.FC = () => {
  return (
    <Layout style={{ padding: '0 24px 24px', marginTop: '10px' }}>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        Contenu Numéro 2
    </Content>
    </Layout>
  )
}

export default ContentTwoComponent