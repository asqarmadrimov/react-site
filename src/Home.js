
import './Home.css'
import homeImg from './imges/home-img.svg'

const HomeJs = () => {
  return (
    <> 
    <section className='home'>
      <div className='container'>
        <div className='home-inner'>
          <div className='home-content'>
            <h1 className='home-title'>
              Мебель на заказ
            </h1>

            <p className='home-tetx'>
              Мебель в стиле лофт на заказ по доступным ценам
            </p>

            <button className='home-button'>
              Оставить заявку
            </button>
          </div>

          <img className='home-img' src={homeImg} width="700" height={500}/>
        </div>
      </div>
    </section>
    </>
  )
}

export default HomeJs;