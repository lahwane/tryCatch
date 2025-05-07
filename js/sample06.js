'use strict'

// Global Error Handler

window.onerror = (err) => {
    console.log('Global error handler:', err)
    console.log('Reporting to Logging server')
}

function runDemo() {
    try {
        unknown = 100
    } catch (err) {
        console.log('Big Problem: ', err)
        if(true) throw 'baba'
        
    }
    console.log('Done')
}