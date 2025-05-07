'use strict'

// Now Lets go async

async function runDemo() {
    try {
        const res = await doSomethingRisky()
        console.log('Success: ', res)
    } catch (err) {
        alert(err)
    } finally {
        console.log('Always run')
    }

    // doSomethingRisky()
    //     .then(res => console.log('Success: ', res))
    //     .catch(err => alert(err))
    //     .finally(() => console.log('Always run'))
}

async function doSomethingRisky() {
    // return 100
    throw 'Nope'
}