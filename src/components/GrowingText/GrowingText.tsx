import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

const GrowingText: React.FC = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleIndex(0); // ✅ Reset when in view
          let index = 0;
          intervalRef.current = setInterval(() => {
            setVisibleIndex((prev) => prev + 1);
            index++;
            if (index === 3 && intervalRef.current) {
              clearInterval(intervalRef.current);
            }
          }, 600);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      if (intervalRef.current) clearInterval(intervalRef.current); // ✅ Cleanup interval
    };
  }, []);

  return (
    <MessageContainer ref={sectionRef}>
      <TextRow>
        <Word isVisible={visibleIndex >= 1} delay={0}>Together</Word>
        <Word isVisible={visibleIndex >= 2} delay={1}>We Grow</Word>
      </TextRow>
      <StrongWord isVisible={visibleIndex >= 3} delay={2}>Stronger</StrongWord>
      <Underline isVisible={visibleIndex >= 3} />
    </MessageContainer>
  );
};

export default GrowingText;

// Styled Components
const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(20px) scale(0.95); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 3rem 2rem;
  position: relative;
`;

export const TextRow = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Word = styled.span<{ isVisible: boolean; delay: number }>`
  font-size: 4.5rem;
  font-weight: 700;
  color: #222;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: translateY(${({ isVisible }) => (isVisible ? "0" : "20px")});
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  transition-delay: ${({ delay }) => delay * 0.8}s;

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

export const StrongWord = styled(Word).attrs<{ isVisible: boolean; delay: number }>(
  (props) => ({
    isVisible: props.isVisible,
    delay: props.delay,
  })
)`
  font-size: 6rem;
  font-weight: 900;
  color: #ff7300;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: ${(props) => (props.isVisible ? "100%" : "0%")};
    height: 6px;
    background: #ff7300;
    transition: width 1s ease-out;
    transition-delay: ${(props) => props.delay * 0.8 + 0.5}s;
  }

  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

export const Underline = styled.div<{ isVisible: boolean }>`
  width: ${({ isVisible }) => (isVisible ? "100%" : "0%")};
  height: 6px;
  background: #ff7300;
  margin-top: 5px;
  transition: width 1s ease-out;
`;
