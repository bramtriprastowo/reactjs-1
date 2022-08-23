import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import styled from "styled-components";
import KosDamaiImage from "./images/kos damai.png"
import OnlineNotesImage from "./images/onlinenotes.png"
import TokoshopImage from "./images/tokoshop.png"

const StyledSection = styled.section`
    font-family: 'Poppins', sans-serif;
    background-color: #e9fcfd;
    scroll-margin-top: 102px;
`

const StyledImg = styled.img`
    width: 260px;
    height: 200px;
    border: solid 4px #E9FCFD;
`

const StyledCard = styled(Card)`
    &:hover{
        transform: scale(1.05); 
        transition: transform .5s;
    } 
`

const StyledCardCustom = styled(StyledCard)`
    @media only screen and (min-width: 992px) {
        padding-bottom: 24px;
    }
`

export class Projects extends React.Component{
    render() {
        return (
            <StyledSection id="projects">
                <Container className="px-5 py-5 mb-5 text-center">
                    <div className="sub-title">
                        <h4 className="display-6 fw-bolder mb-5">Projects</h4>
                    </div>
                    <Row className="justify-content-center gy-4">
                        <Col xs={12} sm={12} md={6} lg={4}>
                        <StyledCard border="info">
                            <Card.Title className="pt-3 mb-3">Tokoshop</Card.Title>
                            <StyledImg src={TokoshopImage} className="mx-auto my-3" alt="Tokoshop" />
                            <Card.Body className="pt-0 pb-4 mt-3">
                            <Card.Text>Store that sells gadgets, laptops, and accessories</Card.Text>
                            </Card.Body>
                        </StyledCard>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4}>
                        <StyledCard border="info">
                            <Card.Title className="pt-3 mb-3">OnlineNotes</Card.Title>
                            <StyledImg src={OnlineNotesImage} className="mx-auto my-3" alt="OnlineNotes" />
                            <Card.Body className="pt-0 pb-4 mt-3">
                            <Card.Text>Site to save and write your memos online</Card.Text>
                            </Card.Body>
                        </StyledCard>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4}>
                        <StyledCardCustom border="info">
                            <Card.Title className="pt-3 mb-3">Kos Damai</Card.Title>
                            <StyledImg src={KosDamaiImage} className="mx-auto my-3" alt="Kos Damai" />
                            <Card.Body className="pt-0 pb-4 mt-3">
                            <Card.Text>Kos Putri Damai in Semarang</Card.Text>
                            </Card.Body>
                        </StyledCardCustom>
                        </Col>
                    </Row>
                </Container>
            </StyledSection>
        )
    }
}