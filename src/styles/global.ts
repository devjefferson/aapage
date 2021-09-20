import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  --color-segundary: #D59563;
  --color-white: #ffffffff

}

html{
  flex: 1
}

body{
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background: rgb(47,72,88);
  background: radial-gradient(circle, rgba(47,72,88,1) 0%, rgba(14,25,32,1) 100%);
  color: var(--color-segundary);
  font: 300 16px sans-serif; 
  #containerLoading{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  }
  #Loading{
      border: 16px solid #f3f3f3; /* Light grey */
      border-top: 16px solid #14BF9A; /* Blue */
      border-radius: 50%;
      width: 80px;
      height: 80px;
      animation: spin 2s linear infinite;

      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

    }
}
.container{
  width: 90vw;
  height: 90vh;
}

@media (min-width: 700px){
  :root{
    font-size: 62.5%;
  }
}
`