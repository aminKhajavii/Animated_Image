let btns = document.querySelectorAll("li");
let banner = document.getElementById("image");

btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    banner.src = `images/${index}.jpeg`;
    animation();

    btn.classList.add("active");
  });
});

const animation = () => {
  banner.classList.add("zoom");
  setTimeout(() => {
    banner.classList.remove("zoom");
  }, 1000);
  for (const b of btns) {
    b.classList.remove("active");
  }
};
