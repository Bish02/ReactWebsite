import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa';
import styled from 'styled-components';

const GoTo = () => {
    const [visible, setVisible] = useState(false);
    const goTOBtn = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };
    const ListenTOscroll = () => {
        let heightTohidden = 250;
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;
        if (winScroll > heightTohidden) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', ListenTOscroll);
        return ()=>window.removeEventListener('scroll', ListenTOscroll);
    }, []);

    return (
        <Wrapper>
            {visible && (
                <div className='top-btn' onClick={goTOBtn}>
                    <FaArrowUp className='top-btn--icon' />
                </div>
            )}
        </Wrapper>
    )
};
const Wrapper = styled.section`
        display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .top-btn {
    font-size: 2.4rem;
    width: 6rem;
    height: 6rem;
    color: #fff;
    background-color: ${({ theme }) => theme.color.btn};
    box-shadow: ${({ theme }) => theme.color.shadow};
    border-radius: 50%;
    position: fixed;
    bottom: 5rem;
    right: 5rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &--icon {
      animation: gototop 1.2s linear infinite alternate-reverse;
    }
    @keyframes gototop {
      0% {
        transform: translateY(-0.5rem);
      }
      100% {
        transform: translateY(1rem);
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .top-btn {
      right: 0;
      left: 40%;
    }
  }
    `;

export default GoTo