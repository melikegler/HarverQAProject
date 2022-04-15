
import { Selector} from 'testcafe';

const interfaceSelect = Selector('select#dropdown');
const interfaceOptions = interfaceSelect.find('option');

fixture ("File Upload")
    .page("https://the-internet.herokuapp.com/dropdown");

    test('File Upload', async t => {
        await t
            .click(interfaceSelect) 
            .click(interfaceOptions.withText('Option 2'))
    });