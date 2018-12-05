import styled from 'styled-components'

const Spinner = styled.div`
  display: block;
  width: ${({ size }) => (size ? `${size}px` : '64px')};
  height: ${({ size }) => (size ? `${size}px` : '64px')};
  margin: 0 auto;
  padding: 5px;

  &:after {
    content: ' ';
    display: block;
    width: ${({ size }) => (size ? `${size}px` : '46px')};
    height: ${({ size }) => (size ? `${size}px` : '46px')};
    margin: 1px;
    border-radius: 50%;
    border: ${({ dark }) => (dark ? '5px solid #333' : '5px solid #fff')};
    border-color: ${({ dark }) =>
      dark
        ? '#333 transparent #333 transparent'
        : '#fff transparent #fff transparent'};
    /* border-color: #fff transparent #fff transparent; */
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
export default Spinner
