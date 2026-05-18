import { Button, Carousel, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Hero = () => {
    const slides = [
        {
            id: 1, 
            title: "Majestic Fauna",
            subtitle: "Discover the power of the Big Five and the secret of the savannah.",
            btnText: "Explore Animals",
            link: "/animals",
            bgImage: "https://res.cloudinary.com/duuwn3dzm/image/upload/lion_p9eyhc.jpg"
        },
        {
            id: 2,
            title: "Ancient Flora",
            subtitle: "From the Baobab to rare rainforest ferns, explore Earth's botanical wonders.",
            btnText: "Discover Plants",
            link: "/plants",
            bgImage: "https://res.cloudinary.com/duuwn3dzm/image/upload/jungle-ablique_m7ryqe.jpg"
        },
        {
            id: 3,
            title: "Aquatic Veins",
            subtitle: "Journey through the life-giving veins of our planet's rivers, lakes, and oceans.",
            btnText: "Explore Waters",
            link: "/waters",
            bgImage: "https://res.cloudinary.com/duuwn3dzm/image/upload/waters_nndij0.jpg"
        }
    ];

    return (
        <Carousel fade controls={false} indicators={true} className='hero-carousel'>
            {slides.map((slide) => (
                <Carousel.Item key={slide.id} style={{ height: '100vh' }}>
                    <div style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2)), url(${slide.bgImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center'
                    }}
                    >
                        <Container className='text-left'>
                            <h1 className='display-2 fw-bold mb-3' style={{ color: '#E0DED1' }}>{slide.title}</h1>
                            <p className='fs-4 mb-5' style={{ color: '#E0DED1', maxWidth: '700px' }}>
                                {slide.subtitle}
                            </p>
                            <Button as={Link as any} to={slide.link} size='lg' className='border-0 px-5 py-3' style={{ backgroundColor: '#A68D4A', color: '#282B1B', fontWeight: 'bold' }}>
                                {slide.btnText}
                            </Button>
                        </Container>
                    </div>
                </Carousel.Item>
            ))}                
        </Carousel>
    );
};

export default Hero;