import './Hero.css'
import heroImg from './imges/hero-img.svg'

const heroJs = () => {
  return (
    <>
      <section className="hero">
        <div className='container'>
          <h2 className='hero-title'>
            О компании
          </h2>
          <div className='hero-inner'>
            <div className='hero-content'>
              <p >
                Мы изготавливаем авторскую мебель на заказ в стиле лофт для дома и бизнеса. Мы работаем на рынках B2B и B2C. Мы не только продаем, но и сами проектируем и производим мебель от этапа отрисовки макета до доставки и монтажа готового изделия. Вся наша продукция изготавливается мелко-серийно либо по
                индивидуальным заказам.
              </p>

              <p className='hero-text'>
                Вы можете заказать изготовление мебели в стиле лофт любой сложности по:
              </p>

              <ul className='hero-list'>
                <li>
                  Дизайн проекту
                </li>

                <li className='hero-item'>
                  Фотографиям и картинкам
                </li>

                <li>
                  Вашим эскизам и чертежам
                </li>
              </ul>



            </div>

            <img src={heroImg} />
          </div>
        </div>
      </section>
    </>
  )
}

export default heroJs;