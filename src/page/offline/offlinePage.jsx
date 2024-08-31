import React from "react";
import styled, { keyframes } from "styled-components";
import { SignalWifiConnectedNoInternet4 } from "@mui/icons-material";

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const OfflineContainer = styled.div`
  text-align: center;
  margin-top: 20%;
  @media (max-width: 768px) {
    margin-top: 40%;
  }
`;

const OfflineTitle = styled.h1`
  color: #ff5733;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const OfflineIcon = styled(SignalWifiConnectedNoInternet4)`
  font-size: 4rem;
  color: #ff5733;
  animation: ${fadeIn} 1s ease-in-out;
`;

const OfflineMessage = styled.p`
  font-size: 1.2rem;
`;

const OfflinePage = () => (
  <OfflineContainer>
    <OfflineTitle>
      You are offline
      <br />
      <OfflineIcon />
    </OfflineTitle>
    <OfflineMessage>Please check your internet connection.</OfflineMessage>
  </OfflineContainer>
);

export default OfflinePage;
