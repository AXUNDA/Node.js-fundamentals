let courseName = `Back end`
let printNumbers = (start:number,end:number):void=>{
      let temp:String = ""
      if(start < end){
            for(let i:number = start; i <= end; i++){
                  temp +=`${i}`
            }
            console.log(temp)

      }else{
            console.log("invalid")
      }

}
 printNumbers(1,10)