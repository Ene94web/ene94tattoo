// Forzar scroll al inicio en móviles
window.addEventListener("load", () => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
});

// Efecto fade-in y fade-out suave al hacer scroll
document.addEventListener("DOMContentLoaded", () => {
  const fadeIns = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        entry.target.classList.remove("hidden");
      } else {
        entry.target.classList.remove("visible");
        entry.target.classList.add("hidden");
      }
    });
  }, {
    threshold: 0.1
  });

  fadeIns.forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
  });
});

// Dinamismo: letras con vibración suave al pasar el mouse
document.querySelectorAll(".logo, h2, h3").forEach(el => {
  el.addEventListener("mouseenter", () => {
    el.classList.add("vibrar");
  });
  el.addEventListener("mouseleave", () => {
    el.classList.remove("vibrar");
  });
});

// Botón flotante de WhatsApp (responsive y destacado)
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.createElement("a");
  btn.href = "https://wa.me/34668582319";
  btn.target = "_blank";
  btn.innerHTML = "💬";
  btn.className = "whatsapp-float";
  document.body.appendChild(btn);

  // Aumentar tamaño imagen tatuador en escritorio
  const fotoTatuador = document.querySelector(".sobre-mi img");
  if (fotoTatuador && window.innerWidth > 768) {
    fotoTatuador.style.width = "300px";
  }

  // Estilizar enlace de WhatsApp directo
  const enlaceWhatsApp = document.querySelector("a[href*='wa.me']");
  if (enlaceWhatsApp) {
    enlaceWhatsApp.innerHTML = "<img src='https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg' alt='WhatsApp' style='height: 24px; vertical-align: middle; margin-right: 8px;'>Habla conmigo por WhatsApp";
    enlaceWhatsApp.style.display = "flex";
    enlaceWhatsApp.style.alignItems = "center";
    enlaceWhatsApp.style.justifyContent = "center";
    enlaceWhatsApp.style.color = "#25D366";
    enlaceWhatsApp.style.fontWeight = "bold";
    enlaceWhatsApp.style.textDecoration = "none";
    enlaceWhatsApp.style.fontSize = "1.2rem";
    enlaceWhatsApp.style.margin = "30px auto";
    enlaceWhatsApp.style.gap = "10px";
    enlaceWhatsApp.style.padding = "10px 20px";
    enlaceWhatsApp.style.borderRadius = "8px";
    enlaceWhatsApp.style.border = "2px solid #25D366";
    enlaceWhatsApp.style.maxWidth = "fit-content";
  }
});
