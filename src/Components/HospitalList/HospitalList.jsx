import React from 'react';
import { Box } from '@material-ui/core';
import MaterialTable from 'material-table';
import i18n from '../../i18n';
import TableIcons from './TableIcons';
import './HospitalList.css';

const columnConfig = [
  { title: i18n.hospitalTable.nameCol, field: 'division_name' },
  { title: i18n.hospitalTable.areaCol, field: 'division_area', filtering: true },
  { title: i18n.hospitalTable.regionCol, field: 'division_region' },
  { title: i18n.hospitalTable.settlementCol, field: 'division_settlement' },
  { title: i18n.hospitalTable.requestsCol, field: 'requests.length' },
];

const tableOptions = {
  filtering: true,
  pageSize: 25,
  pageSizeOptions: [25, 50, 75, 100],
};

const HospitalDetail = ({ hospital }) => {
  const { requests = [] } = hospital;
  return (
    <>
      {requests.map((request) => (
        <div className="row" key={request.description_ua}>
          <div>{request.description_ua}</div>
          <div>{request.quantity}</div>
        </div>
      ))}
    </>
  );
};

export default function HospitalList({ hospitals }) {
  return (
    <Box maxWidth={1}>
      <MaterialTable
        icons={TableIcons}
        columns={columnConfig}
        data={hospitals}
        options={tableOptions}
        title="Моніторинг запитів"
        detailPanel={(hospital) => (<HospitalDetail hospital={hospital} />)}
      />
    </Box>
  );
}
