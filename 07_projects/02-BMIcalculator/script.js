const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const detailsResults = document.querySelector('#details--results')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please enter a valid height "${height}"`
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please enter a valid weight "${weight}"`
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        // show result
        results.innerHTML = `<span>${bmi}</span>`

        if (bmi < 18.6) {
            detailsResults.innerHTML = `You are under weight`
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            detailsResults.innerHTML = `Your weight is normal`
        } else {
            detailsResults.innerHTML = `You are overweight`
        }
    }

})