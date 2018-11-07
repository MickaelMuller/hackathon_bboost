import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Modal,
  ModalBody,
  ModalFooter,
  Button
} from "reactstrap";
import StarRatingComponent from "react-star-rating-component";
import "./CardPageStar.css";

class CardPageStar extends Component {
  constructor() {
    super();

    this.state = {
      rating: 1,
      modal: false
    }
    this.toogle = this.toogle.bind(this)
  }

  onStarClick(nextValue) {
    this.setState({ rating: nextValue });
  }

  toogle(){
    this.setState({
      modal: !this.state.modal
    })
  }


  render() {
    const { rating } = this.state;
    return (
      <div>
        <Card>
          <CardImg
            className="img-card"
            src={this.props.image}
            alt="Card image cap"
          />
          <CardBody>

            <CardTitle>{this.props.title}</CardTitle>
            <CardText>
              Esse ex et eiusmod occaecat. Aute eiusmod reprehenderit mollit
              minim eu aute quis sit non velit. Exercitation proident do officia
              officia. Anim magna proident cillum duis minim sunt duis mollit
              aliquip elit. Veniam reprehenderit qui tempor aliqua culpa.
            </CardText>
            <Button className="btn" onClick={this.toogle}>Agrandir</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
              <ModalBody className="taille-modal">
               <img className="img-modal" src={this.props.image} alt="imagegraph" />
              </ModalBody>
              <ModalFooter>
                <Button color="btn" onClick={this.toogle}>
                  OK
                </Button>{" "}
              </ModalFooter>
            </Modal>
            <br/>
            <br/>

            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={rating}
              onStarClick={this.onStarClick.bind(this)}
            />
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default CardPageStar;
