import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 24px;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 20px;
`;

const ExperienceCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  padding: 24px;
  background-color: rgba(17, 25, 40, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.125);
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-9px); /* Slight lift */
    background-color: rgba(23, 92, 230, 0.1); /* Subtle background color change */
    box-shadow: 
      0 0 20px rgba(23, 92, 230, 0.6), /* Glow effect */
      0 0 30px rgba(23, 92, 230, 0.5), /* Inner glow */
      rgba(23, 92, 230, 0.4) 0px 8px 32px; /* Increased shadow */
  }
`;

const PositionTitle = styled.h2`
  font-size: 24px;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 8px;
`;

const CompanyName = styled.h3`
  font-size: 18px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 6px;
  font-weight: 500;
`;

const ExperienceDescription = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
`;

const Duration = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary + "B3"};
  margin-top: 4px;
  font-style: italic;
`;

// const Tag = styled.span`
// font-size: 14px;
// background-color: ${({ theme }) => theme.primary + "20"};
// color: ${({ theme }) => theme.primary};
// padding: 4px 8px;
// border-radius: 8px;
// width: fit-content;
// display: flex;
// justify-content: center;
// align-items: center;
// `;

// const Link = styled.a`
// color: inherit; /* Inherit the color from Tag component */
// text-decoration: none; /* Remove underline */

// &:hover {
//   color: white; /* Change to white on hover */
//   text-decoration: none; /* Ensure no underline on hover */
// }
// `;

// Experience Component
const Experience = () => {
return (
  <Container id="Experience">
    <Wrapper>
      <Title>Experience</Title>

      <ExperienceCard>
        <PositionTitle>Participant - Failathon Event 🎤</PositionTitle>
        <CompanyName>Organized by Vishnu Institute of Technology</CompanyName>
        <ExperienceDescription>
          Participated in Failathon, an event aimed at helping students
          overcome stage fear by presenting innovative ideas before an
          audience. This experience helped me gain confidence and prepare for
          future hackathons. Earned a certificate of participation from the
          organizers.
        </ExperienceDescription>
        <Duration>December 2023</Duration>
        {/* <Tag>
          <Link href="#">Link</Link>
        </Tag> */}
      </ExperienceCard>

      <ExperienceCard>
        <PositionTitle>Coding Competitions 🏆</PositionTitle>
        <CompanyName>College Events</CompanyName>
        <ExperienceDescription>
          Attended various coding competitions like Code Hunt and Treasure
          Hunt, using Python and other tools. These events were excellent
          practice for logical problem-solving under pressure and a great way
          to engage in the competitive coding environment.
        </ExperienceDescription>
        <Duration>Throughout 2023-2024</Duration>
        {/* <Tag>
          <Link href="#">Link</Link>
        </Tag> */}
      </ExperienceCard>

      <ExperienceCard>
        <PositionTitle>Member of - Build Club 🚀</PositionTitle>
        <CompanyName>Build Club</CompanyName>
        <ExperienceDescription>
          Gained hands-on experience in coding, public speaking, and both
          technical and non-technical skills. Learned basics of CV (image
          processing) and embedded systems. Currently, working on real-world
          problem statements to further enhance my skills and collaborate with
          peers.
        </ExperienceDescription>
        <Duration>Ongoing since 2023</Duration>
        {/* <Tag>
          <Link href="#">Link</Link>
        </Tag> */}
      </ExperienceCard>
    </Wrapper>
  </Container>
);
};

export default Experience;