import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex: 1;
justify-content: space-between;
color: var(--color-white);
margin: 0 3rem;
line-height: 2.4rem;
.containersocial{
    display: flex; 
    justify-content: center;
    align-items: center;
    height: 6rem;
a{
  
}
.imagesocial{
  height: 32px;
  width: 32px;
  margin: 0 5px;
  opacity: 70%;
  filter: grayscale(100);
  :hover{
    filter: grayscale(0);
    opacity: 100%;
  }
  }
}
@media (max-width: 700px){
    display: flex;
    flex-direction: column;
    margin: 0 1rem;
    line-height: 1.4rem;
  .containersocial{
    display: flex;
    height: 2rem;
    margin-top: 0.6rem;
    
  }
}
`;
