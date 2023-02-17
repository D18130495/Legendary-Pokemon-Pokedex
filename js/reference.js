(function ($) {
    "use strict";

    var referenceTable = [
        {
            index: "1",
            type: "Image",
            section: "Carousel",
            reference: "870+ Pokémon HD Wallpapers, Desktop Backgrounds. Available at: ",
            link: "https://wall.alphacoders.com/by_sub_category.php?id=170023&amp;lang=Chinese"
        },
        {
            index: "2",
            type: "Content",
            section: "Species Strength",
            reference: "HomePokemonpedia, the encyclopedia about Pokémon. Available at: ",
            link: "https://wiki.52poke.com/wiki/"
        },
        {
            index: "3",
            type: "Image",
            section: "Generation, Pokémon",
            reference: "HomePokemonpedia, the encyclopedia about Pokémon. Available at: ",
            link: "https://wiki.52poke.com/wiki/"
        },
        {
            index: "4",
            type: "Content",
            section: "Generation",
            reference: "Pokémon (video game series) (2023) Wikipedia. Wikimedia Foundation. Available at: ",
            link: "https://en.wikipedia.org/wiki/Pok%C3%A9mon_(video_game_series)"
        },
        {
            index: "5",
            type: "Content",
            section: "History",
            reference: "Timeline of Pokémon (2023) Wikipedia. Wikimedia Foundation. Available at: ",
            link: "https://en.wikipedia.org/wiki/Timeline_of_Pok%C3%A9mon#Generation_IX:_Paldea_(2022%E2%80%93)"
        },
        {
            index: "6",
            type: "Image",
            section: "Strength",
            reference: "Galardex - Pokédex - Pokémon Sword and Shield. Available at: ",
            link: "https://www.pokedex.app/zh/pokemon-galardex"
        },
        {
            index: "7",
            type: "Image",
            section: "Strength",
            reference: "Legendary pok Serebii.net Header. Available at: ",
            link: "https://www.serebii.net/pokemon/legendary.shtml"
        },
        {
            index: "8",
            type: "Template",
            section: "*",
            reference: "",
            link: "https://themewagon.github.io/digimedia/homepage_3.html"
        }
    ]

    $.each(referenceTable, function(index, item) {
        const order = $("<td></td>").append(item.index)
        const type = $("<td></td>").append(item.type);
        const section = $("<td></td>").append(item.section);

        var a = document.createElement('a');
        a.href = this.link;
        a.target = "_blank"
        a.innerHTML = this.link;

        const reference = $("<td></td>").append(this.reference).append(a);

        $("<tr></tr>").append(order).append(type).append(section).append(reference).appendTo("#reference-table");
    })
})(window.jQuery);
