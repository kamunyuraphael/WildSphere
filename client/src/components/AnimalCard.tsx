import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import type { Animal } from '../types/wildlife';
import '../index.css';

interface Props {
    animal: Animal;
}

const AnimalCard = ({ animal }: Props) => { // only show featured ones
    // Cloudinary image URL transformation for uniform card display
    const optimizedImage = animal.image.replace('/upload/', '/upload/c_fill,h_400,w_600,q_auto/');

    return (
        <Card className='h-100 border-0 shadow-sm transition-hover' style={{ backgroundColor: '#E0DED1', borderRadius: '8px', overflow: 'hidden' }}>
            <div className='overflow-hidden'>
                <Card.Img variant='top' src={optimizedImage} alt={animal.name} className='card-img-hover' style={{ transition: 'transform 0.5s ease' }} />
            </div>
            <Card.Body className="d-flex flex-column p-4">
                <div className='d-flex justify-content-between align-items-start mb-2'>
                    <Card.Title className="fw-bold mb-0" style={{ color: '#282B1B', fontSize: '1.25rem' }}>
                        {animal.name}
                    </Card.Title>
                    <span className='badge rounded-pill' style={{ backgroundColor: '#4E6A5B', color: '#E0DED1', fontSize: '0.7rem' }}>
                        {animal.status}
                    </span>
                </div>

                <Card.Subtitle className="mb-3 fst-italic" style={{ color: '#4E6A5B', fontSize: '0.9rem' }}>
                    {animal.scientificName}
                </Card.Subtitle>

                <Card.Text style={{ color: '#282B1B', fontSize: '0.95rem', opacity: 0.8 }}>
                    {animal.summary.length > 50 ? animal.summary.substring(0, 100) + '...' : animal.summary}
                </Card.Text>

                <Button 
                as={Link as any} 
                to={`/species/${animal.id}`} 
                className='mt-auto border-0 fw-bold' 
                style={{ backgroundColor: '#A68D4A', color: '#282B1B' }}
                >
                    Learn More
                </Button>
            </Card.Body>
        </Card>
    )
}

export default AnimalCard;