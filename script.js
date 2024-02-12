let noButtonClickCount = 0; // Contador para el botón "No"
let noButtonState = 0; // Estado actual del botón "No"

// Mostrar el gif inicial
document.getElementById('gifContainer').style.display = 'block';
document.body.onkeypress = function(){document.body.classList.toggle('liked')}

document.getElementById('siBtn').addEventListener('click', function() {
    // Ocultar el gif triste y mostrar el gif feliz
    document.getElementById('sadGifContainer14').style.display = 'none';
    document.getElementById('sadGifContainer').style.display = 'none';
    document.getElementById('sadGifContainer1').style.display = 'none';
    document.getElementById('sadGifContainer2').style.display = 'none';
    document.getElementById('gifContainer').style.display = 'none';
    document.getElementById('happyGifContainer').style.display = 'block';

    // Ocultar los botones "Pregunta Sí" y "No "
    document.getElementById('question').style.display = 'none';
    document.getElementById('siBtn').style.display = 'none';
    document.body.classList.add('bg-green');
    document.getElementById('noBtn').style.display = 'none';

    // Mostrar el mensaje específico
    document.getElementById('messageContainer').style.display = 'block';
    if(noButtonState == 1000){
        document.getElementById('messageContainer').innerHTML = 'Bueno al final sí iremos sí o sí jajajaja';
    }
    else {
        document.getElementById('messageContainer').innerHTML = 'Besitos, te amo mucho <3 jeje';
    }

    // Mostrar otro gif después de 3 segundos
    setTimeout(function() {
        document.getElementById('happyGifContainer').style.display = 'none';
        document.getElementById('happyGifContainer2').style.display = 'block';
    }, 1000);

    setTimeout(function() {
        document.getElementById('happyGifContainer2').style.display = 'none';
        document.getElementById('happyGifContainer3').style.display = 'block';
    }, 2000);
    setTimeout(function() {
        document.getElementById('happyGifContainer3').style.display = 'none';
        document.getElementById('happyGifContainer4').style.display = 'block';
    }, 3000);  
});


