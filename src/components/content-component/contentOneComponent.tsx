import React, { useState } from 'react'
import { Layout, Row, Col, InputNumber, Button } from 'antd';

const { Content, Header } = Layout;

let texte = {
  taille: "taille (m): ",
  poids: "poids (kg): ",
  resulta: "resultat"
}

type props = {
  titre: string,
  formule: any
}

const ContentOneComponent: React.FC<props> = ({ titre, formule }) => {

  const [firstValue, setFirstValue] = useState(0)
  const [secondValue, setSecondValue] = useState(0)
  const [resultat, setResultat] = useState(0)

  const onChangeOne = (value: number | undefined | string) => {
    if (typeof value === "number") {
      setFirstValue(value)
    }
  }

  const onChangeTwo = (value: number | undefined | string) => {
    if (typeof value === "number") {
      setSecondValue(value)
    }
  }

  const onClickButton = () => {
    let resultat = formule(firstValue, secondValue)
    setResultat(resultat)
  }

  return (
    <Layout style={{ padding: '0 24px 24px', marginTop: '10px' }}>
      <Header style={{ backgroundColor: "aliceblue" }}>{titre}</Header>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <div style={{ marginTop: "100px" }}>
          <Row gutter={[1, 100]}>
            <Col span={6} offset={6}>
              <div>
                {texte.taille}
                <InputNumber size="large" defaultValue={0} onChange={onChangeOne} />
              </div>
            </Col>
            <Col span={6}>
              <div>
                {texte.poids}
                <InputNumber size="large" defaultValue={0} onChange={onChangeTwo} />
              </div>
            </Col>
          </Row>
          <Row gutter={[1, 100]}>
            <Col span={4} offset={10}>
              <Button onClick={onClickButton} size="large" type="primary">{texte.resulta}</Button>
            </Col>
          </Row>
          <Row>
            <Col span={12} offset={6}>
              <div>{resultat}</div>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  )
}

export default ContentOneComponent