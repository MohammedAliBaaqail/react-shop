import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const Title = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`;

export const Preview = styled.div`
display: flex;
justify-content: center;

flex-direction: row;
margin-bottom: 30px;
row-gap: 20px;
column-gap: 20px;
flex-wrap: wrap;
justify-content: space-evenly;
`;
