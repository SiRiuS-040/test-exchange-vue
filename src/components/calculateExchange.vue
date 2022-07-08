<script>

export default {

    data() {
        return {
            currValutes: [],
            currDataList: {},
            currData: {},
        }
    },
    methods: {

        calculateExchange() {
            let currData = this.currData;
            // console.log(currData);
            const firstApi = document.querySelector('.cbrf-api');
            const inputArr = firstApi.querySelectorAll('.currency__input');
            const inputFrom = firstApi.querySelector('.currency__input--from');
            const inputFromDesc = firstApi.querySelector('.currency__description--from');
            const inputFromValueDesc = firstApi.querySelector('.currency__exchange-value--from');
            const inputTo = firstApi.querySelector('.currency__input--to');
            const inputToDesc = firstApi.querySelector('.currency__description--to');
            const inputToValueDesc = firstApi.querySelector('.currency__exchange-value--to');
            const buttonCurrSwapArr = firstApi.querySelectorAll('.converter__button-swap');
            let currenciesSwitchItems = firstApi.querySelectorAll('.currency-switch');

            var exRate;
            var exRateFrom;
            var exRateTo;
            var nominalRate;
            let inputFromId = inputFrom.getAttribute('curr-id');
            let inputToId = inputTo.getAttribute('curr-id');
            const getExRate = () => {
                if (inputToId == 'RUR') {
                    if (inputFromId == 'RUR' && inputToId == 'RUR') {
                        exRate = 1;
                        // nominalRate = 1;
                    } else if (inputToId != 'RUR') {
                        exRateTo = currData.Valute[inputFromId].Value;
                        exRate = 1 / exRateTo;
                        // nominalRate = 1;
                    } else {
                        exRateTo = currData.Valute[inputFromId].Value;
                        // nominalRate = 1;
                        exRate = exRateTo;
                    }
                } else if (inputFromId != 'RUR') {
                    exRate = 1 / currData.Valute[inputToId].Value;
                    // nominalRate = currData.Valute[inputToId].Nominal;
                    nominalRate = 1;
                } else {
                    exRate = 1 / currData.Valute[inputToId].Value;
                    // nominalRate = currData.Valute[inputToId].Nominal;
                }
                if (inputFromId != 'RUR' && inputToId != 'RUR') {
                    exRateFrom = currData.Valute[inputFromId].Value;
                    exRateTo = currData.Valute[inputToId].Value;
                    exRate = exRateFrom / exRateTo;
                }
                if (inputFromId == inputToId) {
                    exRate = 1;
                    // nominalRate = 1;
                }
            }

            getExRate();
            if (inputFrom.value.length == 0) {
                inputFrom.value = 1;
            }
            // inputFrom.value = Number(nominalRate);

            inputFrom.value = inputFrom.value.replace(/\s/g, '');
            inputTo.value = Number(inputFrom.value * exRate).toFixed(3);
            inputFrom.value = String(inputFrom.value).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
            inputTo.value = String(inputTo.value).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');

            inputFromDesc.textContent = inputFromId;
            inputToDesc.textContent = inputToId;
            inputFromValueDesc.textContent = String(`1 ${inputFromId} = ${exRate.toFixed(3)} ${inputToId}`);
            inputToValueDesc.textContent = String(`1 ${inputToId} = ${(1 / exRate).toFixed(3)} ${inputFromId}`);

            inputFrom.addEventListener('input', function () {
                inputFrom.value = (inputFrom.value.replace(',', '.').replace(/[^\d\.]/g, "").replace(/\./, "x").replace(/\./g, "").replace(/x/, "."));
                inputTo.value = Number(inputFrom.value * exRate).toFixed(3);
                inputFrom.value = String(inputFrom.value).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
                inputTo.value = String(inputTo.value).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');

                if (inputFrom.value.length == 0 || inputTo.value.length == 0) {
                    inputFrom.value = '';
                    inputTo.value = '';
                }
            })

            inputTo.addEventListener('input', function () {
                inputTo.value = (inputTo.value.replace(',', '.').replace(/[^\d\.]/g, "").replace(/\./, "x").replace(/\./g, "").replace(/x/, "."));
                inputFrom.value = Number(inputTo.value * exRate).toFixed(3);
                inputFrom.value = String(inputFrom.value).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
                inputTo.value = String(inputTo.value).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');

                if (inputFrom.value.length == 0 || inputTo.value.length == 0) {
                    inputFrom.value = '';
                    inputTo.value = '';
                }
            })
        },

    },
    computed: {
    },
    mounted() {

    },
}

</script>