import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #fff;
  color: hsl(0, 0%, 17%);
  margin: 0 auto;
  margin-top: 3rem;
  border-radius: 13px;
  padding: 0 1rem;
  height: 5rem;
  width: 75vw;
  position: relative;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  @media (min-width: 800px) and (max-width: 1440px) {
    height: 8rem;
    width: 80vw;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  }
  @media (min-width: 500px) and (max-width: 800px) {
    width: 45vw;
    flex-direction: column;
    height: 15rem;
  }
  @media (min-width: 300px) and (max-width: 500px) {
    width: 85vw;
    height: 45vh;
    flex-direction: column;
  }
  @media (min-width: 1440px) {
    height: 8rem;
    border-radius: 20px;
  }
`;
export const Infodiv = styled.div`
  width: 100%;
  word-break: break-all;
  position: relative;
  height: 100%;
  @media only screen and (min-width: 500px) and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (min-width: 300px) and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 800px) and (max-width: 1440px) {
    width: 100%;
    padding: 0.5rem;
  }
  @media (min-width: 1440px) {
    padding: 0.6rem;
  }
`;
export const Divider = styled.div`
  margin: 0 0.9rem;
  border-left: 0.1px solid hsl(0, 0%, 59%);
  height: 48px;
  left: 50%;
  opacity: 0.4;
  @media (max-width: 800px) {
    display: none;
  }
  @media (min-width: 800px) and (max-width: 1440px) {
    height: 80px;
    opacity: 0.6;
  }
`;
