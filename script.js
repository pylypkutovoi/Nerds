
        var btnmap = document.querySelector(".contacts-button-map")

        var popup = document.querySelector(".write-us")
        var close = popup.querySelector(".modal-close")

        btnmap.addEventListener("click", function (evt) {
            evt.preventDefault();
            popup.classList.add("modal-show");
        })

        close.addEventListener("click", function (evt) {
            evt.preventDefault();
            popup.classList.remove("modal-show")
        })

        window.addEventListener("keydown", function(evt){
          if (evt.keyCode === 27){
            if (popup.classList.contains("modal-show")){
              evt.preventDefault();
              popup.classList.remove("modal-show");
            }
          }
        });
  