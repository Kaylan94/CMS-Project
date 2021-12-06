import Carousel from 'react-bootstrap/Carousel';
import * as React from 'react';
import Course from '../../Images/Course.jpg';
import Lifehacks from '../../Images/Lifehacks.jpg';
import Research from '../../Images/Research.jpg';
import Button from '@material-ui/core/Button'

export const MyCarousel = () => {
    
    return(
        <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={Course}
            alt="Course slide"
            />
            <Carousel.Caption>
            <h3>Course</h3>
            <Button style={{ color: 'white' }} variant="outlined" href="/">
                Login to View
            </Button> 
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={Research}
            alt="Research slide"
            />

            <Carousel.Caption>
            <h3>Research</h3>
            <Button style={{ color:'white' }} variant="outlined" href="/">
                Login to View
            </Button>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={Lifehacks}
            alt="Lifehacks slide"
            />

            <Carousel.Caption>
            <h3>Lifestyle</h3>
            <Button style={{ color: 'white' }} variant="outlined" href="/">
                Login to View
            </Button>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    )
}