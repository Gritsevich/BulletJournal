import React from "react";
import { Container, Row } from "react-bootstrap";
import TrackerItem from "../Item/TrackerItem"

const TrackerList = ({trackers}) => {

  return (
    <Container>
      <Row className="d-flex">
        {trackers.map(tracker =>
          <TrackerItem key={tracker.id} tracker={tracker}/>
        )}
      </Row>
    </Container>
  )
}

export default TrackerList;