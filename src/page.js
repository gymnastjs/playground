import React from "react";
import {
  Grid,
  Layout,
  Root,
  Col,
  ConfigProvider,
  Dev,
  asLayout
} from "gymnast";

const boxStyle = {
  color: "#1469cc",
  backgroundColor: "#efefef"
};
const style = {
  TALL: { ...boxStyle, minHeight: 200 },
  MEDIUM: { ...boxStyle, minHeight: 150 },
  SMALL: { ...boxStyle, minHeight: "initial" }
};

const Footer = asLayout("footer");
const Header = asLayout("header");

export default function Page() {
  return (
    <ConfigProvider>
      <Dev />
      <Layout height="parent" className="page">
        <Header fixed="top">
          <Root>
            <Col marginBottom={0}>
              <h1>Header</h1>
            </Col>
          </Root>
        </Header>
        <Layout height="parent" marginTop={7.5}>
          <Layout height="auto">
            <Root>
              <Grid marginBottom={0} marginTop="L">
                <Col size={10} style={style.TALL} />
                <Col size={2} style={style.SMALL} />

                <Col style={style.MEDIUM} />

                <Col size={6} style={style.MEDIUM} />
                <Col size={6} style={style.MEDIUM} />

                <Col size={4} style={style.TALL} />
                <Col size={4} style={style.TALL} />
                <Col size={4} style={style.TALL} />

                <Col size={4} style={style.TALL} />
                <Col size={4} style={style.TALL} />
                <Col size={4} style={style.TALL} />
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
  );
}
