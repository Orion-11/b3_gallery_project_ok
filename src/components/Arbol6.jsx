import arbol6 from '../assets/img/arbol6.jpg';
import PropTypes from 'prop-types';

export const Arbol6 = ( { className } ) => {
  return (
    <img src={arbol6} alt="Árbol Dragón, Yemen" className={className} />
  )
}

Arbol6.propTypes = {
  className: PropTypes.string
}