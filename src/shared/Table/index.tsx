import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';
import { customerData, tableHeadNames } from '../../db/data';
import CustomMenu from '../Menu/menu';

const TableComponent = () => {
  const getClass = (dataToShow: string) => {
    switch (dataToShow) {
      case 'Active':
        return 'bg-[#DAFBEC] py-[5px] px-[12px] text-[#052E16] rounded-lg w-full';
      case 'Inactive':
        return 'bg-[#FCD9DC] py-[5px] px-[12px] text-[#720B18] rounded-lg';
      case 'Verified':
        return 'bg-[#DAFBEC] py-[5px] px-[12px] text-[#052E16] rounded-lg';
      case 'Blocked':
        return 'bg-[#FCD9DC] py-[5px] px-[12px] text-[#720B18] rounded-lg';
      case 'Invited':
        return 'bg-[#E2E8F0] py-[5px] px-[12px] text-[#0F172A] rounded-lg';
      default:
        return '';
    }
  };

  const showDivider = true;
  const showMenu = true;
  const tableVariant = 'simple';

  const borderValue = showDivider ? '50px' : '0px';

  return (
    <div className="w-full  border-[1px] rounded-xl border-slate-200 overflow-hidden">
      <TableContainer>
        <Table variant={tableVariant}>
          <Thead>
            <Tr className="">
              {tableHeadNames?.map((heads, i) => {
                return (
                  <Th
                    key={i}
                    className={`text-left px-[10px] py-[13px] font-[400] bg-white border-b-[${borderValue}]`}
                  >
                    <p className="w-full">{heads.label}</p>
                  </Th>
                );
              })}
              {showMenu && (
                <Th
                  className={`text-left px-[10px] py-[13px] font-[400] bg-white border-b-[${borderValue}]`}
                >
                  <span className=""></span>
                </Th>
              )}
            </Tr>
          </Thead>
          <Tbody className="last:border-none">
            {customerData?.map((rowData, indexKey) => {
              return (
                <Tr
                  className="w-full bg-white cursor-pointer last:border-none"
                  key={indexKey}
                >
                  {tableHeadNames?.map(({ accessor }, i) => {
                    const dataToShow = rowData[accessor] || '----';
                    return (
                      <Td
                        key={i}
                        // onClick={() => {
                        //   clickRow && handleNavigationToDetailpage(indexKey);
                        // }}
                      >
                        <span className={getClass(dataToShow)}>
                          {dataToShow}
                        </span>
                      </Td>
                    );
                  })}
                  {showMenu && (
                    <Td p={1} className="z-50 bg-red-900">
                      <CustomMenu upwardThreeDot={true} />
                    </Td>
                  )}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableComponent;
