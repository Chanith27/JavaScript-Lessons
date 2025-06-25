<input type="text" id="focusInput" placeholder="Focus here">

<script>
  const input = document.getElementById("focusInput");

  input.addEventListener("focus", function () {
    input.style.backgroundColor = "#d3f8d3";
  });

  input.addEventListener("blur", function () {
    input.style.backgroundColor = "white";
  });
</script>
