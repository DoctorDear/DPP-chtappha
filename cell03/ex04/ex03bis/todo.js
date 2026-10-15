$(function () {
    const list = $("#ft_list");

    // jQuery ไม่มี API สำหรับ cookie จึงใช้ document.cookie ของเบราว์เซอร์
    function save() {
        const tasks = list.children("div").map(function () {
            return $(this).text();
        }).get();
        const data = encodeURIComponent(JSON.stringify(tasks));
        document.cookie = `ft_todos=${data}; max-age=31536000; SameSite=Lax`;
    }

    function createTask(text) {
        return $("<div>").text(text);
    }

    list.on("click", "div", function () {
        if (confirm("Delete this task?")) {
            $(this).remove();
            save();
        }
    });

    $("#new").on("click", function () {
        const text = prompt("New task:");
        if (text === null || text.trim() === "") {
            return;
        }
        list.prepend(createTask(text.trim()));
        save();
    });

    const cookies = document.cookie.split(";");
    for (const entry of cookies) {
        const cookie = entry.trim();
        if (cookie.startsWith("ft_todos=")) {
            try {
                const tasks = JSON.parse(decodeURIComponent(cookie.substring(9)));
                if (Array.isArray(tasks)) {
                    for (const text of tasks) {
                        if (typeof text === "string") {
                            list.append(createTask(text));
                        }
                    }
                }
            } catch (error) {
                // ถ้า cookie อ่านไม่ได้ ให้เริ่มด้วยรายการว่าง
            }
        }
    }
});
