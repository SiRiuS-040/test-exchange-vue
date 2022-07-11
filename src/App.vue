<template>
  <div class="page-body">
    <header class="page-header">
      <div class="page-header__wrapper">
        <h1 class="page-header__title">Курсы обмена валют ЦБРФ</h1>
      </div>
    </header>
    <main class="page-main converter">
      <section class="converter__calculator cbrf-api">
        <h2 class="converter__region-title">Регион</h2>
        <h2 class="converter__update-time">Время обновления курсов</h2>

        <section class="converter__wrapper">
          <div class="converter__currency converter__currency--from currencies">
            <h2 class="converter__title"> Ваша валюта </h2>
            <div class="currencies__switch-list-wrapper">
              <ul class="currencies__switch-list">
                <li class="currencies__switch-item currency-switch currency-switch--rur" currency-id="RUR"
                  @click="switchCurrency">
                  <p class="currency-switch__char">RUR</p>
                </li>
                <li class="currencies__switch-item currency-switch currency-switch--usd" currency-id="USD"
                  @click="switchCurrency">
                  <p class="currency-switch__char">USD</p>
                </li>
                <li class="currencies__switch-item currency-switch currency-switch--eur active" currency-id="EUR"
                  @click="switchCurrency">
                  <p class="currency-switch__char">EUR</p>
                </li>
                <li class="currencies__switch-item currency-switch currency-switch--new-selected" currency-id="KRW"
                  @click="switchCurrency">
                  <p class="currency-switch__char">KRW</p>
                </li>
                <li class="currencies__switch-item switch-action">
                  <button class="switch-action__button switch-action__button--show-all" @click="openList"></button>
                </li>
              </ul>
              <!-- список валют -->
              <currList>
              </currList>
            </div>
            <div class="converter__input-wrapper">
              <label class="converter__currency-label currency">
                <input type="text" name="" class="currency__input currency__input--from" curr-id="RUR" maxlength="14">
                <span class="currency__description currency__description--from">Валюта</span>
                <span class="currency__exchange-value currency__exchange-value--from">1 RUR = 0.0186
                  USD</span>
              </label>
            </div>
          </div>
          <div class="converter__control">
            <button class="converter__button-swap" @click="swapSwitchCurr"></button>
          </div>
          <div class="converter__currency converter__currency--to currencies">
            <h2 class="converter__title">Меняем на валюту</h2>
            <div class="currencies__switch-list-wrapper">
              <ul class="currencies__switch-list">
                <li class="currencies__switch-item currency-switch currency-switch--rur" currency-id="RUR"
                  @click="switchCurrency">
                  <p class="currency-switch__char">RUR</p>
                </li>
                <li class="currencies__switch-item currency-switch currency-switch--usd active" currency-id="USD"
                  @click="switchCurrency">
                  <p class="currency-switch__char">USD</p>
                </li>
                <li class="currencies__switch-item currency-switch currency-switch--eur" currency-id="EUR"
                  @click="switchCurrency">
                  <p class="currency-switch__char">EUR</p>
                </li>
                <li class="currencies__switch-item currency-switch currency-switch--new-selected" currency-id="KRW"
                  @click="switchCurrency">
                  <p class="currency-switch__char">KRW</p>
                </li>
                <li class="currencies__switch-item switch-action">
                  <button class="switch-action__button switch-action__button--show-all" @click="openList"></button>
                </li>
              </ul>
              <!-- список валют -->
              <currList>
              </currList>
            </div>
            <div class="converter__input-wrapper">
              <label class="converter__currency-label currency">
                <input type="text" name="" class="currency__input currency__input--to" curr-id="USD" maxlength="14">
                <span class="currency__description currency__description--to">Валюта</span>
                <span class="currency__exchange-value currency__exchange-value--to">1 RUR = 0.0186
                  USD</span>
              </label>
            </div>
          </div>
        </section>
      </section>
    </main>
    <footer class="page-footer">
      <div class="footer-wrapper">
        <a class="page-footer__link" href="https://www.cbr-xml-daily.ru/">Курсы валют, API</a>
        <a class="page-footer__link" href="https://www.cbr-xml-daily.ru/">API для курсов ЦБ РФ</a>
        <a class="page-footer__link" href="https://www.cbr-xml-daily.ru/">Виджет курсов валют</a>
        <a class="page-footer__link" href="https://www.cbr-xml-daily.ru/">Курсы ЦБ РФ в XML и JSON, API</a>
      </div>
    </footer>
  </div>

