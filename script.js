document.addEventListener("mousemove", function(e) {
  const sparkles = document.createElement("span");
  sparkles.classList.add("sparkle");
  document.body.appendChild(sparkles);
  
  sparkles.style.left = e.pageX + "px";
  sparkles.style.top = e.pageY + "px";

  setTimeout(() => {
    sparkles.remove();
  }, 1000);
});
