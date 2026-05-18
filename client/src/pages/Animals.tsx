import { Container, Col, Row } from 'react-bootstrap';
import { animalData } from '../data/animals'; 
import AnimalCard from '../components/AnimalCard';

const Animals = () => {
  return (
    <section style={{ backgroundColor: '#F4F2E9', padding: '120px 0 80px', minHeight: '100vh' }}>
      <Container>
        {/* Page Header */}
        <div className='border-bottom pb-4 mb-5'>
          <h6 style={{ color: '#A68D4A', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: 'bold' }}>
            Fauna Registry
          </h6>
          <h1 className='display-4 fw-bold' style={{ color: '#282B1B' }}>
            Wildlife Encyclopedia
          </h1>
          <p className="text-muted lead">
            Explore detailed field notes, conservation statuses, and ecological data for global wildlife.
          </p>
        </div>

        {/* Grid displaying ALL animals */}
        <Row>
          {animalData.map(animal => (
            <Col key={animal.id} lg={4} md={6} className='mb-4'>
              <AnimalCard animal={animal} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Animals;