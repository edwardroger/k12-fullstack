function giaiPhuongTrinhBac2 () {
    //Câu 7
    let a = parseFloat(prompt('Nhap vao a'));
    let b = parseFloat(prompt('Nhap vao b'));
    let c = parseFloat(prompt('Nhap vao c'));

    if (a === 0) {
        if (b === 0) {
            if (c === 0) { // a === b === c === 0
                console.log('Phương trình vô số nghiệm!');
            } else { // a === b === 0 !== c 
                console.log('Phuơng trình vô nghiệm');
            }
        } else { // a === 0; b !== 0
            console.log('Phương trình có nghiệm duy nhất là: ' + (-c / b));
        }
    } else {
        let delta = (b ** 2) - (4 * a * c);
        if (delta < 0) {
            console.log('Phương trình có nghiệm ảo.');
        } else if (delta === 0) {
            let x = (-b) / (2 * a);
            console.log('Phương trình có nghiệm kép: ' + x);
        } else {
            let x1 = (-b + Math.sqrt(delta)) / (2 * a);
            let x2 = (-b - Math.sqrt(delta)) / (2 * a);
            console.log('Phương trình có nghiệm x1: ' + x1 + ' và x2: ' + x2);
        }
    }
}

// let a = parseInt(prompt('Nhap a'));
// let b = parseInt(prompt('Nhap a'));
// let c = parseInt(prompt('Nhap a'));

// function testFunction (a, b, c) { //tham chiếu
//     console.log(a); //5
//     console.log(b); //6
//     console.log(c); //6
// }

// function sum(a, b) {
//     console.log(a + b);
// }

function consoleLog(string) {
    console.log(string)
}

consoleLog(['1', '2', '3']);

// // sum(a, b);
var array = [1];
function nhapMang()
{
    let array = [];
    for (let i = 0; i < 5; i++) { //Float: 1.5, 2.3 || Integer: 1, 2, 3, 4, -1, 0, -2
        array.push(parseFloat(prompt('nhap vao phan tu thu' + i)));
    }
    return array;  //dừng chương trình
}
nhapMang();







