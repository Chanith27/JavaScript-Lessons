<form id="myForm">
  <input type="text" placeholder="Your name">
  <button type="submit">Submit</button>
</form>

<script>
  document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent actual form submission
    alert("Form submitted!");
  });
</script>
