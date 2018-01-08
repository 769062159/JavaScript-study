{
    //默认值后面不能再有没有默认值的变量
    function test(x,y = 'world') {
        console.log('默认值',x,y);
    }
    test('hello');
    test('hello','kill');
}
//有默认值的参数后面不能有没有默认值的参数
{
    let x = 'test';
    function test2(x,y = x) {
        console.log('作用域',x,y);
    }
    test2('kill');
}

{
    function test3(...arg) {
        for (let v of arg) {
            console.log('rest',v);
        }
    }
    test3(1,2,3,4,'a');
}

{
    console.log(...[1,2,4]);
    console.log('a',...[1,2,4]);
}
//箭头函数这this是绑定的
{
    let arrow = v => v*2;
    let arrow2 = () => 5;
    console.log('arrow',arrow(3));
    console.log('arrow2',arrow2());
}
//尾调用：好处（提升性能）
{
    function tail(x) {
        console.log('tail',x);
    }
    function fx(x) {
        return tail(x);
    }
    fx(123);
}