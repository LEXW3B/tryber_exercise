const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
//dando dinâmicamente a numeração dos dias do mês
function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
  
  let getListDays = document.querySelector('#days');

  for (let i = 0; i < dezDaysList.length; i +=1) {
    let day = dezDaysList[i];
    let dayItem = document.createElement('li');

    if (day === 24 || day === 31) {
      dayItem.className = 'day holiday';
      dayItem.innerHTML = day;
      getListDays.appendChild(dayItem);
    }
    else if (day === 4 || day === 11 || day === 18) {
      dayItem.className = 'day friday';
      dayItem.innerHTML = day;
      getListDays.appendChild(dayItem);
    }
    else if (day === 25) {
      dayItem.className = 'day holiday friday';
      dayItem.innerHTML = day;
      getListDays.appendChild(dayItem);
    }
    else {
      dayItem.className = 'day';
      dayItem.innerHTML = day;
      getListDays.appendChild(dayItem);
    };
  };
};
createDaysOfTheWeek();
//criando botão de feriados
function createButton(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonId = 'btn-holiday';

  newButton.innerHTML = buttonName;
  newButton.id = newButtonId;
  buttonContainer.appendChild(newButton);
};
createButton('Feriados');
//dar funcionalidade ao botão feriados
function displayHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday');
  let backgroundColor = 'rgb(161, 5, 5)';
  let setNewColor = 'white';

  getHolidayButton.addEventListener('click', function(){
    for (let i = 0; i < getHolidays.length; i += 1) {
      if (getHolidays[i].style.backgroundColor === setNewColor) {
        getHolidays[i].style.backgroundColor = backgroundColor;
      }
      else {
        getHolidays[i].style.backgroundColor = setNewColor;
      }
    }
  })
};
displayHolidays();
//criar o botão de sexta-feira
function createFridayButton(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonId = 'btn-friday';

  newButton.innerHTML = buttonName;
  newButton.id = newButtonId;
  buttonContainer.appendChild(newButton);
}
createFridayButton('Sexta-feira');
//criar um evento de lupa nas li
function magnifyingGlass() {
  let dayEl = document.querySelector('#days');
  dayEl.addEventListener('mouseover', function(event) {
    event.target.style = 'font-weight: 700;';
    event.target.style = 'backgroung-color: #fff;'
    event.target.style = 'font-size: 33px;'
  })
}
magnifyingGlass();
//criar evento para diminuir a lupa
function zoomOut() {
  let dayEl = document.querySelector('#days');
  dayEl.addEventListener('mouseout', function(event) {
    event.target.style = 'font-weight: 200;';
    event.target.style = 'backgroung-color: whith;';
    event.target.style = 'font-size: 20px;';
  })
}
zoomOut();
//exercício 7 ainda não fiz
