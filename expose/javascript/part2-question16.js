for (let value in statistics) {
    if (value[0] == 'r' || statistics[value] % 2 != 0) {
        console.log(statistics[value]);
    }
}