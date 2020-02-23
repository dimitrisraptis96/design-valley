import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FiX } from "react-icons/fi";

const Container = styled.a`
  padding: 1rem;
  margin: 1rem;
  background-color: ${props => props.theme.colors.primary[500]};
  color: white;
  z-index: 10000;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0px 16px 16px 0px rgba(95, 68, 247, 0.333);

  position: fixed;
  bottom: 0;
  right: 0;

  &,
  &:focus,
  &:hover,
  &:active {
    outline: none;
    text-decoration: none;
  }

  &:hover {
    box-shadow: none;
  }
`;

const SponsorsCTA = ({}) => {
  return (
    <Container href="/sponsor">
      <Icon />
      Become a Sponsor
    </Container>
  );
};

const Icon = ({ size = 20, color = "#fff" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ marginRight: "0.5rem" }}
    >
      <path
        d="M6 21H4C3.448 21 3 20.552 3 20V14C3 13.448 3.448 13 4 13H6C6.552 13 7 13.448 7 14V20C7 20.552 6.552 21 6 21Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13 17H15.333C15.766 17 16.187 16.86 16.533 16.6L18.949 14.788C19.552 14.336 20.396 14.396 20.929 14.929C21.521 15.521 21.521 16.48 20.929 17.071L18.856 19.144C18.298 19.702 17.586 20.083 16.812 20.238L13.882 20.824C13.301 20.94 12.702 20.926 12.127 20.782L9.477 20.12C9.16 20.04 8.835 20 8.508 20H7"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13 17H14.485C15.322 17 16 16.322 16 15.485V15.182C16 14.487 15.527 13.881 14.853 13.713L12.561 13.14C12.188 13.047 11.806 13 11.422 13C10.495 13 9.588 13.274 8.817 13.789L7 15"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.1688 5.15524C18.2771 6.26355 18.2771 8.06047 17.1688 9.16878C16.0605 10.2771 14.2636 10.2771 13.1553 9.16878C12.047 8.06047 12.047 6.26355 13.1553 5.15524C14.2636 4.04693 16.0605 4.04693 17.1688 5.15524Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.631 4.375C14.538 3.81 14.28 3.267 13.844 2.831C12.736 1.723 10.939 1.723 9.831 2.831C8.723 3.939 8.723 5.736 9.831 6.844C10.521 7.534 11.477 7.793 12.368 7.624"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default SponsorsCTA;
