function sendForm() {
 let name = document.querySelector("input[name = 'name']").value;
 let email = document.querySelector("input[name = 'email']").value;
 let keyword = document.querySelector("input[name = 'keyword']").value;
 let programmingLevel = document.querySelector("select[name = 'level'] option:checked").value
 let onlineClasses = document.querySelectorAll("input[name = 'interested']:checked")
 let message = document.getElementById('msg-name');


 if(form.name.value == "" || form.name.value == null || form.name.value.length < 3){
   form.name.style.border = '2px solid red';
     message.innerHTML = 'Preencha este campo'; 
     return false;
  } else {
    form.name.style.border = '2px solid green';
    message.innerHTML = '';
  }

  if(form.email.value.indexOf("@") == -1 || form.email.value.indexOf(".") == -1 
    || form.email.value == ""){
    form.email.style.border = '2px solid red';
    message.innerHTML = 'Preencha este campo';
    return false;
  } else {
    form.email.style.border = '2px solid green';
    message.innerHTML = '';
  }

  if(form.keyword.value == '' || form.keyword.value !== 'programming2022'){
    form.keyword.style.border = '2px solid red';
    message.innerHTML = 'Preencha este campo';
    return false;
  } else {
    form.keyword.style.border = '2px solid green';
    message.innerHTML = '';
  }

  if(form.level.selectedIndex == 0){
    alert('Select an option');
    return false;
  }

  if(form.interested[0].checked == false && form.interested[1].checked == false){
    alert('Select an option');
    return false;
  }

  return window.location.href = 'form-valid.html';
}