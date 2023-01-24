let input= document.querySelector('#inputValue');
let button= document.querySelector('#btn');
let nameArea= document.querySelector('#nameArea');
let phoneArea= document.querySelector('#phoneArea');
let carrierArea= document.querySelector('#carrierArea')
let nodata= document.querySelector('#nodata')
let emptyinput= document.querySelector('#em')
let textBox= document.querySelector('.text-box')
//selecting elements


const arr=[{
        mobileno : "8726454407",
        name:"Mustafa Ameer",
        carrier:"BSNL"
},{
    mobileno : "6394281286",
        name:"Mustafa Ameer",
        carrier:"JIO-East"
},{
    mobileno : "9999999990",
        name:"Don",
        carrier:"Top-Secret"
},{
    mobileno : "0000000001",
        name:"Vidhayak Ji",
        carrier:"Free-Wala"
},{
    mobileno : "6394893881",
        name:"Manshia Fatima ",
        carrier:"JIO-East"
},{
    mobileno : "9415376827",
        name:"Mehdi Abbas",
        carrier:"BSNL"
},{
    mobileno : "7387794494",
        name:"Wasim Khan ",
        carrier:"Airtel"
},{
    mobileno : "6387939279",
        name:"Kalbe Abbas",
        carrier:"JIO-East"
},{
    mobileno : "8887652633",
        name:"Kalbe Abbas",
        carrier:"JIO-East"
},{
    mobileno : "7905500470",
        name:"Nafees Fatima",
        carrier:"JIO-East"
}]
     


button.addEventListener('click',show)

function show(){
    //checking first if it is empty or not
    if(input.value!=''){
        //now since it is not empty using loop to iterate inside array
    for(let i=0; i<arr.length;i++){
        //condition if input value match array value odf mobileno
        if(arr[i].mobileno === input.value ){
            //display 
            textBox.classList.add('show')

            nameArea.innerText= arr[i].name;
            phoneArea.innerText=arr[i].mobileno;
            carrierArea.innerText=arr[i].carrier;
            input.value=''
            break;
        } else{
            //if not matches, then storing i and suming up, later will use to check arr.length with sum.
            
            let sum =0;
            sum += i+1;
           //here sum is equal to array.length 
           
            if(sum==arr.length){
                //showing error
                nodata.classList.add('show')
                input.value=''
                setTimeout(function(){nodata.classList.remove('show')},3000)
            }
            
        }
        

    }
}else{
    //showing erroe
    emptyinput.classList.add('show')
    setTimeout(function(){emptyinput.classList.remove('show')},2500)
}

}