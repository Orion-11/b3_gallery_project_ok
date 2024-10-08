import arbol3 from '../assets/img/arbol3.jpg';
import PropTypes from 'prop-types';

export const Arbol3 = ( { className } ) => {
  return (
    <img src={arbol3} alt="La tercera secuoya más grande del mundo, California" className={className} />
  )
}

Arbol3.propTypes = {
  className: PropTypes.string
}