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
              <div>
                <h1>Commets</h1>
                <ul>
                  {comments}
                </ul>
              </div>
          );
      }
      else
          return(
              <div></div>
          );

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div  className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.selectedDish)}
          </div>
          <div  className="col-12 col-md-5 m-1">
              {this.renderComments(this.props.selectedDish)}
          </div>
        </div>
      </div>
    );
  }

}

export default DishDetail;
