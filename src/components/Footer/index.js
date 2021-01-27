import styled from 'styled-components'

// src/components/Footer/index.js
const FooterWrapper = styled.footer`
  background-color: #00000070;
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 4px; 
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: white;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    span {
      text-decoration: underline;
    }
  }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <a href="https://www.alura.com.br/">
        <img src="https://exame.com/wp-content/uploads/2020/11/size_960_16_9_vader4.jpg?quality=70&strip=info&resize=680,453" alt="Lord Vader" />
      </a>
      <p>
        Where
        {' '}
        is
        {' '}
        <a href="https://www.alura.com.br/">
          <span>Padme?</span>
        </a>
      </p>
    </FooterWrapper>
  );
}