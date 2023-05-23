let swap = (a, b) =>{

  let temp = a;
  a = b;
  b = temp
  return console.log(a,b)

}
swap(5,6)

var adicionar = () =>{

  var num = document.getElementById('valor').value;

  var lista = document.getElementById('lista').innerHTML;

  lista += '<li>'+num+'</li>'

  document.getElementById('lista').innerHTML = lista;

  document.getElementById('valor').value = '';
  
}

var ordenar = () =>{
  var todos = []
  var lis = document.getElementsByTagName('li')

  for (var i =0; i < lis.length; i++){
      todos.push(Number(lis[i].innerHTML))
  }
  todos.sort((a,b) => {
      if(a>b) return 1;
      if(a<b) return -1;
      return 0;
  });
  var lista = document.getElementById('lista').innerHTML;
  lista = ''

  for (var j = 0; j < todos.length; j++){


      lista += '<li>'+todos[j]+'</li>'
      
      document.getElementById('lista').innerHTML = lista;
  }
}

var misturar = ()=>{
  var todos = []
  var lis = document.getElementsByTagName('li')

  for (var i =0; i < lis.length; i++){
      todos.push(Number(lis[i].innerHTML))
  }

  todos.sort(() => Math.random() - 0.5);

  var lista = document.getElementById('lista').innerHTML;
  lista = ''

  for (var j = 0; j < todos.length; j++){


      lista += '<li>'+todos[j]+'</li>'
      
      document.getElementById('lista').innerHTML = lista;
  }

}