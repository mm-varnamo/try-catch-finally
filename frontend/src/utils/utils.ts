import format from 'date-fns/format';

export const formatDate = (dateString: string) => {
	return format(new Date(dateString), 'MMM d, yyyy');
};
