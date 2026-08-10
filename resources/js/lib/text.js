export function stripHtml(html = "") {
    if (typeof document === "undefined") {
        return html.replace(/<[^>]*>/g, "");
    }

    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || "";
}

export function truncateText(text = "", maxLength = 200) {
    const clean = stripHtml(text).trim();

    if (clean.length <= maxLength) {
        return clean;
    }

    const cut = clean.substring(0, maxLength);
    const lastSpace = cut.lastIndexOf(" ");

    return (lastSpace > 0 ? cut.substring(0, lastSpace) : cut) + "…";
}
