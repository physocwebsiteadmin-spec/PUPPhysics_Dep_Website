function openModal(id) {
  document.getElementById(id).style.display = "block";
}
function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

document.getElementById('link1').onclick = () => openModal('modal1');
document.getElementById('link2').onclick = () => openModal('modal1');
document.getElementById('link3').onclick = () => openModal('modal2');
document.getElementById('link4').onclick = () => openModal('modal3');
document.getElementById('link5').onclick = () => openModal('modal4');
document.getElementById('link6').onclick = () => openModal('modal5');
document.getElementById('link7').onclick = () => openModal('modal6');
document.getElementById('link8').onclick = () => openModal('modal7');
document.getElementById('link9').onclick = () => openModal('modal8');

document.querySelectorAll('.close').forEach(button => {
  button.onclick = function() {
    closeModal(this.getAttribute('data-target'));
  };
});
window.onclick = function(event) {
  if (event.target.className === 'modal') {
    event.target.style.display = "none";
  }
};
