import './footer.css'

import footerImg from './imges/MAXLOFT.png'
import footerLink from './imges/footer-img.png'

const footerJs = () => {
  return (
    <>
      <div className="container">
        <div className='footer-inner'>
          <a className='footer-logo'>
            <img className='footer-img' src={footerImg} width="200" height={63} />
          </a>

          <ul className='footer-list'>
            <li className='footer-item'>
              <a className='footer-item-link' href='#'>
                О компании
              </a>
            </li>

            <li className='footer-item'>
              <a className='footer-item-link' href='#'>
                Каталог
              </a>
            </li>

            <li className='footer-item'>
              <a className='footer-item-link' href='#'>
                Приемущества
              </a>
            </li>

            <li className='footer-item'>
              <a className='footer-item-link' href='#'>
                Контакты
              </a>
            </li>
          </ul>

          <img className='footer-link' src={footerLink} width="144" height={40} />
        </div>
      </div>
    </>
  )
}

export default footerJs;