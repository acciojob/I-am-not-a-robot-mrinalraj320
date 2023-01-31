//your code here

 let heading3=document.createElement("h3");

 heading3.setAttribute("id","h");

 heading3.innerHTML="Please click on the identical tiles to verify that you are not a robot.";

 document.body.prepend(heading3);


// create reset button

let btn=document.createElement("button");
btn.setAttribute("id","reset");
btn.innerHTML="Reset";
btn.style.cssText="display:none;"
document.body.appendChild(btn);

// create verify button

let btn1=document.createElement("button");
btn1.setAttribute("id","verify");
btn1.innerHTML="Verify";
btn1.style.cssText="display:none;"
document.body.appendChild(btn1);



// generate 6th img and push to array

let imgClass=["img1","img2","img3","img4","img5"];
let random=Math.floor((Math.random()*imgClass.length));
let ranImg=imgClass[random];
imgClass.push(ranImg);

// shuffling array by random number

let arr1=[];

let k=0;

while(k<imgClass.length){

    // if(k==imgClass.length){
    //     break;
    // }

    let random2=Math.floor((Math.random()*imgClass.length));
    if(arr1[random2]==undefined){
        arr1[random2]=imgClass[k];
        k++
    }
    else{     //because in this index already img is there
        continue;        //continue loop for diff random index
    }
}



// selecting all img using tag

let images=document.querySelectorAll("img");

// seting attribute to all img

for(let i=0;i<images.length;i++){
    images[i].setAttribute("class",arr1[i]);
    images[i].setAttribute("id",i);
}

// When user has clicked at least one tile.In this case Reset button should show. Clicking on this button takes you to State 1

for(let t of images){
    t.addEventListener("click",userOrRobot)
}


let preImgId="";
let count=0;
function userOrRobot(e){
    btn.style.cssText="display:inline;";
    let currImgId=e.target.id;
    if(currImgId != preImgId){     //When user has clicked both the tiles.In this case Verify button should also show.
        images[currImgId].classList.add("selected");   //highlighting
        count++
        preImgId=currImgId
        if(count==2){
            btn1.style.cssText="display:inline;";

        }
    }
}

btn.addEventListener("click",()=>{
    btn1.style.display="none";
    btn.style.display="none";
    count=0; 

    for(let t of selctedImages){
        t.classList.remove("selected")
    }
})


btn1.addEventListener("click",()=>{   // When the Verify button is clicked.
    let p = document.createElement("p")
    selctedImages = document.querySelectorAll(".selected");
    console.log(selctedImages) 
    let class1 = selctedImages[0].className
    let class2 = selctedImages[1].className

    if(class1==class2){  // Verify button should disappear and You are a human. Congratulations

        p.innerHTML = "You are a human. Congratulations! "

    }
    else{

        p.innerHTML = "We can't verify you as a human. You selected the non-identical tiles "
    }
    btn1.style.display = "none"
    document.body.append(p)    
})