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

  // Estilizar enlace de WhatsApp directo con animación
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
    enlaceWhatsApp.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";

    enlaceWhatsApp.addEventListener("mouseenter", () => {
      enlaceWhatsApp.style.transform = "scale(1.05)";
      enlaceWhatsApp.style.boxShadow = "0 0 10px #25D366";
    });
    enlaceWhatsApp.addEventListener("mouseleave", () => {
      enlaceWhatsApp.style.transform = "scale(1)";
      enlaceWhatsApp.style.boxShadow = "none";
    });
  }

  // Centrar texto informativo previo al botón de WhatsApp
  const textoContacto = Array.from(document.querySelectorAll("#contacto p")).find(p => p.textContent.includes("¿Tienes dudas?"));
  if (textoContacto) {
    textoContacto.style.textAlign = "center";
    textoContacto.style.marginBottom = "10px";
  }

  // Borde igual a inputs en encabezados y centrado
  document.querySelectorAll("section h2").forEach(h2 => {
    h2.style.border = "1px solid #800000";
    h2.style.borderRadius = "6px";
    h2.style.padding = "12px 24px";
    h2.style.display = "inline-block";
    h2.style.textAlign = "center";
    h2.style.margin = "20px auto";
    h2.style.color = "#fff";
    h2.style.backgroundColor = "rgba(0,0,0,0.4)";
    h2.style.boxShadow = "0 0 8px rgba(128, 0, 0, 0.6)";
  });

  // Botón de Instagram atractivo bajo el formulario
  const contactoSection = document.getElementById("contacto");
  if (contactoSection) {
    const instaBtn = document.createElement("a");
    instaBtn.href = "https://instagram.com/caribbean.air.designs";
    instaBtn.target = "_blank";
    instaBtn.innerHTML = "<img src='https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png' alt='Instagram' style='height: 24px; vertical-align: middle; margin-right: 8px;'>Sígueme en Instagram para ver más trabajos";
    instaBtn.style.display = "flex";
    instaBtn.style.alignItems = "center";
    instaBtn.style.justifyContent = "center";
    instaBtn.style.background = "linear-gradient(90deg, #833ab4, #fd1d1d, #fcb045)";
    instaBtn.style.color = "white";
    instaBtn.style.fontWeight = "bold";
    instaBtn.style.textDecoration = "none";
    instaBtn.style.fontSize = "1.1rem";
    instaBtn.style.margin = "20px auto";
    instaBtn.style.padding = "10px 20px";
    instaBtn.style.borderRadius = "8px";
    instaBtn.style.maxWidth = "fit-content";
    instaBtn.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
    instaBtn.addEventListener("mouseenter", () => {
      instaBtn.style.transform = "scale(1.05)";
      instaBtn.style.boxShadow = "0 0 12px #fcb045";
    });
    instaBtn.addEventListener("mouseleave", () => {
      instaBtn.style.transform = "scale(1)";
      instaBtn.style.boxShadow = "none";
    });
    contactoSection.appendChild(instaBtn);
  }

  // Animación de precarga con logo
  const loader = document.createElement("div");
  loader.id = "preloader";
  loader.style.position = "fixed";
  loader.style.top = 0;
  loader.style.left = 0;
  loader.style.width = "100vw";
  loader.style.height = "100vh";
  loader.style.backgroundColor = "#000";
  loader.style.zIndex = 9999;
  loader.style.display = "flex";
  loader.style.alignItems = "center";
  loader.style.justifyContent = "center";
  loader.style.transition = "opacity 1s ease";

  const logo = document.createElement("img");
  logo.src = "images/logo.png";
  logo.alt = "Logo Caribbean Air Designs";
  logo.style.width = "180px";
  logo.style.animation = "fadeZoom 2.5s ease-out forwards";

  loader.appendChild(logo);
  document.body.appendChild(loader);

  setTimeout(() => {
    loader.style.opacity = 0;
    setTimeout(() => document.body.removeChild(loader), 1000);
  }, 2000);
});
