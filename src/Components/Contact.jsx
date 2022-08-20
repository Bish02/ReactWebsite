import React from 'react'
import styled from 'styled-components';
const Contact = () => {
  return (
    <Wrapper >
      <h2 className="common-heading">Feel Free to Contact</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7486.422040554352!2d85.79672062287985!3d20.250081311424523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7a3b9692fff%3A0x87cd0a356bbc39ce!2sITER%2C%20Siksha%20&#39;O&#39;%20Anusandhan!5e0!3m2!1sen!2sin!4v1660879276753!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div className="container">

        <div className="contact-form">
          <form action="https://formspree.io/f/xrgdgvdy" method='POST' className='contact-inputs'>
            <input
              type="text"
              name='Username'
              placeholder='Enter your Name'
              autoComplete='off' 
              required
              />

               <input
              type="email"
              name='Email'
              placeholder='Enter your Email'
              autoComplete='off' 
              required
              />
           <textarea rows="6" cols="30" name='Message' autoComplete='off' 
              required placeholder='Enter your Message' ></textarea>

          <input type="submit" value="Submit"/>
          </form>

        </div>
      </div>

    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding:9rem 0 5rem 0;
 
  .container{
    margin-top:6rem;
    text-align:center;

    .contact-form{
      max-width:50rem;
      margin:auto;


      .contact-inputs{
        display:flex;
        flex-direction:column;
        gap:3rem;

       input[type="submit"]{
          cursor:pointer;
          transition:all 0.2s;

          &:hover{
            background-color:${({ theme }) => theme.color.white};
            border:1px solid ${({ theme }) => theme.color.btn};
            color:${({ theme }) => theme.color.btn};
            transform:scale(0.9);
          }
        }
      }
    }

  }

`
export default Contact