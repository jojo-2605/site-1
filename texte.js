/* crée une constance pour faire appelle a la classe hidden*/
const $section = document.querySelector(".hidden");
/* crée une constance pour faire appelle a l'id show-link*/
const $linkShow = document.querySelector("#show-link");

/* on fais appel a la constance linkShow et on ajoute un evenement de click */
$linkShow.addEventListener("click", (event) => {
  /* on arrête l'action par défaut de l'evenement */
  event.preventDefault();
  /* on fais appelle a la constance en ayant la possibilité de faire un toggle sur la classe hidden */
  $section.classList.toggle("hidden");
});
