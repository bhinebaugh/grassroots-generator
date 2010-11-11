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
);  //modifiers Real True Patriotic Concerned
fors = new Array(
'Values', 'Freedom', 'Liberty', 'Independence', 'Democracy', 'the Future',
'Change', 'Progress', 'America', 'Hope', 'Honor', 'Financial Gain',
'Pride', 'Decency', 'Action', 'Responsibility', 'Reason',
'Justice', 'Common Sense', 'Truth', 'Sensible Alternatives',
'the American Way', 'the American Dream', 'National Unity',
'Nonpartisan Politics', 'Sanity', 'Wealth', 'Prosperity', 'Tradition',
'Clarity', 'Uniformity', 'Victory', 'Happiness', 'Sufficiency'
);
againsts = new Array(
'Waste', 'Fraud', 'Corruption', 'Greed', 'Politicians', 'Slander',
'Spending', 'Decline', 'Decay', 'Treason', 'Oppression',
'Unamerican Things', 'Hatred', 'Mediocrity', 'Misrepresentation',
'Propaganda', 'Untruth', 'Cynicism', 'Failure'
); //modifiers False, Malicious, Untrue
slogans = new Array(
'Moving America forward.', 'Bringing America together.', 'Keeping America strong.', 'Making America stronger.', 'For a better America.',
'For a better future.', 'For a brighter tomorrow.', 'Working for the a better country.', 'Democracy at work.', 'Hope for the future.',
'Change for the better.', 'Common-sense solutions for all.', 'Solving America\'s problems.', 'Working for change.', 'Making democracy work.'
);

function select(fromlist, howmany) {
	var results = new Array();
	var result_string = '';
	var options = fromlist;
	for (i=0; i<howmany; i++) {
/* 		do {
 * 			randomint = Math.floor( Math.random()* fromlist.length );
 * 		} while ( results.indexOf(randomint) > -1); //randomint is in results Array
 * 		results.push(randomint);
 */
		randomint = Math.floor( Math.random()* options.length );
		new_word = options[randomint];
		if (i > 0) result_string += " and ";
		result_string += new_word;
		options = options.without(new_word);

	}
	//results.join(' and ');
	return result_string;
}
function createCommittee() {
	var cname = select(unit);
	variation = Math.random();
	if (variation > 0.5) {
		cname += " for " + select(fors);
		if (variation > 0.65) {
			cname += " and " + select(fors);
		}
	} else {
		var against1 = select(againsts);
		cname += " against " + against1;
		if (variation < 0.2) {
			cname += " and " + select(againsts);
		}
	}
	return cname;
}
