import * as React from 'react'
import Link from 'gatsby-link'

import styledComponents from 'styled-components'

import '../assets/css/hamburger.css'

const Container = styledComponents.div`
  position: fixed;
  top: 0;
  width: 100%;
  background: white;
`

const Wrapper = styledComponents.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
`

const Title = styledComponents.h1`
  margin: 0;
`

const Button = styledComponents.button`
  margin-top: 0.5rem;
`
const HeaderButton = (props: { isActive: boolean, onClick: () => void }) => {
  const className = 'hamburger hamburger--stand '
  return (
    <Button
      className={className + `${props.isActive ? 'is-active' : ''}`}
      onClick={props.onClick}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </Button>
  )
}

interface HeaderProps {
  siteTitle: string
}
interface HeaderState {
  buttonIsActive: boolean
}
class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props)

    this.state = {
      buttonIsActive: false
    }
  }

  public render() {
    return (
      <Container>
        <Wrapper>
          <Title>
            <Link
              to="/"
              style={{
                color: '#4f6d7a',
                textDecoration: 'none'
              }}
            >
              {this.props.siteTitle}
            </Link>
          </Title>
          <HeaderButton isActive={this.state.buttonIsActive} onClick={this.onClickButton}/>
        </Wrapper>
      </Container>
    )
  }

  private onClickButton = () => {
    this.setState({ buttonIsActive: !this.state.buttonIsActive })
  }
}

export default Header
