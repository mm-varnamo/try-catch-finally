import format from 'date-fns/format';

export const generateSlug = (input: string) => {
	return input
		.replace(/[^a-zA-Z0-9 ]/g, '')
		.trim()
		.replace(/ +/g, ' ') // merge multiple spaces into one space
		.replace(/\s/g, '-') // replace spaces with "-"
		.toLowerCase();
};

export const formatDate = (dateString: string) => {
	return format(new Date(dateString), 'MMM d, yyyy');
};
