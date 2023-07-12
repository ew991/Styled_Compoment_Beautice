import React, { useState } from 'react';
import styled from 'styled-components';
import logoimg from '../asset/Main Logo.svg'

const NavbarContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  @media (min-width: 1024px) {
    padding: 0 150px;
  }
  

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.img`
`;

const RightSection = styled.div`

  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-left: 40px;
  }
`;

const NavItem = styled.a`
  margin-left: 16px;
  text-decoration: none;
  

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 8px;
    display: ${(props) => (props.visible ? 'block' : 'none')};
  }
`;

const NavItem1 = styled.a`
  /* margin-left: 16px; */
  font-weight: 600;
  text-decoration: none;
  color: #414880;
  

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 8px;
    display: ${(props) => (props.visible ? 'block' : 'none')};
  }
`;
const Button = styled.button`
margin-left: 10px;
   @media (max-width: 768px) {
    margin-left: 0px;
    background-color: inherit;
    color: #FF64AE;
    text-align: justify;
    font-weight:800;
    display: ${(props) => (props.visible ? 'block' : 'none')};
  }
  
`;
const ToggleButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  /* background-color: transparent; */
  border: none;
  cursor: pointer;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };


  return (
    <NavbarContainer>
      <Logo src={logoimg} alt="Logo" />
      <RightSection>
        <NavItem1 href="#" visible={!showMenu}>
          Home +
        </NavItem1>
        <NavItem href="#" visible={!showMenu}>
          About
        </NavItem>
        <NavItem href="#" visible={!showMenu}>
          Service
        </NavItem>
        <NavItem href="#" visible={!showMenu}>
          Gallery
        </NavItem>
        <NavItem href="#" visible={!showMenu}>
          Blog
        </NavItem>
        <Button href="#" visible={!showMenu}>Contact</Button>
      </RightSection>
      <ToggleButton onClick={handleToggleMenu}>
        {showMenu ? 'Menu' : 'Close'}
      </ToggleButton>
    </NavbarContainer>
  );
};

export default Navbar;
