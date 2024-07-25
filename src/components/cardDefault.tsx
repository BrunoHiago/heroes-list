import styled from "styled-components";

const CardContainer = styled.div`
  width: 400px;
  height: 450px;
  background-color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
`;

const DefaultImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("https://via.placeholder.com/300x400.png?text=?");
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

const DefaultText = styled.div`
  font-size: 24px;
  font-family: "Roboto Slab", serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  margin-bottom: 5px;
`;

const DefaultCard = () => {
  return (
    <CardContainer>
      <DefaultImage />
      <DefaultText>Clica para selecionar um Heroi</DefaultText>
    </CardContainer>
  );
};

export default DefaultCard;
