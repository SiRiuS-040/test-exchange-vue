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
    },
    computed: {
    },
    mounted() {
        axios
            .get('https://www.cbr-xml-daily.ru/daily_json.js')
            .then(response => (this.currDataList = response.data.Valute));
        axios
            .get('https://www.cbr-xml-daily.ru/daily_json.js')
            .then(response => {
                for (let key in response.data.Valute) {
                    let value = response.data.Valute[key].CharCode;
                    this.currValutes.push(value);
                }
            })
        axios
            .get('https://www.cbr-xml-daily.ru/daily_json.js')
            .then(response => (this.currData = response.data));
    },
}

</script>