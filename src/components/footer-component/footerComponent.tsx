import React from 'react'
import { Layout } from 'antd';

const { Footer } = Layout;
type FooterComponentProps = {

}

const FooterComponent: React.FC<FooterComponentProps> = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  )
}

export default FooterComponent