    let intTemp = document.querySelector('.deg');
    let intZone = document.querySelector('.location-timezone');
    let intDescr = document.querySelector('.tempDescription');
    let disVoice = document.querySelector('.disemVoice');
    let globSearch = document.querySelector('.gSearch');
    let frankSpch = document.querySelector('.frankTxt');
    let esC = document.querySelector('.escape');
    let hpB1 = document.querySelector('.hpBar1');
    let hpB2 = document.querySelector('.hpBar2');

    
   
    
    const api = "https://api.openweathermap.org/data/2.5/weather?q=fulton,IL,US&appid=";
    const eventAPI = "api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}";

    fetch(api).then(response => {return response.json();
    })
    .then(data => {
        const {temp, description} = data;
        let weatherDescr = data.weather[0].description;
        intTemp.textContent = Math.floor((data.main.temp -273.15) * 9/5 + 32);
        intDescr.textContent = weatherDescr.charAt(0).toUpperCase() + weatherDescr.slice(1).toLowerCase() + " at Frank's House";
    });
      
      
          function voiceChange1(){
        globSearch.addEventListener('click', () => {
            disVoice.textContent = "By Global Search, you mean Frank's House right?"
            voiceChange2()
        });
    }     
             function voiceChange2(){
        globSearch.addEventListener('click', () => {
            disVoice.textContent = "Whose house? Frank's House, am I right?"
            voiceChange3()
        });
    }     
    function voiceChange3(){
        globSearch.addEventListener('click', () => {
            disVoice.textContent = "C'mon! You're going to wake him up, then we'll never get out of here!"
            voiceChange4()
        });
    }     
    function voiceChange4(){
        globSearch.addEventListener('click', () => {
            disVoice.textContent = "Awww, here he comes!";
            esC.style.opacity = 1;
            frankVoice1()
        });
    }     
    
    function frankVoice1(){
            frankSpch.textContent = "Oh, I didn't see you guys there!";
            setTimeout(function() {
                disVoice.textContent = "";
              }, 1000);
              setTimeout(function() {
                frankSpch.textContent = "Speaking of see, did I ever tell you about my favorite seafood?";;
              }, 4000);
              setTimeout(function() {
                frankSpch.textContent = "It's tilapia, the nice guy of fish!";
              }, 10000);
              setTimeout(function() {
                frankSpch.textContent = "Like, tilapia's the kind of fish you'd want to settle down with after salmon's lost it's thrill. You date salmon, but marry tilapia. ";
              }, 13000);
              setTimeout(function() {
                frankSpch.textContent = "Speaking of thrills, I went bungee-jumping once! What a time that was...";
              }, 16000);
              setTimeout(function() {
                frankSpch.textContent = "Just me and big Phil. Man, that guy was never on time...";
              }, 18000);
    };     

      function escapeConvo() {
        esC.addEventListener('click', () => {
          hpB1.style.opacity = 1;
          hpB2.style.opacity = 1;
          setTimeout(function() {
            disVoice.textContent = "";
      }, 3000);
      wordDuel()
      })};
    
      let playerHP = 1000;
      let frankHP = 1000;
      
      function wordDuel() {
        
        let damageCalc = Math.floor(Math.random() * 100);
        let damageCalc1 = Math.floor(Math.random() * 100);
          frankHP = frankHP - damageCalc;
          if(playerHP, frankHP){
          hpB1.textContent ='HP 1000/' + frankHP;
          }
          setTimeout(function() {
            playerHP = playerHP - damageCalc1;
            hpB2.textContent ='HP 1000/' + playerHP;
          }, 2800);
          if(frankHP <=0){
            hpB1.style.opacity = 0;
            hpB2.style.opacity = 0;
            frankSpch.style.opacity = 0;
            disemVoice();
          }
         }
         
         function disemVoice(){
          setTimeout(function() {
            disVoice.textContent = ".....Frank? Frank?";
          },1000);
          setTimeout(function() {
            disVoice.textContent = "....I'm not sure if you commited a crime or not....";
          }, 4000);
          setTimeout(function() {
            disVoice.textContent = "But you should probably lay low for a while...";
          }, 10000);
          setTimeout(function() {
            disVoice.textContent = "Better check the weather for your new hiding spot, I guess...";
          }, 13000);
          setTimeout(function() {
            disVoice.textContent = "...I gotta go back to grad school or something...You changed man.";
          }, 18000);
      }     
      
     
      escapeConvo();
      voiceChange1();