window.onload = function () {
    // 1. 배열의 선언 및 초기화
    let btn1 = document.getElementById('btn1');

    // btn1.onclick = function () {
    //     alert('버튼 클릭');
    // }

    btn1.addEventListener('click', function () {
        let array1 = [];
        let array2 = new Array();
        let array3 = new Array(3);
        let array4 = new Array('빨강', '파랑', '초록', '노랑');
        let array5 = Array.of('빨강', '파랑', '초록', '노랑');
        let array6 = ['빨강', '파랑', '초록', '노랑'];
        let div1 = document.getElementById('div1');

        console.log(array1, array2, array3);
        console.log(array4, array5, array6);

        array1[0] = '사과';
        array1[1] = '포도';
        array1[2] = '딸기';

        console.log(array1);

        div1.innerHTML = '<h4>array1 출력</h4>';

        for (const value of array1) {
            div1.innerHTML += `${value} `;
        }

        array2[0] = '홍길동';
        array2[1] = 24;
        array2[2] = false;
        array2[3] = {};
        array2[4] = [1, 2, 3, 4];
        array2[5] = function () {};

        console.log(array2);

        div1.innerHTML += '<h4>array2 출력</h4>';

        for (const value of array2) {
            div1.innerHTML += `value: ${value}, type: ${typeof(value)}<br>`;
        }
    });

    // 2. 배열의 메소드
    let btn2 = document.getElementById('btn2');

    btn2.addEventListener('click', function () {
        let div2 = document.getElementById('div2');

        // 1) indexOf()
        // let array = ['귤', '사과', '자몽', '망고', '복숭아'];

        // div2.innerHTML = `array: [${array}]<br><br>`;
        // div2.innerHTML += `indexOf('귤'): ${array.indexOf('귤')}<br>`;
        // div2.innerHTML += `indexOf('복숭아'): ${array.indexOf('복숭아')}<br>`;
        // div2.innerHTML += `indexOf('수박'): ${array.indexOf('수박')}<br>`;

        // 2) concat()
        // let array1 = ['귤', '사과', '자몽', '망고', '복숭아'];
        // let array2 = ['바나나', '수박', '오렌지', '딸기', '두리안'];

        // div2.innerHTML = `array1: [${array1}]<br>`;
        // div2.innerHTML += `array2: [${array2}]<br><br>`;
        // div2.innerHTML += `array1.concat(array2): ${array1.concat(array2)}<br>`;
        // div2.innerHTML += `array2.concat(array1): ${array2.concat(array1)}<br>`;
        // // 원본 배열에 영향을 미치지 않는다.
        // div2.innerHTML += `array1: [${array1}]<br>`;
        // div2.innerHTML += `array2: [${array2}]<br>`;

        // 3) sort()
        // let array1 = ['Apple', 'Cherry', 'apple', 'Banana'];
        // let array2 = [10, 543, 30, 450, 123, 4885];

        // div2.innerHTML = `array1: [${array1}]<br>`;
        // div2.innerHTML += `array2: [${array2}]<br><br>`;
        // div2.innerHTML += `array1.sort(): [${array1.sort()}]<br>`;
        // div2.innerHTML += `array2.sort(): [${array2.sort()}]<br>`;
        // // 원본 배열에 영향을 미치는 메소드이다.
        // div2.innerHTML += `array1: [${array1}]<br>`;
        // div2.innerHTML += `array2: [${array2}]<br><br>`;

        // sort() 메소드에 함수를 매개값으로 전달해서 정렬 기준을 변경할 수 있다.
        //  - 비교하는 값이 같으면 0을 반환한다.
        //  - 첫 번째 매개값이 크면 양수를 반환한다.
        //  - 첫 번째 매개값이 작으면 음수를 반환한다.
        // array2.sort(function (left, right) {

        //     // console.log(left, typeof(left));
        //     // console.log(left, typeof(right));

        //     // return left - right; // 오름차순 정렬
        //     return right - left; // 내림차순 정렬
        // });

        // 화살표 함수
        // array2.sort((left, right) => left - right); // 오름차순 정렬
        // // array2.sort((left, right) => right - left); // 내림차순 정렬

        // div2.innerHTML += `array2: [${array2}]<br>`;

        // 4) reverse()
        // let array1 = ['Apple', 'Cherry', 'apple', 'Banana'];

        // div2.innerHTML = `array1: [${array1}]<br>`;
        // div2.innerHTML += `array1.reverse(): [${array1.reverse()}]<br>`;
        // // 원본 배열에 영향을 미치는 메소드이다
        // div2.innerHTML += `array1: [${array1}]<br><br>`;
        // // 내림차순 정렬
        // div2.innerHTML += `array1.sort().reverse(): [${array1.sort().reverse()}]<br><br>`;

        // 5) push() / pop()
        // let array = ['포도', '사과', '딸기', '수박'];

        // // push()
        // div2.innerHTML = `array: [${array}]<br><br>`;
        // // push 후 요소의 개수를 반환한다.
        // div2.innerHTML += `array.push('바나나'): [${array.push('바나나')}]<br><br>`;
        // div2.innerHTML += `array: [${array}]<br>`;
        // div2.innerHTML += `array.push('망고'): [${array.push('망고')}]<br><br>`;
        // div2.innerHTML += `array: [${array}]<br>`;

        // // pop()
        // div2.innerHTML += `array.pop(): ${array.pop()}<br>`;
        // div2.innerHTML += `array: [${array}]<br>`;
        // div2.innerHTML += `array.pop(): ${array.pop()}<br>`;
        // div2.innerHTML += `array: [${array}]<br>`;

        // 6) unshift(), shift()
        // let array = ['포도', '사과', '딸기', '수박'];

        // // unshift()
        // div2.innerHTML = `array: [${array}]<br><br>`;
        // div2.innerHTML += `array.unshift('바나나'): ${array.unshift('바나나')}<br>`;
        // div2.innerHTML += `array: [${array}]<br>`;
        // div2.innerHTML += `array.unshift('복숭아'): ${array.unshift('복숭아')}<br>`;
        // div2.innerHTML += `array: [${array}]<br><br>`;

        // // shift()
        // div2.innerHTML += `array.shift(): ${array.shift()}<br>`;
        // div2.innerHTML += `array: [${array}]<br>`;
        // div2.innerHTML += `array.shift(): ${array.shift()}<br>`;
        // div2.innerHTML += `array: [${array}]<br>`;

        // 7) slice(), splice()
        // let array = ['포도', '사과', '딸기', '수박', '복숭아', '바나나'];

        // // slice()
        // div2.innerHTML = `array: [${array}]<br><br>`;
        // div2.innerHTML += `array.slice(2): [${array.slice(2)}]<br>`;
        // // 원본 배열에 영향을 미치지 않는 메소드이다.
        // div2.innerHTML += `array: [${array}]<br>`;
        // div2.innerHTML += `array.slice(2, 4)/: [${array.slice(2, 4)}]<br>`;
        // div2.innerHTML += `array: [${array}]<br><br>`;

        // // splice()
        // div2.innerHTML += `array: [${array}]<br><br>`;
        // // div2.innerHTML += `array.splice(2): [${array.splice(2)}]<br>`; // [딸기,수박,복숭아,바나나]
        // // div2.innerHTML += `array.splice(2, 2): [${array.splice(2, 2)}]<br>`; // [딸기,수박]
        // // div2.innerHTML += `array.splice(2, 2, '파인애플'): [${array.splice(2, 2, '파인애플')}]<br>`; // [딸기,수박]
        // div2.innerHTML += `array.splice(2, 0, '파인애플', '키위'): [${array.splice(2, 0, '파인애플', '키위')}]<br>`; // []
        // // 원본 배열에 영향을 미치는 메소드이다.
        // div2.innerHTML += `array: [${array}]<br>`;

        // 8) toString, join()
        // let array = ['포도', '사과', '딸기', '수박'];

        // div2.innerHTML = `array: [${array}]<br><br>`;
        // div2.innerHTML = `array.toString: [${array.toString}]<br>`;
        // div2.innerHTML = `array.join(): [${array.join()}]<br>`;
        // div2.innerHTML = `array.join('|'): [${array.join('|')}]<br>`;

        // 9) forEach()
        //      - 배열의 요소를 한 번씩 순회하면서 반복하는 메소드이다.
        // let array = ['포도', '사과', '딸기', '수박'];

        // array.forEach(function (value, index, arr) {
        //     div2.innerHTML += `value: ${value}, index: ${index}<br>`;
        //     div2.innerHTML += `value: ${arr[index]}, index: ${index}<br>`
        // });

        // array.forEach(value, index) => div2.innerHTML += `value: ${value}, index: ${index}<br>`;

        // 10) reduce()
        //      - 배열의 각 요소에 대해 콜백 함수의 실행 값을 누적하여 하나의 결과값을 반환한다.
        // let array = [3, 5, 7, 9];

        // // let result = array.reduce;
        // let result = array.reduce(function (left, right){

        //     return left * right;
        // }, 10);

        // div2.innerHTML += `result: ${result}<br>`;

        // 11) filter()
        //      - 배열에서 특정 조건을 만족하는 요소들만 새로운 배열로 생성한다.
        let array = [1, 2, 3, 4, 5, 6];

        div2.innerHTML += `array: [${array}]<br><br>`;

        // let newArray = array.filter(function (value, index, arr) {
        //     return value % 2 ==0;
        // });

        let newArray = array.filter(value => value % 2 == 0);

        div2.innerHTML += `newArray: [${newArray}]<br>`;
        div2.innerHTML += `array: [${array}]<br>`;

    });
    
}