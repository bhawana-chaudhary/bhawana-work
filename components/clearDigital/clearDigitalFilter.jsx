// import React, { useState, useEffect, FormEvent } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import HongoStyle from "/styles/hongo.module.scss";
// import Pagination from "./pagination";
// import $ from "jquery";
// import ClearDigitalForm from "./clearDigitalForm";

// const filtercardData = [
//   {
//     id: 1,
//     imgUrl: "/clearDigital/filter_card_1.png",
//     solution: "Article",
//     topic: "Digital Strategy",
//     cardTitle: "Ensure Your Brand’s Direction by Auditing These 5 Key Areas...",
//     cardParagraph:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, officiis? Dignissimos neque delectus veniam vitae voluptas? Reiciendis voluptate laborum maiores!",
//     btn: "Read more",
//   },
//   {
//     id: 2,
//     imgUrl: "/clearDigital/filter_card_2.png",
//     solution: "Podcast",
//     topic: "Innovation & Trends",
//     cardTitle: "The Power of Femininity in Leadership",
//     cardParagraph:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, officiis? Dignissimos neque delectus veniam vitae voluptas? Reiciendis voluptate laborum maiores!",
//     btn: "Read more",
//   },
//   {
//     id: 3,
//     imgUrl: "/clearDigital/filter_card_3.png",
//     solution: "Article",
//     topic: "Brand Strategy",
//     cardTitle:
//       "5 Strategies Your B2B Company Should Apply to Weather a Tough Economy",
//     cardParagraph: "By Steve Ohanians on August 18, 2023",
//     btn: "Read more",
//   },
//   {
//     id: 4,
//     imgUrl: "/clearDigital/card_grid_img.svg",
//     filterCard4: true,
//     card4title: "Get our latest Insights in your inbox",
//   },
//   {
//     id: 5,
//     imgUrl: "/clearDigital/filter_card_1.png",
//     solution: "Article",
//     topic: "Innovation & Trends",
//     cardTitle: "Ensure Your Brand’s Direction by Auditing These 5 Key Areas...",
//     cardParagraph:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, officiis? Dignissimos neque delectus veniam vitae voluptas? Reiciendis voluptate laborum maiores!",
//     btn: "Read more",
//   },
//   {
//     id: 6,
//     imgUrl: "/clearDigital/filter_card_2.png",
//     solution: "Article",
//     topic: "Content Strategy",
//     cardTitle: "The Power of Femininity in Leadership",
//     cardParagraph:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, officiis? Dignissimos neque delectus veniam vitae voluptas? Reiciendis voluptate laborum maiores!",
//     btn: "Read more",
//   },
//   {
//     id: 7,
//     imgUrl: "/clearDigital/filter_card_3.png",
//     solution: "Podcast",
//     topic: "Digital Marketing Process",
//     cardTitle:
//       "5 Strategies Your B2B Company Should Apply to Weather a Tough Economy",
//     cardParagraph: "By Steve Ohanians on August 18, 2023",
//     btn: "Read more",
//   },
//   {
//     id: 8,
//     imgUrl: "/clearDigital/filter_card_1.png",
//     solution: "Article",
//     topic: "Digital Marketing Process",
//     cardTitle: "Ensure Your Brand’s Direction by Auditing These 5 Key Areas...",
//     cardParagraph:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, officiis? Dignissimos neque delectus veniam vitae voluptas? Reiciendis voluptate laborum maiores!",
//     btn: "Read more",
//   },
//   {
//     id: 9,
//     imgUrl: "/clearDigital/filter_card_1.png",
//     solution: "Podcast",
//     topic: "Digital Strategy",
//     cardTitle:
//       "2) Ensure Your Brand’s Direction by Auditing These 5 Key Areas...",
//     cardParagraph:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, officiis? Dignissimos neque delectus veniam vitae voluptas? Reiciendis voluptate laborum maiores!",
//     btn: "Read more",
//   },
//   {
//     id: 10,
//     imgUrl: "/clearDigital/filter_card_2.png",
//     solution: "Article",
//     topic: "Web Development",
//     cardTitle: "2) The Power of Femininity in Leadership",
//     cardParagraph:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, officiis? Dignissimos neque delectus veniam vitae voluptas? Reiciendis voluptate laborum maiores!",
//     btn: "Read more",
//   },
//   {
//     id: 11,
//     imgUrl: "/clearDigital/filter_card_3.png",
//     solution: "Article",
//     topic: "Innovation & Trends",
//     cardTitle:
//       "2) 5 Strategies Your B2B Company Should Apply to Weather a Tough Economy",
//     cardParagraph: "By Steve Ohanians on August 18, 2023",
//     btn: "Read more",
//   },
//   {
//     id: 12,
//     imgUrl: "/clearDigital/card_grid_img.svg",
//     filterCard4: true,
//     card4title: "2) Get our latest Insights in your inbox",
//   },
//   {
//     id: 13,
//     imgUrl: "/clearDigital/filter_card_1.png",
//     solution: "Podcast",
//     topic: "Web Development",
//     cardTitle:
//       "2) Ensure Your Brand’s Direction by Auditing These 5 Key Areas...",
//     cardParagraph:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, officiis? Dignissimos neque delectus veniam vitae voluptas? Reiciendis voluptate laborum maiores!",
//     btn: "Read more",
//   },
//   {
//     id: 14,
//     imgUrl: "/clearDigital/filter_card_2.png",
//     solution: "Article",
//     topic: "Content Strategy",
//     cardTitle: "2) The Power of Femininity in Leadership",
//     cardParagraph:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, officiis? Dignissimos neque delectus veniam vitae voluptas? Reiciendis voluptate laborum maiores!",
//     btn: "Read more",
//   },
//   {
//     id: 15,
//     imgUrl: "/clearDigital/filter_card_3.png",
//     solution: "Podcast",
//     topic: "Digital Marketing Process",
//     cardTitle:
//       "2) 5 Strategies Your B2B Company Should Apply to Weather a Tough Economy",
//     cardParagraph: "By Steve Ohanians on August 18, 2023",
//     btn: "Read more",
//   },
//   {
//     id: 16,
//     imgUrl: "/clearDigital/filter_card_1.png",
//     solution: "Podcast",
//     topic: "Web Development",
//     cardTitle: "Ensure Your Brand’s Direction by Auditing These 5 Key Areas...",
//     cardParagraph:
//       "2) Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, officiis? Dignissimos neque delectus veniam vitae voluptas? Reiciendis voluptate laborum maiores!",
//     btn: "Read more",
//   },
//   {
//     id: 17,
//     imgUrl: "/clearDigital/filter_card_1.png",
//     solution: "Article",
//     topic: "Content Strategy",
//     cardTitle:
//       "3) Ensure Your Brand’s Direction by Auditing These 5 Key Areas...",
//     cardParagraph:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, officiis? Dignissimos neque delectus veniam vitae voluptas? Reiciendis voluptate laborum maiores!",
//     btn: "Read more",
//   },
//   {
//     id: 18,
//     imgUrl: "/clearDigital/filter_card_2.png",
//     solution: "Article",
//     topic: "Innovation & Trends",
//     cardTitle: "3) The Power of Femininity in Leadership",
//     cardParagraph:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, officiis? Dignissimos neque delectus veniam vitae voluptas? Reiciendis voluptate laborum maiores!",
//     btn: "Read more",
//   },
//   {
//     id: 19,
//     imgUrl: "/clearDigital/filter_card_3.png",
//     solution: "Article",
//     topic: "Digital Strategy",
//     cardTitle:
//       "3) 5 Strategies Your B2B Company Should Apply to Weather a Tough Economy",
//     cardParagraph: "By Steve Ohanians on August 18, 2023",
//     btn: "Read more",
//   },
//   {
//     id: 20,
//     imgUrl: "/clearDigital/card_grid_img.svg",
//     solution: "Podcast",
//     topic: "Web Development",
//     filterCard4: true,
//     card4title: "3) Get our latest Insights in your inbox",
//   },
//   {
//     id: 21,
//     imgUrl: "/clearDigital/filter_card_1.png",
//     solution: "Podcast",
//     topic: "Digital Marketing Process",
//     cardTitle:
//       "3) Ensure Your Brand’s Direction by Auditing These 5 Key Areas...",
//     cardParagraph:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, officiis? Dignissimos neque delectus veniam vitae voluptas? Reiciendis voluptate laborum maiores!",
//     btn: "Read more",
//   },
//   {
//     id: 22,
//     imgUrl: "/clearDigital/filter_card_2.png",
//     solution: "Article",
//     topic: "Content Strategy",
//     cardTitle: "3) The Power of Femininity in Leadership",
//     cardParagraph:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, officiis? Dignissimos neque delectus veniam vitae voluptas? Reiciendis voluptate laborum maiores!",
//     btn: "Read more",
//   },
//   {
//     id: 23,
//     imgUrl: "/clearDigital/filter_card_3.png",
//     solution: "Article",
//     topic: "Web Development",
//     cardTitle:
//       "3) 5 Strategies Your B2B Company Should Apply to Weather a Tough Economy",
//     cardParagraph: "By Steve Ohanians on August 18, 2023",
//     btn: "Read more",
//   },
//   {
//     id: 24,
//     imgUrl: "/clearDigital/filter_card_1.png",
//     solution: "Podcast",
//     topic: "Content Strategy",
//     cardTitle:
//       "3) Ensure Your Brand’s Direction by Auditing These 5 Key Areas...",
//     cardParagraph:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, officiis? Dignissimos neque delectus veniam vitae voluptas? Reiciendis voluptate laborum maiores!",
//     btn: "Read more",
//   },
// ];

// export default function ClearDigitalFilter() {
//   const [openAccordionIndex, setOpenAccordionIndex] = useState(null);
//   const [searchValue, setSearchValue] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [cardCount, sectCardCount] = useState(filtercardData.length);
//   const cardsPerPage = 8;
//   // const filtercarCount = filtercardData.length;
//   const [showFilterList, setShowFilterList] = useState(false);
//   const [showFilterTextWrap, setShowFilterTextWrap] = useState(false);
//   const [selectedFilterText, setSelectedFilterText] = useState("");
//   const [filterListSelected, setFilterListSelected] = useState(false);

//   const [visibleCardCount, setVisibleCardCount] = useState(
//     filtercardData.length
//   );

//   const toggleAccordion = (index, e) => {
//     if (e) {
//       e.stopPropagation();
//     }
//     setOpenAccordionIndex((prevIndex) => (prevIndex === index ? null : index));
//   };

//   // --------------------------------

//   // const [filterTopList, setFilterTopList] = useState([]);
//   // const [initialLoad, setInitialLoad] = useState(true);
//   // const handleLabelClickOne = (event) => {
//   //   const labelText = event.currentTarget.innerText.trim().toLowerCase();
//   //   if (labelText) {
//   //     setFilterTopList((prevList) => {
//   //       const index = prevList.indexOf(labelText);
//   //       if (index === -1) {
//   //         return [...prevList, labelText];
//   //       } else {
//   //         return prevList.filter((item) => item !== labelText);
//   //       }
//   //     });
//   //   }
//   //   setInitialLoad(false);
//   // };
//   // const handleLabelClickTwo = (event) => {
//   //   const labelText = event.currentTarget.innerText.trim().toLowerCase();
//   //   if (labelText) {
//   //     setFilterTopList((prevList) => {
//   //       const index = prevList.indexOf(labelText);
//   //       if (index === -1) {
//   //         return [...prevList, labelText];
//   //       } else {
//   //         return prevList.filter((item) => item !== labelText);
//   //       }
//   //     });
//   //   }
//   //   setInitialLoad(false);
//   // };
//   // const handleLabelClickThree = (event) => {
//   //   const labelText = event.currentTarget.innerText.trim().toLowerCase();
//   //   if (labelText) {
//   //     setFilterTopList((prevList) => {
//   //       const index = prevList.indexOf(labelText);
//   //       if (index === -1) {
//   //         return [...prevList, labelText];
//   //       } else {
//   //         return prevList.filter((item) => item !== labelText);
//   //       }
//   //     });
//   //   }
//   //   setInitialLoad(false);
//   // };

