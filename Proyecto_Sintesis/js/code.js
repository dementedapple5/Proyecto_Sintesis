var argLs = 'Argumentos:\n -a--> No ignora archivos ocultos\n -l--> Lista el contenido con informacion extra\n '
var argIfc = 'Arumentos:\n '
argLs.replace('\n', '<br />')
new Vue({
  el: 'body',
  data:{
    message: '',

    comandos:[
      {nombre:'cd', descripcion:'Descripcion: Cambiar de carpetas', args:''},
      {nombre:'ifconfig', descripcion:'Descripcion: Verificar estado de la red', args:''},
      {nombre:'ls', descripcion:'Descripcion: listar contenido de un directorio', args:argLs}
    ]
  },
})
