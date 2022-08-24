import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 2rem;

  a {
    color: white;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }

    &:first-child {
      span {
        font-size: 2.5rem;
        font-weight: bold;

        & + span {
          color: #797979;
        }
      }
    }
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;
