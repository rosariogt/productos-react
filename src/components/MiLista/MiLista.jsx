const MiLista = ({ nombreLista, elementos }) => {
    return (
      <>
        <h2>{nombreLista}</h2>
        <ul>
          {elementos.map(function (item, index) {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </>
    );
  };
  
  export default MiLista;
  