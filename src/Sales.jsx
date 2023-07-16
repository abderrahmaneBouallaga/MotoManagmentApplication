import React form 'react';

function Sales() {
    const [sales, setSales] = useState()
    return (
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
          <div className="w-50 bg-white rounded p-3">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  sales.map((sale)=> {
                    <tr>
                      <td>{sale.name}</td>
                    </tr>
                  })
                }
              </tbody>
            </table>
          </div>
      </div>
    );
  }
export default Sales;