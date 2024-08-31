import React from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const OnlineNotificationContainer = styled.div`
  background-color: #4caf50;
  color: white;
  text-align: center;
  padding: 40px;
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  animation: ${fadeIn} 0.5s ease-in-out;
  z-index: +1;
`;

const OnlineNotificationMessage = styled.p`
  font-size: 1.2rem;
  z-index: +1;
`;

const OnlineNotification = () => (
  <OnlineNotificationContainer>
    <OnlineNotificationMessage>
      Connection restored! You are back online.
    </OnlineNotificationMessage>
  </OnlineNotificationContainer>
);

export default OnlineNotification;
