import React, { useState } from "react";
import styled from "styled-components";
import { FiHeart } from "react-icons/fi";
import { useSelector } from "react-redux";

import Tag from "./Tag";
import Button from "./Button";
import Image from "./Image";
import { Row, Col } from "react-flexbox-grid";
import {
  getFavorites,
  addFavorite,
  removeFavorite
} from "../utils/localStorage";

const Container = styled(Col)`
  border-radius: 8px;
  background-color: #fff;
  border: solid 2px #f4f4f4;

  padding: 1rem !important;
  margin: 1rem;
`;

const Title = styled.h2`
  color: #212121;
  margin: 0;
  margin-right: 1rem;
`;

const Description = styled.p`
  display: -webkit-box;
  ${"" /* -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden; */}

  color: rgba(0, 0, 0, 0.9);

  margin: 0 0 1rem 0;
`;

function getInitialSaveStatus(id) {
  const favorites = getFavorites();
  const isSaved = favorites.some(tool => tool === id);
  return isSaved;
}

const Tool = ({ image, name, description, id, url, category, votes }) => {
  const [isSaved, setIsSaved] = useState(getInitialSaveStatus(id));

  const { socket, ip, fingerprint } = useSelector(state => state.userSession);
  const reduxVotes = useSelector(
    state => state.votes.find(vote => vote.id === id) || null
  );

  const newVotes = reduxVotes ? reduxVotes.newVotes : votes.length;

  function saveTool(id) {
    addFavorite(id);
    setIsSaved(true);
    socket.emit("like", {
      toolId: id,
      userSession: { ip, fingerprint }
    });
  }

  function removeTool(id) {
    removeFavorite(id);
    setIsSaved(false);
    socket.emit("unlike", {
      toolId: id,
      userSession: { ip, fingerprint }
    });
  }

  return (
    <Container lg={8}>
      <Row
        middle="xs"
        between="xs"
        style={{ margin: 0, marginBottom: "2rem", maxWidth: "100%" }}
      >
        <Title>{name}</Title>

        <Row
          middle="xs"
          // between="xs"
        >
          {newVotes}
          {isSaved ? (
            <FiHeart
              size={28}
              onClick={() => removeTool(id)}
              // fill="#ed2939"
              fill="#ea3c53"
              stroke="none"
              style={{ marginLeft: "1rem" }}
            />
          ) : (
            <FiHeart
              size={28}
              onClick={() => saveTool(id)}
              stroke="rgba(0, 0, 0, 0.4)"
              style={{ marginLeft: "1rem" }}
            />
          )}
        </Row>
      </Row>
      <Col style={{ padding: 0, paddingBottom: "2rem" }}>
        <Image fitContainer src={image} ratio="16:9" />
      </Col>

      <Col>
        <Description>{description}</Description>
        <Tag color={category.color}>{category.name}</Tag>
      </Col>
      <Col></Col>
      <Col style={{ marginTop: "2rem" }}>
        <Button
          onClick={() => {
            const newTab = window.open(url + "/?ref=designmate", "_blank");
            newTab.focus();
          }}
          style={{ width: "100%" }}
        >
          Visit Website
        </Button>
      </Col>
    </Container>
  );
};

export default Tool;
