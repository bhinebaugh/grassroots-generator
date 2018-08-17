/**
Purpose: Generate bland, uninformative names in the style of independent campaign expenditure groups
Started: November 2010
To Do:
	randomly add adjectives to some names (spit names into those that take adj and those that don't?)
	random image! (stars, strips, gradients, bars, chevrons, flags, etc)
	styles!  use prototype to change/add CSS
	tack on a generic slogan
**/
unit = new Array(
	'Committee', 'Taxpayers', 'Citizens', 'Patriots',
	'Fund', 'Commission', 'Americans', 'Voters', 'People',
	'Ordinary People', 'Real Americans',
	'Senior Citizens', 'Youth', 'Parents',
	'Concerned Citizens', 'Alliance', 'Coalition'
);
// Prefixes
// Concerned, Informed
//modifiers Real True Patriotic Concerned-about Committed-to Devout United-for/against
adjectives = {
	positive: [
		'Patriotic', 'Citizen', 'Commonsense', 'Independent', 'Real', 'Nonpartisan', 'Constitutional',
		'Hopeful', 'Future', 'Sensible', 'Reasonable', 'National', 'New', 'American', 'Traditional',
		'Unifying', 'Rational', 'Ethical', 'Balanced'
		],
	negative: [
		'Corrupt', 'Corrupting', 'Cynical', 'Insider', 'Bureaucratic', 'Malicious', 'Deceptive',
		'Unamerican', 'False', 'Partisan', 'Political', 'Wasteful', 'Harmful',
		'Fake', 'Inefficient', 'Divisive', 'Undue', 'Extravagant',
		]
}
fors = new Array(
	'Values', 'Freedom', 'Liberty', 'Independence', 'Democracy', 
	'Change', 'Progress', 'America', 'Hope', 'Honor', 'Financial Gain',
	'Pride', 'Decency', 'Action', 'Responsibility', 'Reason', 'Greatness',
	'Justice', 'Common Sense', 'Truth', 'Alternatives', 'Unity', 'National Investment',
	'Nonpartisan Politics', 'Sanity', 'Wealth', 'Prosperity', 'Tradition',
	'Clarity', 'Uniformity', 'Victory', 'Happiness', 'Self-Sufficiency',
	'Power', 'Leadership', 'Integrity'
); //'the American Way', 'the American Dream', 'the Future',
// /+-adj/ Government 'Century',
againsts = new Array(
	'Waste', 'Fraud', 'Corruption', 'Greed', 'Politicians', 'Slander',
	'Spending', 'Decline', 'Oppression','Gridlock',
	'Mediocrity', 'Misrepresentation', 'Incompetence', 'Spending',
	'Propaganda', 'Untruth', 'Cynicism', 'Failure', 'Mediocrity', 'Excess',
	'Losing',
); // 'Hatred', 'Treason','Unamerican Things',  'Decay',

slogans = new Array(
	'Moving America forward', 'Bringing America together', 'Keeping America strong', 'A stronger America','Making America stronger', 'For a better America','Believe in America','Believing in America\'s potential', 'The right things for America',
	'For a better future', 'For a brighter tomorrow', 'Working for a better country', 'Democracy at work', 'Hope for the future','Doing what\'s right for our country', 'A vision for the future','Envisioning a better America',
	'Change for the better', 'Common-sense solutions for all', 'Solving America\'s problems', 'Working for change', 'Making democracy work',
	'Committed to Improving America','Committed to America', 'It\'s about time', 'Moving forward, today', 'Sensible policy for all', 'Needed leadership in troubled times',
	'Advocating for America', 'Reliable ideas from trusted sources', 'New thinking for new challenges', 'Restoring trust in our democracy'
);

function select(fromlist, howmany) {
	var results = new Array();
	var result_string = '';
	var newword = '';
	for (i=0; i<howmany; i++) {
		do {
  		var randomint = Math.floor( Math.random()* fromlist.length );
			newword = fromlist[randomint];
		} while ( results.indexOf(newword) !== -1 ); //randomint is in results Array; repeat
  		results.push(newword);
		if ( i>0 ) result_string += " and ";
		result_string += newword;
/* 		randomint = Math.floor( Math.random()* options.length );
 * 		new_word = options[randomint];
 * 		if (i > 0) result_string += " and ";
 * 		result_string += new_word;
 * 		options = options.without(new_word);
 */

	}
	//results.join(' and ');
	return result_string;
}
function createCommittee() {
	$('#group').html( select(unit, 1) );
	var variation = Math.random();
	var modifier = '';
	if (variation < 0.5) {
		// 'for' committee
		$('#preposition').html('for'); // 'in support of'
		if (variation < 0.45) {
			if (variation < 0.35) modifier = select(adjectives.positive, 1) + ' ';
			$('#value').html( modifier + select(fors, 1) );
		} else {
			$('#value').html( select(fors, 2) );
		}
	} else {
		// 'against' committee
		$('#preposition').html('against');
		if (variation > 0.65) {
			if (variation > 0.7) modifier = select(adjectives.negative, 1) + ' ';
			$('#value').html( modifier + select(againsts, 1) );
		} else {
			$('#value').html( select(againsts, 2) );
		}
	}
}

