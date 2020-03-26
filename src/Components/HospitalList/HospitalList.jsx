import React from 'react';
import MaterialTable from 'material-table';
import TableIcons from './TableIcons';
import './HospitalList.css';

const columnConfig = [
  { title: 'Назва', field: 'division_name' },
  { title: 'Область', field: 'division_area', filtering: true },
  { title: 'Район', field: 'division_region' },
  { title: 'Населений пункт', field: 'division_settlement' },
  { title: 'Кількість запитів', field: 'requests.length' },
];

const tableOptions = {
  filtering: true,
  pageSize: 25,
  pageSizeOptions: [25, 50, 75, 100],
};

function HospitalDetail({ hospital }) {
  const { requests } = hospital;
  return (
    <>
      {requests && requests.map((request) => (
        <div className="row" key={request.description_ua}>
          <div>{request.description_ua}</div>
          <div>{request.quantity}</div>
        </div>
      ))}
    </>
  );
}

export default function HospitalList({ hospitals }) {
  return (
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable
        icons={TableIcons}
        columns={columnConfig}
        data={hospitals}
        options={tableOptions}
        title="Моніторинг запитів"
        detailPanel={(hospital) => (<HospitalDetail hospital={hospital} />)}
      />
    </div>
  );
}
