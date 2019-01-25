import ButtonEvent from '../button';

document.body.innerHTML =
  '<button class="cust-btn btn btn-link collapsible start-up_paragraph"'+
  'id="customizeBtn">customize</button>';

test('should change name when click', () => {
  const myButton = document.getElementById('customizeBtn');
  console.log(myButton.innerHTML);
  expect(myButton.innerHTML).toEqual('customize');

  ButtonEvent.changeToggleBtn('customizeBtn', 'customize', 'changedButton');
  expect(myButton.innerHTML).not.toEqual('customize');
  expect(myButton.innerHTML).toEqual('changedButton');
});
