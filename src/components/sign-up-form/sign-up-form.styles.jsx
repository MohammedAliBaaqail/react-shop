import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 10px 0;
  }
  @media only screen and (max-width: 700px) {
    align-self: center;
    width: 100%;
}
`;
