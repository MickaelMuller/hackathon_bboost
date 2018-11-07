import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { Container } from 'reactstrap';
import './OldGraph.css';


        const OldGraph = () => {
            const handleOnDragStart = e => e.preventDefault()
        return (
            <div className="old-div">
                <Container >
                    <h2 className="old-text old-space">Vos graphiques enregistrés</h2>
    <AliceCarousel buttonsDisabled mouseDragEnabled >
      <img src="https://i0.wp.com/sciencepop.fr/wp-content/uploads/2018/08/nombre_cancers.png?ssl=1
" onDragStart={handleOnDragStart} className="yours-custom-class" alt="image1"/>
      <img src="https://www150.statcan.gc.ca/n1/pub/89-503-x/2005001/c-g/c-g3-5-fra.gif" onDragStart={handleOnDragStart} className="yours-custom-class" alt="image2"/>
      <img src="https://i1.wp.com/www.adcn.fr/wp-content/uploads/2013/06/P5-Graph01-Web.jpg
" onDragStart={handleOnDragStart} className="yours-custom-class" alt="image3"/>

    </AliceCarousel>
    </Container>
            </div>   
        );
    }


export default OldGraph;
