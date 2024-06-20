const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex justify-center space-x-4 p-4 font-Poppin">
    <button
      className="px-4 py-2 bg-gray-200 rounded"
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
    >
      Previous
    </button>
    <span>{currentPage} of {totalPages}</span>
    <button
      className="px-4 py-2 bg-gray-200 rounded"
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
    >
      Next
    </button>
  </div>
);

export default Pagination;
