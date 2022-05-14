import Link from 'next/link';
import styled from 'styled-components';

const Nav = styled.nav`
  height: 80px;
  background: black;
  color: aqua;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledLink = styled.a`
  padding: 0rem 2rem;
`

const Navbar = () => {
  return (
    <Nav> 
      <div>
        <Link href="/">
          <StyledLink>Logo</StyledLink>
        </Link>
      </div>
      <div>
        <Link href="/">
          <StyledLink>Home</StyledLink>
        </Link>
        <Link href="/about">
          <StyledLink>About</StyledLink>
        </Link>
        <Link href="/contact">
          <StyledLink>Contact</StyledLink>
        </Link>
      </div>
    </Nav>
  )
}

export default Navbar;
