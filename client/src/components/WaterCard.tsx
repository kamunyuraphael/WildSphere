import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import type { Water } from '../types/wildlife';
import '../index.css';

interface Props {
    water: Water;
}

const WaterCard = ({ water }: Props) => {
    const optimizedImage = water.image.replace('/upload/', '/upload/c_fill,h_400,w_600,q_auto/');

    return (
        <Card className='h-100 border-0 shadow-sm transition-hover' style={{ backgroundColor: '#E0DED1', borderRadius: '8px', overflow: 'hidden' }}>
            <div className='overflow-hidden'>
                <Card.Img variant="top" src={optimizedImage} alt={water.name} className='card-img-hover' style={{ transition: 'transform 0.5s ease' }} />
            </div>
            <Card.Body className='d-flex flex-column p-4'>
                <div className='d-flex justify-content-between align-items-start mb-2'>
                    <Card.Title className='fw-bold mb-0' style={{ backgroundColor: '#4E6A5B', color: '#E0DED1', fontSize: '0.7rem' }}>
                        {water.name}
                    </Card.Title>
                    <span className='badge rounded-pill' style={{ backgroundColor: '#4E6A5B', color: '#E0DED1', fontSize: '0.7rem' }}>
                        {water.bodyType}
                    </span>
                </div>

                <Card.Subtitle className='mb-3 fst-italic' style={{ color: '#4E6A5B', fontSize: '0.9rem' }}>
                    {water.region}
                </Card.Subtitle>

                <Card.Text style={{ color: '#282B1B', fontSize: '0.9rem', opacity: 0.8 }}>
                    {water.summary.length > 50 ? water.summary.substring(0, 100) + '...' : water.summary}{/* Show full summary if it's short, otherwise truncate with ellipsis */}
                </Card.Text>

                <Button 
                as={Link as any}
                to={`/species/${water.id}`}
                className='mt-auto border-0 fw-bold' 
                style={{ backgroundColor: '#A68D4A', color: '#282B1B' }}
                >
                    Learn More
                </Button>
            </Card.Body>
        </Card>
    );
};

export default WaterCard;