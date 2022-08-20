import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

html{
   font-size: 62.5%;
   overflow-x: hidden; 
}
body {
  overflow-x: hidden;
   scrollbar-color: rgb(98 84 243);
    scrollbar-width: thin;
}
body::-webkit-scrollbar {
  width: 1.5rem;
}
body::-webkit-scrollbar-track {
   background-color: rgb(24 24 29);
}
body::-webkit-scrollbar-thumb {
 
  background: #fff;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
}

h1{
    color:${({ theme }) => theme.color.heading};
    font-size: 6rem;
    font-weight:600;
}

h2{
     color:${({ theme }) => theme.color.heading};
    font-size: 4.4rem;
    font-weight: 300;
    white-space: normal;
    text-align: center;
}
h3{
    font-size:1.8rem;
    font-weight: 400;
}
p{
    color:${({ theme }) => theme.color.text};
    opacity : .7;
    font-size: 1.65rem;
    line-height: 1.5rem;
    margin-top: 1rem;
    font-weight: 400;

}

a{
    text-decoration: none;

}

li{
    list-style: none;
}

.container{
    max-width:120rem;
    margin:0 auto;
}

.grid{
    display:grid;
    gap: 9rem;
}
.grid-two-col{
    grid-template-columns:repeat(2,1fr);
}

// .grid-three-col{
//     grid-template-columns:repeat(3,1fr);
// }

.grid-four-col{
    grid-template-columns: 1fr 1.2fr .5fr .8fr;
}

.common-heading{
    font-size:3.8rem;
    font-weight:600;
    margin-bottom:6rem;
    text-transform:capitalize;
}

input, textarea{
    max-width:50rem;
    color:${({ theme }) => theme.color.black};
    padding:1.6rem 2.4rem;
    border:1px solid ${({ theme }) => theme.color.border};
    text-transform:uppercase;
    box-shadow:${({ theme }) => theme.color.shadowSupport};

}

input[type="submit"]{
    max-width:16rem;
    margin-top:2rem;
    background-color:${({ theme }) => theme.color.btn};
    color:${({ theme }) => theme.color.white};
    padding:1.4rem 2.2rem;
    border-style:soild;
    border-width: .1rem;
    text-transform:uppercase;
    font-size:1.8rem;
    cursor:pointer;
}

@media (max-width:${({ theme }) => theme.media.tab}) {
      .container{
        padding: 0 3.2rem;
      }
        .Grid-three-col {
      grid-template-columns: 1fr 1fr;
    }
}
@media (max-width:${({ theme }) => theme.media.mobile}) {
      html{
        font-size: 50%;
      }
      .grid{
        gap: 3.2rem;
      }
      .Grid{
        gap: 3.2rem;
      }
      .grid-two-col,.grid-four-col,.Grid-three-col{
        grid-template-columns: 1fr;
      }
}

`;