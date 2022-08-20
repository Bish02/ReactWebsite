import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/Button';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className='grid grid-two-col'>
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>
          <div>
            <NavLink to='/'>
              <Button className=''>To Get Started</Button>
            </NavLink>
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <footer>
        <div className='container grid grid-four-col'>
          <div className="footer-about">
            <h3>Biswajit Nanda</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolorem dolorum vitae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit temporibus maiores totam!</p>
          </div>
          {/* Footer-subscribe */}
          <div className="footer-subscribe">
            <h3>Suscribe to Connect with us !</h3>
            <form action="#">
              <input type="email" autoComplete='off' required placeholder='Email' />
              <input type="submit" value="Subrscibe" />
            </form>
          </div>

          {/* footer-social */}
          <div className="footer-social">
            <h3>Follow us !</h3>
            <div className="footer-social-icons">

              <div>
                <FaGithub className='icons' />
              </div>

              <div>
                <a href="https://www.instagram.com/bish_020/" target='_blank'>
                  <FaInstagram className='icons' />
                </a>
              </div>

              <div>
                <a href="https://www.linkedin.com/in/biswajit-nanda-327498215/" target='_blank'>
                  <FaLinkedin className='icons' />
                </a>
              </div>
            </div>
          </div>

          {/* 4th */}
          <div className="footer-contact">
            <h3>Contact Us !</h3>
            <h3>8895246536</h3>
          </div>
        </div>
        <div className="footer-bottom-section">
          <hr />
          <div className="container grid grid-two-col">
            <p>@{new Date().getFullYear()} bN All Rights Reserved</p>
            <div>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
        </div>

      </footer>
    </Wrapper>

  )
};

const Wrapper = styled.section`
.contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.color.bg};
    border-radius: 1rem;
    box-shadow:"rgba(203, 203, 203, 0.7)";
    transform: translateY(50%);
  }
  .contact-short-btn {
    justify-self: end;
    align-self: center;
  }
  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.color.footer_bg};
    h3 {
      color: ${({ theme }) => theme.color.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.color.white};
    }
    .footer-social-icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.color.white};
        .icons {
          color: ${({ theme }) => theme.color.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
    .footer-bottom-section {
      padding-top: 9rem;
      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.color.hr};
        height: 0.1px;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;
      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }
    footer .footer-bottom-section {
      padding-top: 3.2rem;
    }
  }
   @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;
      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }
    footer .footer-bottom-section {
      padding-top: 3.2rem;
    }
  }
`;

export default Footer