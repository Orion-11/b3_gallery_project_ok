import { Link } from 'react-router-dom';
import { Arbol1 } from './Arbol1';
import { Arbol2 } from './Arbol2';
import { Arbol3 } from './Arbol3';
import { Arbol4 } from './Arbol4';
import { Arbol5 } from './Arbol5';
import { Arbol6 } from './Arbol6';

export const Navigation = () => {
  return (
    <div className='container thumbnail-container mt-2'>
      <Link to='/arbol1' className='links'>
        <figure className='thumbnail-image-size'>
          <Arbol1 />
          <figcaption>Arbol 1</figcaption>
        </figure>
      </Link>
      <Link to='/arbol2' className='links'>
        <figure className='thumbnail-image-size'>
          <Arbol2 />
          <figcaption>Arbol 2</figcaption>
        </figure>
      </Link>
      <Link to='/arbol3' className='links'>
        <figure className='thumbnail-image-size'>
          <Arbol3 />
          <figcaption>Arbol 3</figcaption>
        </figure>
      </Link>
      <Link to='/arbol4' className='links'>
        <figure className='thumbnail-image-size'>
          <Arbol4 />
          <figcaption>Arbol 4</figcaption>
        </figure>
      </Link>
      <Link to='/arbol5' className='links'>
        <figure className='thumbnail-image-size'>
          <Arbol5 />
          <figcaption>Arbol 5</figcaption>
        </figure>
      </Link>
      <Link to='/arbol6' className='links'>
        <figure className='thumbnail-image-size'>
          <Arbol6 />
          <figcaption>Arbol 6</figcaption>
        </figure>
      </Link>
    </div>
  )
}
