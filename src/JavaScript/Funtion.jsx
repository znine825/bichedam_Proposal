export function accentText(text) {
    const parts = text.split(/(\*\*.*?\*\*|\/\/)/g);
    return parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return (
                <span key={i} style={{ color: '#5B8DEF', fontWeight: 800 }}>
                    {part.slice(2, -2)}
                </span>
            );
        }
        if (part === '//') {
            return <br key={i} />;
        }
        return part; 
    });
}