const stars = document.querySelectorAll('ion-icon')
const rating = document.querySelector('img')
let arr = new Array(5)
arr.fill(false)
let score = 0
rating.innerHTML = score
function mark(index){

    for(let i = 1;i<=index;i++){
        arr[i-1] = true
        let query = `ion-icon:nth-child(${i})`
        document.querySelector(query).setAttribute('name','star')
    }
}
function unmark(index){
    for(let i = index+1;i<=5;i++){
        arr[i-1] = false
        let query = `ion-icon:nth-child(${i})`
        document.querySelector(query).setAttribute('name','star-outline')
    }
}

stars.forEach(ele => {
    ele.addEventListener('click',e=>{
        
        let index = parseInt(e.target.id)
        if(arr[index-1]){
            arr[index-1] = false    
            score = index
            rating.src = `/images/${score}.png`
            unmark(index)

        }else{
            arr[index-1] = true
            score = index
            rating.src = `/images/${score}.png`
            mark(index)
        }

    })
})