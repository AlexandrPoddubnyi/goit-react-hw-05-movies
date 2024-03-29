import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
  height: 100vh;
  font-size: 40;
  color: #010101;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
`;
