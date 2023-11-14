import React from "react";
import { Container, Col, Card} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";

const TrackerItem = ({tracker}) => {

  const navigate = useNavigate()

  return (
    <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
      <Image width={150} height={150} src={'https://papik.pro/uploads/posts/2023-01/thumbs/1674239667_papik-pro-p-monetki-risunok-15.png'}/>
      <div>{tracker.name}</div>
      <h3>{tracker.discription}</h3>
    </Card>
  )
}

export default TrackerItem;