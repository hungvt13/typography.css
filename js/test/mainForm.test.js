import UI from '../mainForm';
jest.mock('../mainForm', jest.fn());

test('should a class list', () => {

    document.body.innerHTML =
    '<div>' +
    '  <section class="left-side" id="sample-text">' +
    '  </section>' +
    '</div>';
    
    const classList = UI.mockImplementation(
        () => ({
            getClassList: 'sample-text'
        })
    );

    console.log("hereeee: " +classList);
    expect(classList).toEqual(expect.objectContaining(['left-side']));
});