function createSlogan() {
	return select(slogans, 1);
}

colorCombos = [
	{background:'#932525', main:'white', secondary:'#ccb785'},
	{background:'#254193', main:'white', secondary:'#d5c12c'},
	{background:'ebf8bb', main:'#468c69', secondary:'#8f7190'},
	{background:'#0e152d', main:'#bfc3de', secondary:'#84858f'},
	{background:'linear-gradient(#f0ffa6, #e9c96d)', main:'#874d8d', secondary:'#c07c4a'},
	{background:'#eaf0b5', main:'#c04125', secondary:'#a88466'},
	{background:'dbd7f5', main:'#547d86', secondary:'#bd7878'},
	{background:'linear-gradient(200deg, rgb(89, 89, 156), rgb(42, 42, 117))', main:'#fff', secondary:'rgb(143, 143, 216)'},
	{background:'linear-gradient(340deg, #2b544a, #2a7533)', main:'#fff', secondary:'#bcd24c'},
	{background:'linear-gradient(174deg,#e49f9a, rgb(240, 231, 181) 29%,#e36666 78%)', main:'#4f447e', secondary:'#68525f'},
	{background:'linear-gradient(#eaf0b5,#f8cb5e)', main:'#c04125', secondary:'#a88466'},
	{background: 'linear-gradient(-45deg,#4504da,#ff0353)', main:'white', secondary:'#aaa'},
	{background:'#9c0000', main:'#fff799', secondary:'#ccc8c0'},
	// borders
	{
		background:'linear-gradient(#f55 0px, #f55 8%, red 8%, red 92%, #f55 92%, #f55 100%)',
		main:'#fff799',
		secondary:'#ccc8c0'
	},	
	// stripes
	{
		background:'linear-gradient(140deg, white 65%, white 70%, red 70%, red 75%, white 75%, white 80%, red 80%, red 85%, white 85%, white 90%, red 90%, red 95%, white 95%)',
		main:'#3bbde0',
		secondary:'#ce7272'
	},
	// fading stripes
	{
		background:'linear-gradient(140deg, white 50%, #fff7f7 50%, #fed0d0 55%, white 55%, white 60%, #fbbaba 60%, #ff6e6e 65%, white 65%, white 70%, #ed8e8e 70%, #ff3838 75%, white 75%, white 80%, #f96464 80%, #ef1c1c 85%, white 85%, white 90%, #ff5b5b 90%, red 95%, white 95%)',
		main:'#3bbde0',
		secondary:'#ce7272'
	},
	// more stripes
	{
		background:'linear-gradient(130deg, white 55%, #ff8484 63%, white 65%, white 67%, #fb8d8d 70%, #ff3e3e 73%, white 75%, white 78%, #ff3535 82%, #ff3636 84%, white 86%, white 90%, red 96%)',
		main:'#1f4668',
		secondary:'#3a5d86'
	}
]
// typography adjustments:
// font-size, font-style, text-align
fontStacks = [
	'“Arial Black”, “Arial Bold”, Gadget, sans-serif',
	'Arial, "Helvetica Neue", Helvetica, sans-serif',
	'"Gill Sans", Calibri, sans-serif',
	'Impact, Haettenschweiler, "Franklin Gothic Bold", Charcoal, "Helvetica Inserat", "Bitstream Vera Sans Bold", "Arial Black", sans-serif',
	'"Segoe UI", Candara, "Bitstream Vera Sans", "DejaVu Sans", "Bitstream Vera Sans", "Trebuchet MS", Verdana, "Verdana Ref", sans-serif',
	'Cambria, "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif',
	'Constantia, "Lucida Bright", Lucidabright, "Lucida Serif", Lucida, "DejaVu Serif", "Bitstream Vera Serif", "Liberation Serif", Georgia, serif',
]
fontSizes = [1, 1.2, 1.4]
decorations = [

] // borders, frames

function adjustDesign() {
	colorScheme = colorCombos[ Math.floor(Math.random()*colorCombos.length) ]
	font = fontStacks[ Math.floor(Math.random()*fontStacks.length) ]
	size = fontSizes[ Math.floor(Math.random()*3) ].toString() + "em"
	$('.output').css({
		background: colorScheme.background,
		color: colorScheme.main,
		fontFamily: font
	});
	$('#slogan').css({ color: colorScheme.secondary });
	$('#value').css({ fontSize: size })
}

$('#generate').on('click', function() {
		createCommittee();
		adjustDesign();
		$('#slogan').html(createSlogan());
	});
