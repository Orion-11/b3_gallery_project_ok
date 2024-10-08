import arbol2 from '../assets/img/arbol2.jpg';
import PropTypes from 'prop-types';

export const Arbol2 = ( { className } ) => {
  return (
    <img src={arbol2} alt="Flamboyán, Brasil" className={className} />
  )
}

Arbol2.propTypes = {
  className: PropTypes.string
}