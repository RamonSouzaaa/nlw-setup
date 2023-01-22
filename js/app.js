const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')
button.addEventListener('click', add)
form.addEventListener('change', save)

function add(){
    const date = new Date()
    const day = date.toLocaleDateString('pt-br').slice(0, -5)
    
    if(nlwSetup.dayExists(day)){
        alert('Dia já existe')
        return
        
    }

    nlwSetup.addDay(day)
}

function save(){
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}
nlwSetup.setData(data)
nlwSetup.load()
