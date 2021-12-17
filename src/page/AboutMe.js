import React from "react";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import imgAboutMe from "../../src/images/imgAboutMe.jpg";

const AboutMe = ({ infoAboutMe }) => {
  return (
    <>
      <Box>
        <ItsMe>
          <Typography variant="h4" color="lightGray">
            {infoAboutMe.myDescription}
          </Typography>
        </ItsMe>
        <Photo />
        <MyInfo>
          <Typography variant="h4" color="lightGray">
            Nazywam się {infoAboutMe.name}
            {infoAboutMe.lastName}, mam {infoAboutMe.age} lat.
          </Typography>
        </MyInfo>
      </Box>
    </>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #000000;
`;

const ItsMe = styled.div`
  position: relative;
  margin-left: 60%;
  padding-top: 65px;
  width: 32%;
  height: 20vh;
`;

const Photo = styled.div`
  width: 35%;
  height: 100%;
  z-index: 1;
  margin-left: 5%;
  background-image: url(${imgAboutMe});
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  background-repeat: no-repeat;
`;

const MyInfo = styled.div`
  width: 50%;
  height: 20vh;
  margin-left: 50%;
`;

export default AboutMe;
