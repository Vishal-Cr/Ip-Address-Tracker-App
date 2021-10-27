import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #fff;
  color: hsl(0, 0%, 17%);
  margin: 0 auto;
  margin-top: 3rem;
  border-radius: 15px;
  padding-left: 1.5rem;
  height: 7.5rem;
  width: 75vw;
`;
export const Infodiv = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  flex-direction: column;
  width: 30%;
  word-break: break-all;
  padding: 1rem;
  position: relative;
`;
export const Divider = styled.div`
  margin: 1rem;
  border-left: 0.1px solid hsl(0, 0%, 59%);
  height: 58px;
  left: 50%;
`;
