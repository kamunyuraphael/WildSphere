import { Container, Row, Col } from 'react-bootstrap';
import { waterData } from '../data/waters';
import WaterCard from '../components/WaterCard';

const Waters = () => {
    return (
        <section style={{ backgroundColor: '#F4F2E9', padding: '120px 0 8px', minHeight: '100vh' }}>
            <Container>
                {/* Page Header */}
                <div className='border-bottom pb-4 mb-5'>
                    <h6 style={{ color: '#08425e', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: 'bold' }}>
                        Aquatic Ecosystems
                    </h6>
                    <h1 className='display-4 fw-bold' style={{ color: '#282B1B' }}>
                        Water Bodies Encyclopedia
                    </h1>
                    <p className="text-muted lead">
                        Discover the fascinating world of aquatic ecosystems and the diverse life they support.
                    </p>
                </div>

                {/* Grid displaying ALL waters */}
                <Row>
                    {waterData.map(water => (
                        <Col key={water.id} lg={4} md={6} className='mb-4'>
                            <WaterCard water={water} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Waters;