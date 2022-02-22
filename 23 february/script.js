
    var commandersall=document.getElementById("commandersall");
    var commanders = ['Бесенов Алтынбек Садыкович', 'Вашкевич Василий', 'Дудник Владимир', 'Игнатов Валерий', 'Жданов Вячеслав', 'Курилов Сергей', 'Литвинов Владимир', 'Малыга Николай', 'Орябинский Валерий', 'Попутняк Сергей', 'Трефилов', 'Бугаенко Александр', 'Волошин Александр', 'Дорохин Анатолий', 'Киптенко Сергей', 'Гринько Сергей', 'Кривоносов Алексей', 'Мишачев Анатолий', 'Мосин  Николай', 'Овчинников Александр', 'Палащенко Александр', 'Панин Александр', 'Попов Георгий', 'Поповичь Александр', 'Просандеев', 'Скоробагатов Виктор', 'Сухотин Алексей', 'Хихловский', 'Яшунин Евгений', 'Яцура Анатолий', 'Денисов'];
    var img=[]; 
    var img2=[];
    for(var i=0;i<=31;i++){
        img[i-1]=i+".jpg";
        img2[i-1]=i+"g.jpg"  
    }
    var gg=0;

    var wrapper=document.createElement("div");
    wrapper.className="commanders__inner";
    wrapper.id="commanders__inner";
    commandersall.appendChild(wrapper);
    var wrapperId=document.getElementById("commanders__inner");
    
    for(var i=0;i<=commanders.length-1;i++){
        var commander=document.createElement("div");
        commander.className="commander";
        var imgcom1=document.createElement("img");
        imgcom1.src="img/"+img[i];
        var imgcom2=document.createElement("img");
        imgcom2.src="img/"+img2[i];
        imgcom2.onerror=function(){
            this.style.display="none";
        }
        var h=document.createElement('h2');
        h.innerHTML=commanders[i];
        wrapperId.appendChild(commander);
        commander.appendChild(imgcom1);
        commander.appendChild(imgcom2);
        commander.appendChild(h);
        
    }
    

