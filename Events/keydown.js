<input type="text" id="nameInput" placeholder="Type something">

<script>
  const input = document.getElementById("nameInput");

  input.addEventListener("keydown", function (event) {
    console.log("Key pressed: " + event.key);
  });
</script>
