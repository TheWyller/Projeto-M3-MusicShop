import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    :root{
        --Color-primary: #FF577F;
        --Color-primary-Focus:#FF427F;
        --Color-primary-Negative:#59323F;

        --Grey-4:#121214;
        --Grey-3:#212529;
        --Grey-2:#343B41;
        --Grey-1:#868E96;
        --Grey-0:#F8F9FA;
        
        --textBtn:#FFFFFF; 
        
        

        --Sucess:#3FE864;
        --Negative:#E83F5B;

        --toastify-color-light: var(--Grey-0);
        --toastify-color-success: var(--Color-primary-Negative);
        --toastify-color-error: var(--Negative);

    }
    body{
        background: white;       
        font-family: 'Inter', sans-serif;
        background-color: var(--Grey-1);
    }

    h1 ,h2 ,h3, h4{
        font-family: 'Inter', sans-serif;
        font-weight: 700;
    }

    button{
        cursor: pointer;
    }

    a{
        text-decoration:none
    }
`;
