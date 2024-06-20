import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex justify-center items-center space-x-4 p-4 font-Poppin">
    
    <button
      className="px-4 py-2 bg-gray-200 rounded flex gap-1 items-center"
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
    >
      Previous
      <GrFormPreviousLink/>
    </button>
    <span>{currentPage} of {totalPages}</span>
    <button
      className="px-4 py-2 bg-gray-200 rounded hover:bg-blue-400 hover:text-gray-100 flex gap-1 items-center"
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
    >
      Next
      <GrFormNextLink/>
    </button>
  </div>
);

export default Pagination;