//   // useEffect(() => {
//   //   const applyFilters = () => {
//   //     const filterCards = document.querySelectorAll(".filter_card");
//   //     filterCards.forEach((card) => {
//   //       const cardText = card.innerText.toLowerCase();
//   //       const isVisible = filterTopList.some((labelText) =>
//   //         cardText.includes(labelText)
//   //       );
//   //       card.style.display = isVisible ? "block" : "none";
//   //     });
//   //   };
//   //   if (!initialLoad) {
//   //     applyFilters();
//   //   }
//   // }, [filterTopList, initialLoad]);
//   // useEffect(() => {
//   //   const filterCards = document.querySelectorAll(".filter_card");
//   //   filterCards.forEach((card) => {
//   //     card.style.display = "block";
//   //   });
//   // }, []);
//   // useEffect(() => {
//   //   const filterListInputs = document.querySelectorAll(".filterListInput span");
//   //   filterListInputs.forEach((input) => {
//   //     input.addEventListener("click", handleLabelClickOne);
//   //     input.addEventListener("click", handleLabelClickTwo);
//   //     input.addEventListener("click", handleLabelClickThree);
//   //   });

//   //   return () => {
//   //     filterListInputs.forEach((input) => {
//   //       input.removeEventListener("click", handleLabelClickOne);
//   //       input.removeEventListener("click", handleLabelClickTwo);
//   //       input.removeEventListener("click", handleLabelClickThree);
//   //     });
//   //   };
//   // }, []);

//   // const [filterTopList, setFilterTopList] = useState([]);
//   // const [initialLoad, setInitialLoad] = useState(true);

//   // useEffect(() => {
//   //   // Initialize an array to store clicked labels
//   //   const clickedLabels = [];

//   //   const handleLabelClickOne = (event) => {
//   //     // Check if the click happened inside .list_item_one
//   //     if (event.currentTarget.closest(".list_item_one")) {
//   //       // Extract the labelText from the clicked element
//   //       const labelText = event.currentTarget.innerText.trim().toLowerCase();
//   //       if (labelText) {
//   //         // Add the clicked label to the array
//   //         clickedLabels.push(labelText);

//   //         // Update the .filterTopList_wrap with the clicked labels
//   //         const filterTopListWrap = document.querySelector(
//   //           ".filterTopList_wrap"
//   //         );
//   //         if (filterTopListWrap) {
//   //           const newSpan = document.createElement("span");
//   //           newSpan.textContent = labelText;
//   //           filterTopListWrap.appendChild(newSpan);
//   //         }
//   //       }

//   //       setInitialLoad(false);
//   //     }
//   //   };

//   //   const filterListInputs = document.querySelectorAll(".filterListInput span");
//   //   filterListInputs.forEach((input) => {
//   //     input.addEventListener("click", handleLabelClickOne); // Changed from handleLabelClick
//   //   });

//   //   return () => {
//   //     filterListInputs.forEach((input) => {
//   //       input.removeEventListener("click", handleLabelClickOne); // Changed from handleLabelClick
//   //     });

//   //     // Check if any label was clicked
//   //     if (clickedLabels.length === 0) {
//   //       // If no label was clicked, show .text_wrap and remove .filterTopList_wrap
//   //       const filterCardWrapper = document.querySelector(
//   //         ".filter_card_wrapper"
//   //       );
//   //       if (filterCardWrapper) {
//   //         const textWrap = filterCardWrapper.querySelector(".text_wrap");
//   //         const filterTopListWrap = filterCardWrapper.querySelector(
//   //           ".filterTopList_wrap"
//   //         );
//   //         if (textWrap && filterTopListWrap) {
//   //           textWrap.style.display = "block";
//   //           filterTopListWrap.remove();
//   //         }
//   //       }
//   //     }
//   //   };
//   // }, []);

//   // ----------------------------

//   const [filterTopList, setFilterTopList] = useState([]);
//   const [initialLoad, setInitialLoad] = useState(true);
//   // const handleLabelClick = (event) => {
//   //   const labelText = event.currentTarget.innerText.trim().toLowerCase();
//   //   if (labelText) {
//   //     setFilterTopList((prevList) => {
//   //       const index = prevList.indexOf(labelText);
//   //       if (index === -1) {
//   //         return [...prevList, labelText];
//   //       } else {
//   //         return prevList.filter((item) => item !== labelText);
//   //       }
//   //     });
//   //   }
//   //   setInitialLoad(false);
//   // };

//   const handleLabelClick = (event) => {
//     const clickedLabel = event.currentTarget.innerText.trim().toLowerCase();
//     const clickedCheckbox = event.currentTarget.querySelector(
//       'input[type="checkbox"]'
//     );
//     if (clickedCheckbox) {
//       clickedCheckbox.checked = !clickedCheckbox.checked;
//       const listItems = document.querySelectorAll(".list_item");
//       const selectedLabels = Array.from(listItems).flatMap((item) =>
//         Array.from(item.querySelectorAll('input[type="checkbox"]:checked')).map(
//           (checkbox) =>
//             checkbox.nextElementSibling.innerText.trim().toLowerCase()
//         )
//       );
//       applyFilters(selectedLabels);
//     }
//   };

//   const applyFilters = (selectedLabels) => {
//     const filterCards = document.querySelectorAll(".filter_card");
//     filterCards.forEach((card) => {
//       const cardText = card.innerText.toLowerCase();
//       const isVisible = selectedLabels.every((labelText) =>
//         cardText.includes(labelText)
//       );
//       card.style.display = isVisible ? "block" : "none";
//     });
//   };

//   useEffect(() => {
//     const applyFilters = () => {
//       const filterCards = document.querySelectorAll(".filter_card");
//       filterCards.forEach((card) => {
//         const cardText = card.innerText.toLowerCase();
//         const isVisible = filterTopList.some((labelText) =>
//           cardText.includes(labelText)
//         );
//         card.style.display = isVisible ? "block" : "none";
//       });
//     };

//     // Apply filters after the initial load or when the filterTopList changes
//     if (!initialLoad) {
//       applyFilters();
//     }
//   }, [filterTopList, initialLoad]);
//   useEffect(() => {
//     const filterCards = document.querySelectorAll(".filter_card");
//     filterCards.forEach((card) => {
//       card.style.display = "block";
//     });
//   }, []);
//   useEffect(() => {
//     const filterListInputs = document.querySelectorAll(".filterListInput span");
//     filterListInputs.forEach((input) => {
//       input.addEventListener("click", handleLabelClick);
//     });

//     return () => {
//       filterListInputs.forEach((input) => {
//         input.removeEventListener("click", handleLabelClick);
//       });
//     };
//   }, []);

//   // ------------------

//   // useEffect(() => {
//   //   const clearAllButton = document.querySelector(".filter_searchData span");
//   //   const clearAll = () => {
//   //     setFilterTopList([]);
//   //   };
//   //   if (clearAllButton) {
//   //     clearAllButton.addEventListener("click", clearAll);
//   //   }
//   //   return () => {
//   //     if (clearAllButton) {
//   //       clearAllButton.removeEventListener("click", clearAll);
//   //     }
//   //   };
//   // }, []);
//   // useEffect(() => {
//   //   // Check if the filterTopList is empty to toggle visibility
//   //   const checkboxGroup = document.querySelectorAll(
//   //     ".filterListInput input[type='checkbox']"
//   //   );

//   //   if (filterTopList.length === 0) {
//   //     setShowFilterList(false);
//   //     setShowFilterTextWrap(true);

//   //     checkboxGroup.forEach((checkbox) => {
//   //       checkbox.checked = false;
//   //     });
//   //   } else {
//   //     setShowFilterList(true);
//   //     setShowFilterTextWrap(false);
//   //   }
//   // }, [filterTopList]);

//   // ---------------------

//   // useEffect(() => {
//   //   const searchWrap = document.querySelector(".search_wrap");
//   //   const searchIcon = document.querySelector(".search_icon");
//   //   const searchInput = document.getElementById("fSearch");
//   //   const filterCards = document.querySelectorAll(".filter_card");
//   //   const searchDataCount = document.querySelector(".filter_searchData h6");
//   //   const clearAllButton = document.querySelector(".filter_searchData span");

//   //   const handleSearch = () => {
//   //     const value = searchInput.value.trim().toLowerCase();
//   //     let visibleCount = 0; // Counter for visible cards

//   //     filterCards.forEach((card) => {
//   //       const cardText = card.innerText.toLowerCase();
//   //       if (cardText.includes(value) || value === "") {
//   //         card.style.display = "block";
//   //         visibleCount++; // Increment visible count
//   //         sectCardCount(visibleCount);
//   //       } else {
//   //         card.style.display = "none";
//   //       }
//   //     });

//   //     if (searchDataCount) {
//   //       searchDataCount.textContent = `${visibleCount} result${
//   //         visibleCount !== 1 ? "s" : ""
//   //       }`;
//   //     }

//   //     if (searchIcon) {
//   //       if (value !== "") {
//   //         searchIcon.style.display = "none";
//   //       } else {
//   //         searchIcon.style.display = "block";
//   //       }
//   //     }
//   //   };

//   //   const clearAll = () => {
//   //     if (searchInput) {
//   //       searchInput.value = "";
//   //       searchInput.dispatchEvent(new Event("input"));
//   //     }
//   //   };

//   //   if (searchWrap) {
//   //     searchWrap.addEventListener("click", () => {
//   //       if (searchIcon) {
//   //         searchIcon.style.display = "none";
//   //       }
//   //     });
//   //   }

//   //   if (searchInput) {
//   //     searchInput.addEventListener("input", handleSearch);
//   //   }

//   //   if (clearAllButton) {
//   //     clearAllButton.addEventListener("click", clearAll);
//   //   }

//   //   // handleSearch();

//   //   return () => {
//   //     if (searchInput) {
//   //       searchInput.removeEventListener("input", handleSearch);
//   //     }
//   //     if (clearAllButton) {
//   //       clearAllButton.removeEventListener("click", clearAll);
//   //     }
//   //     if (searchWrap) {
//   //       searchWrap.removeEventListener("click");
//   //     }
//   //   };
//   // }, []);

//   useEffect(() => {
//     const searchWrap = document.querySelector(".search_wrap");
//     // const searchIcon = document.querySelector(".search_icon");
//     const searchInput = document.getElementById("fSearch");
//     const filterCards = document.querySelectorAll(".filter_card");
//     const searchDataCount = document.querySelector(".filter_searchData h6");
//     const clearAllButton = document.querySelector(".filter_searchData span");

//     const handleSearch = () => {
//       const value = searchInput.value.trim().toLowerCase();
//       let visibleCount = 0;

//       filterCards.forEach((card) => {
//         const cardText = card.innerText.toLowerCase();
//         if (cardText.includes(value) || value === "") {
//           card.style.display = "block";
//         } else {
//           card.style.display = "none";
//         }
//       });

//       visibleCount = document.querySelectorAll(".filter_card").length;

//       if (searchDataCount) {
//         searchDataCount.textContent = `${visibleCount} result${
//           visibleCount !== 1 ? "s" : ""
//         }`;
//       }

//       // if (searchIcon) {
//       //   if (value !== "") {
//       //     searchIcon.style.display = "none";
//       //   } else {
//       //     searchIcon.style.display = "block";
//       //   }
//       // }
//     };

//     const clearAll = () => {
//       if (searchInput) {
//         searchInput.value = "";
//         handleSearch();
//       }
//     };

//     // if (searchWrap) {
//     //   searchWrap.addEventListener("click", () => {
//     //     if (searchIcon) {
//     //       searchIcon.style.display = "none";
//     //     }
//     //   });
//     // }

//     if (searchInput) {
//       searchInput.addEventListener("input", handleSearch);
//     }

//     if (clearAllButton) {
//       clearAllButton.addEventListener("click", clearAll);
//     }

//     if (searchDataCount) {
//       searchDataCount.textContent = `${
//         document.querySelectorAll(".filter_card").length
//       } results`;
//     }

//     return () => {
//       if (searchInput) {
//         searchInput.removeEventListener("input", handleSearch);
//       }
//       if (clearAllButton) {
//         clearAllButton.removeEventListener("click", clearAll);
//       }
//       if (searchWrap) {
//         searchWrap.removeEventListener("click");
//       }
//     };
//   }, []);

//   const indexOfLastCard = currentPage * cardsPerPage;
//   const indexOfFirstCard = indexOfLastCard - cardsPerPage;
//   const currentCards = filtercardData.slice(indexOfFirstCard, indexOfLastCard);
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   // ---------

