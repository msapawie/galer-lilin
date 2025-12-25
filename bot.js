/* === CHAT FLOATING BUTTON === */
const chatBtn = document.createElement("div");
chatBtn.innerHTML = "💬";
chatBtn.style.cssText = `
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 56px;
  height: 56px;
  background: #c6a667;
  color: #fff;
  font-size: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 6px 20px rgba(0,0,0,0.25);
  z-index: 9999;
`;
document.body.appendChild(chatBtn);

/* === CHAT CONTAINER === */
const chatBox = document.createElement("div");
chatBox.style.cssText = `
  position: fixed;
  bottom: 90px;
  right: 24px;
  width: 360px;
  height: 480px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  overflow: hidden;
  display: none;
  flex-direction: column;
  z-index: 9999;
`;

/* === HEADER === */
const header = document.createElement("div");
header.style.cssText = `
  background: #3b2f2f;
  color: #fff;
  padding: 14px 16px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
header.innerHTML = `
  <span>Galér Lilin Assistant</span>
  <span id="closeChat" style="cursor:pointer;">✕</span>
`;

chatBox.appendChild(header);

/* === IFRAME CHAT === */
const iframe = document.createElement("iframe");
iframe.src = "https://cloud.flowiseai.com/chatbot/b23378c8-042a-4966-98e8-042ad732c1ef";
iframe.style.cssText = `
  border: none;
  width: 100%;
  height: 100%;
`;
chatBox.appendChild(iframe);

document.body.appendChild(chatBox);

/* === TOGGLE LOGIC === */
chatBtn.addEventListener("click", () => {
  chatBox.style.display = "flex";
});

header.querySelector("#closeChat").addEventListener("click", () => {
  chatBox.style.display = "none";
});

/* === MOBILE RESPONSIVE === */
if (window.innerWidth < 600) {
  chatBox.style.width = "90vw";
  chatBox.style.height = "70vh";
  chatBox.style.right = "5vw";
}
