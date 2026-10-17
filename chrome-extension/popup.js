document.getElementById('fillBtn').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: fillRandomly
  }, (results) => {
    const status = document.getElementById('status');
    if (results && results[0].result.success) {
      status.className = 'status success';
      status.textContent = `✓ ${results[0].result.count} soru dolduruldu!`;
    } else {
      status.className = 'status error';
      status.textContent = '✕ Form bulunamadı';
    }
  });
});

function fillRandomly() {
  const radioGroups = {};
  const allRadios = document.querySelectorAll('input[type="radio"]');
  
  if (allRadios.length === 0) {
    return { success: false, count: 0 };
  }
  
  // Group radios by name
  allRadios.forEach(radio => {
    if (!radioGroups[radio.name]) {
      radioGroups[radio.name] = [];
    }
    radioGroups[radio.name].push(radio);
  });
  
  // Select random radio from each group
  Object.values(radioGroups).forEach(group => {
    const randomIndex = Math.floor(Math.random() * group.length);
    group[randomIndex].click();
  });
  
  return { success: true, count: Object.keys(radioGroups).length };
}
