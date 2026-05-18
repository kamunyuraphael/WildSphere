import { Container, Row, Col } from 'react-bootstrap';  
import { Link } from 'react-router-dom';
import AnimalCard from '../components/AnimalCard';
import type { WildlifeEntry } from '../types/wildlife';

interface CategoryProps {
    title: string;
    subtitle: string;
    data: WildlifeEntry[];
    path: string;
    bgColor?: string;
}

const CategorySection = ({ title, subtitle, data, path, bgColor = '#E0DED1' }: CategoryProps) => {
    return (
        <section style={{ backgroundColor: bgColor, padding: '80px 0' }}>
            <Container>
                {/* Header */}
                <div className='d-flex justify-content-between align-items-end mb-5'>
                    <div>
                        <h6 style={{ 
                            color: '#A68D4A',
                            textTransform: 'uppercase',
                            letterSpacing: '3px',
                            fontWeight: 'bold',
                            fontSize: '0.8rem'
                        }}>
                            {subtitle}
                        </h6>
                        <h2 className='display-6 fw-bold' style={{ color: '#282B1B', margin: 0 }}>
                            {title}
                        </h2>
                    </div>

                    <Link 
                    to={path}
                    className='text-decoration-none fw-bold'
                    style={{ color: '#4E6A5B', fontSize: '0.9rem' }} 
                    >
                        EXPLORE ALL &rarr;
                    </Link>
                </div>

                {/* Grid */}
                <Row>
                    {data.slice(0, 3).map((item) => (
                        <Col key={item.id} md={4} className='mb-4'>
                            <AnimalCard animal={item as any} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default CategorySection;