import { Container, Row, Col } from 'react-bootstrap';
import { plantData } from '../data/plants';
import PlantCard from '../components/PlantCard';

const Plants = () => {
    return (
        <section style={{ backgroundColor: '#F4F2E9', padding: '120px 0 8px', minHeight: '100vh' }}>
            <Container>
                {/* Page Header */}
                <div className='border-bottom pd-4 mb-5'>
                    <h6 style={{ color: '#032B01', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: 'bold' }}>
                        Flora Registry
                    </h6>
                    <h1 className='display-4 fw-bold' style={{ color: '#282B1B' }}>
                        Botanical Encyclopedia
                    </h1>
                    <p className="text-muted lead">
                        Explore detailed field notes, conservation statuses, and ecological data for global flora.
                    </p>
                </div>

                {/* Grid displaying ALL plants */}
                <Row>
                    {plantData.map(plant => (
                        <Col key={plant.id} lg={4} md={6} className='mb-4'>
                            <PlantCard plant={plant} />
                        </Col>
                    ))}
                </Row>                    
            </Container>
        </section>
    );
};

export default Plants;