let bgColor = 0
let textColor = 1/2

let texts = [ "one", "two", "three", "four", "five" ]
let currentText = ""

function setup() {
	
	createCanvas( windowWidth, windowHeight )

	colorMode( HSB, 1, 1, 1, 1 ) 
	textAlign( CENTER, CENTER )
	textSize( 100 )
	
	background(0)
	
	sequencer.addSequence( changeBgColor, 2 )
	sequencer.addSequence( changeText, 1 )
	sequencer.addSequence( changeTextColor, 1/2 )
	
	
}

function draw() {

	background( bgColor, 1, 1, 1/20 )
	
	fill( textColor, 1, 1, 1/2 )
	
	text( currentText, width/2, height/2 )

	sequencer.play()
		
}

function changeBgColor() {
	bgColor = random()	
}

function changeTextColor() {
	textColor = random()	
}

function changeText() {
	currentText = random( texts )
}

