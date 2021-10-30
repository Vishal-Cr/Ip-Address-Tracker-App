import styled from 'styled-components';



 export const StyledInput = styled.input`
   border-top-left-radius: 10px;
   border-bottom-left-radius: 10px;
   padding: 0.5rem;
   border: none;
   height: 2rem;
   width: 40vw;
   font-size: 18px;
   cursor: pointer;
   ::placeholder,
   ::-webkit-input-placeholder {
     color: hsl(0, 0%, 59%);
     padding: 0 0.5rem;
   }
   ::-ms-input-placeholder {
     color: hsl(0, 0%, 59%);
     padding: 0 0.5rem;
   }

   &:focus {
     outline: none;
   }
   @media (min-width: 800px) and (max-width: 1440px) {
     height: 3rem;
     width: 35vw;
     border-top-left-radius: 18px;
     border-bottom-left-radius: 18px;
     margin-top: 15px;
     ::-webkit-input-placeholder {
       font-size: auto;
     }
     ::-ms-input-placeholder {
       font-size: auto;
     }
   }
   @media (min-width: 500px) and (max-width: 800px) {
     height: 3rem;
     width: 35vw;
     border-top-left-radius: 18px;
     border-bottom-left-radius: 18px;
     ::-webkit-input-placeholder {
       font-size: 2rem;
     }
     ::-ms-input-placeholder {
       font-size: 2rem;
     }
   }
   @media (min-width: 300px) and (max-width: 500px) {
     height: 2rem;
     width: 70vw;
     border-top-left-radius: 18px;
     border-bottom-left-radius: 18px;
     padding: 0.5rem;

     ::-webkit-input-placeholder {
       font-size: auto;
     }
     ::-ms-input-placeholder {
       font-size: auto;
     }
   }
   @media (min-width: 1440px) {
     height: 3rem;
     border-top-left-radius: 18px;
     border-bottom-left-radius: 18px;
     ::-webkit-input-placeholder {
       font-size: auto;
     }
     ::-ms-input-placeholder {
       font-size: auto;
     }
   }
 `;
 export const Div = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
 `;

 export const PointerDiv = styled.div`
   height: 2rem;
   width: 2rem;
   background: hsl(0, 0%, 17%);
   border-top-right-radius: 10px;
   border-bottom-right-radius: 10px;
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   transition: background 0.5s ease;
   &:hover {
     background: hsl(0, 0%, 59%);
   }
   @media (min-width: 800px) and (max-width: 1440px) {
     height: 3rem;
     width: 3rem;
     border-top-right-radius: 18px;
     border-bottom-right-radius: 18px;
     margin-top: 15px;
   }
   @media (min-width: 500px) and (max-width: 800px) {
     height: 3rem;
     width: 3rem;
     border-top-right-radius: 18px;
     border-bottom-right-radius: 18px;
   }
   @media (min-width: 300px) and (max-width: 500px) {
     height: 2rem;
     width: 2rem;
     border-top-right-radius: 18px;
     border-bottom-right-radius: 18px;
   }
   @media (min-width: 1440px) {
     border-top-right-radius: 18px;
     border-bottom-right-radius: 18px;
     height: 3rem;
     width: 3rem;
   }
 `;

 export const Button = styled.button`
   background: transparent;
   border: none;
 `;

