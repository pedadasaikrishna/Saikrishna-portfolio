import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

// Styled Components
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

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  padding: 24px;
  background-color: ${({ theme }) => theme.bg};
  border: 1px solid rgba(255, 255, 255, 0.125);
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-9px);
    background-color: rgba(23, 92, 230, 0.1);
    box-shadow: 0 0 20px rgba(23, 92, 230, 0.6), 0 0 30px rgba(23, 92, 230, 0.5),
      rgba(23, 92, 230, 0.4) 0px 8px 32px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 16px;
  }
`;

const ProjectTitle = styled.h2`
  font-size: 24px;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ProjectTags = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  font-size: 14px;
  background-color: ${({ theme }) => theme.primary + "20"};
  color: ${({ theme }) => theme.primary};
  padding: 4px 8px;
  border-radius: 8px;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Links = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: white;
    text-decoration: none;
  }
`;
const AlbumButtonLink = styled(Link)`
  font-size: 14px;
  background: linear-gradient(to right, #ff8a00, #e52e71);
  color: white;
  padding: 5px 9px;
  border-radius: 6px;
  display: inline-block;
  width: fit-content;
  text-decoration: none; /* Removes underline */
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;

  &:hover {
    background: linear-gradient(to right, #e52e71, #ff8a00);
  }
`;

const OngoingLabel = styled.div``;
// Projects Component
const Projects = () => {
  return (
    <Container id="Projects">
      <Wrapper>
        <Title>Projects</Title>
        <ProjectCard>
          <ProjectTitle>Innovative Lab</ProjectTitle>
          <ProjectDescription>
            🌐 Remote Team Collaboration Tool A web-based platform designed to
            empower remote teams with collaborative features like chat, video
            calls, task management, file sharing, and a real-time coding
            playground. Built with React.js and styled-components, the platform
            integrates seamlessly with MySQL for efficient data management,
            providing a streamlined, engaging experience for remote team
            productivity. 🚀
          </ProjectDescription>
          <ProjectTags>
            <Tag>React</Tag>
            <Tag>JavaScript</Tag>
            <Tag>Node.js</Tag>
            <Tag>MongoDb</Tag>
            <Tag>Responsive Design</Tag>
            <OngoingLabel
              style={{
                backgroundColor: "#1e90ff", // Blue background
                color: "#fff", // White text
                fontSize: "0.8rem", // Readable font size
                fontWeight: "bold", // Bold for emphasis
                padding: "0.2rem 0.4rem", // Compact padding
                marginLeft: "0.1rem", // Spacing from title
                marginTop: "0.1rem",
                borderRadius: "0.5rem", // Slightly rounded corners
                display: "inline-block", // Ensures proper alignment
              }}
            >
              Under Development
            </OngoingLabel>
          </ProjectTags>
        </ProjectCard>
        <ProjectCard>
          <ProjectTitle>PsyShell</ProjectTitle>
          <ProjectDescription>
            A modern mental wellness collaboration platform. I led the frontend
            development and contributed to backend features. Key highlights
            include:
            <ul style={{ marginLeft: "10px" }}>
              <li>
                🧠 User-friendly interface for accessing mental health tools and
                sessions.
              </li>
              <li>
                💬 Interactive communication features for support and
                engagement.
              </li>
              <li>📱 Fully responsive and accessible across all devices.</li>
              <li>🔒 Secure backend built with Node.js and SQL integration.</li>
            </ul>
          </ProjectDescription>
          <ProjectTags>
            <Tag>HTML</Tag>
            <Tag>CSS</Tag>
            <Tag>JavaScript</Tag>
            <Tag>Node.js</Tag>
            <Tag>SQL</Tag>
          </ProjectTags>
          <Tag
            style={{
              backgroundColor: "#1e90ff", // Blue background
              color: "#fff", // White text
              fontSize: "0.8rem", // Readable font size
              fontWeight: "bold", // Bold for emphasis
              padding: "0.2rem 0.4rem", // Compact padding
              marginLeft: "0.1rem", // Spacing from title
              marginTop: "10px",
              borderRadius: "0.5rem", // Slightly rounded corners
              display: "inline-block", // Ensures proper alignment
            }}
          >
            <Links href="https://psyshell.co/" target="_blank">
              Live Demo
            </Links>
          </Tag>
          <AlbumButtonLink to="/album/PsyShell" target="_self">
            View Album
          </AlbumButtonLink>
        </ProjectCard>

        <ProjectCard>
          <ProjectTitle>Quiz App</ProjectTitle>
          <ProjectDescription>
            An interactive quiz app built with React, featuring:
            <ul style={{ marginLeft: "10px" }}>
              <li>🎯 Engaging quizzes across topics.</li>
              <li>📊 Real-time score tracking.</li>
              <li>🌙 Light mode.</li>
              <li>📱 Fully responsive design.</li>
            </ul>
          </ProjectDescription>
          <ProjectTags>
            <Tag>React</Tag>
            <Tag>Quiz Features</Tag>
            <Tag
              style={{
                backgroundColor: "#1e90ff", // Blue background
                color: "#fff", // White text
                fontSize: "0.8rem", // Readable font size
                fontWeight: "bold", // Bold for emphasis
                padding: "0.2rem 0.4rem", // Compact padding
                marginLeft: "0.1rem", // Spacing from title
                marginTop: "10px",
                borderRadius: "0.5rem", // Slightly rounded corners
                display: "inline-block", // Ensures proper alignment
              }}
            >
              <Links href="https://mindmash.netlify.app/" target="_blank">
                Link
              </Links>
            </Tag>
          </ProjectTags>
          <AlbumButtonLink to="/album/MindMash" target="_self">
            View Album
          </AlbumButtonLink>
        </ProjectCard>

        <ProjectCard>
          <ProjectTitle style={{ textAlign: "center" }}>
            <span
              style={{
                background: "linear-gradient(to right, #ff8a00, #e52e71)",
                color: "white",
                padding: "6px 12px",
                borderRadius: "12px",
                display: "inline-block",
              }}
            >
              🌟 Mini Projects 🌟
            </span>
          </ProjectTitle>
          <ProjectDescription>
            <ul>
              <li style={{ marginLeft: "20px" }}>
                🔍{" "}
                <Links
                  href="https://qrgeneratorbysaikrishna.netlify.app"
                  target="_blank"
                >
                  QR Code Generator
                </Links>
              </li>
              {/*               <li style={{ marginLeft: "20px" }}>😂 <Links href="https://jokegeneratorbysaikrishna.netlify.app" target="_blank">Joke Generator</Links></li> */}
              <li style={{ marginLeft: "20px" }}>
                🛡️{" "}
                <Links
                  href="https://github.com/pedadasaikrishna/passwordvalidator"
                  target="_blank"
                >
                  passwordvalidator - Repo
                </Links>
              </li>
            </ul>
          </ProjectDescription>
        </ProjectCard>
      </Wrapper>
    </Container>
  );
};

export default Projects;
