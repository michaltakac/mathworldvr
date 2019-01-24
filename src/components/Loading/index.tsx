import * as React from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";

const StyledLoading = styled(ReactLoading)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80px;
  height: 2px;
  margin-top: -1px;
  margin-left: -40px;
`;

export function Loading() {
  return (
    <StyledLoading type="balls" color="#bada55" height={"2px"} width={"80px"} />
  );
}
