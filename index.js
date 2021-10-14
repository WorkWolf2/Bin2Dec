const input = document.querySelector("#input");
const output = document.querySelector("#output");
const btn = document.querySelector("#btn");
const error = document.querySelector("#error_msg");

function Bin2Dec () {
    const RegEx = /^[0-1]+$/;

    if(input.value.match(RegEx)) {
        const BinArr = input.value.split('').reverse();
        let DecNo = 0;

        BinArr.forEach((item, index) => item === '1' ? DecNo+=Math.pow(2, index) :void 0);

        output.value = DecNo.toString();
        output.style.cursor = 'text';
    }else {
        error.style.display = 'block';

    }
}

btn.addEventListener('click', () => {
    error.style.dispaly = 'none';
    Bin2Dec ();
})
