import React, { useState, Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Form,
  FormGroup,
  Input,

} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

class createQuestion extends Component {
  render() {
    return(
      <div>
        <Header />
      
        <Container className="mt--7" fluid>
          
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="bg-transparent">
                  <h3 className="mb-0">Create Question</h3>
                </CardHeader>
                <CardBody>
                  {/* <Row className="icon-examples">
                  </Row> */}
                  <Form>
                    <Row>
                      <Col md = "6">
                        <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-questionname"
                            >
                              Question Name
                            </label>
                          <Input
                            className="form-control-alternative"
                            id="input-questionname"
                            placeholder="Name of the question"
                            type="Regular"
                          />
                        </FormGroup>
                      </Col>
                      <Col md = "6">
                        <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-subject"
                            >
                             Subject
                            </label>
                          <Input
                            className="form-control-alternative"
                            id="input-subject"
                            placeholder="Subject"
                            type="Regular"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md = "12">
                        <FormGroup>
                          <label 
                            className = "form-control-label"
                            htmlFor = "input-description"
                          >
                            Question Description
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-description"
                            placeholder="Decription"
                            type="Regular"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md = "12">
                        <FormGroup>
                        <label 
                            className = "form-control-label"
                            htmlFor = "input-question"
                        >
                          Enter the question below
                        </label>
                        <Input
                          id="input-question"
                          placeholder="Write a large text here ..."
                          rows="7"
                          type="textarea"
                        />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md = "6">
                        <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-option1"
                              >
                              Option 1
                              </label>
                            <Input
                              className="form-control-alternative"
                              id="input-option1"
                              placeholder="Option 1"
                              type="Regular"
                            />
                          </FormGroup>
                      </Col>
                      <Col md = "6">
                        <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-option1"
                              >
                              Option 2
                              </label>
                            <Input
                              className="form-control-alternative"
                              id="input-option2"
                              placeholder="Option 2"
                              type="Regular"
                            />
                          </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md = "6">
                        <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-option1"
                              >
                              Option 3
                              </label>
                            <Input
                              className="form-control-alternative"
                              id="input-option3"
                              placeholder="Option 3"
                              type="Regular"
                            />
                          </FormGroup>
                      </Col>
                      <Col md = "6">
                        <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-option1"
                              >
                              Option 4
                              </label>
                            <Input
                              className="form-control-alternative"
                              id="input-option4"
                              placeholder="Option 4"
                              type="Regular"
                            />
                          </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md = "12">
                        <h4>Which is the correct option?</h4>
                      </Col>
                      <Col md = "12">
                        <div className="custom-control custom-radio mb-3">
                          <input
                            className="custom-control-input"
                            id="radio-option1"
                            name="custom-radio-2"
                            type="radio"
                          />
                          <label className="custom-control-label" htmlFor="radio-option1">
                            Option 1
                          </label>
                        </div>
                      </Col>
                      <Col md = "12">
                        <div className="custom-control custom-radio mb-3">
                          <input
                            className="custom-control-input"
                            id="radio-option2"
                            name="custom-radio-2"
                            type="radio"
                          />
                          <label className="custom-control-label" htmlFor="radio-option2">
                            Option 2
                          </label>
                        </div>
                      </Col>
                      <Col md = "12">
                        <div className="custom-control custom-radio mb-3">
                          <input
                            className="custom-control-input"
                            id="radio-option3"
                            name="custom-radio-2"
                            type="radio"
                          />
                          <label className="custom-control-label" htmlFor="radio-option3">
                            Option 3
                          </label>
                        </div>
                      </Col>
                      <Col md = "12">
                        <div className="custom-control custom-radio mb-3">
                          <input
                            className="custom-control-input"
                            id="radio-option4"
                            name="custom-radio-2"
                            type="radio"
                          />
                          <label className="custom-control-label" htmlFor="radio-option4">
                            Option 4
                          </label>
                        </div>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </div>
          </Row>
        </Container>
      </div>
    )
  }
}
// const Icons = () => {
//   const [copiedText, setCopiedText] = useState();
//   return (
//     <>
//       <Header />
      
//       <Container className="mt--7" fluid>
        
//         <Row>
//           <div className="col">
//             <Card className="shadow">
//               <CardHeader className="bg-transparent">
//                 <h3 className="mb-0">Create Question</h3>
//               </CardHeader>
//               <CardBody>
//                 <Row className="icon-examples">
                    
//                 </Row>
//               </CardBody>
//             </Card>
//           </div>
//         </Row>
//       </Container>
//     </>
//   );
// };

export default createQuestion;
