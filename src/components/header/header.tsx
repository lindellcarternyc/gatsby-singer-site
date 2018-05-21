import * as React from 'react'
import Link from 'gatsby-link'

import Menu from '../menu'
import { Container, Wrapper, HeaderButton, Title } from './components'

import { AccentColor }  from '../../utils/colors'

interface HeaderProps {
  siteTitle: string
}
interface HeaderState {
  menuIsOpen: boolean
}
class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props)

    this.state = {
      menuIsOpen: false
    }
  }

  public render() {
    const { menuIsOpen } = this.state
    return (
      <Container>
        <Wrapper>
          <Title>
            <Link
              to="/"
              style={{
                color: AccentColor
              }}
            >
              {this.props.siteTitle}
            </Link>
          </Title>
          <HeaderButton isActive={menuIsOpen} onClick={this.onClickButton}/>
        </Wrapper>
        <Menu isOpen={menuIsOpen} close={this.closeMenu}/>
      </Container>
    )
  }

  private onClickButton = () => {
    this.setState({ menuIsOpen: !this.state.menuIsOpen })
  }

  private closeMenu = () => {
    this.setState({ menuIsOpen: false })
  }
}

export default Header
