export const getTimeStamp = () => {
    const now = new Date();
    const date = now.toLocaleDateString('en-Gb',{
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
        const time = now.toLocaleTimeString('en-US',{
        hour:'2-digit',
        minute: '2-digit',
        hour12: true,
    });
    return `${date} • ${time}`
}
