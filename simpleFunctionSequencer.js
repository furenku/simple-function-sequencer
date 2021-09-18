/*

Copyright 2021. Rodrigo Frenk

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/


let timeRunning = 0
let framesPerSecond = 24
let clocks = {}
let sequences = {}


const checkTime = ( time, count ) => {
	return ( millis() - count ) / 1000 > time
}


const play = () => {
	
	Object.values(sequences).forEach( doSequence )

}



const doSequence = sequence => {
	
	if( checkTime( sequence.clock.time, sequence.clock.count ) ) {
		
		sequence.action()
		
		sequence.clock.count = millis()
				
	}
	
}

const addSequence = (action, time=1) => {
	
	if( typeof action !== "function" ) {
		console.warn( "Sequencer must receive a function as 'action' parameter")
		return
	} 
	
	const sequence = {
		name: action.name,
		action,
		clock: {
			time,
			count: 0
		}
	}
	
	sequences[ action.name ] = sequence
	
}



const sequencer = {
	
	play,
	addSequence

}
