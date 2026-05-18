import { Container, Row, Col } from 'react-bootstrap';

const Insights = () => {
    return (
        <section style={{ backgroundColor: '#E0DED1', padding: '100px 0', color: '#282B1B' }}>
            <Container>
                <Row className='justify-content-center'>
                    <Col lg={8} className="text-center">
                        <div style={{
                            width: '60px',
                            height: '4px',
                            backgroundColor: '#A68D4A',
                            margin: '0 auto 30px'
                        }} />

                        <h2 className='display-5 fw-bold mb-4' style={{ letterSpacing: '-1px' }}>
                            Understanding Our Living Planet
                        </h2>

                        <p className='lead fs-4' style={{ lineHeight: '1.8', fontWeight: '400' }}>
                            Biodiversity is the heartbeat of Earth. From the majestic Big Five 
                            roaming the savanna to the microscopic plants oxygenating our oceans, 
                            every species plays a vital role in the web of life. WorldSphere 
                            was built to bridge the gap between curiosity and conservation—empowering 
                            you to explore, learn, and protect the ecosystems that sustain us all.
                        </p>

                        {/* Subtle insight or quote */}
                        <p className='mt-5 fst-italic shadow-none' style={{ color: '#4E6A5B', fontSize: '1.1rem' }}>
                            "In every walk with nature, one receives far more than he seeks." - John Muir
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Insights;