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
    <AliceCarousel mouseDragEnabled >
      <img src="https://support.content.office.net/fr-fr/media/c957b99e-083e-4443-afc6-c372ea43ed08.png
" onDragStart={handleOnDragStart} className="yours-custom-class" alt="image1"/>
      <img src="https://images.theconversation.com/files/200232/original/file-20171220-4957-hspudb.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip" onDragStart={handleOnDragStart} className="yours-custom-class" alt="image2"/>
      <img src="https://support.content.office.net/fr-fr/media/c957b99e-083e-4443-afc6-c372ea43ed08.png
" onDragStart={handleOnDragStart} className="yours-custom-class" alt="image3"/>
      <img src="https://images.theconversation.com/files/200232/original/file-20171220-4957-hspudb.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip" onDragStart={handleOnDragStart} className="yours-custom-class" alt="image4"/>
      <img src="https://support.content.office.net/fr-fr/media/c957b99e-083e-4443-afc6-c372ea43ed08.png
" onDragStart={handleOnDragStart} className="yours-custom-class" alt="image5"/>
<img src="https://images.theconversation.com/files/200232/original/file-20171220-4957-hspudb.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip" onDragStart={handleOnDragStart} className="yours-custom-class" alt="image6"/>
<img src="https://support.content.office.net/fr-fr/media/c957b99e-083e-4443-afc6-c372ea43ed08.png
" onDragStart={handleOnDragStart} className="yours-custom-class" alt="image7"/>
    </AliceCarousel>
    </Container>
            </div>   
        );
    }


export default OldGraph;
