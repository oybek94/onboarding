function addclass(index1, index2) {
   var check = document.getElementById(index1);
   console.log(check);
   check.classList.toggle('check-active');
   let checked = document.getElementById(index2);
   checked.toggleAttribute('checked');
}

