import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <main style={{ backgroundColor: '#E0DED1', minHeight: '100vh', paddingTop: '100px' }}>
      
      {/* 1. Minimalist Header */}
      <section style={{ padding: '80px 0 40px' }}>
        <Container className="text-center">
          <h6 style={{ color: '#A68D4A', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: 'bold' }}>
            Our Mission
          </h6>
          <h1 className="display-3 fw-bold mb-4" style={{ color: '#282B1B', letterSpacing: '-1px' }}>
            The Architecture of WorldSphere
          </h1>
          <div style={{ width: '80px', height: '4px', backgroundColor: '#A68D4A', margin: '0 auto' }} />
        </Container>
      </section>

      {/* 2. Split Story Section */}
      <section style={{ padding: '40px 0 80px' }}>
        <Container>
          <Row className="align-items-center gy-5">
            <Col lg={6}>
              <h3 className="fw-bold mb-4" style={{ color: '#283B28' }}>
                Bridging Digital Precision with the Natural World.
              </h3>
              <p className="lead" style={{ color: '#282B1B', lineHeight: '1.8' }}>
                WorldSphere is an open-access digital sanctuary engineered to document global biodiversity. 
                By combining technical software systems with field biology methodologies, we provide 
                researchers, students, and conservationists a scalable space to explore Earth's ecosystems.
              </p>
              <p style={{ color: '#282B1B', opacity: 0.8, lineHeight: '1.7' }}>
                Our platform structures complex environmental parameters—from specific conservation vulnerability 
                metrics to distinctive botanical microclimates—into intuitive, fast-loading educational interfaces. 
                We believe that robust, highly-accessible open data is a core tool for modern ecological preservation.
              </p>
            </Col>
            
            {/* Editorial-style asymmetric image frame */}
            <Col lg={6} className="ps-lg-5">
              <div style={{ 
                position: 'relative',
                border: '2px solid #4E6A5B',
                padding: '20px',
                borderRadius: '4px'
              }}>
                <img 
                  src="https://res.cloudinary.com/duuwn3dzm/image/upload/under-water_fswyjn.jpg" 
                  alt="Lush green canopy representing global biodiversity ecosystems" 
                  className="img-fluid shadow"
                  style={{ borderRadius: '2px', display: 'block' }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 3. Core Values / Foundational Pillars */}
      <section style={{ backgroundColor: '#282B1B', padding: '100px 0', color: '#E0DED1' }}>
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold display-5" style={{ color: '#E0DED1' }}>Core Design Principles</h2>
            <p style={{ color: '#A68D4A' }}>How we approach structural educational engineering</p>
          </div>
          
          <Row className="gy-4">
            {/* Pillar 1 */}
            <Col md={4}>
              <Card className="h-100 border-0 p-4" style={{ backgroundColor: '#283B28', color: '#E0DED1' }}>
                <Card.Body>
                  <h4 className="fw-bold mb-3" style={{ color: '#A68D4A' }}>01. Field Accuracy</h4>
                  <p style={{ opacity: 0.8, fontSize: '0.95rem', lineHeight: '1.6' }}>
                    Every component, fact box, and markdown text entry is built to accurately mirror professional scientific taxonomies and IUCN classifications.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            {/* Pillar 2 */}
            <Col md={4}>
              <Card className="h-100 border-0 p-4" style={{ backgroundColor: '#283B28', color: '#E0DED1' }}>
                <Card.Body>
                  <h4 className="fw-bold mb-3" style={{ color: '#A68D4A' }}>02. Technical Scale</h4>
                  <p style={{ opacity: 0.8, fontSize: '0.95rem', lineHeight: '1.6' }}>
                    Engineered with specialized modular schemas and robust image optimization utilities to serve global users smoothly, even on low-bandwidth networks.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            {/* Pillar 3 */}
            <Col md={4}>
              <Card className="h-100 border-0 p-4" style={{ backgroundColor: '#283B28', color: '#E0DED1' }}>
                <Card.Body>
                  <h4 className="fw-bold mb-3" style={{ color: '#A68D4A' }}>03. Open Education</h4>
                  <p style={{ opacity: 0.8, fontSize: '0.95rem', lineHeight: '1.6' }}>
                    We focus on eliminating walls between human curiosity and research data, providing clear pathways to learn about the Big Five, rare botany, and primal aquatic veins.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

    </main>
  );
};

export default About;