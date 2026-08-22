(function () {
  "use strict";

  var primaryWhatsappNumber = "917400068775";
  var appointmentForm = document.getElementById("appointmentForm");
  var formStatus = document.getElementById("formStatus");
  var yearTarget = document.getElementById("currentYear");

  if (yearTarget) {
    yearTarget.textContent = new Date().getFullYear();
  }

  document.querySelectorAll(".navbar-nav .nav-link").forEach(function (link) {
    link.addEventListener("click", function () {
      var navbarCollapse = document.getElementById("primaryNav");
      if (navbarCollapse && navbarCollapse.classList.contains("show")) {
        if (window.bootstrap && bootstrap.Collapse) {
          var collapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
          collapse.hide();
        } else {
          navbarCollapse.classList.remove("show");
        }
      }
    });
  });

  if (!appointmentForm) {
    return;
  }

  appointmentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("patientName").value.trim();
    var phone = document.getElementById("patientPhone").value.trim();
    var service = document.getElementById("serviceName").value.trim();
    var branch = "UberCare – M.H. Saboo Siddique Hospital Branch";
    var preferredTime = document.getElementById("preferredTime").value.trim();
    var notes = document.getElementById("notes").value.trim();
    var cleanedPhone = phone.replace(/[^\d]/g, "");
    var isPhoneValid = cleanedPhone.length >= 10 && cleanedPhone.length <= 13;

    appointmentForm.classList.add("was-validated");

    if (!name || !isPhoneValid || !service || !preferredTime) {
      if (formStatus) {
        formStatus.textContent = "Please complete the required details before sending.";
      }
      return;
    }

    var messageLines = [
      "Hello UberCare, I want to book a diagnostic appointment.",
      "",
      "Name: " + name,
      "Mobile: " + phone,
      "Service: " + service,
      "Branch: " + branch,
      "Preferred date/time: " + preferredTime
    ];

    if (notes) {
      messageLines.push("Notes: " + notes);
    }

    var whatsappUrl = "https://wa.me/" + primaryWhatsappNumber + "?text=" + encodeURIComponent(messageLines.join("\n"));

    if (formStatus) {
      formStatus.textContent = "Opening WhatsApp with your appointment request.";
    }

    window.open(whatsappUrl, "_blank", "noopener");
  });

  // Instagram Carousel Slider
  var track = document.querySelector(".instagram-carousel__track");
  var prevBtn = document.querySelector(".instagram-carousel__btn--prev");
  var nextBtn = document.querySelector(".instagram-carousel__btn--next");

  if (track && prevBtn && nextBtn) {
    var gap = 20; // 20px gap from CSS
    var isAnimating = false;
    var transitionTime = 450;

    var slideNext = function () {
      if (isAnimating) return;
      isAnimating = true;
      var card = track.firstElementChild;
      var slideAmount = card.clientWidth + gap;
      
      track.style.transition = "transform " + transitionTime + "ms cubic-bezier(0.25, 1, 0.5, 1)";
      track.style.transform = "translateX(-" + slideAmount + "px)";
      
      setTimeout(function () {
        track.style.transition = "none";
        track.appendChild(track.firstElementChild);
        track.style.transform = "translateX(0px)";
        isAnimating = false;
      }, transitionTime);
    };

    var slidePrev = function () {
      if (isAnimating) return;
      isAnimating = true;
      var card = track.firstElementChild;
      var slideAmount = card.clientWidth + gap;
      
      track.style.transition = "none";
      track.insertBefore(track.lastElementChild, track.firstElementChild);
      track.style.transform = "translateX(-" + slideAmount + "px)";
      
      track.offsetHeight; // Force reflow
      
      track.style.transition = "transform " + transitionTime + "ms cubic-bezier(0.25, 1, 0.5, 1)";
      track.style.transform = "translateX(0px)";
      
      setTimeout(function () {
        isAnimating = false;
      }, transitionTime);
    };

    prevBtn.addEventListener("click", slidePrev);
    nextBtn.addEventListener("click", slideNext);

    var startX = 0;
    var currentX = 0;
    var isDragging = false;

    track.addEventListener("touchstart", function (e) {
      if (isAnimating) return;
      startX = e.touches[0].clientX;
      isDragging = true;
    }, { passive: true });

    track.addEventListener("touchmove", function (e) {
      if (!isDragging) return;
      currentX = e.touches[0].clientX;
    }, { passive: true });

    track.addEventListener("touchend", function () {
      if (!isDragging) return;
      isDragging = false;
      var diffX = startX - currentX;
      var threshold = 50; 

      if (Math.abs(diffX) > threshold) {
        if (diffX > 0) {
          slideNext();
        } else {
          slidePrev();
        }
      }
      startX = 0;
      currentX = 0;
    }, { passive: true });
  }
})();

