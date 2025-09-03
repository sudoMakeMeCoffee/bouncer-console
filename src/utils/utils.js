export function formatDate(isoString) {
    const date = new Date(isoString);

    // Options for formatting
    const options = { year: 'numeric', month: 'long', day: '2-digit' };

    return date.toLocaleDateString('en-US', options);
}
