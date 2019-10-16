import styled, { css } from 'styled-components'
import { space, color } from 'styled-system'

const Heading = css`
  ${color}
  line-height: 1.5;
  letter-spacing: 0.2px;
`

export const Img = styled.img`
  width: 100%;
  height: 137px;
  border-radius: 4px;
  object-fit: cover;
`

export const Label = styled.div`
  position: absolute;
  width: 100px;
  height: 50px;
  top: 20px;
  padding: 1rem;
  font-size: 18px;
  color: #fff;
  background: #fd4f5d;
  text-align: center;
`

export const Heading1 = styled.div`
  ${Heading}
  font-size: 18px;
  font-weight: 500;
`

export const Heading2 = styled.div`
  ${Heading}
  font-size: 14px;
  font-weight: 500;
`

export const Heading3 = styled.div`
  ${Heading}
  text-decoration: line-through;
  font-size: 16px;
  font-weight: 500;
`
