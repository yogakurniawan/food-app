import styled from 'styled-components'
import is from 'styled-is'

export const Box = styled.div`
  background-color: #4a4a4a;
  padding: 16px;
  width: 100%;
  cursor: pointer;
  ${is('rightRoundBorder')`
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  `}
  ${is('leftRoundBorder')`
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  `}
  ${is('active')`
    background-color: #fd4f5d;
  `}
  ${is('active')`
    background-color: #fd4f5d;
    &:before {
      content: "";
      position: absolute;
      width: 0px;
      height: 0;
      left: 50%;
      bottom: -25px;
      border: 9px solid transparent;
      border-top: 16px solid #fd4f5d;
      z-index: 2;
    }
  `}
`

export const Heading = styled.div`
  font-size: 18px;
  @media screen and (max-width: 378px) {
    font-size: 16px;
  }
  @media screen and (max-width: 352px) {
    font-size: 15px;
  }
  @media screen and (max-width: 340px) {
    font-size: 14px;
  }
  @media screen and (max-width: 300px) {
    font-size: 10px;
  }
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.5px;
`
