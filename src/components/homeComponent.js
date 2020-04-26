import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Loading } from './loadingComponent';
function RenderCard(props) {
  if (props.isLoading) {
    return (
      <Loading />
    )
  }
  else if (props.errMess) {
    return (
      <h4>{props.errMess}</h4>
    )
  } else {
    return (
      <Card>
        <CardImg src={props.item.image} alt={props.item.name} />
        <CardBody>
          <CardTitle>{props.item.name}</CardTitle>
          {props.item.designation ? <CardSubtitle>{props.item.designation}</CardSubtitle> : null}
          <CardText>{props.item.description}</CardText>
        </CardBody>
      </Card>
    );
  }
}

function Home(props) {
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderCard item={props.dish} isLoading={props.dishesLoading}
            errMess={props.dishesErrMess} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.promotion} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.leader} />
        </div>
      </div>
    </div>
  )
}

export default Home