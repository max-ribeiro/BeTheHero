const generateUniqueId = require('../../utils/generateUniqueId');
describe('Generate Unique Id',()=>{
    it('shold generate an unique ID',()=>{
        const id = generateUniqueId();
        expect(id).toHaveLength(8);
    });
});