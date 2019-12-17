document.getElementById("clickInput").addEventListener(
    "click", 
    function(event) {
      if (event.target.value === "Hello!") {
        event.target.value = "Anybody Home?";
        document.getElementById('clickInput').style.color='yellow';
      } else {
        event.target.value = "Hello!";
        document.getElementById('clickInput').style.color='white';
      }
    },
    false
  );
  