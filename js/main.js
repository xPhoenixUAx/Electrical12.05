(function () {
  const config = window.SITE_CONFIG || {};
  const root = document.documentElement;
  const header = document.querySelector(".site-header");
  const menuButton = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeMenu = document.querySelector(".mobile-close");

  function setText(selector, value) {
    document.querySelectorAll(selector).forEach((node) => {
      node.textContent = value || "";
    });
  }

  function hydrateConfig() {
    setText("[data-company-name]", config.companyName);
    setText("[data-company-legal-name]", config.companyLegalName);
    setText("[data-company-id]", config.companyId);
    setText("[data-phone-text]", config.phoneDisplay);
    setText("[data-email-text]", config.email);
    setText("[data-company-address]", [config.addressLine1, config.addressLine2].filter(Boolean).join(", "));
    setText("[data-service-area]", config.serviceArea);
    setText("[data-business-hours]", config.businessHours);
    setText("[data-footer-text-primary]", config.footerTextPrimary);
    setText("[data-footer-text-secondary]", config.footerTextSecondary);
    setText("[data-disclaimer-short]", config.disclaimerShort);
    setText("[data-disclaimer-full]", config.disclaimerFull);
    setText("[data-copyright-line]", config.copyrightLine);
    setText("[data-cta-primary]", config.ctaPrimary);
    setText("[data-cta-secondary]", config.ctaSecondary);
    setText("[data-year]", new Date().getFullYear());

    document.querySelectorAll("[data-phone-link]").forEach((node) => {
      node.setAttribute("href", `tel:${config.phone || ""}`);
      node.setAttribute("aria-label", config.phoneButtonLabel || "Call");
    });

    document.querySelectorAll("[data-email-link]").forEach((node) => {
      node.setAttribute("href", `mailto:${config.email || ""}`);
    });

    document.querySelectorAll(".site-footer").forEach((footer) => {
      if (footer.querySelector(".footer-disclaimer")) return;
      const bottom = footer.querySelector(".footer-bottom");
      const disclaimer = document.createElement("p");
      disclaimer.className = "footer-disclaimer";
      disclaimer.textContent = config.disclaimerFull || "";
      if (bottom) {
        bottom.before(disclaimer);
      } else {
        footer.append(disclaimer);
      }
    });
  }

  function setHeaderState() {
    if (!header) return;
    header.classList.toggle("is-solid", window.scrollY > 24);
  }

  function openMobileMenu() {
    if (!mobileMenu || !menuButton) return;
    mobileMenu.classList.add("is-open");
    menuButton.setAttribute("aria-expanded", "true");
    root.classList.add("menu-locked");
    const firstLink = mobileMenu.querySelector("a, button");
    if (firstLink) firstLink.focus({ preventScroll: true });
  }

  function closeMobileMenu() {
    if (!mobileMenu || !menuButton) return;
    mobileMenu.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    root.classList.remove("menu-locked");
    menuButton.focus({ preventScroll: true });
  }

  function initMobileMenu() {
    if (!menuButton || !mobileMenu) return;
    menuButton.addEventListener("click", openMobileMenu);
    if (closeMenu) closeMenu.addEventListener("click", closeMobileMenu);
    mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMobileMenu));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && mobileMenu.classList.contains("is-open")) closeMobileMenu();
    });
  }

  function initFaqs() {
    document.querySelectorAll(".faq-item button").forEach((button) => {
      button.addEventListener("click", () => {
        const item = button.closest(".faq-item");
        const isOpen = item.classList.toggle("is-open");
        button.setAttribute("aria-expanded", String(isOpen));
      });
    });
  }

  function initReveal() {
    const items = document.querySelectorAll("[data-reveal]");
    if (!items.length || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );
    items.forEach((item) => observer.observe(item));
  }

  function markActiveNav() {
    const current = window.location.pathname.split("/").pop() || "index.html";
    const servicePages = new Set([
      "services.html",
      "residential-electrical.html",
      "commercial-electrical.html",
      "emergency-electrical.html",
      "ev-smart-energy.html",
      "inspection-panel-upgrades.html",
      "service-detail.html"
    ]);

    document.querySelectorAll(".nav-link, .dropdown-link, .mobile-menu a").forEach((link) => {
      const href = link.getAttribute("href");
      if (href === current) link.setAttribute("aria-current", "page");
    });

    if (servicePages.has(current)) {
      document.querySelector(".services-trigger")?.setAttribute("aria-current", "page");
    }
  }

  function initAboutSwiper() {
    if (!window.Swiper || !document.querySelector(".about-review-swiper")) return;
    new window.Swiper(".about-review-swiper", {
      slidesPerView: 1,
      spaceBetween: 18,
      loop: true,
      speed: 520,
      grabCursor: true,
      pagination: {
        el: ".about-swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".about-swiper-next",
        prevEl: ".about-swiper-prev"
      },
      breakpoints: {
        760: {
          slidesPerView: 2,
          spaceBetween: 18
        },
        1120: {
          slidesPerView: 3,
          spaceBetween: 18
        }
      }
    });
  }

  function initContactFormModal() {
    const form = document.querySelector(".contact-form");
    const modal = document.querySelector(".form-modal");
    if (!form || !modal) return;

    const closeButtons = modal.querySelectorAll("[data-modal-close]");
    const closeModal = () => {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      root.classList.remove("menu-locked");
    };

    const openModal = () => {
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      root.classList.add("menu-locked");
      modal.querySelector("[data-modal-close]")?.focus({ preventScroll: true });
    };

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      openModal();
      form.reset();
    });

    closeButtons.forEach((button) => button.addEventListener("click", closeModal));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && modal.classList.contains("is-open")) closeModal();
    });
  }

  function initPageTransitions() {
    const loader = document.createElement("div");
    loader.className = "page-loader";
    loader.innerHTML = '<div class="loader-inner"><span class="loader-mark"></span><span class="loader-title">VoltWise Electrical</span><span class="loader-line"></span></div>';
    document.body.prepend(loader);

    requestAnimationFrame(() => document.body.classList.add("is-loaded"));
    window.setTimeout(() => loader.classList.add("is-hidden"), 1050);
    window.setTimeout(() => loader.remove(), 1500);

    document.addEventListener("click", (event) => {
      const link = event.target.closest("a[href]");
      if (!link) return;

      const href = link.getAttribute("href");
      if (
        !href ||
        href.startsWith("#") ||
        href.startsWith("tel:") ||
        href.startsWith("mailto:") ||
        link.target === "_blank" ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname && url.hash) return;

      event.preventDefault();
      const exitLoader = document.createElement("div");
      exitLoader.className = "page-loader is-hidden";
      exitLoader.innerHTML = loader.innerHTML;
      document.body.prepend(exitLoader);
      document.body.classList.add("is-leaving");
      requestAnimationFrame(() => exitLoader.classList.remove("is-hidden"));
      window.setTimeout(() => {
        window.location.href = url.href;
      }, 420);
    });

    window.addEventListener("pageshow", () => {
      document.body.classList.remove("is-leaving");
      document.body.classList.add("is-loaded");
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initPageTransitions();
    hydrateConfig();
    setHeaderState();
    initMobileMenu();
    initFaqs();
    initReveal();
    markActiveNav();
    initAboutSwiper();
    initContactFormModal();
    if (window.lucide) window.lucide.createIcons({ strokeWidth: 1.8 });
  });

  window.addEventListener("scroll", setHeaderState, { passive: true });
})();
