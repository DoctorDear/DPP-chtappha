(() => {
    const searchForm = document.querySelector("#coffee-search");
    const searchQuery = document.querySelector("#search-query");
    const searchMessage = document.querySelector("#search-message");
    const searchAll = document.querySelector("#search-all");

    if (!searchForm || !searchQuery || !searchMessage || !searchAll) {
        return;
    }

    function showFeedback(message, showAll = false) {
        searchMessage.textContent = message;
        searchAll.hidden = !showAll;
    }

    searchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const query = searchQuery.value.trim().toLowerCase().normalize("NFC");

        if (!query) {
            showFeedback("พิมพ์ชื่อเมนูก่อนค้นหา เช่น ลาเต้ หรือ Latte");
            searchQuery.focus();
            return;
        }

        const menu = coffeeMenus.find((menu) => menu.names.includes(query));
        if (menu) {
            window.location.href = `menu.html#${menu.id}`;
            return;
        }

        showFeedback("ยังไม่เจอเมนูนี้ ลองดูเมนูทั้งหมด", true);
    });

    searchQuery.addEventListener("input", () => showFeedback(""));
})();
