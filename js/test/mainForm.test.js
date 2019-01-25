import UI from '../mainForm';

document.body.innerHTML =
  '<div>' +
  '  <section class="left-side" id="sample-text">' +
  '  </section>' +
  '  <select class="form-select" id="select-preset"></select>' +
  '</div>';

test('should add item to select option', () => {
  const item = 'test item';
  const item2 = 'test item2';
  const select = document.getElementById('select-preset');
  const list = select.options;
  UI.addOptionToList(item);
  UI.addOptionToList(item2);
  expect(list).toHaveLength(2);
});

test('should a class list', () => {
  const classList = UI.getClassList('sample-text').value;
  expect(classList).toMatch('left-side');
});

test('should set the selected option to a class list', () => {
  UI.setSelected('sample-text', 'mainstyle')
  const classList = UI.getClassList('sample-text').value;
  expect(classList).toMatch('left-side mainstyle');
});
