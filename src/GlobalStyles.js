import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};
    a{text-decoration:none; color:inherit;}

    *{box-sizing:border-box;}
    body{width:100%; height:100vh; font-size:14px; }
    #root{width:100%; height:100%;}
    button{outline:none; cursor:pointer;}
    .form-group{margin-bottom:10px; border:1px solid red; color:#fff;}
    h1{font-size:20px;}
    input{width:200px; height:40px;}
    
`;

export default GlobalStyles;
