setTimeout(()=>{
 console.log("inside set time out")
},4000)

function x(y){
    console.log("inside x block")
    y()
}

x(function y(){
    console.log("inside y block")
})