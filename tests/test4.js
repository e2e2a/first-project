let number
const myfunct = async () => {
    while (true) {
        number = (number || 0) + 1
        console.log(number)
        if (number === 3) {
            console.log('asdasd')
        }
        return myfunct()
    }
}

(async () => { myfunct() })()