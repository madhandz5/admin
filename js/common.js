/* global bootstrap: false */
(() => {
  'use strict'
  const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.forEach(tooltipTriggerEl => {
    new bootstrap.Tooltip(tooltipTriggerEl)
  })
})()


// 탭
const tab = document.querySelectorAll(".tab_item");
const tabSect = document.querySelectorAll(".tab_sect");

tab.forEach((item, idx) => {
  item.addEventListener("click", () => {
    let has = item.classList.contains("active");

    if (has) {
      return false;
    } else {
      tab.forEach((items, indx) => {
        items.classList.remove("active");
      });
      tabSect.forEach((items, indx) => {
        items.style.display = "none";
      });

      let val = item.getAttribute("data-tab");
      let el = document.getElementById(val);

      item.classList.add("active");
      el.style.display = "block";
    }
  });
});