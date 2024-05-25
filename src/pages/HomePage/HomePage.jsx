import shark from '../../assets/images/shark.jpg';

export default function HomePage() {
  let frutas = ['Manzanas', 'Platanos'];
  return (
    <div className="container">
      <div className="row">
        <div className="col">         
          <h1>
            Tiburones <i className="bi bi-car-front-fill"></i>
          </h1>
          <img src={shark} alt="patito" width={'400px'} />        
        </div>
      </div>
    </div>
  );
}
