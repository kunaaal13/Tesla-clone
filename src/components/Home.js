import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order online for touchless delivery"
        backgroundImage="/images/model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Exist Inventory"
      />
      <Section
        title="Model 3"
        description="Order online for touchless delivery"
        backgroundImage="/images/model-3.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Exist Inventory"
      />
      <Section
        title="Model X"
        description="Order online for touchless delivery"
        backgroundImage="/images/model-x.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Exist Inventory"
      />
      <Section
        title="Model Y"
        description="Order online for touchless delivery"
        backgroundImage="/images/model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Exist Inventory"
      />
      <Section
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        backgroundImage="/images/solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImage="/images/solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImage="/images/accessories.jpg"
        leftBtnText="Shop Now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
