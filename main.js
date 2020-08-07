//Parte 1:M4
/*
var xhr = new XMLHttpRequest();//da acesso ao ajax
//ajax pega inforçãoes de um servidor

xhr.open('GET','https://api.github.com/users/DenarciKowatski');
xhr.send(null);

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){//4 signiica retorno da função por padrão
        console.log(JSON.parse(xhr.responseText));

    }
}


//Parte 1:M4
var minhaPromise =  function(){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET','https://api.github.com/users/DenarciKowatski');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState ===4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    reject('Erro na requisição');
                }
            }
        }
    });
}
minhaPromise()
    .then(function(response){
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    });
*/

axios.get('https://api.github.com/users/erminiogabriel')
    .then(function(response){
        
        var imgElement = document.createElement('img');
        imgElement.setAttribute('src', response.data.avatar_url);

        var conatinerElement = document.querySelector('#app');
        conatinerElement.appendChild(imgElement);
        console.log(response.data.avatar_url);
    })
    .catch(function(error) {
        console.warn(error);
    });