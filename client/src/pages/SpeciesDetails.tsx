import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import { allWildlife } from '../data';
import { getOptimizedImage } from '../utils/cloudinary';
import '../index.css';

const SpeciesDetails = () => {
    const { id } = useParams<{ id: string }>();

    // Find specific entry based on URL ID
    const entry = allWildlife.find(item => item.id === id);

    if (!entry) {
        return (
            <Container className='text-center' style={{ marginTop: '150px' }}>
                <h2 style={{ color: '#282B1B' }}>Field Note Not Found</h2>
                <Link to='/' style={{ color: '#A68D4A' }}>Return to WorldSphere</Link>
            </Container>
        );
    }

    return (
        <main style={{ backgroundColor: '#E0DED1', minHeight: '100vh' }}>
            {/* Impact Header Section */}
            <section 
            style={{
                height: '60vh',
                backgroundImage: `linear-gradient(rgba(40, 43, 27, 0.5), rgba(40, 43, 27, 0.8)), url(${getOptimizedImage(entry.image, 'hero')})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'flex-end',
                paddingBottom: '50px',
                color: '#E0DED1'
            }}
            >
                <Container>
                    <Badge className='mb-2 px-3 py-2' style={{ backgroundColor: '#A68D4A', color: '#282B1B' }}>
                        {entry.category.toUpperCase()}
                    </Badge>
                    <h1 className='display-3 fw-bold'>{entry.name}</h1>
                    <p className='fs-4 fst-italic' style={{ opacity: 0.9 }}>{entry.scientificName}</p>
                </Container>
            </section>

            {/* Content Section */}
            <Container style={{ marginTop: '-50px', position: 'relative', zIndex: 2 }}>
                <Row className='justify-content-center'>
                    <Col lg={9}>
                        {/* Quick Facts */}
                        <div 
                        className='p-4 mb-5 shadow-sm d-flex justify-content-around align-items-center text-center' 
                        style={{ backgroundColor: '#282B1B', color: '#E0DED1', borderEndStartRadius: '8px' }}
                        >
                            <div>
                                <small style={{ color: '#A68D4A', display: 'block', textTransform: 'uppercase' }}>Classification</small>
                                <strong>{entry.category}</strong>
                            </div>

                            {/* Dynamic Fact Based on Type */}
                            {entry.category === 'animal' && (
                                <div>
                                    <small style={{ color: '#A68D4A', display: 'block', textTransform: 'uppercase' }}>Status</small>
                                    <strong>{entry.status}</strong>
                                </div>
                            )}
                            {entry.category === 'plant' && (
                                <div>
                                    <small style={{ color: '#A68D4A', display: 'block', textTransform: 'uppercase' }}>Season</small>
                                    <strong>{entry.growthSeason}</strong>
                                </div>
                            )}
                            {entry.category === 'water' && (
                                <div>
                                    <small style={{ color: '#A68D4A', display: 'block', textTransform: 'uppercase' }}>Type</small>
                                    <strong>{entry.bodyType}</strong>
                                </div>
                            )}
                        </div>

                        {/* The Reasearch Paper/ Article */}
                        <article className='bg-white p-5 shadow-sm mb-5' style={{ borderRadius: '4px', color: '#282B1B' }}>
                            <div>
                                <ReactMarkdown>{entry.content}</ReactMarkdown>
                            </div>
                            
                            <hr className='my-5' />

                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='text-muted small'>Source: WorldSphere Research Database</p>
                                <Link to={`/${entry.category}s`} className='btn btn-outline-dark btn-sm'>
                                Back to {entry.category}s
                                </Link>
                            </div>
                        </article>    
                    </Col>
                </Row>
            </Container>
        </main>
    );
};

export default SpeciesDetails;