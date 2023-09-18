/* eslint-disable @typescript-eslint/no-explicit-any */
export type ITableBody = {
  [x: string]: string | number | string[] | number[] | boolean | any;
};

export type ITableProp = {
  tableHeads?: {
    label: string;
    accessor: string;
  }[];
  showMenu?: boolean;
  dataTableSource?: ITableBody[];
  showPagination?: boolean;
  clickRow: boolean;
  pathTo?: string;
  showDivider?: boolean;
  tableVariant: string;
};
