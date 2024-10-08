import arbol1 from '../assets/img/arbol1.jpg';
import PropTypes from 'prop-types';

export const Arbol1 = ( { className } ) => {
  return (
    <img src={arbol1} alt="Los árboles azotados por el viento de Nueva Zelanda" className={className} />
  )
}

Arbol1.propTypes = {
  className: PropTypes.string
}