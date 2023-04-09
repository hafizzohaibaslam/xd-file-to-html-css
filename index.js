let hm = document.querySelector(".fa-bars");
let sl = document.querySelector(".links-container2");

hm.addEventListener("click", () => {
  if (sl.classList.contains("nee")) {
    console.log(hm);

    sl.classList.remove("nee");
  } else {
    // console.log(hm);

    sl.classList.add("nee");
  }
});