document.getElementById('noBtn').addEventListener('click', function() {
    switch (noButtonState) {
        case 0:
            // Primera vez haciendo clic en "No"
            document.getElementById('happyGifContainer').style.display = 'none';
            document.getElementById('gifContainer').style.display = 'none';
            document.getElementById('sadGifContainer').style.display = 'block';

            // Modificar el botón "No"
            document.getElementById('noBtn').innerHTML = 'Tas segura? :(';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
          
            
            document.getElementById('siBtn').style.fontSize = '40px';
            document.getElementById('siBtn').style.padding = '20px 40px';
        
            noButtonClickCount++;
            noButtonState++;
            break;

        case 1:
            // Segunda vez haciendo clic en "No"

            document.getElementById('noBtn').innerHTML = "¿Eres mi hater? Si ya sabía :'(";
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'block';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '50px';
            document.getElementById('siBtn').style.padding = '30px 50px';
        
            noButtonState++;
            break;

        case 2:
           
            document.getElementById('noBtn').innerHTML = 'Me odias creoooooo';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'block';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '60px';
            document.getElementById('siBtn').style.padding = '40px 60px';
        
            noButtonState++;
            break;
        
        case 3:
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'none';
            document.getElementById('sadGifContainer3').style.display = 'block';

            document.getElementById('noBtn').innerHTML = 'Te gusta el cheesecake de maracuya?';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '70px';
            document.getElementById('siBtn').style.padding = '50px 70px';
        
            noButtonState++;
            break;
        case 4:
            document.getElementById('sadGifContainer3').style.display = 'none';
            document.getElementById('sadGifContainer4').style.display = 'block';

            document.getElementById('noBtn').innerHTML = 'Ya, ahora sí de verdad. Marca sí jeje';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '80px';
            document.getElementById('siBtn').style.padding = '60px 80px';
         
            noButtonState++;
            break;
        case 5:
            document.getElementById('sadGifContainer4').style.display = 'none';
            document.getElementById('sadGifContainer5').style.display = 'block';

            document.getElementById('noBtn').innerHTML = 'mayonesa';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '90px';
            document.getElementById('siBtn').style.padding = '70px 90px';

            noButtonState++;
            break;
        case 6:
            document.getElementById('sadGifContainer5').style.display = 'none';
            document.getElementById('sadGifContainer6').style.display = 'block';

            document.getElementById('noBtn').innerHTML = 'Si sigues poniendo no, Gomi no te va hablar';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '100px';
            document.getElementById('siBtn').style.padding = '80px 100px';
            
            noButtonState++;
            break;
        case 7:
            document.getElementById('sadGifContainer6').style.display = 'none';
            document.getElementById('sadGifContainer7').style.display = 'block';
            document.getElementById('noBtn').innerHTML = 'Uhmnn';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '120px';
            document.getElementById('siBtn').style.padding = '90px 120px';
  
            noButtonState++;
            break;
        case 8:
            document.getElementById('sadGifContainer7').style.display = 'none';
            document.getElementById('sadGifContainer8').style.display = 'block';
            document.getElementById('noBtn').innerHTML = 'ALO?';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            document.getElementById('siBtn').style.fontSize = '140px';
            document.getElementById('siBtn').style.padding = '100px 140px';
       
            noButtonState++;
            break;

        case 9:
            document.getElementById('sadGifContainer8').style.display = 'none';
            document.getElementById('sadGifContainer9').style.display = 'block';
            document.getElementById('noBtn').innerHTML = 'Sí';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '160px';
            document.getElementById('siBtn').style.padding = '110px 160px';
          
            noButtonState++;
            break;

        case 10:
            document.getElementById('sadGifContainer9').style.display = 'none';
            document.getElementById('sadGifContainer10').style.display = 'block';
            document.getElementById('noBtn').innerHTML = 'Está bien, ya no preguntaré...';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

         
            document.getElementById('siBtn').style.fontSize = '180px';
            document.getElementById('siBtn').style.padding = '120px 180px';
    
            noButtonState++;
            break;
        case 11:
            document.getElementById('sadGifContainer10').style.display = 'none';
            document.getElementById('sadGifContainer11').style.display = 'block';
            document.getElementById('noBtn').innerHTML = 'Mentira, YO sé que QUIERES';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            document.getElementById('siBtn').style.fontSize = '200px';
            document.getElementById('siBtn').style.padding = '130px 200px';
            
            noButtonState++;
            break;
        
        case 12:
            document.getElementById('sadGifContainer11').style.display = 'none';
            document.getElementById('sadGifContainer12').style.display = 'block';
            document.getElementById('noBtn').innerHTML = 'Está bien, me boi';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '220px';
            document.getElementById('siBtn').style.padding = '140px 220px';

            noButtonState++;
            break;
        
        case 13:
            document.getElementById('sadGifContainer12').style.display = 'none';
            document.getElementById('sadGifContainer13').style.display = 'block';
            document.getElementById('noBtn').innerHTML = 'no me caes';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            document.getElementById('siBtn').style.fontSize = '240px';
            document.getElementById('siBtn').style.padding = '150px 240px';
         
            noButtonState++;
            break;
        
        case 14:
            document.getElementById('sadGifContainer13').style.display = 'none';
            document.getElementById('sadGifContainer14').style.display = 'block';
            document.getElementById('noBtn').innerHTML = 'bueno lo haremos a la mala';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '260px';
            document.getElementById('siBtn').style.padding = '160px 260px';
            
            noButtonState++;
            break;
        
        case 15:
                document.getElementById('noBtn').innerHTML = 'por favooooooor';
                document.getElementById('noBtn').style.backgroundColor = '#F1330A';
                
                document.getElementById('sadGifContainer14').style.display = 'none';
                document.getElementById('gifContainer').style.display = 'block';
                document.getElementById('happyGifContainer').style.display = 'none';
                
                // Vuelve al estado 0
                noButtonState = 1000;
                var siBtn = document.getElementById('siBtn');
                siBtn.click();
                break;
        

        default:
            // Por si acaso, maneja cualquier otro caso aquí
            
            break;
    }
});


