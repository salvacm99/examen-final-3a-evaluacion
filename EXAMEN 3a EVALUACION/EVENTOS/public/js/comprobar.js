function comp(){
  let id=document.getElementById('id').value;
  let nombre=document.getElementById('nombre').value;
  let apellidos=document.getElementById('apellidos').value;
  let precio_hora=document.getElementById('precio_hora').value;
  let error=true;
  if(id==""){
    error=false;
  }
  if (nombre=="") {
    error=false;
  }
  if (apellidos=="") {
    error=false;
  }
  if (precio_hora=="") {
    error=false;
  }
  if (error==false) {
    return false;
  }
}
