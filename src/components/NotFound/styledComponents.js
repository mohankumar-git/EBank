import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const ResponsiveContainer = styled.div`
  width: 80%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FailureImage = styled.img`
  width: 300px;
`

export const FailureHeading = styled.h1`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: 600;
`
export const FailureSubHeading = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
`
