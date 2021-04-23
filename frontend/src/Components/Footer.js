import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export class Footer extends Component {
  render() {
    return (
      <div
        style={{
          color: 'whitesmoke',
          backgroundColor: '#005bac',
          marginTop: '2rem',
          width: '100vw',
          padding: '2ch 1ch 1ch 1ch',
          position: 'relative',
        }}
      >
        <Container className='pt-3'>
          <Row>
            <Col>
              <h4>Contact Us:</h4>
            </Col>
            <Col>
              <Row>
                <p>International Division, Beihang University</p>
              </Row>
              <Row>
                <p>
                  37 Xueyuan Road, Haidian District, Beijing 100191, P.R.China
                </p>
              </Row>
            </Col>
            <Col>
              <Row>
                <p>Fax: +86-10-82328036 | international@buaa.edu.cn</p>
              </Row>
              <Row>
                <p>Open weekdays from 8-12 am and 2-6 pm.</p>
              </Row>
            </Col>
          </Row>
          <Row className='mt-3'>
            <p>COPYRIGHT 2021&copy; AlphaCentauri. All Rights Reserved.</p>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;
