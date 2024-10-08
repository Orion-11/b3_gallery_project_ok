import arbol5 from '../assets/img/arbol5.jpg';
import PropTypes from 'prop-types';

export const Arbol5 = ( { className } ) => {
  return (
    <img src={arbol5} alt="Avenida de robles, Carolina del Sur" className={className} />
  )
}

Arbol5.propTypes = {
  className: PropTypes.string
}