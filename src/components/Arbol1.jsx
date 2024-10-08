import arbol1 from '../assets/img/arbol_1.jpg';
import PropTypes from 'prop-types';

export const Arbol1 = ( { className } ) => {
  return (
    <img src={arbol1} alt="Haya antartica en Hanging Moss, Oregon" className={className} />
  )
}

Arbol1.propTypes = {
  className: PropTypes.string
}