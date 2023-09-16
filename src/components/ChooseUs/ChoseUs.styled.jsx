import styled from "@emotion/styled";

export const Section = styled.section`
  background-color: white;
  padding: 100px 30px;
  background-position: -225px 255px;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ChooseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Link = styled.a`
  text-decoration: none;
  color: white;
  font-weight: 700;
  background-color: rgba(52, 112, 255, 1);
  padding: 1.5rem 2.5rem;
  border-radius: 0.3rem;
  box-shadow: 0 10px 15px 0 rgb(255 83 48 / 35%);
  transition: all 0.3s;
  border: 2px solid rgba(52, 112, 255, 1);
  width: fit-content;

  &:hover {
    box-shadow: 0 10px 15px 0 rgb(255 83 48 / 60%);
    background-color: #fa4226;
  }
`;

export const TextContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 3rem;
  width: 100%;
`;

export const TextContainerLeft = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  gap: 30px;
`;

export const TextContainerRightBox = styled.div`
  display: flex;
`;

export const TextContainerRightBoxText = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  max-width: 319px;
`;

export const Image = styled.img`
  width: 110px;
  height: 110px;
  margin-right: 1.1rem;
`;
