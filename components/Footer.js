import styled from 'styled-components';

const FooterSection = styled.div`
    background: black;
    color: white;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`;



const Footer = () => {
  return (
    <FooterSection>
      <p>All copyright © 2022</p>
    </FooterSection>
  )
}

export default Footer
