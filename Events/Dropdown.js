<select id="fruitSelect">
  <option value="apple">Apple</option>
  <option value="banana">Banana</option>
  <option value="cherry">Cherry</option>
</select>

<script>
  document.getElementById("fruitSelect").addEventListener("change", function () {
    alert("You selected: " + this.value);
  });
</script>
