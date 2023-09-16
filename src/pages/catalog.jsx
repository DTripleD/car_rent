import { CarCatalog } from "../components/CarCatalog/CarCatalog";
import { MainContainer } from "../components/MainContainer/MainContainer";
import { Section } from "./Catalog.styled";

const Catalog = () => {
  console.log("rerender");
  return (
    <>
      <MainContainer>
        <Section>
          <CarCatalog />
        </Section>
      </MainContainer>
    </>
  );
};

export default Catalog;
