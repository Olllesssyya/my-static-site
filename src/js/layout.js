let responsiveSlider = function(){
    let slider = document.querySelector(".slider");
    let sliderWidth =  slider.offsetWidth;
    let slideList = document.querySelector(".slideWrap");
    let count = 1;
    let items = slideList.querySelectorAll("li").length;
    let prev = document.querySelector(".prev");
    let next = document.querySelector(".next");


    window.addEventListener('resize', function() {
        sliderWidth = slider.offsetWidth;
    })

    let prevSlide = function() {
        if(count > 1){
            count = count -2;
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        }
        else if(count = 1){
            count = items - 1;
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        }
    };

    let nextSlide = function() {
        if(count < items){
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        }
        else if(count = items){
            count = items - 1;
            slideList.style.left = "0px";
            count = 1;
        }
    };

    next.addEventListener("click", function(){
        nextSlide();
    });

    prev.addEventListener("click", function(){
        prevSlide();
    });

    setInterval(function(){
        nextSlide();
    }, 5000);
    
  // Additional code for mobile slider
  let mobileSlider = document.querySelector(".mobile-slider");
  let mobileSlideList = mobileSlider.querySelector(".slideWrap");
  let mobileItems = mobileSlideList.querySelectorAll("li").length;
  let mobilePrev = mobileSlider.querySelector(".prev");
  let mobileNext = mobileSlider.querySelector(".next");

  let mobileCount = 1;
  let mobileSliderWidth = mobileSlider.offsetWidth;

  window.addEventListener('resize', function() {
    mobileSliderWidth = mobileSlider.offsetWidth;
  });

  let mobilePrevSlide = function() {
    if (mobileCount > 1) {
      mobileCount -= 2;
      mobileSlideList.style.left = "-" + mobileCount * mobileSliderWidth + "px";
      mobileCount++;
    } else if (mobileCount === 1) {
      mobileCount = mobileItems - 1;
      mobileSlideList.style.left = "-" + mobileCount * mobileSliderWidth + "px";
      mobileCount++;
    }
  };

  let mobileNextSlide = function() {
    if (mobileCount < mobileItems) {
      mobileSlideList.style.left = "-" + mobileCount * mobileSliderWidth + "px";
      mobileCount++;
    } else if (mobileCount === mobileItems) {
      mobileCount = mobileItems - 1;
      mobileSlideList.style.left = "0px";
      mobileCount = 1;
    }
  };

  mobileNext.addEventListener("click", function() {
    mobileNextSlide();
  });

  mobilePrev.addEventListener("click", function() {
    mobilePrevSlide();
  });

  setInterval(function() {
    mobileNextSlide();
  }, 5000);
};

window.onload = function(){
    responsiveSlider();
};