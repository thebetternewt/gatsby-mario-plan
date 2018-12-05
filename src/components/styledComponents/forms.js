import styled from 'styled-components'

export const Form = styled.form`
  padding: 20px;
  margin-top: 2rem;

  & button,
  & h5 {
    margin: 20px 0;
  }

  input[type='text']:not(.browser-default):focus:not([readonly]),
  input[type='email']:not(.browser-default):focus:not([readonly]),
  input[type='password']:not(.browser-default):focus:not([readonly]),
  textarea.materialize-textarea:focus:not([readonly]) {
    border-color: #ec407a;
    box-shadow: none;
  }
`
