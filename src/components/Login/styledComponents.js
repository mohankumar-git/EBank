import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #152850;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ResponsiveContainer = styled.div`
  width: 90%;
  max-width: 800px;
  height: 70%;
  border-radius: 14px;
  background-color: #e0eefe;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 26px;
`

export const LoginImage = styled.img`
  width: 50%;
`

export const FormContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  width: 40%;
  border-radius: 26px;
`
export const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
`
export const FormHeading = styled.h1`
  color: #152850;
  font-size: 28px;
  font-family: 'Roboto';
  font-weight: 600px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`

export const Label = styled.label`
  color: #183b56;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-bottom: 8px;
`

export const Input = styled.input`
  outline: none;
  background-color: transparent;
  border: 1px solid #5a7184;
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: 400;
  padding: 10px 12px;
  border-radius: 5px;
`
export const LoginButton = styled.button`
  background-color: #1565d8;
  outline: none;
  border: none;
  border-radius: 6px;
  color: #ffffff;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
  padding: 10px 12px;
  margin-top: 16px;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 12px;
  font-family: 'Roboto';
  font-weight: 500;
  text-align: center;
`
