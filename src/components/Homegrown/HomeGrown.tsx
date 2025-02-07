import { Sprout, Palette, Truck } from "lucide-react";
import styled from "styled-components";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import GrowingText from "../GrowingText/GrowingText"; //  // ✅ New animated text component

export default function Homegrown() {
  useScrollAnimation();

  return (
    <HomegrownContainer>
      <HeaderSection>
        <KickerText>Local Food Revolution</KickerText>

        {/* ✅ Using Animated GrowingText Component */}
        <GrowingText />

        <Subtitle>
          We’re on a mission to rebuild local food from the ground up. <br />
          Upstart Market is bringing together growers, makers, and connectors <br />
          to create something new.
        </Subtitle>
        <CallToAction>Join us. This is going to be big.</CallToAction>
      </HeaderSection>

      {/* Cards Grid */}
      <Grid>
        {[
          {
            title: "Grow",
            description: "Sell what you grow.",
            details: ["Share resources.", "Support local food security."],
            icon: <Sprout size={64} className="text-green-600" strokeWidth={1.5} />,
            button: "Grow with us",
            color: "#10B981",
          },
          {
            title: "Create",
            description: "Craft real food.",
            details: ["Share space.", "Empower local makers."],
            icon: <Palette size={64} className="text-orange-600" strokeWidth={1.5} />,
            button: "Start creating",
            color: "#F97316",
          },
          {
            title: "Connect",
            description: "Deliver fresh goods.",
            details: ["Host a fridge.", "Build community."],
            icon: <Truck size={64} className="text-blue-600" strokeWidth={1.5} />,
            button: "Get connected",
            color: "#3B82F6",
          },
        ].map(({ title, description, details, icon, button, color }) => (
          <Card key={title}>
            <IconWrapper>{icon}</IconWrapper>
            <CardContent>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
              <CardList>
                {details.map((detail) => (
                  <CardListItem key={detail}>{detail}</CardListItem>
                ))}
              </CardList>
              <CardButton style={{ background: color, color: "#fff" }}>{button} →</CardButton>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </HomegrownContainer>
  );
}

/* Styled Components */
const HomegrownContainer = styled.section`
  width: 100%;
  padding: 10rem 4rem;
  text-align: center;
  background: linear-gradient(to bottom, white, #fff7ed);
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 7rem;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
`;

const KickerText = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  color: #ff7300;
  letter-spacing: 1.5px;
  margin-bottom: 1.2rem;
`;

const Subtitle = styled.p`
  font-size: 2.2rem;
  color: #444;
  max-width: 850px;
  margin: 0 auto 3.5rem;
  line-height: 1.6;

  @media (max-width: 1024px) {
    font-size: 2rem;
    max-width: 90%;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    max-width: 95%;
  }
`;

const CallToAction = styled.p`
  font-size: 2.2rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 4rem;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Card = styled.div`
  background: white;
  padding: 5rem;
  border-radius: 20px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  max-width: 75%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 40px;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 4rem;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
  gap: 20px;
`;

const IconWrapper = styled.div`
  font-size: 4.5rem;
  flex-shrink: 0;
`;

const CardTitle = styled.h3`
  font-size: 3rem;
  font-weight: bold;
  color: #222;
  margin-bottom: 1rem;
`;

const CardDescription = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  color: #333;
  line-height: 1.6;
`;

const CardList = styled.ul`
  font-size: 1.7rem;
  color: #555;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CardListItem = styled.li`
  font-size: 1.7rem;
  font-weight: 500;
`;

const CardButton = styled.button`
  font-size: 1.8rem;
  font-weight: 700;
  padding: 1.5rem 3rem;
  border-radius: 15px;
  cursor: pointer;
  border: none;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateX(4px);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
  }
`;
