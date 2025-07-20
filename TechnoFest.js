const btn = document.getElementById("darkModeToggle");
      const body = document.body;
      function setDarkMode(on) {
        if (on) {
          body.classList.add("dark-mode");
          btn.textContent = "☀️";
          localStorage.setItem("darkmode", "on");
        } else {
          body.classList.remove("dark-mode");
          btn.textContent = "🌙";
          localStorage.setItem("darkmode", "off");
        }
      }
      btn.onclick = () => setDarkMode(!body.classList.contains("dark-mode"));
      if (localStorage.getItem("darkmode") === "on") setDarkMode(true);

      // Typewriter
      const text = "Welcome to TechnoFest 2025";
      let i = 0;
      function typeWriter() {
        if (i < text.length) {
          document.getElementById("typewriter").innerHTML += text.charAt(i);
          i++;
          setTimeout(typeWriter, 84);
        }
      }
      window.addEventListener("DOMContentLoaded", typeWriter);

      // Scroll Reveal (Intersection Observer)
      function revealOnScroll() {
        const revealElems = document.querySelectorAll(".scroll-reveal");
        const observer = new IntersectionObserver(
          (entries, observerSelf) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add(
                  "animate__animated",
                  "animate__fadeInUp"
                );
                observerSelf.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.08 }
        );
        revealElems.forEach((el) => observer.observe(el));
      }
      revealOnScroll();

      // Floating Chat Button
      const chatBtn = document.getElementById("chatOpenBtn");
      const chatPop = document.getElementById("chatPop");
      const chatCloseBtn = document.getElementById("chatCloseBtn");
      chatBtn.onclick = () => {
        chatPop.style.display = "block";
        chatBtn.style.display = "none";
      };
      chatCloseBtn.onclick = () => {
        chatPop.style.display = "none";
        chatBtn.style.display = "flex";
      };