//   // const [isFormOverlayVisible, setFormOverlayVisible] = useState(false);
//   // const [selectedFilterCard, setSelectedFilterCard] = useState(null);
//   // const [submitted, setSubmitted] = useState(false);
//   // const [filterCards, setFilterCards] = useState([]);
//   // const handleClick = (filterCard, e) => {
//   //   e.stopPropagation();
//   //   if (filterCard.filterCard4) {
//   //     setSelectedFilterCard(filterCard);
//   //     setFormOverlayVisible(true);
//   //     document.documentElement.style.overflow = "hidden";
//   //     document.body.style.overflow = "hidden";
//   //   }
//   // };
//   // const onClose = () => {
//   //   setFormOverlayVisible(false);
//   //   document.documentElement.style.overflow = "auto";
//   //   document.body.style.overflow = "auto";
//   // };
//   // const handleFormSubmit = (e) => {
//   //   e.preventDefault();
//   //   const formData = new FormData(e.target);
//   //   const firstName = formData.get("first-name");
//   //   const lastName = formData.get("last-name");
//   //   const email = formData.get("email");
//   //   const country = formData.get("country");

//   //   console.log("Form submitted!");
//   //   console.log("First Name:", firstName);
//   //   console.log("Last Name:", lastName);
//   //   console.log("Email:", email);
//   //   console.log("Country:", country);

//   //   // Remove filter_cards where filterCard4 is true
//   //   const updatedFilterCards = filterCards.filter((card) => !card.filterCard4);
//   //   setFilterCards(updatedFilterCards);

//   //   setSubmitted(true);
//   // };

//   const [isFormOverlayVisible, setFormOverlayVisible] = useState(false);
//   const [selectedFilterCard, setSelectedFilterCard] = useState(null);
//   const [submitted, setSubmitted] = useState(false);
//   const [filterCards, setFilterCards] = useState([]);
//   const [removeCard, setremoveCard] = useState(0);
//   const handleClick = (filterCard, e) => {
//     e.stopPropagation();
//     if (filterCard.filterCard4) {
//       setSelectedFilterCard(filterCard);
//       setFormOverlayVisible(true);
//       document.documentElement.style.overflow = "hidden";
//       document.body.style.overflow = "hidden";
//     }
//   };
//   const onClose = () => {
//     setFormOverlayVisible(false);
//     document.documentElement.style.overflow = "auto";
//     document.body.style.overflow = "auto";
//     setremoveCard(1);
//   };
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const firstName = formData.get("first-name");
//     const lastName = formData.get("last-name");
//     const email = formData.get("email");
//     const country = formData.get("country");

//     console.log("Form submitted!");
//     console.log("First Name:", firstName);
//     console.log("Last Name:", lastName);
//     console.log("Email:", email);
//     console.log("Country:", country);

//     // Remove filter_cards where filterCard4 is true
//     const updatedFilterCards = filterCards.filter((card) => !card.filterCard4);
//     setFilterCards(updatedFilterCards);

//     setSubmitted(true);
//   };

