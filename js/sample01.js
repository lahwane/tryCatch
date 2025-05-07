'use strict'

// The Basics

function runDemo() {
    var num = 4
    
    try {
        num.toLowerCase() 
        console.log('Never run')
    } catch(err) {
        console.log('Had a problem', err)
    }
    
    console.log('Done')
}