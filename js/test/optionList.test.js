import optionsList from '../optionsList';
jest.mock('../optionsList');

test('should have a function getList', () => {
    const list = new optionsList.getList();
    expect(list).not.toBe(undefined);
});
