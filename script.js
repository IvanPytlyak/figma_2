let wrapper =document.querySelector('.wrapper_card');
let s7_img_1 =document.querySelector('.s7_img_1');
s7_img_1.addEventListener('click', function()  { //focus - не срабатывает
    wrapper.classList.add('hover_effect');
    console.log('added');
})
s7_img_1.addEventListener('blur', function()  {
    wrapper.classList.remove('hover_effect');
    console.log('deleted');
})

