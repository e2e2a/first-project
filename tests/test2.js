import categories from '../constant/categories.js'
const meme = () => {
    for (const loc of locations) {
        meme2(loc)
    }
}
const meme2 = () => {
    const a = "In-Store Bakery"
        .replace(/-/g, '')
        .replace(/\s+/g, ' ')
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
    const b = "Bread Rolls".replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');

    const c = `${a}-${b}`
    console.log('c', c)
    const combined = c;
    const reversedParts = combined.split('-').reduce((acc, word, idx) => {
        if (idx > 0 && word[0] === word[0].toUpperCase()) {
            // New part starts when there's an uppercase
            acc.push('');
        }
        acc[acc.length - 1] += (acc[acc.length - 1] ? '-' : '') + word;
        return acc;
    }, ['']);
    console.log('reversed', reversedParts)

}
(async () => {
    await meme2();
})();