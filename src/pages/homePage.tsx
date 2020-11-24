import React from 'react'
import { Layout } from 'antd';
import FooterComponent from '../components/footer-component/footerComponent'
import HeaderComponent from '../components/header-component/headerComponent'
import MenuComponent from '../components/menu-component/menuComponent'
import './homePage.css';

const HomePage: React.FC = () => {
  return (
    <Layout className="homePage">
      <HeaderComponent />
      <MenuComponent />
      <FooterComponent />
    </Layout>
  )
}

export default HomePage