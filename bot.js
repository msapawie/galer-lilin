// === CHAT BUTTON ===
const chatBtn = document.createElement("div");
chatBtn.innerHTML = "Chat Assistant";
chatBtn.style.position = "fixed";
chatBtn.style.bottom = "20px";
chatBtn.style.right = "20px";
chatBtn.style.background = "#c6a667";
chatBtn.style.color = "#fff";
chatBtn.style.padding = "12px 18px";
chatBtn.style.borderRadius = "25px";
chatBtn.style.cursor = "pointer";
chatBtn.style.boxShadow = "0 3px 10px rgba(0,0,0,0.15)";
document.body.appendChild(chatBtn);

// === CHAT BOX ===
const frame = document.createElement("iframe");
frame.src = "https://cloud.flowiseai.com/api/v1/prediction/b23378c8-042a-4966-98e8-042ad732c1ef";  // ganti nanti
frame.style.position = "fixed";
frame.style.bottom = "80px";
frame.style.right = "20px";
frame.style.width = "350px";
frame.style.height = "450px";
frame.style.border = "1px solid #ccc";
frame.style.borderRadius = "12px";
frame.style.display = "none";
document.body.appendChild(frame);

// toggle
chatBtn.addEventListener("click", () => {
    frame.style.display = frame.style.display === "none" ? "block" : "none";
});
