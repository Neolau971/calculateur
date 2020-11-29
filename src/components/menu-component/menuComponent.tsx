import React, { useState } from 'react'
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import ContentOneComponent from '../content-component/contentOneComponent';
import ContentTwoComponent from '../content-component/contentTwoComponent';
import { getIMC } from '../../formules/medecineFormule'

const { SubMenu } = Menu;
const { Sider } = Layout;

let texte = {
  Medecine: {
    titre: "Medecine",
    menu: { imc: "IMC" }
  },
  Impots: {
    titre: "Impots",
    menu: {
      revenuNetGlo: "Revenu Net Global",
      quotientFamilial: "Quotient Familial",
      impotSurRevenu: "Impots Sur Revenu"
    }
  },
  Autre: "Autre"
}

let titre = ""
let formule: any

const MenuComponent: React.FC = () => {

  const [isContentOneComponent, setIsContentOneComponent] = useState(false)

  const handleClickMenu = (e: any) => {
    if (e.key === "IMC") {
      setIsContentOneComponent(true)
      titre = "IMC"
      formule = getIMC
    } else {
      setIsContentOneComponent(false)
    }
  }

  return (
    <Layout>
      <Sider width={200} style={{ height: '100%' }} className="site-layout-background ">
        <Menu
          mode="inline"
          style={{ height: '100%', borderRight: 0 }}
          onClick={handleClickMenu}
        >
          <SubMenu key={texte.Medecine.titre} icon={<UserOutlined />} title={texte.Medecine.titre}>
            <Menu.Item key={texte.Medecine.menu.imc}>
              {texte.Medecine.menu.imc}
            </Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
          </SubMenu>
          <SubMenu key={texte.Impots.titre} icon={<LaptopOutlined />} title={texte.Impots.titre}>
            <Menu.Item key="5">{texte.Impots.menu.revenuNetGlo}</Menu.Item>
            <Menu.Item key="6">{texte.Impots.menu.quotientFamilial}</Menu.Item>
            <Menu.Item key="7">{texte.Impots.menu.impotSurRevenu}</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      {isContentOneComponent && <ContentOneComponent titre={titre} formule={formule} />}
      {!isContentOneComponent && <ContentTwoComponent />}
    </Layout>
  )
}

export default MenuComponent