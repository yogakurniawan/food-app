import styled from 'styled-components'
import { space } from 'styled-system'
import is from 'styled-is'

export const Container = styled.div`
  ${is('sticky')`
    width: 100%;
    z-index: 6;
    padding: 16px;
    background-color: white;
    position: fixed;
    top: 0px;
    left: 0px;
    margin-bottom: 80px;
    box-shadow: rgba(10, 31, 68, 0.1) 0px 3px 4px 0px, rgba(10, 31, 68, 0.08) 0px 0px 1px 0px;
  `}
  padding-top: 16px;
  padding-bottom: 16px;
`

export const IconWrapper = styled.div`
  background: #f1f1f2;
  border-radius: 50%;
`

export const Heading1 = styled.div`
  ${space}
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.2px;
  color: #84898c;
`

export const Heading2 = styled.div`
  ${space}
  font-weight: 400;
  color: #f5ad34;
  font-size: 12px;
`
