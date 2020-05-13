import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

  function RenderDish({dish}) {
      return(
          <Card>
              <CardImg top src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
          </Card>
      );
  }

  function RenderComments({comments}) {
      return(
          <div>
            <h1>Commets</h1>
            <ul>
              {comments.map((comment) => {
                return (
                  <li key={comment.id}>
                  <p>{comment.comment}</p>
                  <p>{comment.author}</p>
                  </li>
                );
              })}
            </ul>
          </div>
      );
  }

class DishDetail extends Component {

    constructor(props) {
      super(props);

      this.state = {
          isModalOpen: false
      };
      this.toggleModal = this.toggleModal.bind(this);
      this.handleComment = this.handleComment.bind(this);
    }

    toggleModal() {
      this.setState({
        isModalOpen: !this.state.isModalOpen
      });
    }

    handleComment(event) {
        this.toggleModal();
        this.props.addComment(this.props.dish.id, this.rating, this.name.value, this.comment.value);
    }

    render() {
      if (this.props.isLoading) {
          return(
              <div className="container">
                  <div className="row">
                      <Loading />
                  </div>
              </div>
          );
      }
      else if (this.props.errMess) {
          return(
              <div className="container">
                  <div className="row">
                      <h4>{this.props.errMess}</h4>
                  </div>
              </div>
          );
      }
      else if (this.props.dish != null)
        return (
            <div className="container">
              <div className="row">
                  <Breadcrumb>
                      <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                      <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                  </Breadcrumb>
                  <div className="col-12">
                      <h3>{this.props.dish.name}</h3>
                      <hr />
                  </div>
              </div>
              <div className="row">
                  <div className="col-12 col-md-5 m-1">
                      <RenderDish dish={this.props.dish} />
                  </div>
                  <div className="col-12 col-md-5 m-1">
                      <RenderComments comments={this.props.comments} />
                      <Button outline onClick={this.toggleModal}><span className="fa fa-lg"></span> Comment</Button>
                  </div>
              </div>
              <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                  <ModalHeader toggle={this.toggleModal}>Comment</ModalHeader>
                  <ModalBody>
                    <Form onSubmit={this.handleComment}>
                        <FormGroup>
                            <Label htmlFor="rating">Rating</Label>
                            <Input type="text" id="rating" name="rating" value="5" disabled
                                innerRef={(input) => this.rating = input} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="name">Name</Label>
                            <Input type="text" id="name" name="name"
                                innerRef={(input) => this.name = input} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="comment">Comment</Label>
                            <Input type="text" id="comment" name="comment"
                                innerRef={(input) => this.comment = input}  />
                        </FormGroup>
                        <Button type="submit" value="submit" color="primary">Submit</Button>
                    </Form>
                  </ModalBody>
              </Modal>
            </div>
        );
      else
        return (
          <div></div>
        );
    }

}

export default DishDetail;
