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
);  //modifiers Real True Patriotic Concerned-about Committed-to Devout United-for/against
fors = new Array(
'Values', 'Freedom', 'Liberty', 'Independence', 'Democracy', 'the Future',
'Change', 'Progress', 'America', 'Hope', 'Honor', 'Financial Gain',
'Pride', 'Decency', 'Action', 'Responsibility', 'Reason','Greatness',
'Justice', 'Common Sense', 'Truth', 'Sensible Alternatives',
'the American Way', 'the American Dream', 'National Unity',
'Nonpartisan Politics', 'Sanity', 'Wealth', 'Prosperity', 'Tradition',
'Clarity', 'Uniformity', 'Victory', 'Happiness', 'Sufficiency'
);
againsts = new Array(
'Waste', 'Fraud', 'Corruption', 'Greed', 'Politicians', 'Slander',
'Spending', 'Decline', 'Decay', 'Treason', 'Oppression','Gridlock',
'Unamerican Things', 'Hatred', 'Mediocrity', 'Misrepresentation',
'Propaganda', 'Untruth', 'Cynicism', 'Failure','Mediocrity'
); //modifiers False, Malicious, Untrue
slogans = new Array(
'Moving America forward.', 'Bringing America together.', 'Keeping America strong.', 'A stronger America','Making America stronger.', 'For a better America.','Believe in America','Believing in America\'s potential.',
'For a better future.', 'For a brighter tomorrow.', 'Working for the a better country.', 'Democracy at work.', 'Hope for the future.','Doing what\'s right for our country.',
'Change for the better.', 'Common-sense solutions for all.', 'Solving America\'s problems.', 'Working for change.', 'Making democracy work.',
'Committed to Improving America','Committed to America'
);

function select(fromlist, howmany) {
	var results = new Array();
	var result_string = '';
	var newword = '';
	for (i=0; i<howmany; i++) {
		do {
  			randomint = Math.floor( Math.random()* fromlist.length );
			newword = fromlist[randomint];
  		} while ( results.include(newword) ); //randomint is in results Array; repeat
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
	var cname = select(unit, 1);
	variation = Math.random();
	if (variation < 0.5) {
		// 'for' committee
		cname += ' for ';
		if (variation < 0.70) {
			cname += select(fors, 1);
		} else {
			cname += select(fors, 2);
		}
	} else {
		// 'against' committee
		cname += ' against ';
		if (variation < 0.25) {
			cname += select(againsts, 1);
		} else {
			cname += select(againsts, 2);
		}
	}
	return cname;
}

function createSlogan() {
	return select(slogans, 1);
}
