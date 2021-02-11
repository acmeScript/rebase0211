//кейс
new MutationObserver(ms => {
  for (const fr of getAddedIframes(ms)) {
    fr.src = iframe.src.replace("http://localhost", "http://bowerhost");
  }
}).observe(document.body, {
  subtree: true,
  childList: true
});

//реализация
const iframe = createIframe(frameUrl);
const mo = new MutationObserver(mutations => reject(new IntersectionError()));
mo.observe(iframe, {
  attributes: true
});
document.body.appendChild(frame);
