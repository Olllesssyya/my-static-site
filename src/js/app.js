// Burger menu
const burger_menu = document.getElementById("tayler-szirden");
      const open_button = document.getElementById("burger-knopka");
      let counter_of_fat_clicks = 0;
  
      open_button.addEventListener("click", function() {
          if (counter_of_fat_clicks === 0) {
              burger_menu.style.display = "block";
              counter_of_fat_clicks++;
          } else {
              burger_menu.style.display = "none";
              counter_of_fat_clicks = 0;
          }
      });

// Desktop dropdown color change
const desktop_dropdown_content = document.getElementById("dropdown-content");
      const desktop_dropdown = document.getElementById("dropdown");
      function dropdown_color_changer_mouse_over(){
        desktop_dropdown.style.backgroundColor = "#C4D600"
      };
      function dropdown_color_changer_mouse_out(){
        desktop_dropdown.style.backgroundColor = "#22272B"
      };

// Mobile dropdown menu
const mobile_dropdown_content = document.getElementById("mobile-dropdown-content");
        const mobile_dropdown = document.getElementById("mobile-dropdown-1");
        const mobile_dropdown_btn = document.getElementById("dropdown-btn");
        let dropdown_mobile_counter = 0;

        function mobile_dropdown_function() {
            if (dropdown_mobile_counter === 0) {
                mobile_dropdown_content.style.display = "list-item";
                mobile_dropdown.style.backgroundColor = "#C4D600";
                mobile_dropdown_btn.style.backgroundColor = "#C4D600";
                dropdown_mobile_counter = 1;
            } else {
                mobile_dropdown_content.style.display = "none";
                mobile_dropdown.style.backgroundColor = "#22272B";
                mobile_dropdown_btn.style.backgroundColor = "#22272B";
                dropdown_mobile_counter = 0;
            }
        }