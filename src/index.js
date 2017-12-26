import React from 'react'
import ReactDOM from 'react-dom'
import {
  Grid,
  Layout,
  Root,
  Col,
  ConfigProvider,
  Dev,
  asLayout,
} from 'xn-reflex'
import './styles.css'

const boxStyle = {
  color: '#1469cc',
  backgroundColor: '#efefef',
}

const SIZE = {
  TALL: { minHeight: 200 },
  MEDIUM: { minHeight: 150 },
  SMALL: { minHeight: 'initial' },
}

const Footer = asLayout('footer')
const Header = asLayout('header')

function Page() {
  return (
    <ConfigProvider>
      <Dev />
      <Layout devMode height="parent" className="page">
        <Header fixed="top">
          <Root>
            <Col marginBottom={0}>
              <h1>Header</h1>
            </Col>
          </Root>
        </Header>
        <Layout height="parent" className="content">
          <Layout height="auto">
            <Root>
              <Grid align="stretch" marginBottom={0} marginTop="L">
                <Col size={10} style={{ ...boxStyle, ...SIZE.TALL }} />
                <Col size={2} style={{ ...boxStyle, ...SIZE.SMALL }} />

                <Col style={{ ...boxStyle, ...SIZE.MEDIUM }} />

                <Col size={6} style={{ ...boxStyle, ...SIZE.MEDIUM }} />
                <Col size={6} style={{ ...boxStyle, ...SIZE.MEDIUM }} />

                <Col size={4} style={{ ...boxStyle, ...SIZE.TALL }} />
                <Col size={4} style={{ ...boxStyle, ...SIZE.TALL }} />
                <Col size={4} style={{ ...boxStyle, ...SIZE.TALL }} />

                <Col size={4} style={{ ...boxStyle, ...SIZE.TALL }} />
                <Col size={4} style={{ ...boxStyle, ...SIZE.TALL }} />
                <Col size={4} style={{ ...boxStyle, ...SIZE.TALL }} />
              </Grid>
            </Root>
          </Layout>
          <Footer>
            <Root>
              <Col>
                <h1>Footer</h1>
              </Col>
            </Root>
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  )
}

ReactDOM.render(<Page />, document.querySelector('#root'))
