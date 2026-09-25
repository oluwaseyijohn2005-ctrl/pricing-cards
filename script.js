const monthly = document.getElementById("monthly")
const yearly = document.getElementById("yearly")


const basicamount = document.getElementById("basicamount")
const proamount = document.getElementById("proamount")

yearly.classList.remove("active")
monthly.classList.add("active")

yearly.addEventListener("click",()=>{
basicamount.textContent = "$19"
proamount.textContent = "$39"

yearly.classList.add("active")
monthly.classList.remove("active")
})
monthly.addEventListener("click",()=>{
    basicamount.textContent = "$29"
proamount.textContent = "$49"

yearly.classList.remove("active")
monthly.classList.add("active")
})
