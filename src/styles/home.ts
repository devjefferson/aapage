import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  .content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .contentLeft{
      margin: -150px 0 -50px 0;
      width: 300px;
      height: 300px;
    }
    .imageLogo{
      width: 300px;
      height: 300px;
    }
    .contentRight{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    h1{
        text-align: center;
        margin-bottom: -1.0rem;
      }
     p{
      width: 300px;
      text-align: justify;
      margin: 1.5rem 1.2rem 1.2rem 1.2rem;
      font-size: .9rem;
      line-height: 1.1rem;
      color: var(--color-white);
     }
     .imageAndroid{
      width: 250px;
    }

    }
   
  }
  footer{
      height: 4rem;
      width: 100vw;
      bottom: 0;
      background: var(--color-segundary);
      position:fixed;
      
    
    }

    @media (min-width: 700px){
      display: flex;
      flex-direction: row;

      .content{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .contentLeft{
          margin: -300px -100px -50px -100px;
          width: 500px;
          height: 600px;
        }
        .contentRight{
          h1{
            font-size: 3.5rem;
          }
          p{
            font-size: 1.8rem;
            width: 50rem;
            line-height: 2.5rem;
            margin-bottom: 40px;
          }
        }
      }
     
    }
`;