//   return (
//     <>
//       <section
//         className=" clearDigital_Filter relative w-full py-[100px] bg-[#090914] "
//         id="clear_digital_Filter"
//       >
//         <div className={`${HongoStyle.clearDigital_container}`}>
//           <div className=" clearDigital_FilterWrap relative w-full flex flex-wrap  ">
//             <div className="filter_header relative w-full max-w-[407px] ">
//               <div className="search_wrap relative w-full mb-[30px] z-[1] ">
//                 <input
//                   type="search"
//                   id="fSearch"
//                   className={`${HongoStyle.clearDigital_Filter_search} relative w-full bg-transparent border-white border-[2px] border-solid text-[16px] font-medium font-poppins py-[21px] pl-[15px] pr-[15px] text-white outline-none `}
//                   value={searchValue}
//                   onChange={(e) => {
//                     setSearchValue(e.target.value);
//                     // if (e.target.value === "") {
//                     //   const searchIcon = document.querySelector(".search_icon");
//                     //   if (searchIcon) {
//                     //     searchIcon.style.display = "block";
//                     //   }
//                     // }
//                   }}
//                 />
//                 <label htmlFor="fSearch" className=" text-[0] hidden ">
//                   .
//                 </label>
//                 <div className="search_icon absolute top-[22px] right-[22px] w-[25px] h-[25px] z-[-1] ">
//                   <Image
//                     src="/clearDigital/arrow_search.svg"
//                     width={50}
//                     height={50}
//                     alt="search"
//                   />
//                 </div>
//               </div>
//               <h5 className=" text-white text-[20px] font-bold font-poppins leading-[24px] mb-8 ">
//                 Filter all insights
//               </h5>
//               <div className="filter_searchData flex flex-wrap justify-between mb-8 ">
//                 <h6 className=" text-white text-[16px] font-normal font-poppins leading-[24px] ">
//                   {cardCount} results
//                 </h6>
//                 <span className=" text-[#fa198c] text-[16px] font-bold font-poppins leading-[24px] cursor-pointer ">
//                   Clear all
//                 </span>
//               </div>
//               <ul
//                 className={` filter_list_item relative w-full list-none  ${
//                   filterListSelected ? "filterTopList_wrap" : "text_wrap"
//                 } `}
//               >
//                 <li
//                   className=" list_item list_item_one relative w-full border-t-[1px] border-t-[#989898] border-solid py-[30px] px-10 "
//                   onClick={() => toggleAccordion(0)}
//                 >
//                   <span
//                     className={`text-white cursor-pointer text-[16px] font-bold font-poppins leading-[20px] relative w-full inline-block after:content-[''] after:absolute after:top-[0] after:right-[0] after:w-[24px] after:h-[24px] after:bg-[url('/clearDigital/arrow-up.svg')] after:bg-no-repeat after:bg-contain after:rotate-180 ${
//                       openAccordionIndex === 0 ? "after:rotate-0" : ""
//                     }`}
//                   >
//                     By Topic
//                   </span>
//                   <ul
//                     className={`relative w-full list-none transition-all duration-500 ease-in-out ${
//                       openAccordionIndex === 0
//                         ? "h-auto opacity-1  mt-5 overflow-y-hidden will-change-auto "
//                         : "h-0 opacity-0  mt-0 overflow-y-hidden "
//                     }`}
//                     onClick={(e) => e.stopPropagation()}
//                   >
//                     <li className=" relative w-full mb-4 ">
//                       <label
//                         htmlFor="brand-strategy"
//                         className={` ${HongoStyle.filterListInput} filterListInput relative w-full flex items-center bg-transparent `}
//                         onClick={handleLabelClick}
//                         // onClick={handleLabelClickOne}
//                       >
//                         <input
//                           type="checkbox"
//                           id="brand-strategy"
//                           className={` w-[24px] h-[24px] bg-transparent cursor-pointer mr-3 `}
//                         />
//                         <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] cursor-pointer ">
//                           Brand Strategy
//                         </span>
//                       </label>
//                     </li>
//                     <li className=" relative w-full mb-4 ">
//                       <label
//                         htmlFor="content-strategy"
//                         className={` ${HongoStyle.filterListInput} filterListInput relative w-full flex items-center bg-transparent `}
//                         onClick={handleLabelClick}
//                         // onClick={handleLabelClickOne}
//                       >
//                         <input
//                           type="checkbox"
//                           id="content-strategy"
//                           className={` w-[24px] h-[24px] bg-transparent cursor-pointer mr-3 `}
//                         />
//                         <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] cursor-pointer ">
//                           Content Strategy
//                         </span>
//                       </label>
//                     </li>
//                     <li className=" relative w-full mb-4 ">
//                       <label
//                         htmlFor="digital-marketing-process"
//                         className={` ${HongoStyle.filterListInput} filterListInput relative w-full flex items-center bg-transparent `}
//                         onClick={handleLabelClick}
//                         // onClick={handleLabelClickOne}
//                       >
//                         <input
//                           type="checkbox"
//                           id="digital-marketing-process"
//                           className={` w-[24px] h-[24px] bg-transparent cursor-pointer mr-3 `}
//                         />
//                         <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] cursor-pointer ">
//                           Digital Marketing Process
//                         </span>
//                       </label>
//                     </li>
//                     <li className=" relative w-full mb-4 ">
//                       <label
//                         htmlFor="digital-strategy"
//                         className={` ${HongoStyle.filterListInput} filterListInput relative w-full flex items-center bg-transparent `}
//                         onClick={handleLabelClick}
//                         // onClick={handleLabelClickOne}
//                       >
//                         <input
//                           type="checkbox"
//                           id="digital-strategy"
//                           className={` w-[24px] h-[24px] bg-transparent cursor-pointer mr-3 `}
//                         />
//                         <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] cursor-pointer ">
//                           Digital Strategy
//                         </span>
//                       </label>
//                     </li>
//                     <li className=" relative w-full mb-4 ">
//                       <label
//                         htmlFor="innovation-trends"
//                         className={` ${HongoStyle.filterListInput} filterListInput relative w-full flex items-center bg-transparent `}
//                         onClick={handleLabelClick}
//                         // onClick={handleLabelClickOne}
//                       >
//                         <input
//                           type="checkbox"
//                           id="innovation-trends"
//                           className={` w-[24px] h-[24px] bg-transparent cursor-pointer mr-3 `}
//                         />
//                         <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] cursor-pointer ">
//                           Innovation & Trends
//                         </span>
//                       </label>
//                     </li>
//                     <li className=" relative w-full mb-4 ">
//                       <label
//                         htmlFor="web-development"
//                         className={` ${HongoStyle.filterListInput} filterListInput relative w-full flex items-center bg-transparent `}
//                         onClick={handleLabelClick}
//                         // onClick={handleLabelClickOne}
//                       >
//                         <input
//                           type="checkbox"
//                           id="web-development"
//                           className={` w-[24px] h-[24px] bg-transparent cursor-pointer mr-3 `}
//                         />
//                         <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] cursor-pointer ">
//                           Web Development
//                         </span>
//                       </label>
//                     </li>
//                   </ul>
//                 </li>
//                 <li
//                   className="  list_item list_item_two relative w-full border-t-[1px] border-t-[#989898] border-solid py-[30px] px-10 "
//                   onClick={() => toggleAccordion(1)}
//                 >
//                   <span
//                     className={`text-white cursor-pointer text-[16px] font-bold font-poppins leading-[20px] relative w-full inline-block after:content-[''] after:absolute after:top-[0] after:right-[0] after:w-[24px] after:h-[24px] after:bg-[url('/clearDigital/arrow-up.svg')] after:bg-no-repeat after:bg-contain after:rotate-180 ${
//                       openAccordionIndex === 1 ? "after:rotate-0" : ""
//                     }`}
//                   >
//                     By Solution
//                   </span>
//                   <ul
//                     className={`relative w-full list-none transition-all duration-500 ease-in-out ${
//                       openAccordionIndex === 1
//                         ? "h-auto opacity-1  mt-5 overflow-y-hidden will-change-auto "
//                         : "h-0 opacity-0  mt-0 overflow-y-hidden "
//                     }`}
//                     onClick={(e) => e.stopPropagation()}
//                   >
//                     <li className=" relative w-full mb-4 ">
//                       <label
//                         htmlFor="article"
//                         className={` ${HongoStyle.filterListInput} filterListInput relative w-full flex items-center bg-transparent `}
//                         onClick={handleLabelClick}
//                       >
//                         <input
//                           type="checkbox"
//                           id="article"
//                           className={` w-[24px] h-[24px] bg-transparent cursor-pointer mr-3 `}
//                         />
//                         <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] cursor-pointer ">
//                           Article
//                         </span>
//                       </label>
//                     </li>
//                     <li className=" relative w-full mb-4 ">
//                       <label
//                         htmlFor="podcast"
//                         className={` ${HongoStyle.filterListInput} filterListInput relative w-full flex items-center bg-transparent `}
//                         onClick={handleLabelClick}
//                       >
//                         <input
//                           type="checkbox"
//                           id="podcast"
//                           className={` w-[24px] h-[24px] bg-transparent cursor-pointer mr-3 `}
//                         />
//                         <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] cursor-pointer ">
//                           Podcast
//                         </span>
//                       </label>
//                     </li>
//                     <li className=" relative w-full mb-4 ">
//                       <label
//                         htmlFor="2digital-marketing-process"
//                         className={` ${HongoStyle.filterListInput} filterListInput relative w-full flex items-center bg-transparent `}
//                         onClick={handleLabelClick}
//                       >
//                         <input
//                           type="checkbox"
//                           id="2digital-marketing-process"
//                           className={` w-[24px] h-[24px] bg-transparent cursor-pointer mr-3 `}
//                         />
//                         <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] cursor-pointer ">
//                           2Digital Marketing Process
//                         </span>
//                       </label>
//                     </li>
//                     <li className=" relative w-full mb-4 ">
//                       <label
//                         htmlFor="2digital-strategy"
//                         className={` ${HongoStyle.filterListInput} filterListInput relative w-full flex items-center bg-transparent `}
//                         onClick={handleLabelClick}
//                       >
//                         <input
//                           type="checkbox"
//                           id="2digital-strategy"
//                           className={` w-[24px] h-[24px] bg-transparent cursor-pointer mr-3 `}
//                         />
//                         <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] cursor-pointer ">
//                           2Digital Strategy
//                         </span>
//                       </label>
//                     </li>
//                     <li className=" relative w-full mb-4 ">
//                       <label
//                         htmlFor="2innovation-trends"
//                         className={` ${HongoStyle.filterListInput} filterListInput relative w-full flex items-center bg-transparent `}
//                         onClick={handleLabelClick}
//                       >
//                         <input
//                           type="checkbox"
//                           id="2innovation-trends"
//                           className={` w-[24px] h-[24px] bg-transparent cursor-pointer mr-3 `}
//                         />
//                         <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] cursor-pointer ">
//                           2Innovation & Trends
//                         </span>
//                       </label>
//                     </li>
//                     <li className=" relative w-full mb-4 ">
//                       <label
//                         htmlFor="2web-development"
//                         className={` ${HongoStyle.filterListInput} filterListInput relative w-full flex items-center bg-transparent `}
//                         onClick={handleLabelClick}
//                       >
//                         <input
//                           type="checkbox"
//                           id="2web-development"
//                           className={` w-[24px] h-[24px] bg-transparent cursor-pointer mr-3 `}
//                         />
//                         <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] cursor-pointer ">
//                           2Web Development
//                         </span>
//                       </label>
//                     </li>
//                   </ul>
//                 </li>
//                 <li
//                   className="  list_item list_item_three relative w-full border-t-[1px] border-t-[#989898] border-solid py-[30px] px-10 "
//                   onClick={() => toggleAccordion(2)}
//                 >
//                   <span
//                     className={`text-white cursor-pointer text-[16px] font-bold font-poppins leading-[20px] relative w-full inline-block after:content-[''] after:absolute after:top-[0] after:right-[0] after:w-[24px] after:h-[24px] after:bg-[url('/clearDigital/arrow-up.svg')] after:bg-no-repeat after:bg-contain after:rotate-180 ${
//                       openAccordionIndex === 2 ? "after:rotate-0" : ""
//                     }`}
//                   >
//                     By Content Type
//                   </span>
//                   <ul
//                     className={`relative w-full list-none transition-all duration-500 ease-in-out ${
//                       openAccordionIndex === 2
//                         ? "h-auto opacity-1  mt-5 overflow-y-hidden will-change-auto "
//                         : "h-0 opacity-0  mt-0 overflow-y-hidden "
//                     }`}
//                     onClick={(e) => e.stopPropagation()}
//                   >
//                     <li className=" relative w-full mb-4 ">
//                       <label
//                         htmlFor="3brand-strategy"
//                         className={` ${HongoStyle.filterListInput} filterListInput relative w-full flex items-center bg-transparent `}
//                         onClick={handleLabelClick}
//                       >
//                         <input
//                           type="checkbox"
//                           id="3brand-strategy"
//                           className={` w-[24px] h-[24px] bg-transparent cursor-pointer mr-3 `}
//                         />
//                         <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] cursor-pointer ">
//                           3Brand Strategy
//                         </span>
//                       </label>
//                     </li>
//                     <li className=" relative w-full mb-4 ">
//                       <label
//                         htmlFor="3content-strategy"
//                         className={` ${HongoStyle.filterListInput} filterListInput relative w-full flex items-center bg-transparent `}
//                         onClick={handleLabelClick}
//                       >
//                         <input
//                           type="checkbox"
//                           id="3content-strategy"
//                           className={` w-[24px] h-[24px] bg-transparent cursor-pointer mr-3 `}
//                         />
//                         <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] cursor-pointer ">
//                           3Content Strategy
//                         </span>
//                       </label>
//                     </li>
//                     <li className=" relative w-full mb-4 ">
//                       <label
//                         htmlFor="3digital-marketing-process"
//                         className={` ${HongoStyle.filterListInput} filterListInput relative w-full flex items-center bg-transparent `}
//                         onClick={handleLabelClick}
//                       >
//                         <input
//                           type="checkbox"
//                           id="3digital-marketing-process"
//                           className={` w-[24px] h-[24px] bg-transparent cursor-pointer mr-3 `}
//                         />
//                         <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] cursor-pointer ">
//                           3Digital Marketing Process
//                         </span>
//                       </label>
//                     </li>
//                     <li className=" relative w-full mb-4 ">
//                       <label
//                         htmlFor="3digital-strategy"
//                         className={` ${HongoStyle.filterListInput} filterListInput relative w-full flex items-center bg-transparent `}
//                         onClick={handleLabelClick}
//                       >
//                         <input
//                           type="checkbox"
//                           id="3digital-strategy"
//                           className={` w-[24px] h-[24px] bg-transparent cursor-pointer mr-3 `}
//                         />
//                         <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] cursor-pointer ">
//                           3Digital Strategy
//                         </span>
//                       </label>
//                     </li>
//                     <li className=" relative w-full mb-4 ">
//                       <label
//                         htmlFor="3innovation-trends"
//                         className={` ${HongoStyle.filterListInput} filterListInput relative w-full flex items-center bg-transparent `}
//                         onClick={handleLabelClick}
//                       >
//                         <input
//                           type="checkbox"
//                           id="3innovation-trends"
//                           className={` w-[24px] h-[24px] bg-transparent cursor-pointer mr-3 `}
//                         />
//                         <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] cursor-pointer ">
//                           3Innovation & Trends
//                         </span>
//                       </label>
//                     </li>
//                     <li className=" relative w-full mb-4 ">
//                       <label
//                         htmlFor="3web-development"
//                         className={` ${HongoStyle.filterListInput} filterListInput relative w-full flex items-center bg-transparent `}
//                         onClick={handleLabelClick}
//                       >
//                         <input
//                           type="checkbox"
//                           id="3web-development"
//                           className={` w-[24px] h-[24px] bg-transparent cursor-pointer mr-3 `}
//                         />
//                         <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] cursor-pointer ">
//                           3Web Development
//                         </span>
//                       </label>
//                     </li>
//                   </ul>
//                 </li>
//               </ul>
//             </div>
//             <div
//               className={`filter_card_wrapper relative w-[calc(100%-407px)] pl-24  ${
//                 showFilterList ? "filterTopList_wrap" : "text_wrap"
//               }`}
//             >
//               {showFilterList ? (
//                 <div className="filterTopList_wrap relative w-full mb-10">
//                   <ul className="relative w-[calc(100%+10px)] ml-[-5px] list-none flex flex-wrap">
//                     {filterTopList.map((item, index) => (
//                       <li
//                         key={index}
//                         className="relative w-fit mx-[5px] my-[10px] bg-white rounded-[30px] py-[9px] pl-[15px] pr-[40px] after:content-[''] after:absolute after:top-[10px] after:right-[10px] after:w-[24px] after:h-[24px] after:bg-[url('/clearDigital/x-square.svg')] after:bg-no-repeat after:bg-contain after:cursor-pointer"
//                       >
//                         <span className="text-black text-[16px] font-bold font-poppins leading-[20px]">
//                           {item}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ) : (
//                 <div className="text_wrap relative w-full mb-10">
//                   <h2 className=" text-white text-[55px] font-bold font-poppins leading-[61px] tracking-[-2%] ">
//                     All Insights
//                   </h2>
//                 </div>
//               )}
//               <div className="card_wrapper relative w-mainRow ml-[-15px] flex flex-wrap ">
//                 {currentCards.map((filterCard) => (
//                   <div
//                     className={`filter_card group ${
//                       filterCard.filterCard4 === true
//                         ? ` before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:border-[5px] before:border-solid before:border-[#fa198c] ${
//                             removeCard == 1 ? "hidden" : ""
//                           } `
//                         : ""
//                     } relative w-halfWidth mx-[15px] mb-[30px] `}
//                     key={filterCard.id}
//                   >
//                     <div className="wrapper relative w-full min-h-[450px] pt-[46px] flex flex-wrap items-end ">
//                       <Link
//                         href="/"
//                         className={`${HongoStyle.redirect_link} ${
//                           filterCard.filterCard4 === true ? " hidden " : ""
//                         } z-10`}
//                       >
//                         .
//                       </Link>
//                       <div className="img_wrap absolute top-0 left-0 w-full h-full ">
//                         <Image
//                           src={filterCard.imgUrl}
//                           width={1000}
//                           height={1000}
//                           alt="card_img"
//                           className=" w-full h-full object-cover "
//                         />
//                       </div>
//                       <div
//                         className={` ${
//                           filterCard.filterCard4 === true ? " hidden " : ""
//                         } card_top_content absolute top-[50px] left-0 w-full px-[45px] z-[2] `}
//                       >
//                         <ul className=" relative w-full list-none flex flex-wrap ">
//                           <li className=" px-3 py-[5px] bg-black mx-[5px] mb-[10px] ">
//                             <span className=" text-[16px] leading-[24px] font-poppins font-bold text-white ">
//                               {filterCard.solution}
//                             </span>
//                           </li>
//                           <li className=" px-3 py-[5px] bg-black mx-[5px] mb-[10px] ">
//                             <span className=" text-[16px] leading-[24px] font-poppins font-bold text-white ">
//                               {filterCard.topic}
//                             </span>
//                           </li>
//                         </ul>
//                       </div>
//                       <div
//                         className={` ${
//                           filterCard.filterCard4 === true ? " hidden " : ""
//                         } card_content relative p-[50px] z-[1] group-hover:static  group-hover:will-change-auto transition-all duration-500 ease-in-out before:[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#00000080] before:transition before:duration-500 before:ease-in-out before:z-[-1]  `}
//                       >
//                         <h3 className=" text-white text-[30px] font-bold font-poppins leading-[39px] overflow-ellipsis line-clamp-3 transition-all duration-500 ease-in-out group-hover:overflow-visible group-hover:line-clamp-none ">
//                           {filterCard.cardTitle}
//                         </h3>
//                         <div className="text relative w-full  h-0 opacity-0  mt-0 overflow-y-hidden transition-all duration-300 ease-in-out group-hover:mt-5 group-hover:h-auto group-hover:opacity-[1] group-hover:overflow-y-hidden group-hover:will-change-auto ">
//                           <p className=" text-white text-[16px] font-normal font-poppins leading-[24px] mb-5 ">
//                             {filterCard.cardParagraph}
//                           </p>
//                           <span
//                             className={`${HongoStyle.clearDigital_textButton}`}
//                           >
//                             {filterCard.btn}
//                           </span>
//                         </div>
//                       </div>
//                       <div
//                         className={` ${
//                           filterCard.filterCard4 === true
//                             ? " block "
//                             : " hidden "
//                         } ${
//                           HongoStyle.clearDigital_card4title
//                         }  filter4card_content relative w-full px-[45px] py-[35px] `}
//                       >
//                         <h2
//                           className={` w-full max-w-[349px] text-white text-[55px] leading-[61px] font-poppins font-bold mb-[50px] `}
//                         >
//                           {filterCard.card4title}
//                         </h2>
//                         <span
//                           className={`${HongoStyle.clearDigital_pinkButton} inline-block w-full cursor-pointer`}
//                           onClick={(e) => handleClick(filterCard, e)}
//                         >
//                           Sign up
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               {/* Pagination */}
//               <div className="pagination">
//                 <Pagination
//                   cardsPerPage={cardsPerPage}
//                   totalCards={filtercardData.length}
//                   paginate={paginate}
//                   currentPage={currentPage}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {isFormOverlayVisible && selectedFilterCard && (
//         <section
//           className=" form_overlay fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#0b0b0bd9] flex items-center z-[999] overflow-hidden "
//           onClick={onClose}
//         >
//           <div className={`${HongoStyle.clearDigital_container}`}>
//             <div
//               className="form_overlay_wrap relative w-full max-w-[930px] mx-auto bg-black border-[2px] border-white border-solid py-[50px] px-[40px] z-10 "
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div
//                 className="close_icon absolute top-[10px] right-[10px] w-full max-w-[30px] h-[30px] cursor-pointer "
//                 onClick={onClose}
//               >
//                 <Image
//                   src="/clearDigital/x-circle.svg"
//                   width={50}
//                   height={50}
//                   alt="close"
//                   className=" w-full h-full object-contain "
//                 />
//               </div>
//               {submitted ? (
//                 <div className="thank_you_overlay relative w-full min-h-[400px] flex items-center justify-center ">
//                   <h2 className="text-[55px] text-white leading-[60px] font-poppins font-bold tracking-[-2px] ">
//                     Thank You!
//                   </h2>
//                 </div>
//               ) : (
//                 <div
//                   className={`form_with_content  ${
//                     submitted ? "hidden" : ""
//                   } relative w-full flex flex-wrap `}
//                 >
//                   <div className="text_wrapper relative w-[calc(50%-20px)] mx-[10px] ">
//                     <h2 className=" text-[55px] text-white leading-[60px] font-poppins font-bold tracking-[-2px] mb-5 ">
//                       Stay <span className=" text-[#FA198C] ">updated</span>{" "}
//                       with Clear Digital
//                     </h2>
//                     <h6 className=" text-[20px] text-white leading-[30px] font-poppins font-normal mb-5 ">
//                       Lorem ipsum dolor sit amet etal dolor consectetur.
//                       Lobortis congue venenatis ultricies venenatis leo a nunc.
//                       Molestie nullam.
//                     </h6>
//                     <p className=" w-full max-w-[348px] text-[12px] text-white leading-[18px] font-poppins font-normal ">
//                       Privacy statement lorem ipsum dolor sit amet consectetur
//                       adisciping etal
//                     </p>
//                   </div>
//                   <div className="form_wrap relative w-[calc(50%-20px)] mx-[10px] ">
//                     <form onSubmit={handleFormSubmit}>
//                       <div className="wrap relative w-full mb-[30px] ">
//                         <label
//                           htmlFor="first-name"
//                           className=" text-[14px] text-white leading-[17px] font-poppins font-normal "
//                         >
//                           First Name
//                         </label>
//                         <input
//                           type="text"
//                           id="first-name"
//                           name="first-name"
//                           className=" relative w-full bg-transparent p-[23px] outline-none border-[2px] border-white border-solid text-[16px] text-white leading-[20px] font-poppins font-normal mt-[8px] "
//                         />
//                       </div>
//                       <div className="wrap relative w-full mb-[30px] ">
//                         <label
//                           htmlFor="last-name"
//                           className=" text-[14px] text-white leading-[17px] font-poppins font-normal "
//                         >
//                           Last Name
//                         </label>
//                         <input
//                           type="text"
//                           id="last-name"
//                           name="last-name"
//                           className=" relative w-full bg-transparent p-[23px] outline-none border-[2px] border-white border-solid text-[16px] text-white leading-[20px] font-poppins font-normal mt-[8px] "
//                         />
//                       </div>
//                       <div className="wrap relative w-full mb-[30px] ">
//                         <label
//                           htmlFor="email"
//                           className=" text-[14px] text-white leading-[17px] font-poppins font-normal "
//                         >
//                           Email
//                         </label>
//                         <input
//                           type="email"
//                           id="email"
//                           name="email"
//                           className=" relative w-full bg-transparent p-[23px] outline-none border-[2px] border-white border-solid text-[16px] text-white leading-[20px] font-poppins font-normal mt-[8px] "
//                         />
//                       </div>
//                       <div className="wrap relative w-full mb-[30px] ">
//                         <label
//                           htmlFor="country"
//                           className=" text-[14px] text-white leading-[17px] font-poppins font-normal "
//                         >
//                           Country
//                         </label>
//                         <select
//                           name="country"
//                           id="country"
//                           className=" relative w-full bg-transparent p-[23px] outline-none border-[2px] border-white border-solid text-[16px] text-white leading-[20px] font-poppins font-normal mt-[8px] "
//                         >
//                           <option value=""></option>
//                           <option value="India">India</option>
//                           <option value="USA">USA</option>
//                           <option value="Canada">Canada</option>
//                           <option value="UK">UK</option>
//                         </select>
//                       </div>
//                       <button
//                         type="submit"
//                         className={`${HongoStyle.clearDigital_pinkButton} inline-block w-full cursor-pointer`}
//                       >
//                         Submit
//                       </button>
//                     </form>
//                   </div>
//                 </div>
//               )}
//               {/* <div
//                 className={`thank_you_overlay ${
//                   submitted ? "" : "hidden"
//                 } relative w-full text-center `}
//               >
//                 <h2 className=" text-[55px] text-white leading-[60px] font-poppins font-bold tracking-[-2%] mb-5 ">
//                   Thank You!
//                 </h2>
//               </div> */}
//             </div>
//           </div>
//         </section>
//       )}
//     </>
//   );
// }

