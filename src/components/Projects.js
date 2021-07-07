import React from 'react';
import { Card } from 'react-bootstrap';
import carwash from '../img/carwash.png';
import foodbuzz from '../img/foodbuzz.png';
import cityriders from '../img/cityRiders.png';

const Projects = () => {
    return (
        <section className="projects-section">
            <div className="container">
            <h2>My Projects</h2>
            <div className="devider"></div>
            <div className="row">
                <div className="col-md-4 p-5">
                <Card style={{height:'400px'}}>
  <Card.Img variant="top" src={carwash} />
  <Card.Body>
    <Card.Title>CARWASH</Card.Title>
    <Card.Text>
    It's a mern stack website, Most of features are dynamically
connected with database. Admin and clients can manage their dashboard.
    </Card.Text>  
    </Card.Body>
    <Card.Footer style={{justifyContent: 'space-between'}} className="d-flex justify-content-space-between">
     <a href="https://github.com/jahid-opu/complete-website-client-side">Client side</a>
     <a href="https://github.com/jahid-opu/complete-website-server-side">Server side</a>
     <a href="https://carwash-72f6e.web.app/">Live</a>

    </Card.Footer>
</Card>
                </div>

                <div className="col-md-4 p-5">
                <Card style={{height:'400px'}}>
  <Card.Img variant="top" src={foodbuzz} />
  <Card.Body>
    <Card.Title>FOOD BUZZ</Card.Title>
    <Card.Text>
    This is a food buying website where anyone can buy foods by creating an
account.

    </Card.Text>  
    </Card.Body>
    <Card.Footer style={{justifyContent: 'space-between'}} className="d-flex justify-content-space-between">
     <a href="https://github.com/jahid-opu/food-buzz-client">Client side</a>
     <a href="https://github.com/jahid-opu/food-buzz-server">Server side</a>
     <a href="https://food-buzz-dae1a.web.app/">Live</a>

    </Card.Footer>
</Card>
                </div>

                <div className="col-md-4 p-5">
                <Card style={{height:'400px'}}>
  <Card.Img variant="top" src={cityriders} />
  <Card.Body>
    <Card.Title>CITY RIDERS</Card.Title>
    <Card.Text>
    This is a traveling site. By creating an account you can choose the vehicle
what you want and then just click on it. you can select the places and see
how much you have to pay.
    </Card.Text>  
    </Card.Body>
    <Card.Footer style={{justifyContent: 'space-between'}} className="d-flex justify-content-space-between">
     <a href="https://github.com/jahid-opu/city-riders">Github</a>
     <a href="https://urban-ride-e059c.web.app/">Live</a>

    </Card.Footer>
</Card>
                </div>

            </div>
            </div>
        </section>
    );
};

export default Projects;