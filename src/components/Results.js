import React from "react";

const Results = () => {
  return (
    <div className="mt3">
      <table className="collapse ba br2 b--black-10 pv2 ph3">
        <tbody>
          <tr className="striped--light-gray">
            <th className="tr f6 ttu fw6 pv2 ph3">Saída</th>
            <th className="tr f6 ttu fw6 pv2 ph3">Chegada</th>
            <th className="tr f6 ttu fw6 pv2 ph3">Empresa</th>
          </tr>
          <tr className="striped--light-gray">
            <td className="pv2 ph3">01:00</td>
            <td className="pv2 ph3">02:00</td>
            <td className="pv2 ph3">03:00</td>
          </tr>
          <tr className="striped--light-gray">
            <td className="pv2 ph3">04:00</td>
            <td className="pv2 ph3">05:00</td>
            <td className="pv2 ph3">06:00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Results;
