


const Pagination = ({ totalItems, itemsPerPage, currentPage, setCurrentPage }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className="flex justify-center mt-4">
            <button
                onClick={handlePrev}
                className="px-3 py-1 border rounded-md mx-1 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentPage === 1}
            >
                Prev
            </button>
            <div className="flex flex-wrap justify-center">
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleClick(index + 1)}
                        className={`px-3 py-1 border rounded-md m-1 ${currentPage === index + 1 ? 'bg-slate-800 text-white' : 'bg-white text-slate-800'
                            }`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
            <button
                onClick={handleNext}
                className="px-3 py-1 border rounded-md mx-1 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;