import React from 'react'
import { Layout } from 'antd';

const { Header } = Layout;
type HeaderComponentProps = {

}

const HeaderComponent: React.FC<HeaderComponentProps> = () => {
  return (
    <Header>
      <div style={{ display: "flex", justifyContent: "flex-start", color: "white" }}>
        Calculateur
      </div>
    </Header>
  )
}

export default HeaderComponent