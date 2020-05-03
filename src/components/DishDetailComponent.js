import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

  renderDish(dish) {
      if (dish != null)
          return(
              <Card>
                  <CardImg top src={dish.image} alt={dish.name} />
                  <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                  </CardBody>
              </Card>
          );
      else
          return(
              <div></div>
          );
  }

  renderComments(dish) {
      if (dish != null){
          const comments = dish.comments.map((comment) => {
            return (
              <li key={comment.id}>{comment.comment}</li>
            );
          });
          return(
              comments
          );
      }
      else
          return(
              <div></div>
          );

  }

  render() {
    return (
        <div className="row">
          <div  className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.selectedDish)}
          </div>
          <div  className="col-12 col-md-5 m-1">
              <ul>
                { this.renderComments(this.props.selectedDish) }
              </ul>
          </div>
        </div>
    );
  }

}

export default DishDetail;
