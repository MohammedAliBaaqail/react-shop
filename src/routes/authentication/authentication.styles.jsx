import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  
  margin: 30px auto;
  @media only screen and (max-width: 700px) {

    display: flex;
    margin: 25px;
   
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
}
  }
`;
