import React from 'react'
import { Layout } from 'antd';

const { Content, Header } = Layout;

const ContentOneComponent: React.FC = () => {

  return (
    <Layout style={{ padding: '0 24px 24px', marginTop: '10px' }}>
      <Header style={{ backgroundColor: "aliceblue" }}>Here the Title</Header>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        Contenu Numéro 1
    </Content>
    </Layout>
  )
}

export default ContentOneComponent