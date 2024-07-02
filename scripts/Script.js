window.addEventListener('popstate', react);

const pushUrl = (href) => {
  history.pushState({}, '', href);
  window.dispatchEvent(new Event('popstate'));
};

function react() {
    
}