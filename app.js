    let intTemp = document.querySelector('.deg');
    let intZone = document.querySelector('.location-timezone');
    let intDescr = document.querySelector('.tempDescription');
    let disVoice = document.querySelector('.disemVoice');
    let globSearch = document.querySelector('.gSearch');
    let searchB = document.querySelector('.search');
    let frankSpch = document.querySelector('.frankTxt');
    let frankSpch1 = document.querySelector('.frankTxt1');
    let esC = document.querySelector('.escape');
    let hpB1 = document.querySelector('.hpBar1');
    let hpB2 = document.querySelector('.hpBar2');
    let searchNew = document.querySelector('.search');
    let location1 = document.querySelector('.location-title');
    let playerBar = document.querySelector('.pHB');
    let frankBar = document.querySelector('.frHB');
   
    searchNew.addEventListener("submit",preventUSU);
    globSearch.addEventListener("submit",preventUSU);
    globSearch.addEventListener("click", preventUSU);

    function preventUSU(e){
      e.preventDefault();

    }
 
    const api = "https://api.openweathermap.org/data/2.5/weather?q=fulton,IL,US&appid=";
    const eventAPI = "https://api.openweathermap.org/data/2.5/weather?q=";

    let arr = api.split(/\s*,\s*/).slice(1,-1);
    

    fetch(api).then(response => {return response.json();
    })
    .then(data => {
        const {temp, description} = data;
        let weatherDescr = data.weather[0].description;
        location1.textContent = data.name + "," + arr + "," +data.sys.country;
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
            voiceChange5();
            esC.style.visibility = "visible";
          frankVoice1();
        }
        );
    }     
    function voiceChange5(){
      globSearch.addEventListener('click', () => {
          disVoice.textContent = "";      
      }
      );
    }  
  
    function frankVoice1(){
            frankSpch.textContent = "Oh, I didn't see you guys there!";
            setTimeout(function() {
                disVoice.textContent = "";
              },900);
              setTimeout(function () {
                frankSpch.textContent = "Speaking of sea, did I ever tell you about my favorite seafood?";
              }, 3000);
              setTimeout(function () {
                frankSpch.textContent = "It's tilapia, the nice guy of fish!";
              }, 7000);
              setTimeout(function() {
                frankSpch.textContent = "Like, tilapia's the kind of fish you'd want to settle down with after salmon's lost it's thrill. You date salmon, but marry tilapia. ";
              }, 9000);
              setTimeout(function () {
                frankSpch.textContent = "Speaking of thrills, I went bungee-jumping once! What a time that was...";
              }, 14000);
              setTimeout(function() {
                frankSpch.textContent = "Just me and big Phil. Man, that guy was never on time...";
              }, 18000);
              setTimeout(function () {
                frankSpch.textContent = "Tardy Phil, that should have been his nickname...";
              }, 19000);
              setTimeout(function() {
                frankSpch.textContent = "Now where was I? Oh yes, tartar sauce...";
              },20000);
    };


      function escapeConvo() {
        esC.addEventListener('click', () => {
          hpB1.style.opacity = 1;
          hpB2.style.opacity = 1;
          playerBar.style.opacity = 1;
          frankBar.style.opacity = 1;
          setTimeout(function() {
      }, 3000);
      wordDuel()
      })};
    
      let playerHP = 1000;
      let frankHP = 1000;
      
      function wordDuel() {
        let damageCalc = Math.floor(Math.random() * 100);
        let damageCalc1 = Math.floor(Math.random() * 90);
        let min = 5, max = 10;
        let rand = Math.floor(Math.random() * (max - min + 1) + min);
          frankHP = frankHP - damageCalc;
          frankBar.value -= frankHP;
          playerHP = playerHP - damageCalc1;
          playerBar.value -= playerHP;
          if(playerHP, frankHP){
          hpB1.textContent ='HP 1000/' + frankHP;
          hpB2.textContent ='HP 1000/' + playerHP;
          }
          if (playerHP <=0){
            if(frankHP <=0){
              return;
            }
            setTimeout(function() {
              disVoice.textContent = "Looks like you got Frank'd! Hit refresh to try again!";
            },100);
              hpB1.style.opacity = 0;
            hpB2.style.opacity = 0;
            frankSpch.remove();
            playerBar.style.opacity = 0;
            frankBar.style.opacity = 0;
            esC.remove();
              }
          if(frankHP <= 0){
            hpB1.style.opacity = 0;
            hpB2.style.opacity = 0;
            playerBar.style.opacity = 0;
            frankBar.style.opacity = 0;
            frankSpch.remove();
            esC.remove();
            disemVoice();
          } 
         }
         function disemVoice(){
          setTimeout(function() {
            frankSpch1.textContent = ".....*Silent Frank Noises*.....";
          },);
          setTimeout(function() {
            disVoice.textContent = "........Frank? Frank?";
          },3200);
          setTimeout(function() {
            disVoice.textContent = "....I'm not sure if you commited a crime or not, breaking his heart like that....";
          }, 6000);
          setTimeout(function() {
            disVoice.textContent = "But you should probably lay low for a while.";
          }, 10000);
          setTimeout(function() {
            disVoice.textContent = "Better check the weather for your new hiding spot, I guess.";
          }, 13000);
          setTimeout(function() {
            disVoice.textContent = "....I dunno....";
          }, 15000);
          setTimeout(function() {
            disVoice.textContent = "...I gotta go back to grad school or something.";
          }, 18000);
          setTimeout(function() {
            disVoice.textContent = "You changed man.";
          }, 20000);
          setTimeout(function() {
            disVoice.textContent = "Anyway, please type the location you'd like the weather of,";
          },24000);
          setTimeout(function() {
            disVoice.textContent = "For US locations, please use a 'City, State, Country' format.";
          }, 28000);
          globSearch.addEventListener('click', newWeather);
      }     
      
      function newWeather(){
        searchNew.addEventListener("submit",preventUS);
        globSearch.addEventListener("submit",preventUS);
        globSearch.addEventListener("click", preventUS);
      
        function preventUS(e){
          e.preventDefault();
          searchNew.value = "";
        }

        const userInputValue = searchNew.value;
        console.log(userInputValue);
        if (userInputValue === null) return;
        else{
        const searchUrl = eventAPI + userInputValue + '&appid=';

        const stID = userInputValue.split(/\s*,\s*/).slice(1,-1);

        fetch(searchUrl).then(response => {return response.json();
        })
        .then(data => {
            const {temp, description} = data;

            let strID = stID +"";
            if(strID.length === 0 || strID.length >= 3){
              location1.textContent = data.name + ","+ data.sys.country;
                 searchNew.value = "";
            }
            else{
              location1.textContent = data.name + "," + strID + "," + data.sys.country;
              searchNew.value = "";
            }
            let weatherDescr = data.weather[0].description;
            intTemp.textContent = Math.floor((data.main.temp -273.15) * 9/5 + 32);
            intDescr.textContent = weatherDescr.charAt(0).toUpperCase() + weatherDescr.slice(1).toLowerCase();
        });
      }}
      escapeConvo();
      voiceChange1();