import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import type { Plants } from '../types/wildlife';
import '../index.css';

interface Props {
    plant: Plants;
}

const PlantCard = ({ plant }: Props) => { // only show featured ones 
    const optimizedImage = plant.image.replace('/upload/', '/upload/c_fill,h_400,w_600,q_auto/');
    
    return (
        <Card className='h-100 border-0 shadow-sm transition-hover' style={{ backgroundColor: '#E0DED1', borderRadius: '8PX', overflow: 'hidden' }}>
            <div className='overflow-hidden'>
                <Card.Img variant='top' src={optimizedImage} alt={plant.name} className='card-img-hover' style={{ transition: 'transform 0.5s ease' }} />
            </div>
            <Card.Body className='d-flex flex-column p-4'>
                <div className='d-flex justify-content-between align-items-start mb-2'>
                    <Card.Title className='fw-bold mb-0' style={{ color: '#282B1B', fontSize: '1.25rem' }}>
                        {plant.name}
                    </Card.Title>
                    
                    <Card.Subtitle className='mb-3 fst-italic' style={{ color: '#4E6A5B', fontSize: '0.9rem' }}>
                        {plant.scientificName}
                    </Card.Subtitle>

                    <Card.Text style={{ color: '#282B1B', fontSize: '0.9rem' }}>
                        {plant.summary.length > 50 ? plant.summary.substring(0, 100) + '...' : plant.summary}
                    </Card.Text>

                    <Button
                    as={Link as any}
                    to={`/species/${plant.id}`}
                    className='mt-auto border-0 fw-bold'
                    style={{ backgroundColor: '#A68D4A', color: '#282B1B' }}
                    >
                        Learn More
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default PlantCard;