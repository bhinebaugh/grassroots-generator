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
//modifiers Real True Patriotic Concerned-about Committed-to Devout United-for/against
adjectives = {
	positive: [
		'Patriotic', 'Citizen', 'Commonsense', 'Independent', 'Real', 'Nonpartisan',
		'Hopeful', 'Future', 'Sensible', 'Reasonable', 'National', 'New', 'American', 'Traditional'
		],
	negative: [
		'Corrupt', 'Corrupting', 'Cynical', 'Insider', 'Bureaucratic', 'Malicious', 'Deceptive',
		'Unamerican', 'False', 'Partisan', 'Political', 'Wasteful'
		]
}
fors = new Array(
'Values', 'Freedom', 'Liberty', 'Independence', 'Democracy', 'Century',
'Change', 'Progress', 'America', 'Hope', 'Honor', 'Financial Gain',
'Pride', 'Decency', 'Action', 'Responsibility', 'Reason', 'Greatness',
'Justice', 'Common Sense', 'Truth', 'Alternatives', 'Unity',
'Nonpartisan Politics', 'Sanity', 'Wealth', 'Prosperity', 'Tradition',
'Clarity', 'Uniformity', 'Victory', 'Happiness', 'Self-Sufficiency'
); //'the American Way', 'the American Dream', 'the Future',
againsts = new Array(
'Waste', 'Fraud', 'Corruption', 'Greed', 'Politicians', 'Slander',
'Spending', 'Decline', 'Decay', 'Oppression','Gridlock',
'Mediocrity', 'Misrepresentation',
'Propaganda', 'Untruth', 'Cynicism', 'Failure','Mediocrity', 'Excess'
); // 'Hatred', 'Treason','Unamerican Things',

slogans = new Array(
'Moving America forward', 'Bringing America together', 'Keeping America strong', 'A stronger America','Making America stronger', 'For a better America','Believe in America','Believing in America\'s potential',
'For a better future', 'For a brighter tomorrow', 'Working for the a better country', 'Democracy at work', 'Hope for the future','Doing what\'s right for our country',
'Change for the better', 'Common-sense solutions for all', 'Solving America\'s problems', 'Working for change', 'Making democracy work',
'Committed to Improving America','Committed to America', 'It\'s about time', 'Moving forward, today'
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
		$('#preposition').html('for');
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
	{background:'white', main:'#468c69', secondary:'#8f7190'},
	{background:'#0e152d', main:'#bfc3de', secondary:'#84858f'},
	{background:'#f3ed75', main:'#662c6c', secondary:'#c07c4a'},
	{background:'#eaf0b5', main:'#c04125', secondary:'#a88466'},
]

// typography adjustments:
// font-size, font-style, text-align

function adjustDesign() {
	colorScheme = colorCombos[ Math.floor(Math.random()*colorCombos.length) ]
	$('.output').css({
		background: colorScheme.background,
		color: colorScheme.main
	});
	$('#slogan').css({ color: colorScheme.secondary });
}

$('#generate').on('click', function() {
		console.log('clicked');
		createCommittee();
		adjustDesign();
		$('#slogan').html(createSlogan());
	});
