import * as React from "react"
import { Link } from 'gatsby'
import { HeaderLinks } from '../helpers/constants'
import HeaderItem from '../components/HeaderItem'
import SiteLogo from "../images/eew-logo.webp"

const Header = ({activeLink}) =>
  <header>
    <div className='container'>
      <Link to="/">
        <img src={SiteLogo} alt="EEW Site Logo" />
      </Link>
      <nav>
      {
        HeaderLinks.map(link => <HeaderItem link={link} activeLink={activeLink} />)
      }
      </nav>
    </div>
  </header>

export default Header
