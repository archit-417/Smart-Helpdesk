export function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
  
export function truncateText(text, maxLength = 100) {
  if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  }