import React, { useState, useRef } from "react";
import { usePopper } from "react-popper";
import styled from "styled-components";

const ReactPoper = () => {
  const [showPopper, setShowPopper] = useState(false);

  const buttonRef = useRef(null);
  const popperRef = useRef(null);
  // the ref for the arrow must be a callback ref
  const [arrowRef, setArrowRef] = useState(null);

  const { styles, attributes } = usePopper(
    buttonRef.current,
    popperRef.current,
    {
      modifiers: [
        {
          name: "arrow",
          options: {
            element: arrowRef
          }
        },
        {
          name: "offset",
          options: {
            offset: [0, 10]
          }
        }
      ]
    }
  );

  return (
    <Page>
      <Info>
        <p>Scroll down and right to find the popper!</p>
      </Info>
      <Button ref={buttonRef} onClick={() => setShowPopper(!showPopper)}>
        Click Me
      </Button>
      { showPopper ? (
        <PopperContainer
          ref={popperRef}
          style={styles.popper}
          {...attributes.popper}
        >
          <div ref={setArrowRef} style={styles.arrow} id="arrow" />
          <p>I'm a popper</p>
        </PopperContainer>
      ) : null }
    </Page>
  );
};

// a basic page styling
const Page = styled.div`
  width: 250%;
  height: 250%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Info = styled.div`
  background: lightgreen;
  padding: 1rem;
  position: absolute;
  top: 20px;
  left: 20px;
`

const Button = styled.button`
  background: lightblue;
  border: none;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  width: 150px;
  height: 50px;
  outline: none;
`

const PopperContainer = styled.div`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: white;
  padding: 20px;
  text-align: center;

  #arrow {
    position: absolute;
    width: 10px;
    height: 10px;
    &:after {
      content: " ";
      background-color: white;
      box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
      position: absolute;
      top: -25px; // padding + popper height
      left: 0;
      transform: rotate(45deg);
      width: 10px;
      height: 10px;
    }
  }

  &[data-popper-placement^='top'] > #arrow {
    bottom: -30px;
    :after {
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    }
  }
`;

export default ReactPoper;