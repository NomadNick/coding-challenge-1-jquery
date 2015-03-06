var staff = [
{
	name: 'Bob',
	occupation: 'programmer',
	awesomeIndex: 7
},
{
	name: 'Alice',
	occupation: 'programmer',
	awesomeIndex: 9
},
{
	name: 'Bob',
	occupation: 'programmer',
	awesomeIndex: 4
},
{
	name: 'Alice',
	occupation: 'programmer',
	awesomeIndex: 2
},
{
	name: 'Bob',
	occupation: 'programmer',
	awesomeIndex: 33
},
{
	name: 'Alice',
	occupation: 'programmer',
	awesomeIndex: 6
},
{
	name: 'Zaphod',
	occupation: 'President of the Galaxy'
}
];

var collectiveAwesomeness = 0,
	programmerCount = 0;

var awesomeAverage = function () {
	_.forEach(staff, function(staff) {
		if (staff.occupation === 'programmer') {
			collectiveAwesomeness+=(staff.awesomeIndex);
			programmerCount++;
		}
	});
	return (collectiveAwesomeness/programmerCount).toFixed(1);
};

$('#awesome-index').append(awesomeAverage());




























