const Pagination = ({ cardsPerPage, totalCards, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination w-fit mx-auto flex flex-wrap">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item mx-3">
            <a
              onClick={() => paginate(number)}
              href="#clear_digital_Filter"
              className={`page-link text-[20px] leading-[24px] font-poppins font-bold min-w-[44px] min-h-[44px] flex justify-center items-center text-[#090914] bg-white transition-colors duration-300 ease-in-out ${
                currentPage === number ? "!bg-[#fa198c] text-white" : ""
              }`}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
