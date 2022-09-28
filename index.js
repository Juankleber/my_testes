function go(){
  var p1= document.getElementById("pt1")
  var p2= document.getElementById("pt2")
  var p3= document.getElementById("pt3")
 var res= document.getElementById("res")
 
 
 if (p1.value.length == 0 || p2.value.length == 0 || p3.value.length == 0){
   window.alert("erro, tente novamente")
 } else{
   res.innerHTML = `resultado: <br>`
   let inicio = Number(p1.value)
   let fim = Number(p2.value)
   let passo = Number(p3.value)
   if (inicio < fim ){
   for (let c = inicio ; c <= fim; c += passo){
      res.innerHTML += ` ${c} \u{1F449} `
   }
 }else {
   for( c = inicio; c>=fim; c-= passo){
     res.innerHTML += `${c} \u{1F449}`
   }
 }
 }
  //  res.innerHTML += ` \u{1F3C1}`
res.innerHTML+= "fim!"

 
 
 
}