import React, { useState, useEffect, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import HongoStyle from "/styles/hongo.module.scss";
import Pagination from "./pagination";
import $ from "jquery";
import ClearDigitalForm from "./clearDigitalForm";

const filtercardData = [
  {
    id: 1,
    imgUrl: "/clearDigital/filter_card_1.png",
    solution: "Article",
    topic: "Digital Strategy",
    cardTitle: "Ensure Your Brand’s Direction by Auditing These 5 Key Areas...",
    cardParagraph:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, officiis? Dignissimos neque delectus veniam vitae voluptas? Reiciendis voluptate laborum maiores!",
    btn: "Read more",
  },
  {
    id: 2,
    imgUrl: "/clearDigital/filter_card_2.png",
    solution: "Podcast",
    topic: "Innovation & Trends",
    cardTitle: "The Power of Femininity in Leadership",
    cardParagraph:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, officiis? Dignissimos neque delectus veniam vitae voluptas? Reiciendis voluptate laborum maiores!",
    btn: "Read more",
  },
  {
    id: 3,
    imgUrl: "/clearDigital/filter_card_3.png",
    solution: "Article",
    topic: "Brand Strategy",
    cardTitle:
      "5 Strategies Your B2B Company Should Apply to Weather a Tough Economy",
    cardParagraph: "By Steve Ohanians on August 18, 2023",
    btn: "Read more",
  },
  {
    id: 4,
    imgUrl: "/clearDigital/card_grid_img.svg",
    filterCard4: true,
    card4title: "Get our latest Insights in your inbox",
  },
  {
    id: 5,
    imgUrl: "/clearDigital/filter_card_1.png",
    solution: "Article",
    topic: "Innovation & Trends",
    cardTitle: "Ensure Your Brand’s Direction by Auditing These 5 Key Areas...",
    cardParagraph:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, officiis? Dignissimos neque delectus veniam vitae voluptas? Reiciendis voluptate laborum maiores!",
    btn: "Read more",
  },
  {
    id: 6,
    imgUrl: "/clearDigital/filter_card_2.png",
    solution: "Article",
    topic: "Content Strategy",
    cardTitle: "The Power of Femininity in Leadership",
    cardParagraph:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, officiis? Dignissimos neque delectus veniam vitae voluptas? Reiciendis voluptate laborum maiores!",
    btn: "Read more",
  },
  {
    id: 7,
    imgUrl: "/clearDigital/filter_card_3.png",
    solution: "Podcast",
    topic: "Digital Marketing Process",
    cardTitle:
      "5 Strategies Your B2B Company Should Apply to Weather a Tough Economy",
    cardParagraph: "By Steve Ohanians on August 18, 2023",
    btn: "Read more",
  },
  {
    id: 8,
    imgUrl: "/clearDigital/filter_card_1.png",
    solution: "Article",
    topic: "Digital Marketing Process",
    cardTitle: "Ensure Your Brand’s Direction by Auditing These 5 Key Areas...",
    cardParagraph:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, officiis? Dignissimos neque delectus veniam vitae voluptas? Reiciendis voluptate laborum maiores!",
    btn: "Read more",
  },
  {
    id: 9,
    imgUrl: "/clearDigital/filter_card_1.png",
    solution: "Podcast",
    topic: "Digital Strategy",
    cardTitle:
      "2) Ensure Your Brand’s Direction by Auditing These 5 Key Areas...",
    cardParagraph:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, officiis? Dignissimos neque delectus veniam vitae voluptas? Reiciendis voluptate laborum maiores!",
    btn: "Read more",
  },
  {
    id: 10,
    imgUrl: "/clearDigital/filter_card_2.png",
    solution: "Article",
    topic: "Web Development",
    cardTitle: "2) The Power of Femininity in Leadership",
    cardParagraph:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, officiis? Dignissimos neque delectus veniam vitae voluptas? Reiciendis voluptate laborum maiores!",
    btn: "Read more",
  },
  {
    id: 11,
    imgUrl: "/clearDigital/filter_card_3.png",
    solution: "Article",
    topic: "Innovation & Trends",
    cardTitle:
      "2) 5 Strategies Your B2B Company Should Apply to Weather a Tough Economy",
    cardParagraph: "By Steve Ohanians on August 18, 2023",
    btn: "Read more",
  },
  {
    id: 12,
    imgUrl: "/clearDigital/card_grid_img.svg",
    filterCard4: true,
    card4title: "2) Get our latest Insights in your inbox",
  },
  {
    id: 13,
    imgUrl: "/clearDigital/filter_card_1.png",
    solution: "Podcast",
    topic: "Web Development",
    cardTitle:
      "2) Ensure Your Brand’s Direction by Auditing These 5 Key Areas...",
    cardParagraph:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, officiis? Dignissimos neque delectus veniam vitae voluptas? Reiciendis voluptate laborum maiores!",
    btn: "Read more",
  },
  {
    id: 14,
    imgUrl: "/clearDigital/filter_card_2.png",
    solution: "Article",
    topic: "Content Strategy",
    cardTitle: "2) The Power of Femininity in Leadership",
    cardParagraph:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, officiis? Dignissimos neque delectus veniam vitae voluptas? Reiciendis voluptate laborum maiores!",
    btn: "Read more",
  },
  {
    id: 15,
    imgUrl: "/clearDigital/filter_card_3.png",
    solution: "Podcast",
    topic: "Digital Marketing Process",
    cardTitle:
      "2) 5 Strategies Your B2B Company Should Apply to Weather a Tough Economy",
    cardParagraph: "By Steve Ohanians on August 18, 2023",
    btn: "Read more",
  },
  {
    id: 16,
    imgUrl: "/clearDigital/filter_card_1.png",
    solution: "Podcast",
    topic: "Web Development",
    cardTitle: "Ensure Your Brand’s Direction by Auditing These 5 Key Areas...",
    cardParagraph:
      "2) Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, officiis? Dignissimos neque delectus veniam vitae voluptas? Reiciendis voluptate laborum maiores!",
    btn: "Read more",
  },
  {
    id: 17,
    imgUrl: "/clearDigital/filter_card_1.png",
    solution: "Article",
    topic: "Content Strategy",
    cardTitle:
      "3) Ensure Your Brand’s Direction by Auditing These 5 Key Areas...",
    cardParagraph:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, officiis? Dignissimos neque delectus veniam vitae voluptas? Reiciendis voluptate laborum maiores!",
    btn: "Read more",
  },
  {
    id: 18,
    imgUrl: "/clearDigital/filter_card_2.png",
    solution: "Article",
    topic: "Innovation & Trends",
    cardTitle: "3) The Power of Femininity in Leadership",
    cardParagraph:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, officiis? Dignissimos neque delectus veniam vitae voluptas? Reiciendis voluptate laborum maiores!",
    btn: "Read more",
  },
  {
    id: 19,
    imgUrl: "/clearDigital/filter_card_3.png",
    solution: "Article",
    topic: "Digital Strategy",
    cardTitle:
      "3) 5 Strategies Your B2B Company Should Apply to Weather a Tough Economy",
    cardParagraph: "By Steve Ohanians on August 18, 2023",
    btn: "Read more",
  },
  {
    id: 20,
    imgUrl: "/clearDigital/card_grid_img.svg",
    solution: "Podcast",
    topic: "Web Development",
    filterCard4: true,
    card4title: "3) Get our latest Insights in your inbox",
  },
  {
    id: 21,
    imgUrl: "/clearDigital/filter_card_1.png",
    solution: "Podcast",
    topic: "Digital Marketing Process",
    cardTitle:
      "3) Ensure Your Brand’s Direction by Auditing These 5 Key Areas...",
    cardParagraph:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, officiis? Dignissimos neque delectus veniam vitae voluptas? Reiciendis voluptate laborum maiores!",
    btn: "Read more",
  },
  {
    id: 22,
    imgUrl: "/clearDigital/filter_card_2.png",
    solution: "Article",
    topic: "Content Strategy",
    cardTitle: "3) The Power of Femininity in Leadership",
    cardParagraph:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, officiis? Dignissimos neque delectus veniam vitae voluptas? Reiciendis voluptate laborum maiores!",
    btn: "Read more",
  },
  {
    id: 23,
    imgUrl: "/clearDigital/filter_card_3.png",
    solution: "Article",
    topic: "Web Development",
    cardTitle:
      "3) 5 Strategies Your B2B Company Should Apply to Weather a Tough Economy",
    cardParagraph: "By Steve Ohanians on August 18, 2023",
    btn: "Read more",
  },
  {
    id: 24,
    imgUrl: "/clearDigital/filter_card_1.png",
    solution: "Podcast",
    topic: "Content Strategy",
    cardTitle:
      "3) Ensure Your Brand’s Direction by Auditing These 5 Key Areas...",
    cardParagraph:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, officiis? Dignissimos neque delectus veniam vitae voluptas? Reiciendis voluptate laborum maiores!",
    btn: "Read more",
  },
];

export default function ClearDigitalFilter() {
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [cardCount, sectCardCount] = useState(filtercardData.length);
  const cardsPerPage = 8;
  // const filtercarCount = filtercardData.length;
  const [showFilterList, setShowFilterList] = useState(false);
  const [showFilterTextWrap, setShowFilterTextWrap] = useState(false);
  const [selectedFilterText, setSelectedFilterText] = useState("");
  const [filterListSelected, setFilterListSelected] = useState(false);

  const [visibleCardCount, setVisibleCardCount] = useState(
    filtercardData.length
  );

  const toggleAccordion = (index, e) => {
    if (e) {
      e.stopPropagation();
    }
    setOpenAccordionIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // ---------

  const [filterTopList, setFilterTopList] = useState([]);
  const [initialLoad, setInitialLoad] = useState(true);
  const [clickedItemsOne, setClickedItemsOne] = useState([]);
  const [clickedItemsTwo, setClickedItemsTwo] = useState([]);
  const [clickedItemsThree, setClickedItemsThree] = useState([]);

  const applyFilters = () => {
    const filterCards = document.querySelectorAll(".filter_card");
    filterCards.forEach((card) => {
      const cardText = card.innerText.toLowerCase();
      const isVisible = filterTopList.some((labelText) =>
        cardText.includes(labelText)
      );
      card.style.display = isVisible ? "block" : "none";
    });
  };

  useEffect(() => {
    const filterListInputs = document.querySelectorAll(".filterListInput span");
    filterListInputs.forEach((input) => {
      input.addEventListener("click", handleLabelClick);
    });

    return () => {
      filterListInputs.forEach((input) => {
        input.removeEventListener("click", handleLabelClick);
      });
    };
  }, [filterTopList]);

  useEffect(() => {
    applyFilters();
  }, [filterTopList, initialLoad]);

  useEffect(() => {
    const filterCards = document.querySelectorAll(".filter_card");
    filterCards.forEach((card) => {
      card.style.display = "block";
    });
  }, []);

  useEffect(() => {
    const clearAllButton = document.querySelector(".filter_searchData span");
    if (clearAllButton) {
      clearAllButton.addEventListener("click", clearAll);
    }
    return () => {
      if (clearAllButton) {
        clearAllButton.removeEventListener("click", clearAll);
      }
    };
  }, []);

  const handleLabelClick = (event) => {
    const clickedLabel = event.currentTarget.innerText.trim().toLowerCase();
    const clickedCheckbox = event.currentTarget.querySelector(
      'input[type="checkbox"]'
    );
    if (clickedCheckbox) {
      clickedCheckbox.checked = !clickedCheckbox.checked;
      const listItems = document.querySelectorAll(".list_item");
      const selectedLabels = Array.from(listItems).flatMap((item) =>
        Array.from(item.querySelectorAll('input[type="checkbox"]:checked')).map(
          (checkbox) =>
            checkbox.nextElementSibling.innerText.trim().toLowerCase()
        )
      );
      setFilterTopList(selectedLabels);
      setClickedItemsOne(
        Array.from(listItems)
          .filter((item) => item.classList.contains("list_item_one"))
          .flatMap((item) =>
            Array.from(
              item.querySelectorAll('input[type="checkbox"]:checked')
            ).map((checkbox) =>
              checkbox.nextElementSibling.innerText.trim().toLowerCase()
            )
          )
      );
      setClickedItemsTwo(
        Array.from(listItems)
          .filter((item) => item.classList.contains("list_item_two"))
          .flatMap((item) =>
            Array.from(
              item.querySelectorAll('input[type="checkbox"]:checked')
            ).map((checkbox) =>
              checkbox.nextElementSibling.innerText.trim().toLowerCase()
            )
          )
      );
      setClickedItemsThree(
        Array.from(listItems)
          .filter((item) => item.classList.contains("list_item_three"))
          .flatMap((item) =>
            Array.from(
              item.querySelectorAll('input[type="checkbox"]:checked')
            ).map((checkbox) =>
              checkbox.nextElementSibling.innerText.trim().toLowerCase()
            )
          )
      );
    }
  };

  const clearAll = () => {
    const filterCheckboxes = document.querySelectorAll(
      '.filterListInput input[type="checkbox"]'
    );
    filterCheckboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
    setFilterTopList([]);
    setClickedItemsOne([]);
    setClickedItemsTwo([]);
    setClickedItemsThree([]);
  };

  const handleAfterClick = (item) => {
    const updatedClickedItemsOne = clickedItemsOne.filter(
      (clickedItem) => clickedItem.toLowerCase() !== item.toLowerCase()
    );
    setClickedItemsOne(updatedClickedItemsOne);

    const updatedFilterTopList = filterTopList.filter(
      (filterItem) => filterItem.toLowerCase() !== item.toLowerCase()
    );
    setFilterTopList(updatedFilterTopList);

    const labels = document.querySelectorAll(".filterListInput > span");
    labels.forEach((label) => {
      if (label.textContent.trim().toLowerCase() === item.toLowerCase()) {
        const clickedCheckbox = label.parentElement.querySelector(
          'input[type="checkbox"]'
        );
        if (clickedCheckbox) {
          clickedCheckbox.checked = false;
        }
      }
    });
  };

  // --------

  const [filterTopListVisible, setFilterTopListVisible] = useState(false);
  const [isFilterListInputClicked, setIsFilterListInputClicked] =
    useState(false);

  const handleFilterListInputClick = () => {
    const listOneLabels = clickedItemsOne;
    const listTwoLabels = clickedItemsTwo;

    const filterCards = document.querySelectorAll(".filter_card");
    filterCards.forEach((card) => {
      const cardText = card.innerText.toLowerCase();
      const isVisible =
        listOneLabels.every((label) => cardText.includes(label)) &&
        listTwoLabels.every((label) => cardText.includes(label));
      card.style.display = isVisible ? "block" : "none";
    });
  };

  useEffect(() => {
    const filterCards = document.querySelectorAll(".filter_card");
    let visibleCount = 0;

    filterCards.forEach((card) => {
      if (card.style.display !== "none") {
        visibleCount++;
      }
    });

    const searchDataCount = document.querySelector(".filter_searchData h6");
    if (searchDataCount) {
      searchDataCount.textContent = `${visibleCount} result${
        visibleCount !== 1 ? "s" : ""
      }`;
    }
  }, [
    filterTopList,
    clickedItemsOne,
    clickedItemsTwo,
    clickedItemsThree,
    currentPage,
  ]);

  const handleListItemOneClick = () => {
    setIsFilterListInputClicked(true);
  };

  const handleOtherListItemClick = () => {
    setIsFilterListInputClicked(false);
  };

  useEffect(() => {
    const listItemsOne = document.querySelectorAll(".list_item_one");
    listItemsOne.forEach((item) => {
      const filterListInput = item.querySelector(".filterListInput");
      filterListInput.addEventListener("click", handleFilterListInputClick);
      item.addEventListener("click", handleListItemOneClick);
    });

    return () => {
      listItemsOne.forEach((item) => {
        const filterListInput = item.querySelector(".filterListInput");
        filterListInput.removeEventListener(
          "click",
          handleFilterListInputClick
        );
        item.removeEventListener("click", handleListItemOneClick);
      });
    };
  }, []);

  // ------------

  useEffect(() => {
    const searchWrap = document.querySelector(".search_wrap");
    // const searchIcon = document.querySelector(".search_icon");
    const searchInput = document.getElementById("fSearch");
    const filterCards = document.querySelectorAll(".filter_card");
    const searchDataCount = document.querySelector(".filter_searchData h6");
    const clearAllButton = document.querySelector(".filter_searchData span");

    const handleSearch = () => {
      const value = searchInput.value.trim().toLowerCase();

      let visibleCount = 0;

      filterCards.forEach((card) => {
        const cardText = card.innerText.toLowerCase();
        if (cardText.includes(value) || value === "") {
          card.style.display = "block";
          visibleCount++;
        } else {
          card.style.display = "none";
        }
      });

      // visibleCount = document.querySelectorAll(".filter_card").length;

      if (searchDataCount) {
        searchDataCount.textContent = `${visibleCount} result${
          visibleCount !== 1 ? "s" : ""
        }`;
      }

      // if (searchIcon) {
      //   if (value !== "") {
      //     searchIcon.style.display = "none";
      //   } else {
      //     searchIcon.style.display = "block";
      //   }
      // }
    };

    const clearAll = () => {
      if (searchInput) {
        searchInput.value = "";
        handleSearch();
      }
    };

    // if (searchWrap) {
    //   searchWrap.addEventListener("click", () => {
    //     if (searchIcon) {
    //       searchIcon.style.display = "none";
    //     }
    //   });
    // }

    if (searchInput) {
      searchInput.addEventListener("input", handleSearch);
    }

    if (clearAllButton) {
      clearAllButton.addEventListener("click", clearAll);
    }

    if (searchDataCount) {
      searchDataCount.textContent = `${
        document.querySelectorAll(".filter_card").length
      } results`;
    }

    return () => {
      if (searchInput) {
        searchInput.removeEventListener("input", handleSearch);
      }
      if (clearAllButton) {
        clearAllButton.removeEventListener("click", clearAll);
      }
      if (searchWrap) {
        searchWrap.removeEventListener("click");
      }
    };
  }, []);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filtercardData.slice(indexOfFirstCard, indexOfLastCard);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // --------

  const [isFormOverlayVisible, setFormOverlayVisible] = useState(false);
  const [selectedFilterCard, setSelectedFilterCard] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [filterCards, setFilterCards] = useState([]);
  const [removeCard, setremoveCard] = useState(0);
  const handleClick = (filterCard, e) => {
    e.stopPropagation();
    if (filterCard.filterCard4) {
      setSelectedFilterCard(filterCard);
      setFormOverlayVisible(true);
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    }
  };
  const onClose = () => {
    setFormOverlayVisible(false);
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
    setremoveCard(1);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const firstName = formData.get("first-name");
    const lastName = formData.get("last-name");
    const email = formData.get("email");
    const country = formData.get("country");

    console.log("Form submitted!");
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Country:", country);

    // Remove filter_cards where filterCard4 is true
    const updatedFilterCards = filterCards.filter((card) => !card.filterCard4);
    setFilterCards(updatedFilterCards);

    setSubmitted(true);
  };

  return (
    <>
      <section
        className=" clearDigital_Filter relative w-full py-[100px] bg-[#090914] "
        id="clear_digital_Filter"
      >
        <div className={`${HongoStyle.clearDigital_container}`}>
          <div className=" clearDigital_FilterWrap relative w-full flex flex-wrap  ">
            <div className="filter_header relative w-full max-w-[407px] xl:mb-7 ">
              <div className="search_wrap relative w-full mb-[30px] z-[1] ">
                <input
                  type="search"
                  id="fSearch"
                  className={`${HongoStyle.clearDigital_Filter_search} relative w-full bg-transparent border-white border-[2px] border-solid text-[16px] font-medium font-poppins py-[21px] pl-[15px] pr-[15px] text-white outline-none `}
                  value={searchValue}
                  onChange={(e) => {
                    setSearchValue(e.target.value);
                  }}
                />
                <label htmlFor="fSearch" className=" text-[0] hidden ">
                  .
                </label>
                <div className="search_icon absolute top-[22px] right-[22px] w-[25px] h-[25px] z-[-1] ">
                  <Image
                    src="/clearDigital/arrow_search.svg"
                    width={50}
                    height={50}
                    alt="search"
                  />
                </div>
              </div>
              <h5 className=" text-white text-[20px] font-bold font-poppins leading-[24px] mb-8 ">
                Filter all insights
              </h5>
              <div className="filter_searchData flex flex-wrap justify-between mb-8 ">
                <h6 className=" text-white text-[16px] font-normal font-poppins leading-[24px] ">
                  {cardCount} results
                </h6>
                <span className=" text-[#fa198c] text-[16px] font-bold font-poppins leading-[24px] cursor-pointer ">
                  Clear all
                </span>
              </div>
              <ul
                className={` filter_list_item relative w-full list-none  ${
                  filterListSelected ? "filterTopList_wrap" : "text_wrap"
                } `}
              >
                <li
                  className=" list_item list_item_one relative w-full border-t-[1px] border-t-[#989898] border-solid py-[30px] px-10 "
                  // onClick={() => toggleAccordion(0)}
                  onClick={() => {
                    toggleAccordion(0);
                    handleListItemOneClick();
                  }}
                >
                  <span
                    className={`text-white cursor-pointer text-[16px] font-bold font-poppins leading-[20px] relative w-full inline-block `}
                  >
                    By Topic
                    <div
                      className={`rotate_icon  absolute top-[0] right-[0] w-[24px] h-[24px] bg-[url('/clearDigital/arrow-up.svg')] bg-no-repeat bg-contain rotate-180 transition-transform duration-500 ease-in-out ${
                        openAccordionIndex === 0 ? "!rotate-0" : ""
                      }`}
                    ></div>
                  </span>
                  <ul
                    className={`relative w-full list-none transition-all duration-500 ease-in-out ${
                      openAccordionIndex === 0
                        ? "h-auto opacity-1  mt-5 overflow-y-hidden will-change-auto "
                        : "h-0 opacity-0  mt-0 overflow-y-hidden "
                    }`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <li className=" relative w-full mb-4 ">
                      <label
                        htmlFor="brand-strategy"
                        className={` ${HongoStyle.filterListInput} filterListInput relative w-full flex items-center bg-transparent `}
                        // onClick={handleLabelClick}
                        onClick={(event) => {
                          handleLabelClick(event);
                          handleFilterListInputClick();
                        }}
                      >
                        <input
                          type="checkbox"
                          id="brand-strategy"
                          className={` w-[24px] h-[24px] bg-transparent cursor-pointer mr-3 `}
                        />
                        <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] cursor-pointer ">
                          Brand Strategy
                        </span>
                      </label>
                    </li>
                    <li className=" relative w-full mb-4 ">
                      <label
                        htmlFor="content-strategy"
                        className={` ${HongoStyle.filterListInput} filterListInput relative w-full flex items-center bg-transparent `}
                        // onClick={handleLabelClick}
                        onClick={(event) => {
                          handleLabelClick(event);
                          handleFilterListInputClick();
                        }}
                      >
                        <input
                          type="checkbox"
                          id="content-strategy"
                          className={` w-[24px] h-[24px] bg-transparent cursor-pointer mr-3 `}
                        />
                        <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] cursor-pointer ">
                          Content Strategy
                        </span>
                      </label>
                    </li>
                    <li className=" relative w-full mb-4 ">
                      <label
                        htmlFor="digital-marketing-process"
                        className={` ${HongoStyle.filterListInput} filterListInput relative w-full flex items-center bg-transparent `}
                        // onClick={handleLabelClick}
                        onClick={(event) => {
                          handleLabelClick(event);
                          handleFilterListInputClick();
                        }}
                      >
                        <input
                          type="checkbox"
                          id="digital-marketing-process"
                          className={` w-[24px] h-[24px] bg-transparent cursor-pointer mr-3 `}
                        />
                        <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] cursor-pointer ">
                          Digital Marketing Process
                        </span>
                      </label>
                    </li>
                    <li className=" relative w-full mb-4 ">
                      <label
                        htmlFor="digital-strategy"
                        className={` ${HongoStyle.filterListInput} filterListInput relative w-full flex items-center bg-transparent `}
                        // onClick={handleLabelClick}
                        onClick={(event) => {
                          handleLabelClick(event);
                          handleFilterListInputClick();
                        }}
                      >
                        <input
                          type="checkbox"
                          id="digital-strategy"
                          className={` w-[24px] h-[24px] bg-transparent cursor-pointer mr-3 `}
                        />
                        <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] cursor-pointer ">
                          Digital Strategy
                        </span>
                      </label>
                    </li>
                    <li className=" relative w-full mb-4 ">
                      <label
                        htmlFor="innovation-trends"
                        className={` ${HongoStyle.filterListInput} filterListInput relative w-full flex items-center bg-transparent `}
                        // onClick={handleLabelClick}
                        onClick={(event) => {
                          handleLabelClick(event);
                          handleFilterListInputClick();
                        }}
                      >
                        <input
                          type="checkbox"
                          id="innovation-trends"
                          className={` w-[24px] h-[24px] bg-transparent cursor-pointer mr-3 `}
                        />
                        <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] cursor-pointer ">
                          Innovation & Trends
                        </span>
                      </label>
                    </li>
                    <li className=" relative w-full mb-4 ">
                      <label
                        htmlFor="web-development"
                        className={` ${HongoStyle.filterListInput} filterListInput relative w-full flex items-center bg-transparent `}
                        // onClick={handleLabelClick}
                        onClick={(event) => {
                          handleLabelClick(event);
                          handleFilterListInputClick();
                        }}
                      >
                        <input
                          type="checkbox"
                          id="web-development"
                          className={` w-[24px] h-[24px] bg-transparent cursor-pointer mr-3 `}
                        />
                        <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] cursor-pointer ">
                          Web Development
                        </span>
                      </label>
                    </li>
                  </ul>
                </li>
                <li
                  className="  list_item list_item_two relative w-full border-t-[1px] border-t-[#989898] border-solid py-[30px] px-10 "
                  // onClick={() => toggleAccordion(1)}
                  onClick={() => {
                    toggleAccordion(1);
                    handleOtherListItemClick();
                  }}
                >
                  <span
                    className={`text-white cursor-pointer text-[16px] font-bold font-poppins leading-[20px] relative w-full inline-block `}
                  >
                    By Solution
                    <div
                      className={`rotate_icon  absolute top-[0] right-[0] w-[24px] h-[24px] bg-[url('/clearDigital/arrow-up.svg')] bg-no-repeat bg-contain rotate-180 transition-transform duration-500 ease-in-out ${
                        openAccordionIndex === 1 ? "!rotate-0" : ""
                      }`}
                    ></div>
                  </span>
                  <ul
                    className={`relative w-full list-none transition-all duration-500 ease-in-out ${
                      openAccordionIndex === 1
                        ? "h-auto opacity-1  mt-5 overflow-y-hidden will-change-auto "
                        : "h-0 opacity-0  mt-0 overflow-y-hidden "
                    }`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <li className=" relative w-full mb-4 ">
                      <label
                        htmlFor="article"
                        className={` ${HongoStyle.filterListInput} filterListInput relative w-full flex items-center bg-transparent `}
                        onClick={handleLabelClick}
                      >
                        <input
                          type="checkbox"
                          id="article"
                          className={` w-[24px] h-[24px] bg-transparent cursor-pointer mr-3 `}
                        />
                        <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] cursor-pointer ">
                          Article
                        </span>
                      </label>
                    </li>
                    <li className=" relative w-full mb-4 ">
                      <label
                        htmlFor="podcast"
                        className={` ${HongoStyle.filterListInput} filterListInput relative w-full flex items-center bg-transparent `}
                        onClick={handleLabelClick}
                      >
                        <input
                          type="checkbox"
                          id="podcast"
                          className={` w-[24px] h-[24px] bg-transparent cursor-pointer mr-3 `}
                        />
                        <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] cursor-pointer ">
                          Podcast
                        </span>
                      </label>
                    </li>
                    <li className=" relative w-full mb-4 ">
                      <label
                        htmlFor="2digital-marketing-process"
                        className={` ${HongoStyle.filterListInput} filterListInput relative w-full flex items-center bg-transparent `}
                        onClick={handleLabelClick}
                      >
                        <input
                          type="checkbox"
                          id="2digital-marketing-process"
                          className={` w-[24px] h-[24px] bg-transparent cursor-pointer mr-3 `}
                        />
                        <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] cursor-pointer ">
                          2Digital Marketing Process
                        </span>
                      </label>
                    </li>
                    <li className=" relative w-full mb-4 ">
                      <label
                        htmlFor="2digital-strategy"
                        className={` ${HongoStyle.filterListInput} filterListInput relative w-full flex items-center bg-transparent `}
                        onClick={handleLabelClick}
                      >
                        <input
                          type="checkbox"
                          id="2digital-strategy"
                          className={` w-[24px] h-[24px] bg-transparent cursor-pointer mr-3 `}
                        />
                        <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] cursor-pointer ">
                          2Digital Strategy
                        </span>
                      </label>
                    </li>
                    <li className=" relative w-full mb-4 ">
                      <label
                        htmlFor="2innovation-trends"
                        className={` ${HongoStyle.filterListInput} filterListInput relative w-full flex items-center bg-transparent `}
                        onClick={handleLabelClick}
                      >
                        <input
                          type="checkbox"
                          id="2innovation-trends"
                          className={` w-[24px] h-[24px] bg-transparent cursor-pointer mr-3 `}
                        />
                        <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] cursor-pointer ">
                          2Innovation & Trends
                        </span>
                      </label>
                    </li>
                    <li className=" relative w-full mb-4 ">
                      <label
                        htmlFor="2web-development"
                        className={` ${HongoStyle.filterListInput} filterListInput relative w-full flex items-center bg-transparent `}
                        onClick={handleLabelClick}
                      >
                        <input
                          type="checkbox"
                          id="2web-development"
                          className={` w-[24px] h-[24px] bg-transparent cursor-pointer mr-3 `}
                        />
                        <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] cursor-pointer ">
                          2Web Development
                        </span>
                      </label>
                    </li>
                  </ul>
                </li>
                <li
                  className="  list_item list_item_three relative w-full border-t-[1px] border-t-[#989898] border-solid py-[30px] px-10 "
                  onClick={() => toggleAccordion(2)}
                >
                  <span
                    className={`text-white cursor-pointer text-[16px] font-bold font-poppins leading-[20px] relative w-full inline-block `}
                  >
                    By Content Type
                    <div
                      className={`rotate_icon  absolute top-[0] right-[0] w-[24px] h-[24px] bg-[url('/clearDigital/arrow-up.svg')] bg-no-repeat bg-contain rotate-180 transition-transform duration-500 ease-in-out ${
                        openAccordionIndex === 2 ? "!rotate-0" : ""
                      }`}
                    ></div>
                  </span>
                  <ul
                    className={`relative w-full list-none transition-all duration-500 ease-in-out ${
                      openAccordionIndex === 2
                        ? "h-auto opacity-1  mt-5 overflow-y-hidden will-change-auto "
                        : "h-0 opacity-0  mt-0 overflow-y-hidden "
                    }`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <li className=" relative w-full mb-4 ">
                      <label
                        htmlFor="3brand-strategy"
                        className={` ${HongoStyle.filterListInput} filterListInput relative w-full flex items-center bg-transparent `}
                        onClick={handleLabelClick}
                      >
                        <input
                          type="checkbox"
                          id="3brand-strategy"
                          className={` w-[24px] h-[24px] bg-transparent cursor-pointer mr-3 `}
                        />
                        <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] cursor-pointer ">
                          3Brand Strategy
                        </span>
                      </label>
                    </li>
                    <li className=" relative w-full mb-4 ">
                      <label
                        htmlFor="3content-strategy"
                        className={` ${HongoStyle.filterListInput} filterListInput relative w-full flex items-center bg-transparent `}
                        onClick={handleLabelClick}
                      >
                        <input
                          type="checkbox"
                          id="3content-strategy"
                          className={` w-[24px] h-[24px] bg-transparent cursor-pointer mr-3 `}
                        />
                        <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] cursor-pointer ">
                          3Content Strategy
                        </span>
                      </label>
                    </li>
                    <li className=" relative w-full mb-4 ">
                      <label
                        htmlFor="3digital-marketing-process"
                        className={` ${HongoStyle.filterListInput} filterListInput relative w-full flex items-center bg-transparent `}
                        onClick={handleLabelClick}
                      >
                        <input
                          type="checkbox"
                          id="3digital-marketing-process"
                          className={` w-[24px] h-[24px] bg-transparent cursor-pointer mr-3 `}
                        />
                        <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] cursor-pointer ">
                          3Digital Marketing Process
                        </span>
                      </label>
                    </li>
                    <li className=" relative w-full mb-4 ">
                      <label
                        htmlFor="3digital-strategy"
                        className={` ${HongoStyle.filterListInput} filterListInput relative w-full flex items-center bg-transparent `}
                        onClick={handleLabelClick}
                      >
                        <input
                          type="checkbox"
                          id="3digital-strategy"
                          className={` w-[24px] h-[24px] bg-transparent cursor-pointer mr-3 `}
                        />
                        <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] cursor-pointer ">
                          3Digital Strategy
                        </span>
                      </label>
                    </li>
                    <li className=" relative w-full mb-4 ">
                      <label
                        htmlFor="3innovation-trends"
                        className={` ${HongoStyle.filterListInput} filterListInput relative w-full flex items-center bg-transparent `}
                        onClick={handleLabelClick}
                      >
                        <input
                          type="checkbox"
                          id="3innovation-trends"
                          className={` w-[24px] h-[24px] bg-transparent cursor-pointer mr-3 `}
                        />
                        <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] cursor-pointer ">
                          3Innovation & Trends
                        </span>
                      </label>
                    </li>
                    <li className=" relative w-full mb-4 ">
                      <label
                        htmlFor="3web-development"
                        className={` ${HongoStyle.filterListInput} filterListInput relative w-full flex items-center bg-transparent `}
                        onClick={handleLabelClick}
                      >
                        <input
                          type="checkbox"
                          id="3web-development"
                          className={` w-[24px] h-[24px] bg-transparent cursor-pointer mr-3 `}
                        />
                        <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] cursor-pointer ">
                          3Web Development
                        </span>
                      </label>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="filter_card_wrapper  relative w-[calc(100%-407px)] pl-24 xl:w-full xl:pl-0 ">
              {filterTopList.length > 0 && (
                <div className="filterTopList_wrap relative w-full mb-10">
                  <ul className="relative w-[calc(100%+10px)] ml-[-5px] list-none flex flex-wrap">
                    {filterTopList.map((item, index) => {
                      const isInClickedItemsOne = clickedItemsOne.includes(
                        item.toLowerCase()
                      );
                      const isFromListItemOne =
                        clickedItemsOne.length > 0 &&
                        clickedItemsOne.includes(item.toLowerCase());
                      if (isInClickedItemsOne && isFromListItemOne) {
                        return (
                          <li
                            key={index}
                            className="relative w-fit mx-[5px] my-[10px] bg-white rounded-[30px] py-[9px] pl-[15px] pr-[40px]"
                          >
                            <div
                              className="close_icon absolute top-[10px] right-[10px] w-[24px] h-[24px] bg-[url('/clearDigital/x-square.svg')] bg-no-repeat bg-contain cursor-pointer "
                              onClick={() => handleAfterClick(item)}
                            ></div>
                            <span className="text-black text-[16px] font-bold font-poppins leading-[20px]">
                              {item}
                            </span>
                          </li>
                        );
                      } else {
                        return null;
                      }
                    })}
                  </ul>
                </div>
              )}{" "}
              u
              {filterTopList.length === 0 && (
                <div className="text_wrap relative w-full mb-10">
                  <h2 className="text-white text-[55px] font-bold font-poppins leading-[61px] tracking-[-2%]">
                    All Insights
                  </h2>
                </div>
              )}
              <div className="card_wrapper relative w-mainRow ml-[-15px] flex flex-wrap ">
                {currentCards.map((filterCard) => (
                  <div
                    className={`filter_card group ${
                      filterCard.filterCard4 === true
                        ? ` before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:border-[5px] before:border-solid before:border-[#fa198c] ${
                            removeCard == 1 ? "hidden" : ""
                          } `
                        : ""
                    } relative w-halfWidth mx-[15px] mb-[30px] `}
                    key={filterCard.id}
                  >
                    <div className="wrapper relative w-full min-h-[450px] pt-[46px] flex flex-wrap items-end ">
                      <Link
                        href="/"
                        className={`${HongoStyle.redirect_link} ${
                          filterCard.filterCard4 === true ? " hidden " : ""
                        } z-10`}
                      >
                        .
                      </Link>
                      <div className="img_wrap absolute top-0 left-0 w-full h-full ">
                        <Image
                          src={filterCard.imgUrl}
                          width={1000}
                          height={1000}
                          alt="card_img"
                          className=" w-full h-full object-cover "
                        />
                      </div>
                      <div
                        className={` ${
                          filterCard.filterCard4 === true ? " hidden " : ""
                        } card_top_content absolute top-[50px] left-0 w-full px-[45px] z-[2]  desktop:px-[23px] `}
                      >
                        <ul className=" relative w-full list-none flex flex-wrap ">
                          <li className=" px-3 py-[5px] bg-black mx-[5px] mb-[10px] ">
                            <span className=" text-[16px] leading-[24px] font-poppins font-bold text-white ">
                              {filterCard.solution}
                            </span>
                          </li>
                          <li className=" px-3 py-[5px] bg-black mx-[5px] mb-[10px] ">
                            <span className=" text-[16px] leading-[24px] font-poppins font-bold text-white ">
                              {filterCard.topic}
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div
                        className={` ${
                          filterCard.filterCard4 === true ? " hidden " : ""
                        } card_content relative p-[50px] z-[1] group-hover:static  group-hover:will-change-auto transition-all duration-500 ease-in-out before:[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#00000080] before:transition before:duration-500 before:ease-in-out before:z-[-1] desktop:p-7  `}
                      >
                        <h3 className=" text-white text-[30px] font-bold font-poppins leading-[39px] overflow-ellipsis line-clamp-3 transition-all duration-500 ease-in-out group-hover:overflow-visible group-hover:line-clamp-none desktop:text-[26px] desktop:leading-[32px] ">
                          {filterCard.cardTitle}
                        </h3>
                        <div className="text relative w-full  h-0 opacity-0  mt-0 overflow-y-hidden transition-all duration-300 ease-in-out group-hover:mt-5 group-hover:h-auto group-hover:opacity-[1] group-hover:overflow-y-hidden group-hover:will-change-auto ">
                          <p className=" text-white text-[16px] font-normal font-poppins leading-[24px] mb-5 ">
                            {filterCard.cardParagraph}
                          </p>
                          <span
                            className={`${HongoStyle.clearDigital_textButton}`}
                          >
                            {filterCard.btn}
                          </span>
                        </div>
                      </div>
                      <div
                        className={` ${
                          filterCard.filterCard4 === true
                            ? " block "
                            : " hidden "
                        } ${
                          HongoStyle.clearDigital_card4title
                        }  filter4card_content relative w-full px-[45px] py-[35px] `}
                      >
                        <h2
                          className={` w-full max-w-[349px] text-white text-[55px] leading-[61px] font-poppins font-bold mb-[50px] `}
                        >
                          {filterCard.card4title}
                        </h2>
                        <span
                          className={`${HongoStyle.clearDigital_pinkButton} inline-block w-full cursor-pointer`}
                          onClick={(e) => handleClick(filterCard, e)}
                        >
                          Sign up
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Pagination */}
              <div className="pagination">
                <Pagination
                  cardsPerPage={cardsPerPage}
                  totalCards={filtercardData.length}
                  paginate={paginate}
                  currentPage={currentPage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {isFormOverlayVisible && selectedFilterCard && (
        <section
          className=" form_overlay fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#0b0b0bd9] flex items-center z-[999] overflow-hidden "
          onClick={onClose}
        >
          <div className={`${HongoStyle.clearDigital_container}`}>
            <div
              className="form_overlay_wrap relative w-full max-w-[930px] mx-auto bg-black border-[2px] border-white border-solid py-[50px] px-[40px] z-10 "
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="close_icon absolute top-[10px] right-[10px] w-full max-w-[30px] h-[30px] cursor-pointer "
                onClick={onClose}
              >
                <Image
                  src="/clearDigital/x-circle.svg"
                  width={50}
                  height={50}
                  alt="close"
                  className=" w-full h-full object-contain "
                />
              </div>
              {submitted ? (
                <div className="thank_you_overlay relative w-full min-h-[400px] flex items-center justify-center ">
                  <h2 className="text-[55px] text-white leading-[60px] font-poppins font-bold tracking-[-2px] ">
                    Thank You!
                  </h2>
                </div>
              ) : (
                <div
                  className={`form_with_content  ${
                    submitted ? "hidden" : ""
                  } relative w-full flex flex-wrap `}
                >
                  <div className="text_wrapper relative w-[calc(50%-20px)] mx-[10px] ">
                    <h2 className=" text-[55px] text-white leading-[60px] font-poppins font-bold tracking-[-2px] mb-5 ">
                      Stay <span className=" text-[#FA198C] ">updated</span>{" "}
                      with Clear Digital
                    </h2>
                    <h6 className=" text-[20px] text-white leading-[30px] font-poppins font-normal mb-5 ">
                      Lorem ipsum dolor sit amet etal dolor consectetur.
                      Lobortis congue venenatis ultricies venenatis leo a nunc.
                      Molestie nullam.
                    </h6>
                    <p className=" w-full max-w-[348px] text-[12px] text-white leading-[18px] font-poppins font-normal ">
                      Privacy statement lorem ipsum dolor sit amet consectetur
                      adisciping etal
                    </p>
                  </div>
                  <div className="form_wrap relative w-[calc(50%-20px)] mx-[10px] ">
                    <form onSubmit={handleFormSubmit}>
                      <div className="wrap relative w-full mb-[30px] ">
                        <label
                          htmlFor="first-name"
                          className=" text-[14px] text-white leading-[17px] font-poppins font-normal "
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="first-name"
                          name="first-name"
                          className=" relative w-full bg-transparent p-[23px] outline-none border-[2px] border-white border-solid text-[16px] text-white leading-[20px] font-poppins font-normal mt-[8px] "
                        />
                      </div>
                      <div className="wrap relative w-full mb-[30px] ">
                        <label
                          htmlFor="last-name"
                          className=" text-[14px] text-white leading-[17px] font-poppins font-normal "
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="last-name"
                          name="last-name"
                          className=" relative w-full bg-transparent p-[23px] outline-none border-[2px] border-white border-solid text-[16px] text-white leading-[20px] font-poppins font-normal mt-[8px] "
                        />
                      </div>
                      <div className="wrap relative w-full mb-[30px] ">
                        <label
                          htmlFor="email"
                          className=" text-[14px] text-white leading-[17px] font-poppins font-normal "
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className=" relative w-full bg-transparent p-[23px] outline-none border-[2px] border-white border-solid text-[16px] text-white leading-[20px] font-poppins font-normal mt-[8px] "
                        />
                      </div>
                      <div className="wrap relative w-full mb-[30px] ">
                        <label
                          htmlFor="country"
                          className=" text-[14px] text-white leading-[17px] font-poppins font-normal "
                        >
                          Country
                        </label>
                        <select
                          name="country"
                          id="country"
                          className=" relative w-full bg-transparent p-[23px] outline-none border-[2px] border-white border-solid text-[16px] text-white leading-[20px] font-poppins font-normal mt-[8px] "
                        >
                          <option value=""></option>
                          <option value="India">India</option>
                          <option value="USA">USA</option>
                          <option value="Canada">Canada</option>
                          <option value="UK">UK</option>
                        </select>
                      </div>
                      <button
                        type="submit"
                        className={`${HongoStyle.clearDigital_pinkButton} inline-block w-full cursor-pointer`}
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              )}
              {/* <div
                className={`thank_you_overlay ${
                  submitted ? "" : "hidden"
                } relative w-full text-center `}
              >
                <h2 className=" text-[55px] text-white leading-[60px] font-poppins font-bold tracking-[-2%] mb-5 ">
                  Thank You!
                </h2>
              </div> */}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
