const machines = [
  {
    id: 1,
    type: "type1",
    status: false,
    bottleneck: false,
    employee: "emp1",
    style: "tshirt",
    processes: [
      {
        id: 1,
        desc: "p1"
      },
      {
        id: 2,
        desc: "p2"
      }
    ]
  },
  {
    id: 2,
    type: "type1",
    status: true,
    bottleneck: true,
    employee: "emp1",
    processes: [
      {
        id: 1,
        desc: "p1"
      }
    ]
  },
  {
    id: 3,
    type: "type1",
    status: true,
    bottleneck: true,
    employee: "emp1"
  },
  {
    id: 4,
    type: "type1",
    status: true,
    bottleneck: true,
    processes: [
      {
        id: 1,
        desc: "p1"
      }
    ]
  },
  {
    id: 5,
    type: "type1",
    status: false,
    bottleneck: false
  }
];

export default machines;
