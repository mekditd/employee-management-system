import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'First Name', field: 'firstName' },
      { title: 'Last Name', field: 'lastName' },
      { title: 'Role', field: 'role' },
      { title: 'Department',field: 'department'},
      { title: 'Salary', field: 'salary', type: 'numeric'}
    ],
    data: [
        {
            firstName: 'Lacy',
            lastName: 'Bravo',
            id: '1',
            role: 'CEO',
            department: 'Operations',
            salary: '250,000'
        },
        {
            firstName: 'Dan',
            lastName: 'Jango',
            id: '2',
            role: 'Public Accountant',
            department: 'Accounting',
            salary: '90,000'
        },
        {
            firstName: 'Josh',
            lastName: 'Klash',
            id: '3',
            role: 'Software Engineer',
            department: 'Production',
            salary: '110,000'
        },
        {
            firstName: 'Lucy',
            lastName: 'Degaldo',
            id: '4',
            role: 'Software Engineer',
            department: 'Production',
            salary: '110,000'
        },
        {
            firstName: 'Blake',
            lastName: 'Tadder',
            id: '5',
            role: 'Front-End Developer',
            department: 'Development',
            salary: '80,000'
        },
        {
            firstName: 'Kirstan',
            lastName: 'Strave',
            id: '6',
            role: 'Front-End Developer',
            department: 'Development',
            salary: '95,000'
        },
        {
            firstName: 'Kim',
            lastName: 'Drago',
            id: '7',
            role: 'Back-End Developer',
            department: 'Development',
            salary: '100,000'
        },
        {
            firstName: 'Urban',
            lastName: 'Impatchu',
            id: '8',
            role: 'Back-End Developer',
            department: 'Development',
            salary: '100,000'
        },
        {
            firstName: 'Adam',
            lastName: 'Cliche',
            id: '9',
            role: 'System Architect',
            department: 'Operations',
            salary: '110,000'
        },
        {
            firstName: 'Rene',
            lastName: 'Grossman',
            id: '10',
            role: 'CIO',
            department: 'Operations',
            salary: '225,000'
        },
        {
            firstName: 'Braxton',
            lastName: 'Smallwood',
            id: '11',
            role: 'DevOps',
            department: 'Development',
            salary: '110,000'
        },
        {
            firstName: 'Zada',
            lastName: 'Habrid',
            id: '12',
            role: 'Distribution Supplier',
            department: 'Marketing',
            salary: '95,000'
        }
    ],
  });

  return (
    <MaterialTable
      title=""
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}