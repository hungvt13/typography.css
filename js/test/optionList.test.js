import optionsList from '../optionsList';

test('should have a function getList', () => {
    const list = new optionsList.getList();

    //ecpect the list is not null
    expect(list).toBeDefined();

    //there's 8 options
    expect(list.length).toEqual(8);
});
