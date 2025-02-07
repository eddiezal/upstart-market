import React, { useState } from "react";
import styled from "styled-components";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Nav>
      <NavContainer>
        <Logo href="/">Logo</Logo>
        
        <NavLinks isOpen={isMenuOpen}>
          <NavLinkItem><NavLink href="#">Home</NavLink></NavLinkItem>
          <NavLinkItem><NavLink href="#">About Us</NavLink></NavLinkItem>
          <NavLinkItem><NavLink href="#">Our Mission</NavLink></NavLinkItem>
          <NavLinkItem><NavLink href="#">Contact</NavLink></NavLinkItem>
          
        </NavLinks>

        <HamburgerButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </HamburgerButton>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;

/* Styled Components (INLINE) */
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  z-index: 100;
  background: linear-gradient(to right, #ff9800, #ff7300);
  color: white;


`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px; 
  padding: 0 16px;
`;

const Logo = styled.a`
  font-size: 24px;
  font-weight: 800;
  color: inherit;
  text-decoration: none;
`;

const NavLinks = styled.ul<{ isOpen: boolean }>`
  display: flex;
  list-style: none;
  gap: 20px;
  align-items: center;
  padding: 0;
  
  @media (max-width: 768px) {
    position: absolute;
    top: 60px;
    right: 0;
    background: rgba(0, 0, 0, 0.8);
    width: 200px;
    flex-direction: column;
    border-radius: 8px;
    padding: 10px;
    display: ${(props) => (props.isOpen ? "flex" : "none")};
  }
`;

const NavLinkItem = styled.li``;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  padding: 10px 15px;
  border-radius: 8px;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;
const NavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px; /* ✅ Ensure consistent height */
  background: ${(props) => props.theme.colors.primary};
  z-index: 1000;
`;
