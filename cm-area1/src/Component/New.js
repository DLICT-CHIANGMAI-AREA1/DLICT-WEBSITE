import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { NewsCard } from "./NewsCard";
import React from "react";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { AboutBackDrop } from "./About";
import { OPMBackDrop } from "./OPMBackDrop";

export const News = (className) => {
    const projects = [
        {
            id: "1",
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            id: "2",
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            id: "3",
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            id: "4",
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            id: "5",
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            id: "6",
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Informations</h2>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav
                                            variant="pills"
                                            className="nav-pills mb-5 justify-content-center align-items-center"
                                            id="pills-tab"
                                        >
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">?????????????????????????????????</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">????????????????????????????????????????????????</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">??????????????????????????? DLICT</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content
                                            id="slideInUp"
                                            className={isVisible ? "animate__animated animate__slideInUp" : ""}
                                        >
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {projects.map((project, index) => {
                                                        return <NewsCard key={index} {...project} />;
                                                    })}
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <div>
                                                    <OPMBackDrop />
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <div>
                                                    <AboutBackDrop />
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt=""></img>
        </section>
    );
};
