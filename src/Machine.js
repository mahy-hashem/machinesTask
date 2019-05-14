import React from "react";
import "./Card.css";
//import styled from "@emotion/styled";
import { Collapse, CardBody, Card } from "reactstrap";

class Machine extends React.Component {
  state = { collapse: true };

  toggle = () => {
    this.setState(state => ({ collapse: !state.collapse }));
  };

  render() {
    return (
      <section className="card bg-light mb-3">
        <header
          className={`${
            this.props.bottleneck ? "bottleneck card-header" : "card-header"
          }`}
        >
          <p>
            {this.props.status ? (
              <i className="fas fa-check-circle" />
            ) : (
              <i className="fas fa-stop-circle" />
            )}
          </p>
          <p>{this.props.type}</p>
          <p>{this.props.id}</p>
          {(this.props.employee ||
            this.props.style ||
            this.props.processes) && (
            <button className="collapse-all" onClick={this.toggle}>
              {this.state.collapse ? "-" : "+"}
            </button>
          )}
        </header>

        {(this.props.employee || this.props.style || this.props.processes) && (
          <Collapse isOpen={this.state.collapse}>
            <Card>
              <CardBody>
                <div className="card-body">
                  {this.props.employee && (
                    <p className="card-text">{this.props.employee}</p>
                  )}
                  {this.props.style && (
                    <p className="card-text">{this.props.style}</p>
                  )}
                  {this.props.processes &&
                    this.props.processes.map(process => (
                      <p className="card-text">{`${process.id} ${
                        process.desc
                      }`}</p>
                    ))}
                </div>
              </CardBody>
            </Card>
          </Collapse>
        )}
      </section>
    );
  }
}

export default Machine;
