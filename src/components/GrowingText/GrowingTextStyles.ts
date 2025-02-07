import styled, { keyframes } from "styled-components";

// Sequential Fade & Grow Animation
const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(20px) scale(0.95); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`;

// Curved Underline Animation
const curveGrow = keyframes`
  from { width: 0%; }
  to { width: 100%; }
`;

// Vine Growth Animation Alternative
const vineGrow = keyframes`
  0% { stroke-dasharray: 0, 300; stroke-dashoffset: 300; opacity: 0; }
  100% { stroke-dasharray: 300, 300; stroke-dashoffset: 0; opacity: 1; }
`;

// Message Container
export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 3rem 2rem;
  position: relative;
`;

// Row for First Two Words
export const TextRow = styled.div`
  display: flex;
  gap: 0.5rem;
`;

// Word Styling (Applies to "Together" & "We Grow")
export const Word = styled.span<{ visible: boolean; delay: number }>`
  font-size: 4.5rem;
  font-weight: 700;
  color: #222;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: ${({ visible }) => (visible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)")};
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  transition-delay: ${({ delay }) => delay * 0.6}s;

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

// Stronger (Highlighted & Underlined)
export const StrongWord = styled(Word)`
  font-size: 6rem;
  font-weight: 900;
  color: #ff7300;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: ${({ visible }) => (visible ? "100%" : "0%")};
    height: 6px;
    background: #ff7300;
    transition: width 1s ease-out;
    transition-delay: ${({ delay }) => delay * 0.8 + 0.5}s;
  }

  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

// SVG Vine Alternative to Underline
export const Underline = styled.svg.attrs({
  viewBox: "0 0 300 20",
})`
  position: absolute;
  bottom: -10px;
  width: 200px;
  height: auto;
  stroke: #ff7300;
  stroke-width: 5;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 300, 300;
  stroke-dashoffset: 300;
  opacity: 0;
  animation: ${vineGrow} 1.5s ease-out forwards;
  animation-delay: 2s;
`;
