import styled from "styled-components";

const CardContainer = styled.div<{ bgImage: string }>`
  width: 350px;
  height: 450px;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  position: relative;
  color: white;
  border-radius: 10px;
  overflow: hidden;
`;

const HeroName = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 28px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  font-family: "Roboto Slab", serif;
`;

const Attributes = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
`;

const Attribute = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 5px 10px;
  border-radius: 5px;
  text-align: center;
`;

type HeroCardProps = {
  name: string;
  attributes: { name: string; value: number }[];
  bgImage: string;
};

const HeroCard = ({ name, attributes, bgImage }: HeroCardProps) => {
  return (
    <CardContainer bgImage={bgImage}>
      <HeroName>{name}</HeroName>
      <Attributes>
        {attributes.map((attr) => (
          <Attribute key={attr.name}>
            {attr.name}:<br></br> {attr.value}
          </Attribute>
        ))}
      </Attributes>
    </CardContainer>
  );
};

export default HeroCard;
