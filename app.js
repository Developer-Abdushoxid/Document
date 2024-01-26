const modal = document.querySelector('.modal')
    successTitle = document.querySelector('#success')
    range = document.querySelector('.range')
    name1 = document.querySelector('input[type="name"]')
    surname = document.querySelector('input[type="surname"]')
    age = document.querySelector('input[type="number"]')
    job = document.querySelector('input[type="job"]')
    button = document.querySelector('.btn')
    name2 = document.querySelector('.name1')
    surname1 = document.querySelector('.surName1')
    age1 = document.querySelector('.age1')
    job1 = document.querySelector('.job1')
    
   




    function modalFunction(){
        modal.classList.toggle('hidden')
        range.classList.toggle('range-animate')
      }
       
      button.addEventListener('click', ()=> {
        modalFunction()
        setTimeout(() => {
          successTitle.textContent = 'Successfully !'
          name2.textContent = name1.value
          surname1.textContent = surname.value
          age1.textContent = age.value
          job1.textContent = job.value
          range.classList.toggle('hidden')
         
        }, 3000)
        setTimeout(() => {
          modal.classList.toggle('hidden')
        },4000)
      })
      
      
      clearTimeout(modalFunction, 1000)