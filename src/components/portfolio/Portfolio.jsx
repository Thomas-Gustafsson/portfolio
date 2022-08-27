import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/purplegit.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'This is a porfolio item title',
    github: 'https://github.com/Thomas-Gustafsson/'
  },
  {
    id: 2,
    image: IMG1,
    title: 'This is a porfolio item title',
    github: 'https://github.com/Thomas-Gustafsson/'
  },
  {
    id: 3,
    image: IMG1,
    title: 'This is a porfolio item title',
    github: 'https://github.com/Thomas-Gustafsson/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
              </div> 
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio


