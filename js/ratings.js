function collect_ratings() {
    let ratings = {
        count: 0,
        sum: 0,
        average: 0
    }
    let rating = 0;

    const elements = document.querySelectorAll('.rating')

    elements.forEach(element => {
        let res = element.id.replace('star', '')
        rating = parseInt(res)
        ratings.count += parseInt(element.value)
        ratings.sum += parseInt(element.value * rating)
    });
}