import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchTrackers } from "../../http/trackerAPI";
import TrackerList from '../../components/List/TrackerList'

const Homepage = () => {

  const [trackers, setTrackers] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchTrackers().then(data => setTrackers(data))
}, [])

  return (
    <Container>
      <Row className="mt-2">
        <Col md={9}>
          <TrackerList trackers={trackers}/> 
        </Col>
      </Row>
    </Container>
  )
}

export default Homepage;