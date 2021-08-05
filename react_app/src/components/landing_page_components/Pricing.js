import styled from "styled-components";
import Tilt from "react-tilt";
import {
  FreePricingCard,
  PremiumPricingCard,
  ProfessionalPricingCard,
} from "./PricingCard";

function Pricing() {
  return (
    <Container>
      <StyledRow className="top">
        <h1>Pricing</h1>
      </StyledRow>
      <StyledRow className="bottom">
        <TiltWrapper options={{ max: 5, scale: 1.03 }}>
          <FreePricingCard
            title="Free Trial"
            text="XXX Kredits for 7 days"
            price="0"
          />
        </TiltWrapper>
        <TiltWrapper options={{ max: 5, scale: 1.03 }}>
          <PremiumPricingCard
            title="Premium"
            text="XXX Kredits per Month"
            price="0"
          />
        </TiltWrapper>
        <TiltWrapper options={{ max: 5, scale: 1.03 }}>
          <ProfessionalPricingCard
            title="Professional"
            text="XXX Kredits per Month"
            price="0"
          />
        </TiltWrapper>
      </StyledRow>
    </Container>
  );
}

export default Pricing;

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &.top {
    margin-bottom: 5rem;
    @media (max-width: 1000px) {
      height: 130vh;
    }

    @media (max-width: 300px) {
      display: none;
    }

    h1 {
      color: white;
    }
  }

  &.bottom {
    max-width: 1000px;
    width: 80%;
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 1000px) {
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

const Container = styled.div`
  background: #252b42;
  height: 80vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1000px) {
    height: 130vh;
  }

  @media (max-width: 1000px) {
    height: 130vh;
  }
`;

const TiltWrapper = styled(Tilt)`
  width: 250px;

  @media (max-width: 1000px) {
    margin-bottom: 2rem;
  }

  @media (max-width: 300px) {
    width: 180px;
  }

  @media (max-width: 220px) {
    display: none;
  }
`;
