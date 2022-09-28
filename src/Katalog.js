import './Katalog.css';
import imgA from './imges/ctallwi.svg'
import imgB from './imges/ctol.svg'
import imgC from './imges/shkaf.svg'
import img1 from './imges/1.png'
import img2 from './imges/2.png'
import img3 from './imges/3.png'
import img4 from './imges/4.png'
import img5 from './imges/5.png'

const Katalogy = () => {
  return (
    <>
      <section className='catalogy'>
        <div className='container'>
          <h2 className='catalogy-title'>
            Каталог продукции
          </h2>

          <h4 className='catalogy-dom'>
            Мебель для <span className='span-dom'>ДОМА</span>
          </h4>

          <p className='catalogy-text'>
            Привнесите в свой дом уют
            и комфорт
          </p>

          <ul className='catalogy-list'>
            <li className='catalogy-item'>
              <img className='catalogy-img' src={imgA} width="300" height={300} />

              <h3 className='catalogy-item-title'>
                Стеллажи
              </h3>
            </li>

            <li className='catalogy-item'>
              <img className='catalogy-img' src={imgB} width="500" height={300} />

              <h3 className='catalogy-item-title'>
                Столы
              </h3>
            </li>

            <li className='catalogy-item'>
              <img className='catalogy-img' src={imgC} width="300" height={300} />

              <h3 className='catalogy-item-title'>
                Шкафы
              </h3>
            </li>

            <li className='catalogy-item'>
              <img className='catalogy-img' src={img1} width="300" height={300} />

              <h3 className='catalogy-item-title'>
                Стеллажи
              </h3>
            </li>

            <li className='catalogy-item item-2'>
              <img className='catalogy-img' src={img2} width="500" height={300} />

              <h3 className='catalogy-item-title'>
                Столы
              </h3>
            </li>

            <li className='catalogy-item'>
              <img className='catalogy-img' src={img3} width="300" height={300} />

              <h3 className='catalogy-item-title'>
                Вешалки
              </h3>
            </li>

            <li className='catalogy-item'>
              <img className='catalogy-img' src={img4} width="300" height={300} />

              <h3 className='catalogy-item-title'>
                Полки
              </h3>
            </li>

            <li className='catalogy-item'>
              <img className='catalogy-img' src={img5} width="300" height={300} />

              <h3 className='catalogy-item-title'>
                Бары
              </h3>
            </li>
          </ul>
        </div>
      </section>
    </>
  )

}

export default Katalogy;