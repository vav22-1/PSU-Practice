function exampleFunction() {
    {
        var xVar = "var";
        let xLet = "let";
        const xConst = "const";
        console.log(xVar);
        console.log(xLet);
        console.log(xConst);
    }

    console.log(xVar);
    console.log(xLet);
    console.log(xConst);
    //Снаружи видна переменная var, не видны переменные let и const
}
exampleFunction();