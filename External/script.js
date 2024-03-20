const container = document.querySelector(".container");
const qrInput = container.querySelector("input");
const generateBtn = container.querySelector("button");
const qrImg = container.querySelector("img");
let preValue = '';

generateBtn.addEventListener("click", () => {
      const qrValue = qrInput.value.trim();
      if (!qrValue || preValue === qrValue) return;
      preValue = qrValue;
      generateBtn.innerText = "Generating QR Code...";
      qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;

      qrImg.onload = () => {
            container.classList.add("active");
            generateBtn.innerText = "Generate QR Code";
      };
});

qrInput.addEventListener("input", () => {
      if (!qrInput.value.trim()) {
            container.classList.remove("active");
            preValue = "";
      }
});
