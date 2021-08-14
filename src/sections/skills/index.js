import React from "react";
import Title from "../../components/texts/title";
import Body from "../../components/texts/body";
import {
  Container,
  Column,
  Content,
  Section,
  Image,
  SectionContainer,
} from "./styles";
import Design from "../../assets/design.png";
import Bug from "../../assets/bug.png";
import OthersSkills from "../../assets/skills.png";

const Skills = () => {
  const title = "Skills";
  const body =
    "In my career, in addition to learning frontend, I was learning other skills that complement my work.";
  const designText = "Design tools";

  return (
    <Container>
      <Content>
        <Title text={title} size="large" />
        <Body text={body} />
      </Content>
      <Section>
        <SectionContainer>
          <Column>
            <Image src={Design} alt="design" />
            <Body text={designText} color="primary" weight="bold" />
            <Body text="Figma" color="primary" />
            <Body text="Photoshop" color="primary" />
            <Body text="Sony Vegas" color="primary" />
          </Column>
          <Column>
            <Image src={OthersSkills} alt="design" />
            <Body text="Others" color="primary" weight="bold" />
            <Body text="Power BI" color="primary" />
            <Body text="Google Analytics" color="primary" />
            <Body text="GIT" color="primary" />
            <Body text="Github" color="primary" />
            <Body text="Bitbucket" color="primary" />
            <Body text="Jira" color="primary" />
            <Body text="Gitlab" color="primary" />
          </Column>
          <Column>
            <Image src={Bug} alt="design" />
            <Body text="Testing" color="primary" weight="bold" />
            <Body text="Unit Testing" color="primary" />
            <Body text="Functional Testing" color="primary" />
          </Column>
        </SectionContainer>
      </Section>
    </Container>
  );
};

export default Skills;
