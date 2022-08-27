import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Thomas</a>

      <ul className="permalinks">
        <li><a href="#">Go back up</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com/in/thomas-gustafsson-b7762572" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/Thomas-Gustafsson" target="_blank"><FaGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; THOMAS GUSTAFSSON. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer