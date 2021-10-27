import styled from 'styled-components';



 export const StyledInput=styled.input`
   border-top-left-radius: 18px;
   border-bottom-left-radius: 18px;
   padding:1.5rem;
    border:none;
    height:3rem;
    width:40vw;
    cursor: pointer;
    ::placeholder,
  ::-webkit-input-placeholder {
    color:hsl(0, 0%, 59%); 
  }
  :-ms-input-placeholder {
     color: hsl(0, 0%, 59%);
  }
    
    &:focus{
        outline:none;
    }
    
    `;
    export const Div=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    
     `;
    
    export const PointerDiv=styled.div`
   height:3rem;
    width:3rem;
    background:hsl(0, 0%, 17%);
    border-top-right-radius: 18px;
    border-bottom-right-radius: 18px;
    display:flex;
    justify-content: center;
    align-items: center;
    cursor:pointer;
    transition:background 0.5s ease;
    &:hover{
        background:hsl(0, 0%, 59%);
    }
     `;
    

export const Button=styled.button`
background:transparent;
border:none;


`;