</template>


<script>

// import calculateExchange from "./components/calculateExchange.vue";
import currList from "./components/currList.vue";
// import countryData from "./components/data.vue";

// import { currValutes, currDataList, currData } from "./components/api.vue";
import axios from "axios";

import { countryData } from './data.js';

export default {
  data() {
    return {
      currValutes: [],
      currDataList: {},
      currData: {},
      countryData: {
        "Country": {
          "AU": { "Valute": "AUD" },
          "AT": { "Valute": "EUR" },
          "AZ": { "Valute": "AZM" },
          "A2": { "Valute": "EUR" },
          "AX": { "Valute": "EUR" },
          "AL": { "Valute": "EUR" },
          "DZ": { "Valute": "DZD" },
          "AS": { "Valute": "USD" },
          "AI": { "Valute": "XCD" },
          "EN": { "Valute": "GBP" },
          "AO": { "Valute": "AOA" },
          "AD": { "Valute": "EUR" },
          "AG": { "Valute": "XCD" },
          "AR": { "Valute": "ARS" },
          "AM": { "Valute": "AMD" },
          "AW": { "Valute": "AWG" },
          "AF": { "Valute": "USD" },
          "BS": { "Valute": "BSD" },
          "BD": { "Valute": "BDT" },
          "BB": { "Valute": "BBD" },
          "BH": { "Valute": "BHD" },
          "BZ": { "Valute": "BZD" },
          "BY": { "Valute": "BYR" },
          "BE": { "Valute": "EUR" },
          "BJ": { "Valute": "XOF" },
          "BM": { "Valute": "BMD" },
          "BG": { "Valute": "EUR" },
          "BO": { "Valute": "BOB" },
          "BA": { "Valute": "BAM" },
          "BW": { "Valute": "BWP" },
          "BR": { "Valute": "BRL" },
          "VG": { "Valute": "USD" },
          "BN": { "Valute": "BND" },
          "BF": { "Valute": "XOF" },
          "BI": { "Valute": "BIF" },
          "BT": { "Valute": "BTN" },
          "VU": { "Valute": "VUV" },
          "HU": { "Valute": "HUF" },
          "VE": { "Valute": "VEB" },
          "VR": { "Valute": "USD" },
          "TL": { "Valute": "USD" },
          "VN": { "Valute": "VND" },
          "GA": { "Valute": "XAF" },
          "GY": { "Valute": "GYD" },
          "HT": { "Valute": "HTG" },
          "GM": { "Valute": "GMD" },
          "GH": { "Valute": "GHS" },
          "GP": { "Valute": "EUR" },
          "GT": { "Valute": "GTQ" },
          "GN": { "Valute": "GNF" },
          "GW": { "Valute": "XOF" },
          "DE": { "Valute": "EUR" },
          "GG": { "Valute": "GBP" },
          "GI": { "Valute": "GIP" },
          "HO": { "Valute": "EUR" },
          "HN": { "Valute": "HNL" },
          "HK": { "Valute": "HKD" },
          "VA": { "Valute": "EUR" },
          "GD": { "Valute": "XCD" },
          "GL": { "Valute": "DKK" },
          "GR": { "Valute": "EUR" },
          "GE": { "Valute": "GEL" },
          "GU": { "Valute": "USD" },
          "DK": { "Valute": "DKK" },
          "CD": { "Valute": "CDF" },
          "JE": { "Valute": "GBP" },
          "DJ": { "Valute": "DJF" },
          "DM": { "Valute": "XCD" },
          "DO": { "Valute": "DOP" },
          "EP": { "Valute": "EUR" },
          "EG": { "Valute": "EGP" },
          "ZM": { "Valute": "ZMK" },
          "ZW": { "Valute": "ZWD" },
          "YE": { "Valute": "YER" },
          "IL": { "Valute": "ILS" },
          "IN": { "Valute": "INR" },
          "ID": { "Valute": "IDR" },
          "JO": { "Valute": "JOD" },
          "IQ": { "Valute": "NID" },
          "IE": { "Valute": "EUR" },
          "IS": { "Valute": "ISK" },
          "ES": { "Valute": "EUR" },
          "IT": { "Valute": "EUR" },
          "KZ": { "Valute": "KZT" },
          "KY": { "Valute": "KYD" },
          "KH": { "Valute": "KHR" },
          "CM": { "Valute": "XAF" },
          "CA": { "Valute": "CAD" },
          "IC": { "Valute": "EUR" },
          "QA": { "Valute": "QAR" },
          "KE": { "Valute": "KES" },
          "CY": { "Valute": "EUR" },
          "KG": { "Valute": "KGS" },
          "KI": { "Valute": "AUD" },
          "CN": { "Valute": "RMB" },
          "CO": { "Valute": "COP" },
          "KM": { "Valute": "USD" },
          "CG": { "Valute": "XAF" },
          "KV": { "Valute": "EUR" },
          "KO": { "Valute": "USD" },
          "CR": { "Valute": "CRC" },
          "CI": { "Valute": "XOF" },
          "CU": { "Valute": "CU" },
          "KW": { "Valute": "KWD" },
          "CW": { "Valute": "USD" },
          "LA": { "Valute": "LAK" },
          "LV": { "Valute": "EUR" },
          "LS": { "Valute": "LSL" },
          "LR": { "Valute": "LRD" },
          "LB": { "Valute": "LBP" },
          "LY": { "Valute": "LYD" },
          "LT": { "Valute": "EUR" },
          "LI": { "Valute": "CHF" },
          "LU": { "Valute": "EUR" },
          "MU": { "Valute": "MUR" },
          "MR": { "Valute": "MRO" },
          "MG": { "Valute": "MGA" },
          "M3": { "Valute": "EUR" },
          "YT": { "Valute": "EUR" },
          "MO": { "Valute": "MOP" },
          "MK": { "Valute": "EUR" },
          "MW": { "Valute": "MWK" },
          "MY": { "Valute": "MYR" },
          "ML": { "Valute": "XOF" },
          "MV": { "Valute": "MVR" },
          "MT": { "Valute": "EUR" },
          "MA": { "Valute": "MAD" },
          "MQ": { "Valute": "EUR" },
          "MH": { "Valute": "USD" },
          "MX": { "Valute": "MXN" },
          "XL": { "Valute": "EUR" },
          "MZ": { "Valute": "MZM" },
          "MD": { "Valute": "MDL" },
          "MC": { "Valute": "EUR" },
          "MN": { "Valute": "MNT" },
          "MS": { "Valute": "XCD" },
          "NA": { "Valute": "NAD" },
          "NP": { "Valute": "NPR" },
          "NE": { "Valute": "XOF" },
          "NG": { "Valute": "NGN" },
          "NL": { "Valute": "EUR" },
          "NI": { "Valute": "NIO" },
          "NZ": { "Valute": "NZD" },
          "NC": { "Valute": "XPF" },
          "NO": { "Valute": "NOK" },
          "BQ": { "Valute": "USD" },
          "AE": { "Valute": "AED" },
          "BL": { "Valute": "EUR" },
          "E2": { "Valute": "ANG" },
          "C3": { "Valute": "USD" },
          "WF": { "Valute": "XPF" },
          "OM": { "Valute": "OMR" },
          "NF": { "Valute": "AUD" },
          "CV": { "Valute": "CVE" },
          "CK": { "Valute": "NZD" },
          "UI": { "Valute": "XCD" },
          "PK": { "Valute": "PKR" },
          "PW": { "Valute": "USD" },
          "PA": { "Valute": "PAB" },
          "PG": { "Valute": "PGK" },
          "PY": { "Valute": "PYG" },
          "PE": { "Valute": "PEN" },
          "PL": { "Valute": "PLN" },
          "PO": { "Valute": "USD" },
          "PT": { "Valute": "EUR" },
          "PR": { "Valute": "USD" },
          "RE": { "Valute": "EUR" },
          "RU": { "Valute": "RUR" },
          "RT": { "Valute": "USD" },
          "RW": { "Valute": "RWF" },
          "RO": { "Valute": "ROL" },
          "S1": { "Valute": "ANG" },
          "SP": { "Valute": "USD" },
          "WS": { "Valute": "WST" },
          "SM": { "Valute": "EUR" },
          "ST": { "Valute": "STD" },
          "SA": { "Valute": "SAR" },
          "SZ": { "Valute": "SZL" },
          "NB": { "Valute": "GBP" },
          "MP": { "Valute": "USD" },
          "SC": { "Valute": "SCR" },
          "SN": { "Valute": "XOF" },
          "VC": { "Valute": "XCD" },
          "UV": { "Valute": "USD" },
          "KN": { "Valute": "XCD" },
          "SW": { "Valute": "XCD" },
          "LC": { "Valute": "XCD" },
          "SX": { "Valute": "USD" },
          "VL": { "Valute": "USD" },
          "RS": { "Valute": "EUR" },
          "XC": { "Valute": "EUR" },
          "SG": { "Valute": "SGD" },
          "SK": { "Valute": "EUR" },
          "SI": { "Valute": "EUR" },
          "GB": { "Valute": "GBP" },
          "US": { "Valute": "USD" },
          "SB": { "Valute": "SBD" },
          "SR": { "Valute": "SRG" },
          "VI": { "Valute": "USD" },
          "SL": { "Valute": "SLL" },
          "TJ": { "Valute": "TJS" },
          "TW": { "Valute": "TWD" },
          "TH": { "Valute": "THB" },
          "TA": { "Valute": "XPF" },
          "TZ": { "Valute": "TZS" },
          "TC": { "Valute": "USD" },
          "TI": { "Valute": "USD" },
          "TG": { "Valute": "XOF" },
          "TO": { "Valute": "TOP" },
          "ZZ": { "Valute": "USD" },
          "TT": { "Valute": "TTD" },
          "TU": { "Valute": "USD" },
          "TV": { "Valute": "AUD" },
          "TN": { "Valute": "TND" },
          "TM": { "Valute": "TMT" },
          "TR": { "Valute": "TRY" },
          "UG": { "Valute": "UGX" },
          "UZ": { "Valute": "UZS" },
          "UA": { "Valute": "UAH" },
          "UY": { "Valute": "UYU" },
          "WL": { "Valute": "GBP" },
          "FO": { "Valute": "DKK" },
          "FM": { "Valute": "USD" },
          "FJ": { "Valute": "FJD" },
          "PH": { "Valute": "PHP" },
          "FI": { "Valute": "EUR" },
          "FR": { "Valute": "EUR" },
          "GF": { "Valute": "EUR" },
          "PF": { "Valute": "XPF" },
          "HR": { "Valute": "EUR" },
          "CF": { "Valute": "XAF" },
          "TD": { "Valute": "XAF" },
          "ME": { "Valute": "EUR" },
          "CZ": { "Valute": "CZK" },
          "CL": { "Valute": "CLP" },
          "CH": { "Valute": "CHF" },
          "SE": { "Valute": "SEK" },
          "SF": { "Valute": "GBP" },
          "LK": { "Valute": "LKR" },
          "EC": { "Valute": "USD" },
          "GQ": { "Valute": "XAF" },
          "SV": { "Valute": "USD" },
          "ER": { "Valute": "ERN" },
          "EE": { "Valute": "EUR" },
          "ET": { "Valute": "ETB" },
          "ZA": { "Valute": "ZAR" },
          "KR": { "Valute": "KRW" },
          "JM": { "Valute": "JMD" },
          "YA": { "Valute": "USD" },
          "JP": { "Valute": "JPY" },
        }
      }
    }
  },

  components: {
    currList,
    // countryData
  },

  methods: {

    calculateExchange() {
      let currData = this.currData;
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

    openList(button) {
      let parent = button.target.closest('.converter__currency');
      button.target.classList.toggle('active');
      let parentCurrencyList = parent.querySelector('.currencies__list');
      let parentCurrencyItems = parent.querySelectorAll('.currencies__item');
      parentCurrencyList.classList.toggle('hidden');
    },

    switchCurrency(evt) {
      let item = evt.target.closest('.currency-switch')
      let parent = item.closest('.converter__currency');

      let parentButtonOpenList = parent.querySelector('.switch-action__button--show-all');

      let parentList = parent.querySelector('.currencies__list');
      let parentSwitchItems = parent.querySelectorAll('.currency-switch');
      let parentInput = parent.querySelector('.currency__input');


      parentList.classList.add('hidden');
      parentButtonOpenList.classList.remove('active');
      parentSwitchItems.forEach(switchItem => {
        switchItem.classList.remove('active');
      });
      let itemId = item.getAttribute('currency-id');
      parentInput.setAttribute('curr-id', itemId)
      this.calculateExchange();
      item.classList.add('active');
    },

    swapSwitchCurr() {
      let firstApi = document.querySelector('.cbrf-api');
      const sectionFrom = firstApi.querySelector('.converter__currency--from');
      const sectionTo = firstApi.querySelector('.converter__currency--to');

      let switchItemsFromArr = sectionFrom.querySelectorAll('.currency-switch');
      let switchItemsToArr = sectionTo.querySelectorAll('.currency-switch');
      let switchCurrCharArrFrom = sectionFrom.querySelectorAll('.currency-switch__char');
      let switchCurrCharArrTo = sectionTo.querySelectorAll('.currency-switch__char');
      let switchFromIndex;
      let switchToIndex;

      for (let i = 0; i < switchItemsFromArr.length; i++) {
        if (switchItemsFromArr[i].classList.contains('active')) {
          switchFromIndex = i;
        }
      }
      for (let b = 0; b < switchItemsToArr.length; b++) {
        if (switchItemsToArr[b].classList.contains('active')) {
          switchToIndex = b;
        }
      }
      if (switchFromIndex == 3 || switchToIndex == 3) {
        let swapIdFrom = switchItemsFromArr[3].getAttribute('currency-id');
        let swapIdTo = switchItemsToArr[3].getAttribute('currency-id');
        switchItemsToArr[3].setAttribute('currency-id', swapIdFrom);
        switchItemsFromArr[3].setAttribute('currency-id', swapIdTo);
        switchCurrCharArrFrom[3].textContent = swapIdTo;
        switchCurrCharArrTo[3].textContent = swapIdFrom;
      }
      switchItemsFromArr[switchToIndex].click();
      switchItemsToArr[switchFromIndex].click();
    },

    async getData() {
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

    setUpdateTime() {
      let firstApi = document.querySelector('.cbrf-api');
      let currData = this.currData;
      const currUpdateTime = firstApi.querySelector('.converter__update-time');
      currUpdateTime.textContent = `Дата обновления курсов ${currData.Date}`;
    },

    setBasicInfo() {

      let countryData = this.countryData;
      let firstApi = document.querySelector('.cbrf-api');

      const sectionFrom = firstApi.querySelector('.converter__currency--from');
      // установка базовой валюты от языка браузера
      let regionTitle = firstApi.querySelector('.converter__region-title');

      if (navigator.languages) {
        let browserMainLang = navigator.languages[0].match(/[^\s-]+-?/g);

        let mainLang;
        if (browserMainLang.length > 1) {
          mainLang = browserMainLang[1];
        } else {
          mainLang = String(browserMainLang).toUpperCase();
        }

        let startCurr = countryData.Country[mainLang].Valute;
        regionTitle.textContent = `Регион по браузеру: ${mainLang}`;

        const setBasicCurrency = () => {
          let currenciesSwitchItems = sectionFrom.querySelectorAll('.currency-switch');
          currenciesSwitchItems.forEach(item => {
            if (item.getAttribute('currency-id') == startCurr) {
              item.click();
            }
          });
          if (startCurr != "RUR" || startCurr != "EUR" || startCurr != "USD") {
            let fromCurrencyItems = sectionFrom.querySelectorAll('.currencies__item');
            fromCurrencyItems.forEach(item => {
              if (item.getAttribute('currency-id') == startCurr) {
                fromCurrencyItems.forEach(item => {
                  item.onclick = () => {
                    setCurrency(item);
                  };
                });
                item.click();
                fromCurrencyItems.forEach(item => {
                  item.onclick = "";
                });
              }
            });
          }
        }
        setBasicCurrency();

      } else {
        regionTitle.textContent = 'Регион не определен';

        const setBasicCurrency = () => {
          let currenciesSwitchItems = sectionFrom.querySelectorAll('.currency-switch');
          currenciesSwitchItems[0].click();
        }
        setBasicCurrency();
      }
    }
  },

  computed: {
  },

  created() {
  },

  beforeMount() {
    this.getData()
  },


  mounted() {
    setTimeout(() => this.calculateExchange(), 1000);
    setTimeout(() => this.setBasicInfo(), 1000);
    setTimeout(() => this.setUpdateTime(), 1000);

  },




}
</script>

<style lang="scss">
@import "./scss/global/_variables.scss";
@import "./scss/global/_components.scss";

@import "./scss/blocks/_header-footer.scss";
@import "./scss/blocks/_overlay.scss";

@import "./scss/blocks/_converter.scss";
</style>