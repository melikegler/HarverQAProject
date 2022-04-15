import { Selector } from 'testcafe'; 

fixture ('Drag')
.page('https://the-internet.herokuapp.com/drag_and_drop');

test('Drag', async t =>{
 await t

        .click('#column-a')
        .drag('#column-a', 212, 0, {
            offsetX: 58,
            offsetY: 53
        })
        .click('#column-b')
        .drag('#column-b', -212, 3, {
            offsetX: 55,
            offsetY: 52
        })
    });