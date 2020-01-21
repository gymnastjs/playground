import React from "react";
import { Grid, Col, GymnastProvider, useGrid } from "gymnast";

const boxStyle = {
  color: "#1469cc",
  backgroundColor: "#efefef"
};

const style = {
  HEADER: { position: "fixed", align: "top" },
  TALL: { ...boxStyle, minHeight: 200 },
  MEDIUM: { ...boxStyle, minHeight: 150 },
  SMALL: { ...boxStyle, minHeight: "initial" }
};

function Footer(props) {
  const [shouldRender, allProps] = useGrid(props);

  if (!shouldRender) {
    return null;
  }

  return <footer {...allProps} />;
}

function Header(props) {
  const [shouldRender, allProps] = useGrid(props);

  if (!shouldRender) {
    return null;
  }

  return <header {...allProps} />;
}

export default function Page() {
  return (
    <GymnastProvider>
      <Header style={style.HEADER}>
        <Col marginBottom={0}>
          <h1>Header</h1>
        </Col>
      </Header>
      <Grid marginTop="2XL" paddingTop="L">
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
      <Footer>
        <Col>
          <h1>Footer</h1>
        </Col>
      </Footer>
    </GymnastProvider>
  );
}
