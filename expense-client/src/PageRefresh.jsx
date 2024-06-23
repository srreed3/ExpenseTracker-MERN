function PageRefresh() {

    window.addEventListener('beforeunload', function(event) {
        event.preventDefault();
        return 'Are you sure you want to leave? Your unsaved changes may be lost.';
    });

    return (
        <>
        
        </>
    )
}

export default PageRefresh;