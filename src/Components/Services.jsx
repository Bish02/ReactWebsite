import React from 'react'
import styled from 'styled-components';
import { useGlobal } from './Context'
import { NavLink } from 'react-router-dom';
import { Button } from '../styles/Button';


const Services = () => {
  const { serviceSection } = useGlobal();
  console.log(serviceSection);
  return (
    <Wrapper className='section'>
      <h2 className="common-heading">Our Services</h2>
      <div className="container Grid Grid-three-col">

        {
          serviceSection.map((Element) => {
            const { content, id, urlToImage, author, title, description } = Element;
            return (
              <div key={id} className='card'>
                <figure>
                  <img src={urlToImage} alt="Image" />
                </figure>
                <div className='card-data'>
                  {/* <h3>{author}</h3> */}
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <NavLink to='/service'>
                    <Button className='btn'>ReadMore</Button>
                  </NavLink>
                </div>
              </div>

            );

          })
        }

      </div>



    </Wrapper>
  );
}
const Wrapper = styled.section`
    padding:9rem 0;
    background-color:${({ theme }) => theme.color.bg};

    .container{
      max-width:120rem;
    }
    .card{
      border:0.1rem solid rgb(170 170 170 / 40%);
      .card-data{
        padding:0 2rem;
      }
      h3{
        margin:2rem 0;
        font-weight:300;
        font-size: 2.4rem;
      }
    }
    .btn{
      margin:2rem auto;
      background-color:rgb(0 0 0 /0%);
      border:0.1rem solid rgb(98 84 243);
      display:flex;
      justify-content:center;
      align-items:center;
      color:rgb(98 84 243);
       font-size:1.4rem;

      &:hover{
        background-color:rgb(98 84 243);
        color:#fff;
      }
      a{
        color:rgb(98 84 243);
       
      }
    }

    figure{
      display:flex;
      width:auto;
      justify-content:center;
      align-items:center;
      position:relative;
      overflow:hidden;
      transition:all 0.5s linear;
      &::after{
        content:"";
        position:absolute;
        top:0;
        left:0;
        width:0%;
        height:100%;
        background-color:rgba(0,0,0,0.5);
        transition:all 0.2s linear;
        cursor:pointer;
      }
      &:hover::after{
        width:100%;

      }
      &:hover img{
        transform:scale(1.2);

      }
      img{
        max-width:90%;
        margin-top:1.5rem;
        height:20rem;
        transition:all 0.2s linear
      }
    }
.Grid{
    display:grid;
    gap: 9rem;
}
.Grid-three-col{
  grid-template-columns:repeat(3,1fr);
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
export default Services

