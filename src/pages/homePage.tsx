import React from 'react'
import FooterComponent from '../components/footer-component/footerComponent'
import HeaderComponent from '../components/header-component/headerComponent'
import MenuComponent from '../components/menu-component/menuComponent'

const HomePage: React.FC = () => {
  return (
    <>
      <HeaderComponent />
      <MenuComponent />
      <FooterComponent />
    </>
  )
}

export default HomePage