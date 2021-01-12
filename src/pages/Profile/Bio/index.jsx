import React, { useState } from 'react';
import { Container, Form, FormGroup, Label, Col, Input, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import './style.css'
import User from '../../../assets/img/user.png'
import { Link } from 'react-router-dom'

const Bio = (props) => {
    const {
        buttonLabel,
        className
      } = props;

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

    return (
        <div>
            <div className="subMenu">
                <Container>
                    <aside className="leftSide">
                        <div>
                            <div className="profile">
                                <img src={User} alt="" className="photo" />
                            </div>
                            <h3 className="nameUser">Giovani Ronaldo</h3>
                            <div className="desc">
                                <h4>Description</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus quis pharetra tortor neque eu ut. Augue facilisis pretium placerat ultricies volutpat ipsum sed. Natoque ullamcorper turpis elit integer at nisl. Id tellus amet varius malesuada. Vel dignissim interdum ut facilisi luctus porttitor ut. Nunc adipiscing tristique.</p>
                            </div>
                            <div className="button">
                                <Button color="link" className="btn editBio" onClick={toggle}>Edit Profile</Button>
                                    <Modal isOpen={modal} toggle={toggle} className={className}>
                                        <ModalBody toggle={toggle} close={closeBtn}>
                                            <h4 className="edit-title">Edit Profile</h4>
                                            <br/>
                                            <div>
                                                <img src={User} alt="" className="photo-edit" />
                                            </div>
                                            <br />
                                            <div>
                                                <Form>
                                                <FormGroup row className="edit-form-name">
                                                    <Label for="exampleEmail" sm={3}>Full Name:</Label>
                                                    <Col sm={8}>
                                                    <Input 
                                                    type="text" 
                                                    name="text" 
                                                    id="fullName" 
                                                    placeholder=" " />
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup row className="edit-form-description">
                                                    <Label for="exampleText" sm={3}>Description:</Label>
                                                    <Col sm={8}>
                                                    <Input className="input-desc"
                                                    type="textarea" 
                                                    name="text" 
                                                    id="description" />
                                                    </Col>
                                                </FormGroup>
                                                </Form>
                                            </div>
                                            <Button color="link" className="edit-button-submit">Submit</Button>
                                        </ModalBody>
                                    </Modal>
                            </div>
                        </div>
                    </aside>
                    <aside className="rightSide">
                        <div className="borderHistory">
                            <div className="contentBorder">
                                <h5 className="headerBox">Book History</h5>
                                <div class="card text-center">
                                    <div class="card-body">
                                        <div className="contentCard">
                                            <h5 className="headerCard">Field Name</h5>
                                            <h5 className="status"></h5>
                                            <small className="date">2021-01-01</small>
                                            <Link to='player-list'>
                                                <button className="btn player">Player List</button>
                                            </Link>
                                            <p className="footerCard">Coming Up Match</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card text-center">
                                    <div class="card-body">
                                        <div className="contentCard">
                                            <h5 className="headerCard">Field Name 2</h5>
                                            <h5 className="status">done</h5>
                                            <small className="date">2021-01-01</small>
                                            <Link to='player-list'>
                                                <button className="btn player">Player List</button>
                                            </Link>
                                            <p className="footerCard">Give Feedback</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card text-center">
                                    <div class="card-body">
                                        <div className="contentCard">
                                            <h5 className="headerCard">Field Name 3</h5>
                                            <h5 className="status">done</h5>
                                            <small className="date">2021-01-01</small>
                                            <Link to='player-list'>
                                                <button className="btn player">Player List</button>
                                            </Link>
                                            <p className="footerCard">Give Feedback</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </Container>
            </div>
        </div>
    )
}


export default Bio;