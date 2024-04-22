window.onload = function() {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
  
    // Defina as dimensões do canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    // Carregue a imagem
    var image = new Image();
    image.onload = function() {
      context.drawImage(image, 0, canvas.height - image.height, image.width, image.height);
    };
    image.src = 'caminho/para/sua/imagem.jpg'; // Substitua com o caminho da sua imagem
  };
  