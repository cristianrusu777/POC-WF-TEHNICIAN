// Wireframe-only technician credentials handling

function validate(id, pwd) {
  // Mock validation: require non-empty and a minimal shape for id
  return /^T-?\d{3,}$/.test(id) && (pwd?.length || 0) >= 4;
}

function init(){
  const form = document.querySelector('#techLoginForm');
  const id = document.querySelector('#techId');
  const pwd = document.querySelector('#techPwd');
  const error = document.querySelector('#techError');

  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if (!validate(id.value.trim(), pwd.value)) {
      error.style.display = 'block';
      return;
    }
    error.style.display = 'none';
    localStorage.setItem('role','technician');
    localStorage.setItem('techId', id.value.trim());
    window.location = './map-tech.html';
  });
}

init();
