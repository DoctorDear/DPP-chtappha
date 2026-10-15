(() => {
    const nav = document.querySelector("nav");
    const toggle = document.querySelector(".nav-toggle");
    const menu = document.querySelector("#site-menu");
    if (!nav || !toggle || !menu) return;

    function setOpen(open) {
        nav.classList.toggle("is-open", open);
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "ปิดเมนู" : "เปิดเมนู");
        toggle.querySelector("span").textContent = open ? "×" : "☰";
    }

    toggle.addEventListener("click", () => {
        setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    menu.addEventListener("click", (event) => {
        if (event.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
            setOpen(false);
            toggle.focus();
        }
    });
    document.addEventListener("click", (event) => {
        if (!nav.contains(event.target)) setOpen(false);
    });
    window.matchMedia("(max-width: 700px)").addEventListener("change", () => setOpen(false));
    nav.classList.add("nav-ready");
})();
