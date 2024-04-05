const CurrencyFormatter = (money) => {
    return Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 2
    }).format(money);
}

export default CurrencyFormatter;