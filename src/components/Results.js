import React from "react";

const Results = () => {
  return (
    <table>
      <thead className="tableHeader">
        <tr>
          <th>Saída</th>
          <th>Chegada</th>
          <th>Empresa</th>
        </tr>
      </thead>
      <tbody>
        <tr className="tableRow">
          <td>00:00</td>
          <td>00:00</td>
          <td>00:00</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Results;

/*
<table>
  <thead>
    <tr>
      <th />
      <th>ID</th>
      <th>Name</th>
    </tr>
  </thead>
  <tbody>
    {
      users.map((user) => {
        return (
          <TableRow
            key={user.id}
            id={user.id}
            name={user.name}
            selected={this.state.selected[user.id]}
            handleSelect={this.handleSelect}
          />;
              );
    })
  }
        </tbody>
</table>
*/
