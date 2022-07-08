const countryData = {
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

export { countryData }