import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';
import "./CardPageStar.css"

class CardPageStar extends Component {
  constructor() {
    super();

    this.state = {
        rating: 1 
    };
  }

  onStarClick(nextValue) {
    this.setState({ rating: nextValue });
  }

  render() {
    const { rating } = this.state;
    return (
      <div>
        <Card>
          <CardImg className="img-card" src={this.props.image} alt="Card image cap" />
          <CardBody>
            <CardTitle>Card Title</CardTitle>
            <CardText>Esse ex et eiusmod occaecat. Aute eiusmod reprehenderit mollit minim eu aute quis sit non velit. Exercitation proident do officia officia. Anim magna proident cillum duis minim sunt duis mollit aliquip elit. Veniam reprehenderit qui tempor aliqua culpa.</CardText>
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