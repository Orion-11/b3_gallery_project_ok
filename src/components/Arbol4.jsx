import arbol4 from '../assets/img/arbol4.jpg';
import PropTypes from 'prop-types';

export const Arbol4 = ( { className } ) => {
  return (
    <img src={arbol4} alt="Haya antartica en Hanging Moss, Oregon" className={className} />
  )
}

Arbol4.propTypes = {
  className: PropTypes.string
}