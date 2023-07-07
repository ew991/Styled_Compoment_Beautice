import { css } from "styled-components";
export const GlobalClass = css`

    /* @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,500&display=swap'); */

    body{
        font-family: 'Poppins';
        letter-spacing: 1.6px;
        background: #FFF;
    }
    a{

        text-decoration: none;
        color: #8B8B8B;
        font-weight: 500;
    }
    
    p{
       font-size :16px ;
       color: #8B8B8B;
       font-weight: 400;
       line-height: 24px;
    }
    h2{
        font-size: 36px;
        color: #091156;
        font-weight: 600;
    }
    h1{
        font-size: 42px;
        color: #091156;
        font-weight: 600;     
    }
    h5{
        font-size: 16px;
        color: #FF64AE;
    }
    h6{
        font-size: 16px;
        color: #091156;
        font-weight: 600;
    }
    button{
        height: 58px;
        background-color: #FF64AE;
        border-radius: 50px;
        width: 200px;
        font-weight: 600;
        font-size: 16px;
        letter-spacing: 1.6px;
        border: none;
        color: #FFFFFF;
        cursor: pointer;
        &:hover{
            background-color: #FFFFFF;
            color: #FF64AE;
           
        }
    }
*,
*:before,
*:after {
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
}
img,
picture,
svg,
video {
  display: block;
  max-width: 100%;
}
input,
select,
textarea {
  background-color: transparent;
  outline: none;
}
button {
  cursor: pointer;
  outline: none;
  border: 0;
}
`;