// JavaScript for resizing image map areas dynamically
document.addEventListener("DOMContentLoaded", function() {
    const image = document.querySelector('img[usemap]');
    const map = document.querySelector('map');
    const areas = map.querySelectorAll('area');
    const originalWidth = 877;  // original width of the image
    const originalHeight = 620; // original height of the image

    function resizeMap() {
        const imageWidth = image.offsetWidth;
        const scale = imageWidth / originalWidth;
        areas.forEach(area => {
            const coords = area.getAttribute('coords').split(',');
            const scaledCoords = coords.map(coord => Math.round(coord * scale));
            area.setAttribute('coords', scaledCoords.join(','));
        });
    }

    window.addEventListener('resize', resizeMap);
    resizeMap(); // initial call
});

// Function to open a link in a new tab and refresh the page
function openLinkAndRefresh(event) {
    event.preventDefault(); // Prevent the default link behavior
    var url = event.currentTarget.href; // Get the link URL
    window.open(url, '_blank'); // Open the link in a new tab
    setTimeout(function() {
        location.reload(); // Refresh the page after a delay
    }, 1000); // Adjust delay as needed
}

// Attach click event to all navigation bar links
document.querySelectorAll('#navbar a').forEach(function(link) {
    link.addEventListener('click', openLinkAndRefresh);
});

// Attach click event to all image map areas
document.querySelectorAll('map area').forEach(function(area) {
    area.addEventListener('click', openLinkAndRefresh);
});
