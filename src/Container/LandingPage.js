import React from "react";
import { Card, Col, Row } from "antd";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <div style={{ background: "#ECECEC", padding: "30px" }}>
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Counter" bordered={false}>
                <Link to="/counter">GoTo Counter Page</Link>
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Todo" bordered={false}>
                <Link to="/todo">GoTo Todo Page</Link>
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Array 1st program" bordered={false}>
                <Link to="/array1"> GoTo Array Page</Link>
              </Card>
            </Col>
          </Row>
          <br />
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Array 2nd program" bordered={false}>
                <Link to="/array2"> GoTo Array Page</Link>
              </Card>
            </Col>
            <Col span={8}>
              <Card title="user details" bordered={false}>
                <Link to="/user_details"> user Details</Link>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default LandingPage;
