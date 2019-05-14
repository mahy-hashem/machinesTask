import React from "react";
import Machine from "./Machine";
import data from "./dummyData";
import { Collapse, Button, CardBody, Card } from "reactstrap";

class MachineSequence extends React.Component {
  state = {
    machines: data,
    collapse: false
  };

  toggle = () => {
    this.setState(state => ({ collapse: !state.collapse }));
  };

  render = () => {
    return (
      <React.Fragment>
        <Button className="collapse-all" onClick={this.toggle}>
          {this.state.collapse ? "Collapse All" : "Expand All"}
        </Button>
        <div className="machines">
          {this.state.machines.map(machine => {
            return (
              <Machine
                key={machine.id}
                id={machine.id}
                status={machine.status}
                type={machine.type}
                bottleneck={machine.bottleneck}
                employee={machine.employee}
                style={machine.style}
                processes={machine.processes}
              />
            );
          })}
        </div>
      </React.Fragment>
    );
  };
}

export default MachineSequence;
