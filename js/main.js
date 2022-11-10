window.addEventListener('load', () => {

    // var elem = document.querySelector('.grid');
    const iso = new Isotope( 'section', {
      // options
      itemSelector: 'article',
      /* layoutMode: 'fitRows' */
    });
    const filterBtn = document.querySelectorAll('.btns>li'); //.btn>li들을 변수에
    for(let el of filterBtn){
        el.addEventListener("click", (e)=>{
            e.preventDefault();
            for(let el of filterBtn){
                //클릭을 할때 각 아이템(버튼)에 반복
                el.classList.remove("on");
            }

            //클릭한 버튼에 class를 넣어줌. 
            e.currentTarget.classList.add("on");
            console.log("current", e.currentTarget);
            //클릭한 버튼에 있는 a태그 안의 속성 href의 value값을 가져옴.
            const filtering = e.currentTarget.querySelector('a').getAttribute("href");

            console.log(filtering);
            iso.arrange({filter:filtering}) 
            //jquery를 이용하지 않을때는 arrange이용.
        })
    }

    const items = document.querySelectorAll("article");
    const pop = document.querySelector("#popup")

    for(const aa of items){

      
        aa.addEventListener("click", (e)=>{
            const winWidth = document.body.clientWidth;
            if(winWidth > 767){ //화면 너비가 767px 보다 컸을때만 작동
                    //클릭한 article img의 src값, h2, p를 변수에 저장. 
            const img = e.currentTarget.querySelector("img").getAttribute("src");
            const title = e.currentTarget.querySelector("h2").innerText;
            const desc = e.currentTarget.querySelector("p").innerText;

            // pop에 위의 변수를 적용시키기. 

            pop.querySelector("img").setAttribute("src", img);
            pop.querySelector("h2").innerText = title;
            pop.querySelector("p").innerText = desc;

            pop.classList.add("on");
            }
        })
    }
    //popup창을 클릭하면 pop이 사라짐
    pop.addEventListener("click", ()=>{
        pop.classList.remove("on")
    })
})

