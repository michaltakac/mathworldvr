/* eslint-disable */
import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  left: 50%;
  position: absolute;
  zindex: 1000;
  fontfamily: "Arial";
  fontsize: 13;
  display: ${(props: any) => (props.attentionBoxVisible ? "block" : "none")};
`;

const Panel = styled.div`
  background: rgba(0, 0, 0, 0.85);
  position: relative;
  left: -50%;
  width: 270;
  padding: 20;
  margin: 20;
`;

const Anchor = styled.a`
  color: #81d1ef;
`;

const Heading = styled.h3`
  color: #fff;
  margin: 0 auto;
  textalign: center;
  margintop: 10;
`;

const Blockquote = styled.blockquote`
  color: #fff;
  margin: 0 auto;
  textalign: center;
  margintop: 10;
`;

const Paragraph = styled.p`
  color: #fff;
  margin: 0 auto;
  textalign: center;
  margintop: 10;
`;

const Span = styled.span`
  color: #fff;
  textalign: right;
  right: 10;
`;

export function AttentionBox({ attentionBoxVisible, toggleAttentionBox }) {
  return (
    <Wrapper>
      <Panel>
        <Span>
          <Anchor href="#" onClick={toggleAttentionBox}>
            Close [x]
          </Anchor>
        </Span>

        <Heading>MathworldVR</Heading>

        <Blockquote>
          "I am convinced that the best learning takes place when the learner
          takes charge." <br />
          <span style={{ fontStyle: "italic" }}>- Seymour Papert</span>
        </Blockquote>

        <Paragraph>
          This project is designed to be used with VR headsets with hand
          controllers. For more information check{" "}
          <Anchor href="https://webvr.info/" target="_blank">
            https://webvr.info/
          </Anchor>
          .
        </Paragraph>

        <Paragraph>
          MathworldVR is open-source:{" "}
          <Anchor
            href="https://github.com/michaltakac/mathworldvr/"
            target="_blank"
          >
            https://github.com/michaltakac/mathworldvr/
          </Anchor>
          .
        </Paragraph>

        <Paragraph>
          I would like to hear feedback from you. What should MathworldVR
          become? What do you expect in fully-featured app? Please contact me
          at: <br />
          <br />
          <Anchor href="mailto:hello@michaltakac.com">
            hello@michaltakac.com
          </Anchor>
          <br />
        </Paragraph>
      </Panel>
    </Wrapper>
  );
}
