"use client";

import styled from "styled-components";

export const UIButton = styled.button({
  backgroundColor: "#2ea44f",
  color: "white",
  padding: "1.5rem 5rem",
  fontSize: "1.5rem",
  lineHeight: "1.5rem",
  fontWeight: 600,
  border: "0.2rem solid rgba(27,31,35,.15)",
  borderRadius: 6,
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#2c974b",
  },
});
