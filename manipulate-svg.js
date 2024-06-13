document.addEventListener('DOMContentLoaded', () => {
    const svgContainer = document.getElementById('svg-container');

    // Load the SVG file
    fetch('RegionMap.svg')
        .then(response => response.text())
        .then(svgText => {
            // Insert the SVG into the container
            svgContainer.innerHTML = svgText;

            // After loading SVG, fetch coordinates and add circles
            fetchCoordinatesAndAddCircles(svgContainer); // Pass svgContainer as an argument
        })
        .catch(error => console.error('Error fetching the SVG:', error));
});

async function fetchCoordinatesAndAddCircles(svgContainer) {
    //const coordinatesUrl = 'https://storage.googleapis.com/canonn-downloads/dumpr/Biology/2420703.csv';
    //const coordinatesUrl = 'https://storage.googleapis.com/canonn-downloads/dumpr/Biology/2310313.csv';

    url = new URL(window.location.href);
    // Extract the query parameters
    params = new URLSearchParams(url.search);
    // Get the value of the 'entryid' parameter
    coords = params.get('coords');







    coordinatesUrl = 'edsmPOI.csv';

    try {
        const response = await fetch(coordinatesUrl);
        const csvText = await response.text();
        const svgElement = svgContainer.querySelector('svg');

        if (svgElement) {
            // Split CSV text into lines
            const lines = csvText.trim().split('\n');
            const circleGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            svgElement.prepend(circleGroup); // Add the group as the first child of the SVG


            // Process each line (assuming no header and x, y are in fields 2 and 3)
            let index = 0;
            const batchSize = 100; // Number of circles to add in each batch
            const intervalId = setInterval(() => {
                for (let i = 0; i < batchSize && index < lines.length; i++) {
                    const line = lines[index];
                    const fields = line.split(',');

                    // only interested in DSSA carriers
                    if (fields.length >= 3 && fields[0] == "DSSAcarrier") {
                        const x = parseFloat(fields[3]);
                        const y = parseFloat(fields[5]);

                        if (!isNaN(x) && !isNaN(y)) {
                            tx = ((x + 49985) * 83 / 4096)
                            ty = ((y + 24105) * 83 / 4096)
                            //flip the coords upside down
                            ty = 2048 - ty


                            addCircleToSVG(circleGroup, tx, ty, 'red');
                        }
                    }
                    index++;
                }
                if (coords) {
                    const coordArray = coords.split(',').map(parseFloat);
                    if (coordArray.every(coord => !isNaN(coord))) {
                        const [x, y, z] = coordArray;
                        tx = ((x + 49985) * 83 / 4096);
                        ty = ((z + 24105) * 83 / 4096);
                        ty = 2048 - ty

                        addCircleToSVG(circleGroup, tx, ty, 'green');


                        if (index >= lines.length) {
                            clearInterval(intervalId); // Stop interval when all circles are added
                        }
                    }
                }

            }, 0); // Interval of 0ms (no delay)
        }
    } catch (error) {
        console.error('Error fetching coordinates:', error);
    }
}

function addCircleToSVG(svgElement, x, y, colour) {
    const newCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    newCircle.setAttribute('cx', x);
    newCircle.setAttribute('cy', y);
    newCircle.setAttribute('r', '2'); // radius of 5 units
    newCircle.setAttribute('fill', colour);

    const splash = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    splash.setAttribute('cx', x);
    splash.setAttribute('cy', y);
    splash.setAttribute('r', 50.5); // radius of 5 units
    splash.setAttribute('fill', colour);
    splash.setAttribute('fill-opacity', '0.2'); // 50% transparency

    svgElement.appendChild(splash);
    svgElement.appendChild(newCircle);

    console.log(`Added circle at (${x}, ${y})`);
}
