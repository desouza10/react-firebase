import React from 'react'

const Rodape = props => {
  return (
    <footer className='container-fluid text-center'>
      <a href='#myPage' title='To Top'>
        <span className='glyphicon glyphicon-chevron-up'></span>
      </a>
      <p>Site criado no curso de ReactJS usando o template do Bootstrap!
        <p><a href='https://www.w3schools.com' title='Visit w3schools'>www.w3schools.com</a></p>
      </p>
    </footer>
  )
}

export default Rodape
