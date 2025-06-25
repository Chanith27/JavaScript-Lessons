<p id="para">Hover over me!</p>

<script>
  const para = document.getElementById("para");

  para.addEventListener("mouseover", function () {
    para.style.color = "red";
  });

  para.addEventListener("mouseout", function () {
    para.style.color = "black";
  });
</script>
