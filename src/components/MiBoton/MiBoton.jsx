import PropTypes from 'prop-types';

const MiBoton = function ({ texto }) {
  return <button className="btn btn-primary">{texto}</button>;
};

MiBoton.propTypes = {
  texto: PropTypes.string.isRequired,
};

export default MiBoton;
