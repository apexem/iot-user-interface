import React from 'react';
import { useTable } from 'react-table';
import styled from 'styled-components';

const Table = ({data}) => {
  const keys = Object.keys(data[0]);
  const columns = keys.map((key) => {
    return {
      Header: key,
      accessor: key,
    };
  });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow } = useTable({ columns, data });

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(
          (row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          }
        )}
      </tbody>
    </table>
  )
}

const TableStyle = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

export {Table, TableStyle};

  // const Table = meas => {

  //   const [data, setData] = useState(meas);
  //   const xd = {"border": "1px solid black"};

  //   const getRows = () => {
  //     return data.meas.map((mea) => {
  //       const { Id, Date, ModuleName, Value } = mea //destructuring
  //       return (
  //         <tr style={xd} key={Id}>
  //           <td style={xd}>{Id}</td>
  //           <td style={xd}>{Date}</td>
  //           <td style={xd}>{ModuleName}</td>
  //           <td style={xd}>{Value}</td>
  //         </tr>
  //       );
  //     });
  //   }

  //   return (
  //     <div>
  //       <h1 id='title'>All</h1>
  //       <table style={{"border": "1px solid black"}} id='students'>
  //         <tbody>
  //         <th style={{"border": "1px solid black"}}> Id</th>
  //         <th style={{"border": "1px solid black"}}> Date</th>
  //         <th style={{"border": "1px solid black"}}> Temperature</th>
  //         {getRows()}
  //         </tbody>
  //       </table>
  //     </div>
  //   )
  // }
