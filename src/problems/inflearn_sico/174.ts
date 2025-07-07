const weeks = ['일', '월', '화', '수', '목', '금', '토'];
function createWeekdayIterator(weeks: string[]) {
  let index = -1;
  return function () {
    index = (index + 1) % weeks.length;
    return weeks[index];
  };
}

function createWeekdaySelector(buttonText: string, createWeekdayIterator: () => string) {
  const $container = document.createElement('div');

  const $button = document.createElement('button');
  $button.textContent = `${buttonText} 요일선택 >`;

  const $label = document.createElement('p');
  $label.style.cssText = 'display:inline-block; color: blue;';
  $label.textContent = '요일을 선택하세요';

  $button.onclick = () => {
    $label.textContent = createWeekdayIterator();
  };

  $container.appendChild($button);
  $container.appendChild($label);

  return $container;
}
document.body.setAttribute('style', 'background-color: #fff;');

document.body.prepend(createWeekdaySelector('국어 수업', createWeekdayIterator(weeks)));
document.body.prepend(document.createElement('br'));
document.body.prepend(createWeekdaySelector('수학 수업', createWeekdayIterator(weeks)));
