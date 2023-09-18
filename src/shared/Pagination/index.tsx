import { IPagination } from './pagination.interface';

const CustomPagination = ({
  startIndex,
  endIndex,
  lengthOfData,
  currentPage,
  onChangeOfPage,
}: IPagination) => {
  return (
    <div>
      <div className="text-[14px] text-[#64748B] font-[400] tracking-normal">
        <span>
          Showing <strong> {startIndex + 1}</strong> to{' '}
          <strong> {Math.min(endIndex, lengthOfData)}</strong> of{' '}
          <strong>{lengthOfData}</strong> Records
        </span>
      </div>
      <div className="flex mt-[5px]">
        <button
          onClick={() => onChangeOfPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-[60%] p-[7px] rounded-l-[10px]  border-[1px] border-[#CBD5E1] disabled:border-slate-200 disabled:text-slate-400"
        >
          Previous
        </button>
        <button
          onClick={() => onChangeOfPage(currentPage + 1)}
          disabled={endIndex >= lengthOfData}
          className="w-[40%]  p-[7px] rounded-r-[10px]  border-[1px] border-[#CBD5E1]"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CustomPagination;
