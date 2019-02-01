import React from "react";

const Results = () => {
  return (
    <div className="container">
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
    </div>
  );
};

export default Results;
