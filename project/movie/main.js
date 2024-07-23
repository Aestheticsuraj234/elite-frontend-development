window.addEventListener("load", async () => {
    let animeData = JSON.parse(localStorage.getItem("anime"));

    if (animeData) {
        CreateCard(animeData);
    } else {
        const url = 'https://anime-manga-and-novels-api.p.rapidapi.com/anime?page=1&pageSize=20';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '62000bded8msh797b06efe3466c1p1087d4jsn988a1acf2d8a',
                'x-rapidapi-host': 'anime-manga-and-novels-api.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            // Add to localStorage
            localStorage.setItem("anime", JSON.stringify(result.items));
            CreateCard(result.items);
        } catch (error) {
            console.error(error);
        }
    }
});

function CreateCard(data) {
    const container = document.getElementsByClassName("grid-container")[0];

    data.forEach((anime) => {
        const trimmedSlug = anime.slug ? anime.slug.substring(0, 20) + '...' : '';
        const trimmedDescription = anime.description ? anime.description.substring(0, 40) + '...' : '';

        container.innerHTML += `
            <div class="w-[22rem] h-[25rem] border border-yellow-500 rounded-md px-2 py-2 flex flex-col
             justify-start items-start gap-y-2">
                <!-- image -->
                <div class="h-[17rem] w-[21rem] rounded-md overflow-hidden shadow-lg">
                    <img src="https://wallpaper.forfun.com/fetch/89/898282fa13d69f3c3700ff76595f4e40.jpeg" alt="anime" class="object-cover h-full w-full"/>
                </div>

                <div class="flex flex-col items-start justify-center gap-y-1">
                    <h1 class="text-lg font-bold text-white truncate">${trimmedSlug}</h1>
                    <p class="text-sm text-gray-500 truncate">${trimmedDescription}</p>
                </div>

                <div class="grid grid-cols-2 gap-2 w-full">
                    <div class="px-1 py-1 bg-indigo-400 text-white border border-indigo-500 rounded-md font-normal flex justify-center items-center gap-2 truncate">
                        <i class="fa-solid fa-tv"></i>
                        <span class="text-xs"> ${anime.episodes}</span>
                    </div>
                    <div class="px-1 py-1 bg-blue-500 text-white border border-blue-500 rounded-md font-normal flex justify-center items-center gap-2 truncate">
                        <i class="fa-solid fa-download"></i>
                        <span class="text-xs">${anime.aired}</span>
                    </div>
                    <div class="px-1 py-1 bg-green-400 text-white border border-green-400 rounded-md font-normal flex justify-center items-center gap-2 truncate">
                        <i class="fa-solid fa-signal"></i>
                        <span class="text-xs">${anime.status}</span>
                    </div>
                    <div class="px-1 py-1 bg-red-400 text-white border border-red-400 rounded-md font-normal flex justify-center items-center gap-2 truncate">
                        <i class="fa-solid fa-clock"></i>
                        <span class="text-xs">${anime.duration}</span>
                    </div>
                </div>

                <div class="mt-3 w-full">
                    <button class="w-full px-4 py-2 bg-yellow-500 text-white font-bold rounded-md">
                        <a href="${anime.id}" target="_blank">Watch Now</a>
                    </button>
                </div>
            </div>`;
    });
}
