'use strict';

        //ボタンをclickするとイベント開始
        document.querySelector('button').addEventListener('click', e => {
            //ulノードの選択
            let ul = document.querySelector('ul');
            //liノードを作成、使用したのちに空になる
            var li = document.createElement('li');

            /*id名：idFizzNum、idBuzzNumのテキストボックス（input）
            に入力された値を それぞれ変数に格納
            ここで何も入力しない状態で
            Numberのデータ型を通して代入すると0になる
            データ型を指定し、変数に格納し出力すると空文字
            データ型を指定しないで、変数に格納せず出力するとnull*/
            let fizzNum = document.getElementById('idFizzNum').value;
            let buzzNum = document.getElementById('idBuzzNum').value;

            //reは整数以外を排除する正規表現
            let re = /^[0-9]+$/;

            //整数値であるかを確認し、違ったら処理せず"整数値を入力してください"と出力する
            if (re.test(fizzNum) === false || re.test(buzzNum) === false) {
                li.textContent = `整数値を入力してください`;
                ul.appendChild(li);
            }
            else {
                //fizzNumとbuzzNumはユーザーが入力した時点でﾃﾞｰﾀ型がStringなので、数値型にする
                fizzNum = Number(fizzNum);
                buzzNum = Number(buzzNum);
            }

            /*変数fizzNumとbuzzNumにユーザーに入力された値を格納し
            whileループ処理ごとに入力された値を再度加算する*/
            let fizzNumAdd = fizzNum;
            let buzzNumAdd = buzzNum;

            /*fizzNumAddとbuzzNumAddの値は、whileループ処理ごとに
            変数fizzNumArrとbuzzNumArrの配列に格納*/
            let fizzNumArr = [];
            let buzzNumArr = [];

            /*ユーザーに入力された値を、fizzNumArrとbuzzNumArrのリストに格納しつつ
            最後に同じ値分加算する処理を、それぞれ2ケタの値の間続ける
            */
            if (fizzNumAdd && buzzNumAdd !== '') {
                if (typeof fizzNumAdd === 'number' && typeof buzzNumAdd === 'number') {
                    while (100 > fizzNumAdd) {
                        fizzNumArr.push(fizzNumAdd);
                        fizzNumAdd += fizzNum;
                    }
                    while (100 > buzzNumAdd) {
                        buzzNumArr.push(buzzNumAdd);
                        buzzNumAdd += buzzNum;
                    }
                }
            }

            //変数fizzNumArrとbuzzNumArrの配列をマージする
            let concatArr = fizzNumArr.concat(buzzNumArr);

            console.log(concatArr);

            //マージした配列に存在する複数の重複分を「全て」削除して一意の値にする
            concatArr = concatArr.filter(function (x, i, self) {
                return self.indexOf(x) === i;
            });

            //マージして重複分を削除した配列の要素の個数を調べてconLengthに格納する
            let conLength = concatArr.length;

            //conLength分（要素の個数分）の処理を行う
            /*この処理でfizzNumに入力された値の倍数とbuzzNumに
            入力された値の倍数を小さい順に表示する*/
            for (let i = 0; i < conLength; i++) {

                //配列の最小値を取得
                let minNum = Math.min.apply(null, concatArr);

                //一度表示した値を配列から削除する
                let index = concatArr.indexOf(minNum);
                concatArr.splice(index, 1);

                //liノードを作成、使用したのちに空になる
                var li = document.createElement('li');

                //fizzNumとbuzzNumで重複した値を出力
                if (minNum % fizzNum === 0 && minNum % buzzNum === 0) {
                    li.textContent = `FizzBuzz ${minNum}`;
                    ul.appendChild(li);
                }

                //fizzNumの値を出力
                else if (minNum % fizzNum === 0) {
                    li.textContent = `Fizz ${minNum}`;
                    ul.appendChild(li);

                }

                //buzzNumの値を出力
                else if (minNum % buzzNum === 0) {
                    li.textContent = `Buzz ${minNum}`;
                    ul.appendChild(li);
                }
            }
        });