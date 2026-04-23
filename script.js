
const elements = [

    {
        name: "Hydrogen",
        symbol: "H",
        number: 1,
        mass: "1.008",
        group: 1,
        period: 1,
        category: "Nonmetal",
        state: "Gas",
        danger: "2/10 - Extremely flammable and explosive when mixed with oxygen, but not toxic on its own.",
        image: "images/hydrogen.png",
        fact: `Hydrogen is the lightest element in the entire universe, and also the most abundant. 
        Seriously, most of the stars you see are basically giant hydrogen engines. It's incredibly simple,
        just one proton and one electron, but it powers nuclear fusion and keeps stars shining for
        billions of years. Here on Earth, it's often found combined with other elements, like in water.
        Hydrogen is currently also being explored as a clean fuel source, which could be a big deal 
        for the future. Not bad for something that weighs almost nothing!`
    },
    {
        name: "Helium",
        symbol: "He",
        number: 2,
        mass: "4.0026",
        group: 18,
        period: 1,
        category: "Noble Gas",
        state: "Gas",
        danger: "0/10 - Completely inert and non-toxic, but can displace oxygen in confined spaces.",
        image: "images/helium.png",
        fact: `Helium is the second most abundant element in the universe, right behind hydrogen, 
        and it's incredibly stable. Because it doesn't react with other elements, it's classified as 
        a noble gas. On Earth, it's best known for filling balloons since it's lighter than air, but 
        it's also used in things like MRI machines and cryogenics due to its ability to reach extremely
        low temperatures. Helium is so unreactive that it basically refuses to bond with anything.
        It just exists, does its job, and moves on.`
    },
    {
        name: "Lithium",
        symbol: "Li",
        number: 3,
        mass: "6.94",
        group: 1,
        period: 2,
        category: "Alkali Metal",
        state: "Solid",
        danger: "7/10 - Highly reactive metal that can ignite or explode when exposed to water.",
        image: "images/lithium.png",
        fact: `Lithium is a very light metal that plays a huge role in modern technology, especially
        in lithium-ion batteries used in phones, laptops, and electric vehicles. It's highly reactive,
        so it's usually found combined with other elements rather than on its own. Its ability to store
        and release energy efficiently makes it one of the most important elements for portable power.
        Lithium is also used in some medications, particularly for mood stabilization.
        Small element, big impact.`
    },
    {
        name: "Beryllium",
        symbol: "Be",
        number: 4,
        mass: "9.0122",
        group: 2,
        period: 2,
        category: "Alkaline Earth Metal",
        state: "Solid",
        danger: "8/10 - Toxic if inhaled as dust and can cause serious lung disease.",
        image: "images/beryllium.png",
        fact: `Beryllium is a lightweight but extremely strong metal, which makes it valuable in
        aerospace and high-performance applications. It's used in things like satellites, aircraft parts,
        and precision instruments where both strength and low weight matter. Despite its usefulness,
        beryllium is toxic if inhaled as dust, so it has to be handled carefully. Its stiffness and 
        stability make it ideal for situations where precision is critical. It's not common in everyday life,
        but it shows up in some very important places.`
    },
    {
        name: "Boron",
        symbol: "B",
        number: 5,
        mass: "10.81",
        group: 13,
        period: 2,
        category: "Metalloid",
        state: "Solid",
        danger: "3/10 - Low toxicity but can be harmful in high amounts or industrial exposure.",
        image: "images/boron.png",
        fact: `Boron is a somewhat overlooked element, you probably don't even know what it does! but it's
        essential in a variety of applications. It's used to make strong, heat-resistant glass, like the 
        kind found in lab equipment and cookware. Boron also appears in detergents and plays a role in
        agriculture, since plants need small amounts of it to grow properly. In materials science, it helps 
        improve strength and durability. Not the most famous element, but definitely one that keeps things 
        working behind the scenes.`
    },
    {
        name: "Carbon",
        symbol: "C",
        number: 6,
        mass: "12.011",
        group: 14,
        period: 2,
        category: "Nonmetal",
        state: "Solid",
        danger: "2/10 - Generally safe, but forms dangerous compounds like carbon monoxide.",
        image: "images/carbon.png",
        fact: `Carbon is the foundation of all known life, forming the backbone of molecules like DNA,
        proteins, and sugars. What makes it special is its ability to bond with many other elements,
        including itself, creating incredibly complex structures. It exists in very different forms,
        from soft graphite in pencils to incredibly hard diamonds. Carbon is also a key part of fuels 
        like coal, oil, and natural gas. Without carbon, life as we know it simply wouldn't exist.`
    },
    {
        name: "Nitrogen",
        symbol: "N",
        number: 7,
        mass: "14.007",
        group: 15,
        period: 2,
        category: "Nonmetal",
        state: "Gas",
        danger: "1/10 - Non-toxic but can displace oxygen and cause suffocation in enclosed spaces.",
        image: "images/nitrogen.png",
        fact: `Nitrogen makes up about 78% of Earth's atmosphere, making it the most abundant gas in 
        the air you breathe. Despite that, it's relatively unreactive in its natural form, which is 
        why it just sits in the atmosphere most of the time. It becomes useful when converted into 
        compounds like ammonia, which are essential for fertilizers and food production. Nitrogen 
        is also a key component of proteins and DNA in living organisms. It's everywhere but
        just usually not in a form you can see or use directly.`
    },
    {
        name: "Oxygen",
        symbol: "O",
        number: 8,
        mass: "15.999",
        group: 16,
        period: 2,
        category: "Nonmetal",
        state: "Gas",
        danger: "4/10 - Not toxic, but highly reactive and greatly accelerates combustion.",
        image: "images/oxygen.png",
        fact: `Oxygen makes up about 21% of Earth's atmosphere and is essential for respiration in
        most living things. It plays a major role in combustion, which is why fires need oxygen to 
        burn. Oxygen is also part of water, making it critical for life in more ways than one. 
        In industry and medicine, it's used in processes ranging from steel production to oxygen 
        therapy. It's one of the most important elements for both life and chemistry.`
    },
    {
        name: "Fluorine",
        symbol: "F",
        number: 9,
        mass: "18.998",
        group: 17,
        period: 2,
        category: "Halogen",
        state: "Gas",
        danger: "10/10 - Extremely toxic and violently reactive with most substances.",
        image: "images/fluorine.png",
        fact: `Fluorine is the most reactive element in the periodic table, meaning it bonds with 
        almost anything it can. Because of that, it's rarely found in its pure form and is usually
        part of compounds. Fluorine based compounds are used in things like toothpaste, helping 
        prevent cavities, and in nonstick coatings like Teflon. Its extreme reactivity makes it 
        both useful and dangerous, depending on how it's handled. It's not something you'd want 
        to encounter on its own.`
    },
    {
        name: "Neon",
        symbol: "Ne",
        number: 10,
        mass: "20.180",
        group: 18,
        period: 2,
        category: "Noble Gas",
        state: "Gas",
        danger: "0/10 - Completely inert and non-toxic, but can displace oxygen in confined spaces.",
        image: "images/neon.png",
        fact: `Neon is a noble gas that's best known for its use in bright, glowing signs. When 
        electricity passes through neon gas, it emits a distinct reddish-orange light, which made
        it famous in advertising. Like other noble gases, neon is very stable and doesn't react 
        easily with other elements. It's also used in high voltage indicators and some types of
        lasers. Simple element, very recognizable effect.`
    },
    {
        name: "Sodium",
        symbol: "Na",
        number: 11,
        mass: "22.990",
        group: 1,
        period: 3,
        category: "Alkali Metal",
        state: "Solid",
        danger: "9/10 - Reacts violently with water and can explode or ignite on contact.",
        image: "images/sodium.png",
        fact: `Sodium is a highly reactive metal that's best known for being part of table salt
        (sodium chloride). On its own, it reacts violently with water, which is why it's always
        stored carefully in labs. Despite that, sodium compounds are essential for life, especially
        in maintaining fluid balance and nerve function in the body. It's also used in street lighting,
        producing that distinct yellow glow. On its own it's dangerous, but in compounds it's everywhere.`
    },
    {
        name: "Magnesium",
        symbol: "Mg",
        number: 12,
        mass: "24.305",
        group: 2,
        period: 3,
        category: "Alkaline Earth Metal",
        state: "Solid",
        danger: "5/10 - Burns intensely at high temperatures and can be difficult to extinguish.",
        image: "images/magnesium.png",
        fact: `Magnesium is a lightweight metal that burns with a bright white flame, which is why it's
        used in fireworks and flares. It's also an important structural material in alloys, especially 
        where strength and low weight are needed. In biology, magnesium plays a key role in muscle and
        nerve function, and it's actually part of chlorophyll in plants. Because of its properties,
        it shows up in both industrial and biological systems. It's one of those elements that's quietly doing a lot.`
    },
    {
        name: "Aluminum",
        symbol: "Al",
        number: 13,
        mass: "26.982",
        group: 13,
        period: 3,
        category: "Post-Transition Metal",
        state: "Solid",
        danger: "2/10 - Generally safe, though fine dust can be flammable and inhalation can be harmful.",
        image: "images/aluminum.png",
        fact: `Aluminum is a lightweight, corrosion resistant metal that's widely used in cans, foil, and 
        aircraft construction. It doesn't rust like iron, which makes it incredibly useful for everyday
        applications. Aluminum is also highly recyclable, and a large portion of it gets reused repeatedly.
        Despite being so common now, it was once considered a precious metal due to how difficult it was to
        extract. Today, it's one of the most practical materials we have.`
    },
    {
        name: "Silicon",
        symbol: "Si",
        number: 14,
        mass: "28.085",
        group: 14,
        period: 3,
        category: "Metalloid",
        state: "Solid",
        danger: "3/10 - Relatively stable, but dust can irritate lungs and be harmful if inhaled.",
        image: "images/silicon.png",
        fact: `Silicon is the foundation of modern electronics, making it essential for computer chips and 
        semiconductors. It's a metalloid, meaning it has properties between metals and nonmetals, which makes
        it perfect for controlling electrical signals. Silicon is also a major component of sand and glass,
        so it's more common than you might expect. Its ability to act as a semiconductor is what makes modern
        technology possible. Without silicon, no phones, no computers, no internet.`
    },
    {
        name: "Phosphorus",
        symbol: "P",
        number: 15,
        mass: "30.974",
        group: 15,
        period: 3,
        category: "Nonmetal",
        state: "Solid",
        danger: "7/10 - Highly reactive; some forms can ignite spontaneously and are toxic.",
        image: "images/phosphorus.png",
        fact: `Phosphorus is a reactive nonmetal that's used in things like matches, fertilizers, and biological
        molecules like DNA. It plays a critical role in energy transfer within cells, especially in molecules like
        ATP. Phosphorus exists in several forms, some of which can glow in the dark or ignite spontaneously. In
        agriculture, it's essential for plant growth, making it a key component of fertilizers. It's not as visible
        as some elements, but it's absolutely essential for life.`
    },
    {
        name: "Sulfur",
        symbol: "S",
        number: 16,
        mass: "32.06",
        group: 16,
        period: 3,
        category: "Nonmetal",
        state: "Solid",
        danger: "4/10 - Generally safe, but forms toxic gases like sulfur dioxide when burned.",
        image: "images/sulfur.png",
        fact: `Sulfur is a nonmetal best known for its role in fertilizers and chemicals, and for the strong 
        smell of some of its compounds. It's commonly found in volcanic areas and can appear as bright yellow
        crystals in nature. Sulfur is essential for life, being part of certain amino acids and proteins. It's
        also used in the production of sulfuric acid, one of the most important industrial chemicals. Not the
        best smell, but extremely useful.`
    },
    {
        name: "Chlorine",
        symbol: "Cl",
        number: 17,
        mass: "35.45",
        group: 17,
        period: 3,
        category: "Halogen",
        state: "Gas",
        danger: "9/10 - Highly toxic gas that can damage lungs and react dangerously with other substances.",
        image: "images/chlorine.png",
        fact: `Chlorine is a highly reactive nonmetal that's widely used to disinfect water, including drinking 
        water and swimming pools. It's part of the halogen group and readily forms compounds with many elements,
        especially metals. Chlorine is also used in making plastics like PVC and in various cleaning products. In
        its pure form, it's a toxic gas, which is why it's handled carefully. Controlled properly, it plays a 
        major role in public health.`
    },
    {
        name: "Argon",
        symbol: "Ar",
        number: 18,
        mass: "39.948",
        group: 18,
        period: 3,
        category: "Noble Gas",
        state: "Gas",
        danger: "0/10 - Inert and non-toxic, but can displace oxygen in confined spaces.",
        image: "images/argon.png",
        fact: `Argon is a noble gas that makes up about 1% of Earth's atmosphere and is almost completely 
        unreactive. Because it doesn't easily form compounds, it's often used in environments where reactions
        need to be prevented, like in welding or light bulbs. Argon provides an inert atmosphere that keeps
        materials stable. It's also used in some types of lasers and scientific equipment. It doesn't do much 
        chemically, and that's exactly why it's useful.`
    },
    {
        name: "Potassium",
        symbol: "K",
        number: 19,
        mass: "39.098",
        group: 1,
        period: 4,
        category: "Alkali Metal",
        state: "Solid",
        danger: "9/10 - Reacts violently with water and can ignite or explode on contact.",
        image: "images/potassium.png",
        fact: `Potassium is a very reactive metal that plays a crucial role in muscle function and nerve signaling 
        in the human body. Like sodium, it reacts strongly with water and is never found freely in nature. Potassium
        compounds are commonly used in fertilizers because plants need it to grow properly. It's also an essential
        dietary mineral for humans. Reactive on its own, but vital in the right form.`
    },
    {
        name: "Calcium",
        symbol: "Ca",
        number: 20,
        mass: "40.078",
        group: 2,
        period: 4,
        category: "Alkaline Earth Metal",
        state: "Solid",
        danger: "3/10 - Reactive metal that can irritate skin and reacts with water, but less violently than alkali metals.",
        image: "images/calcium.png",
        fact: `Calcium is a metal that's essential for bones and teeth, making it one of the most important 
        elements in the human body. It's also involved in muscle contraction, nerve signaling, and blood clotting.
        Calcium is commonly found in minerals like limestone and in foods such as milk and dairy products.
        In industry, it's used in construction materials like cement. It's one of those elements that's both 
        biologically and structurally important.`
    },
    {
        name: "Scandium",
        symbol: "Sc",
        number: 21,
        mass: "44.956",
        group: 3,
        period: 4,
        category: "Transition Metal",
        state: "Solid",
        danger: "2/10 - Low toxicity, but fine dust can be irritating if inhaled.",
        image: "images/scandium.png",
        fact: `Scandium is a relatively rare metal that's often used to strengthen aluminum alloys, especially
        in aerospace and high-performance equipment. Even small amounts of scandium can significantly improve
        strength and durability without adding much weight. Because of its rarity, it's not widely used in everyday
        products, but it shows up in specialized applications like sports equipment and advanced materials. It also
        has uses in certain types of lighting, including high intensity lamps. Not very common, but when it shows up,
        it makes a difference.`
    },
    {
        name: "Titanium",
        symbol: "Ti",
        number: 22,
        mass: "47.867",
        group: 4,
        period: 4,
        category: "Transition Metal",
        state: "Solid",
        danger: "3/10 - Generally safe, but fine powder can be flammable and inhalation may be harmful.",
        image: "images/titanium.png",
        fact: `Titanium is a strong, lightweight metal known for its excellent strength to weight ratio and 
        resistance to corrosion. It's widely used in aircraft, spacecraft, and even medical implants because it
        doesn't react with the human body. Despite being as strong as steel, it's much lighter, which makes it
        extremely valuable in engineering. Titanium is also used in pigments, giving white color to things like 
        paint and sunscreen. Strong, durable, and surprisingly versatile.`
    },
    {
        name: "Vanadium",
        symbol: "V",
        number: 23,
        mass: "50.942",
        group: 5,
        period: 4,
        category: "Transition Metal",
        state: "Solid",
        danger: "4/10 - Some compounds are toxic and can cause health issues with prolonged exposure.",
        image: "images/vanadium.png",
        fact: `Vanadium is a metal primarily used to strengthen steel, making tools, structures, and machinery 
        more durable and resistant to wear. Even in small amounts, it improves toughness and resistance to corrosion.
        It's also used in some advanced battery technologies, particularly vanadium redox batteries for energy storage.
        Vanadium compounds can display a range of colors, which makes them interesting in chemistry as well. It's not
        very well-known, but it quietly improves a lot of materials.`
    },
    {
        name: "Chromium",
        symbol: "Cr",
        number: 24,
        mass: "51.996",
        group: 6,
        period: 4,
        category: "Transition Metal",
        state: "Solid",
        danger: "6/10 - Some forms, especially hexavalent chromium, are highly toxic and carcinogenic.",
        image: "images/chromium.png",
        fact: `Chromium is best known for giving metals a shiny, polished finish, often seen in chrome plating. 
        It's also a key component in stainless steel, helping prevent rust and corrosion. Chromium is widely used
        in decorative coatings as well as industrial applications where durability matters. Some of its compounds
        are brightly colored and have been used in pigments. It's the reason a lot of metal looks clean and reflective,
        basically the element that makes things look expensive!`
    },
    {
        name: "Manganese",
        symbol: "Mn",
        number: 25,
        mass: "54.938",
        group: 7,
        period: 4,
        category: "Transition Metal",
        state: "Solid",
        danger: "5/10 - Essential in small amounts but toxic in high exposure, especially to the nervous system.",
        image: "images/manganese.png",
        fact: `Manganese is an important metal used in steel production, where it improves strength, toughness, 
        and resistance to wear. It's also used in batteries, particularly in alkaline batteries, making it part
        of everyday electronics. In biology, manganese is a trace element that plays a role in enzyme function.
        It's found in many minerals and is widely distributed in the Earth's crust. Not the most popular element,
        but extremely important behind the scenes.`
    },
    {
        name: "Iron",
        symbol: "Fe",
        number: 26,
        mass: "55.845",
        group: 8,
        period: 4,
        category: "Transition Metal",
        state: "Solid",
        danger: "3/10 - Essential for life, but excessive amounts or dust exposure can be harmful.",
        image: "images/iron.png",
        fact: `Iron is one of the most important elements in both industry and biology. It's the main component 
        of steel, making it essential for buildings, infrastructure, tools, and machines. In the human body, iron
        is part of hemoglobin, the molecule that carries oxygen in the blood. Iron is abundant in the Earth's crust
        and has been used by humans for thousands of years, marking entire historical periods like the Iron Age.
        It's one of those elements that quite literally holds modern civilization together.`
    },
    {
        name: "Cobalt",
        symbol: "Co",
        number: 27,
        mass: "58.933",
        group: 9,
        period: 4,
        category: "Transition Metal",
        state: "Solid",
        danger: "5/10 - Toxic in high amounts and can cause health issues with prolonged exposure.",
        image: "images/cobalt.png",
        fact: `Cobalt is a metal known for its use in batteries and blue pigments. It plays a key role in lithium-ion
        batteries, especially in stabilizing their performance, which makes it important for electronics and electric
        vehicles. Cobalt compounds have been used for centuries to produce a deep blue color in glass and ceramics.
        It's also used in high strength alloys that can withstand extreme temperatures. Even if you don't know about 
        its existence, it tends to show up in some very important places.`
    },
    {
        name: "Nickel",
        symbol: "Ni",
        number: 28,
        mass: "58.693",
        group: 10,
        period: 4,
        category: "Transition Metal",
        state: "Solid",
        danger: "4/10 - Can cause allergic reactions and is harmful in high exposure.",
        image: "images/nickel.png",
        fact: `Nickel is a versatile metal used in coins, stainless steel, and corrosion resistant alloys. It helps 
        prevent rust and adds strength to materials, which is why it's often combined with iron and other metals.
        Nickel is also used in rechargeable batteries and various industrial processes. It's found in the Earth's core
        along with iron, making it more common than you might think. And yes, it's literally where the name of the
        coin comes from... not exactly subtle!`
    },
    {
        name: "Copper",
        symbol: "Cu",
        number: 29,
        mass: "63.546",
        group: 11,
        period: 4,
        category: "Transition Metal",
        state: "Solid",
        danger: "3/10 - Generally safe, but high exposure can be toxic and cause irritation.",
        image: "images/copper.png",
        fact: `Copper is one of the best electrical conductors, which makes it essential for wiring, electronics, 
        and power systems. It's been used by humans for thousands of years, even before the Iron Age. Copper is also
        naturally antimicrobial, (meaning it can kill certain bacteria on contact). Its distinctive reddish color and
        ability to resist corrosion make it useful in plumbing and construction as well. It's one of the most practical
        and widely used metals around.`
    },
    {
        name: "Zinc",
        symbol: "Zn",
        number: 30,
        mass: "65.38",
        group: 12,
        period: 4,
        category: "Transition Metal",
        state: "Solid",
        danger: "3/10 - Essential nutrient but can be harmful in excessive amounts or inhaled as fumes.",
        image: "images/zinc.png",
        fact: `Zinc is commonly used to protect steel from rusting: a process known as galvanization. By coating steel 
        with zinc, it prevents corrosion and extends the lifespan of structures and materials. Zinc is also important in
        biology, playing a role in immune function and enzyme activity. It's used in batteries, alloys, and even dietary
        supplements. Probably an element you've heard of, but never known its exact use, but it does a lot of protective 
        work behind the scenes!`
    },
    {
        name: "Gallium",
        symbol: "Ga",
        number: 31,
        mass: "69.723",
        group: 13,
        period: 4,
        category: "Post-Transition Metal",
        state: "Solid",
        danger: "3/10 - Low toxicity overall, but can be harmful in certain compounds and industrial exposure.",
        image: "images/gallium.png",
        fact: `Gallium is a metal with a surprisingly low melting point, it can actually melt in your hand at around 30°C
        (86°F). Despite that, it's not commonly found in pure form and is usually extracted as a byproduct of refining
        other metals. Gallium is important in electronics, especially in semiconductors like gallium arsenide, which are
        used in LEDs, solar panels, and high speed devices. It also expands when it solidifies, which is unusual for metals.
        A solid metal that melts like that tends to leave an impression.`
    },
    {
        name: "Germanium",
        symbol: "Ge",
        number: 32,
        mass: "72.630",
        group: 14,
        period: 4,
        category: "Metalloid",
        state: "Solid",
        danger: "3/10 - Relatively low toxicity, but dust and some compounds can be harmful if inhaled or swallowed.",
        image: "images/germanium.png",
        fact: `Germanium is a metalloid that played an important role in the early development of semiconductors and 
        electronics. Before silicon became dominant, germanium was used in the first transistors. Today, it's still used
        in fiber optics, infrared optics, and some specialized electronics. It has properties that allow it to control
        electrical conductivity, making it useful for signal transmission. Germanium sits right between metals and nonmetals
        in behavior, which is exactly what makes it useful in technology.`
    },
    {
        name: "Arsenic",
        symbol: "As",
        number: 33,
        mass: "74.922",
        group: 15,
        period: 4,
        category: "Metalloid",
        state: "Solid",
        danger: "10/10 - Highly toxic and poisonous, with serious health risks even at low exposure.",
        image: "images/arsenic.png",
        fact: `Arsenic is well known for its toxicity, but it also has important uses in electronics and semiconductors.
        It's often combined with gallium to form gallium arsenide, a material used in high-speed electronics and LEDs.
        Arsenic compounds have been used historically in pesticides and even medicines, though many uses are now restricted
        due to safety concerns. In nature, it can be found in minerals and groundwater in certain regions. It's a good example
        of an element that's both dangerous and useful, depending on how it's handled.`
    },
    {
        name: "Selenium",
        symbol: "Se",
        number: 34,
        mass: "78.971",
        group: 16,
        period: 4,
        category: "Nonmetal",
        state: "Solid",
        danger: "4/10 - Essential in tiny amounts, but toxic in larger doses.",
        image: "images/selenium.png",
        fact: `Selenium is a nonmetal that's used in electronics, glassmaking, and photocells. It has the interesting 
        property of changing its electrical conductivity when exposed to light, which makes it useful in sensors and
        solar cells. Selenium is also an essential trace element for humans, playing a role in metabolism and antioxidant
        systems. In glass production, it can be used to remove color or create red pigments. Its ability to respond to
        light gives it a unique role in both technology and chemistry.`
    },
    {
        name: "Bromine",
        symbol: "Br",
        number: 35,
        mass: "79.904",
        group: 17,
        period: 4,
        category: "Halogen",
        state: "Liquid",
        danger: "9/10 - Toxic, corrosive, and dangerous to skin, eyes, and lungs.",
        image: "images/bromine.png",
        fact: `Bromine is one of the few elements that is liquid at room temperature, appearing as a dark reddish brown 
        fluid. It belongs to the halogen group and is highly reactive, though less so than fluorine or chlorine. Bromine
        is used in flame retardants, water treatment, and certain chemicals. Its vapors are toxic and have a strong, unpleasant
        smell, so it's handled carefully. Seeing a liquid element that isn't mercury is a bit unexpected.`
    },
    {
        name: "Krypton",
        symbol: "Kr",
        number: 36,
        mass: "83.798",
        group: 18,
        period: 4,
        category: "Noble Gas",
        state: "Gas",
        danger: "0/10 - Inert and non-toxic, but can displace oxygen in confined spaces.",
        image: "images/krypton.png",
        fact: `Krypton is a noble gas that's used in specialized lighting and lasers, especially where a bright, stable 
        light is needed. It's chemically inert, meaning it doesn't react much with other elements, which makes it useful
        in controlled environments. Krypton is also used in high-performance light bulbs and photographic flashes. It's
        rare in Earth's atmosphere, making up only a tiny fraction of the air. And no, it doesn't weaken superheroes, at least
        not outside of comics!`
    },
    {
        name: "Rubidium",
        symbol: "Rb",
        number: 37,
        mass: "85.468",
        group: 1,
        period: 5,
        category: "Alkali Metal",
        state: "Solid",
        danger: "10/10 - Extremely reactive metal that can ignite in air and explode on contact with water.",
        image: "images/rubidium.png",
        fact: `Rubidium is a highly reactive alkali metal that can ignite when exposed to air and reacts violently with 
        water. Because of its extreme reactivity, it's usually stored in sealed containers or under oil. Rubidium is used
        in atomic clocks, where its precise energy transitions help keep extremely accurate time. It's also studied in
        research involving quantum physics and advanced technologies. Not something you'd handle casually, but very useful
        in precise scientific applications.`
    },
    {
        name: "Strontium",
        symbol: "Sr",
        number: 38,
        mass: "87.62",
        group: 2,
        period: 5,
        category: "Alkaline Earth Metal",
        state: "Solid",
        danger: "4/10 - Reactive metal; some compounds can be harmful and flammable.",
        image: "images/strontium.png",
        fact: `Strontium is best known for producing the bright red color in fireworks and flares. Its compounds emit a 
        vivid red light when burned, making it a key ingredient in pyrotechnics. Strontium is also used in some medical
        imaging applications and in certain types of glass and ceramics. It's chemically similar to calcium, which means
        it can interact with biological systems in specific ways. The next time you see a red firework, there's a good 
        chance strontium is behind it!`
    },
    {
        name: "Yttrium",
        symbol: "Y",
        number: 39,
        mass: "88.906",
        group: 3,
        period: 5,
        category: "Transition Metal",
        state: "Solid",
        danger: "2/10 - Low toxicity, though dust and compounds can be irritating if inhaled.",
        image: "images/yttrium.png",
        fact: `Yttrium is a metal used in LEDs, superconductors, and advanced materials. It plays a role in producing 
        certain colors in displays, especially in phosphors used for lighting and screens. Yttrium is also used in high
        temperature superconductors, which can conduct electricity with little to no resistance under certain conditions.
        It often appears alongside rare earth elements and is important in modern electronics. It's not widely recognized,
        but it shows up in a lot of advanced technology.`
    },
    {
        name: "Zirconium",
        symbol: "Zr",
        number: 40,
        mass: "91.224",
        group: 4,
        period: 5,
        category: "Transition Metal",
        state: "Solid",
        danger: "3/10 - Generally safe, but fine powder can be flammable and inhalation may be harmful.",
        image: "images/zirconium.png",
        fact: `Zirconium is a corrosion resistant metal that's widely used in nuclear reactors and high temperature 
        environments. It doesn't react easily with water or steam at high temperatures, which makes it ideal for reactor
        components. Zirconium compounds are also used in ceramics and heat-resistant materials. In jewelry, zircon
        (a mineral containing zirconium) is sometimes used as a diamond substitute. It's built for environments where
        durability really matters.`
    },
    {
        name: "Niobium",
        symbol: "Nb",
        number: 41,
        mass: "92.906",
        group: 5,
        period: 5,
        category: "Transition Metal",
        state: "Solid",
        danger: "2/10 - Low toxicity and generally safe, though dust can be irritating if inhaled.",
        image: "images/niobium.png",
        fact: `Niobium is a metal used to strengthen steel and improve its resistance to heat and corrosion. Even in 
        small amounts, it makes materials much more durable, which is why it's used in pipelines, buildings, and
        structural components. Niobium is also important in superconductors, materials that can carry electricity with
        little to no resistance under certain conditions. These are used in things like MRI machines and advanced research
        equipment. It's a key material where both strength and performance matters.`
    },
    {
        name: "Molybdenum",
        symbol: "Mo",
        number: 42,
        mass: "95.95",
        group: 6,
        period: 5,
        category: "Transition Metal",
        state: "Solid",
        danger: "3/10 - Generally low toxicity, but high exposure can cause health issues.",
        image: "images/molybdenum.png",
        fact: `Molybdenum is a metal known for helping materials withstand extremely high temperatures. It's commonly 
        added to steel alloys to improve strength and resistance to heat and pressure, especially in engines and
        industrial equipment. Molybdenum is also used in electronics and as a catalyst in chemical reactions. Its high
        melting point makes it useful in environments where other metals would fail. It's built for situations where
        heat is a constant challenge.`
    },
    {
        name: "Technetium",
        symbol: "Tc",
        number: 43,
        mass: "[98]",
        group: 7,
        period: 5,
        category: "Transition Metal",
        state: "Solid",
        danger: "8/10 - Radioactive element that can pose health risks with exposure.",
        image: "images/technetium.png",
        fact: `Technetium is a radioactive element and was the first element ever produced artificially in a laboratory.
        It doesn't occur naturally in large amounts, so it had to be created through nuclear reactions. Today, it's widely
        used in medical imaging, especially in diagnostic scans that help doctors see inside the body. Its radioactive
        properties make it ideal for tracing processes in the body without causing long-term damage. It's one of the most
        important elements in modern nuclear medicine.`
    },
    {
        name: "Ruthenium",
        symbol: "Ru",
        number: 44,
        mass: "101.07",
        group: 8,
        period: 5,
        category: "Transition Metal",
        state: "Solid",
        danger: "4/10 - Some compounds are toxic and can be harmful with prolonged exposure.",
        image: "images/ruthenium.png",
        fact: `Ruthenium is a rare metal used in electronics, catalysts, and wear-resistant coatings. It can improve the 
        durability and efficiency of other materials, especially in chemical reactions and electrical contacts. Ruthenium
        is also used in some specialized alloys to increase hardness and resistance to corrosion. In electronics, it helps
        maintain stable performance over time. It's often used in small amounts, but it plays a big role in improving
        material performance.`
    },
    {
        name: "Rhodium",
        symbol: "Rh",
        number: 45,
        mass: "102.91",
        group: 9,
        period: 5,
        category: "Transition Metal",
        state: "Solid",
        danger: "3/10 - Generally low toxicity, but compounds can be hazardous in certain conditions.",
        image: "images/rhodium.png",
        fact: `Rhodium is a rare and extremely valuable metal best known for its use in catalytic converters, where it 
        helps reduce harmful emissions from vehicles. It's highly reflective and resistant to corrosion, which also makes
        it useful in coatings and high-end finishes. Rhodium doesn't tarnish easily, so it's sometimes used in jewelry to
        maintain a bright appearance. Its rarity and usefulness in emission control make it one of the most expensive metals.
        It's a small component with a major environmental impact.`
    },
    {
        name: "Palladium",
        symbol: "Pd",
        number: 46,
        mass: "106.42",
        group: 10,
        period: 5,
        category: "Transition Metal",
        state: "Solid",
        danger: "3/10 - Generally low toxicity, but prolonged exposure to compounds can be harmful.",
        image: "images/palladium.png",
        fact: `Palladium is a rare metal widely used in catalytic converters, where it helps reduce harmful emissions from
        vehicles. It can absorb large amounts of hydrogen, which makes it interesting for hydrogen storage and fuel
        technologies. Palladium is also used in electronics, dentistry, and jewelry due to its durability and resistance
        to corrosion. Its rarity and demand in industry have made it quite valuable. It plays a major role in cleaner energy
        and environmental protection.`
    },
    {
        name: "Silver",
        symbol: "Ag",
        number: 47,
        mass: "107.87",
        group: 11,
        period: 5,
        category: "Transition Metal",
        state: "Solid",
        danger: "2/10 - Low toxicity, though excessive exposure can cause health issues.",
        image: "images/silver.png",
        fact: `Silver is one of the best electrical conductors of any element, making it essential for electronics, wiring,
        and high performance components. It's also been used as currency and in jewelry for thousands of years due to its
        appearance and durability. Silver has natural antimicrobial properties, which allows it to kill certain bacteria
        on contact. Because of this, it's used in medical equipment, coatings, and even some fabrics. It combines practical
        performance with long standing cultural value.`
    },
    {
        name: "Cadmium",
        symbol: "Cd",
        number: 48,
        mass: "112.41",
        group: 12,
        period: 5,
        category: "Transition Metal",
        state: "Solid",
        danger: "9/10 - Highly toxic metal that can cause serious health issues with exposure.",
        image: "images/cadmium.png",
        fact: `Cadmium is a metal used in rechargeable batteries, coatings, and pigments. It resists corrosion well, which
        makes it useful for protecting other metals. However, cadmium is also toxic, so its use is carefully controlled
        and regulated in many applications. It has been used in nickel-cadmium batteries, though newer technologies are
        gradually replacing it. Despite its risks, it has been an important material in both industry and energy storage.
        Cadmium may be toxic but it's used in batteries and protective coatings.`
    },
    {
        name: "Indium",
        symbol: "In",
        number: 49,
        mass: "114.82",
        group: 13,
        period: 5,
        category: "Post-Transition Metal",
        state: "Solid",
        danger: "3/10 - Low toxicity, but compounds can be harmful with prolonged exposure.",
        image: "images/indium.png",
        fact: `Indium is a soft metal that plays a key role in touchscreens, LCD displays, and modern electronics. It's
        commonly used in the form of indium tin oxide, a transparent conductive material that allows screens to both
        display images and respond to touch. Indium is also used in semiconductors and solar panels. Because it's
        relatively rare and mostly obtained as a byproduct, supply can be limited. It's one of the elements that quietly
        makes modern devices possible.`
    },
    {
        name: "Tin",
        symbol: "Sn",
        number: 50,
        mass: "118.71",
        group: 14,
        period: 5,
        category: "Post-Transition Metal",
        state: "Solid",
        danger: "2/10 - Generally safe, though some compounds can be toxic in high amounts.",
        image: "images/tin.png",
        fact: `Tin is a metal known for its use in solder, which connects electronic components together. It has a 
        relatively low melting point, making it easy to work with in manufacturing and electronics. Tin is also used to
        coat other metals, helping prevent corrosion, that's where the term "tin can" comes from, even though the base
        metal is usually steel. Historically, it was combined with copper to make bronze, one of the earliest important
        alloys. It's been part of human technology for a very long time.`
    },
    {
        name: "Antimony",
        symbol: "Sb",
        number: 51,
        mass: "121.76",
        group: 15,
        period: 5,
        category: "Metalloid",
        state: "Solid",
        danger: "6/10 - Toxic in significant amounts, and some compounds can be hazardous.",
        image: "images/antimony.png",
        fact: `Antimony is a metalloid used in flame retardants, alloys, and electronics. It helps materials resist 
        burning, which makes it useful in safety applications like plastics and textiles. When combined with metals like
        lead, it improves hardness and durability, especially in batteries and ammunition. Antimony compounds have also
        been used historically in medicine, though with caution due to toxicity. It's a mix of metal and nonmetal behavior,
        which is exactly what makes it versatile.`
    },
    {
        name: "Tellurium",
        symbol: "Te",
        number: 52,
        mass: "127.60",
        group: 16,
        period: 5,
        category: "Metalloid",
        state: "Solid",
        danger: "4/10 - Low to moderate toxicity, but exposure can be harmful and cause irritation.",
        image: "images/tellurium.png",
        fact: `Tellurium is a rare metalloid used in solar panels, thermoelectric devices, and alloys. It can convert 
        heat into electricity, which makes it useful in specialized energy applications. Tellurium is often combined
        with other materials to improve efficiency in semiconductors and renewable energy systems. It's not very abundant,
        so it's usually obtained as a byproduct of refining other metals. Its role in energy technology makes it
        especially relevant today.`
    },
    {
        name: "Iodine",
        symbol: "I",
        number: 53,
        mass: "126.90",
        group: 17,
        period: 5,
        category: "Halogen",
        state: "Solid",
        danger: "5/10 - Essential in small amounts, but too much can be toxic and irritating.",
        image: "images/iodine.png",
        fact: `Iodine is a halogen that's essential for human health, especially for proper thyroid function. It's
        commonly added to table salt to prevent iodine deficiency, which can lead to health problems. Iodine is also
        used as a disinfectant because it can kill bacteria and other microorganisms. In medicine, it's used in imaging
        and treatments involving the thyroid gland. It's one of the few elements where even small amounts make a big
        biological difference.`
    },
    {
        name: "Xenon",
        symbol: "Xe",
        number: 54,
        mass: "131.29",
        group: 18,
        period: 5,
        category: "Noble Gas",
        state: "Gas",
        danger: "0/10 - Inert and non-toxic, but can displace oxygen in enclosed spaces.",
        image: "images/xenon.png",
        fact: `Xenon is a noble gas used in high-intensity lamps, flash photography, and spacecraft propulsion systems.
        When electrically excited, it produces a bright white-blue light, making it useful in lighting and imaging. Xenon
        is also used in ion thrusters, where it helps propel spacecraft efficiently over long distances. Unlike most noble
        gases, Xenon can form some compounds under specific conditions. It's rare in the atmosphere, but extremely useful
        in advanced technology.`
    },
    {
        name: "Cesium",
        symbol: "Cs",
        number: 55,
        mass: "132.91",
        group: 1,
        period: 6,
        category: "Alkali Metal",
        state: "Solid",
        danger: "10/10 - Extremely reactive metal that can explode violently on contact with water.",
        image: "images/cesium.png",
        fact: `Cesium is a highly reactive metal that's best known for its use in atomic clocks, which are the most accurate
        timekeeping devices in the world. It melts at just above room temperature, meaning it can become liquid very easily.
        Cesium reacts explosively with water, so it's stored carefully in controlled environments. Its precise atomic
        properties make it essential for defining the standard unit of time, the second. It's one of the key elements behind
        modern precision timing.`
    },
    {
        name: "Barium",
        symbol: "Ba",
        number: 56,
        mass: "137.33",
        group: 2,
        period: 6,
        category: "Alkaline Earth Metal",
        state: "Solid",
        danger: "6/10 - Reactive metal, and many soluble compounds are toxic.",
        image: "images/barium.png",
        fact: `Barium is a reactive metal used in medical imaging and industrial applications. Used in medicine, barium
        compounds are used in X-ray imaging of the digestive system because they block radiation and make internal structures
        visible. It's also used in drilling fluids for oil and gas exploration. Pure barium reacts strongly with air and water,
        so it's not found freely in nature. Its compounds are where most of its practical uses come from.`
    },

    {
        name: "Lanthanum",
        symbol: "La",
        number: 57,
        mass: "138.91",
        group: 3,
        period: 8,
        category: "Lanthanide",
        state: "Solid",
        danger: "3/10 - Low toxicity overall, but dust and compounds can be harmful if inhaled or swallowed.",
        image: "images/lanthanum.png",
        fact: `Lanthanum is the first element in the lanthanide series. The main use is camera lenses, batteries, and optical
        equipment. It helps improve the clarity and performance of lenses by increasing refractive index. Lanthanum is also
        used in nickel metal hydride batteries, which are found in some hybrid vehicles. Despite being grouped with rare earth
        elements, it's actually more abundant than the name suggests. It marks the start of a group of elements that are heavily
        used in modern technology.`
    },
    {
        name: "Cerium",
        symbol: "Ce",
        number: 58,
        mass: "140.12",
        group: 4,
        period: 8,
        category: "Lanthanide",
        state: "Solid",
        danger: "3/10 - Low toxicity, but fine dust can be flammable and compounds may irritate the body.",
        image: "images/cerium.png",
        fact: `Cerium is one of the most abundant rare earth elements and is used in catalytic converters, glass polishing, 
        and lighter flints. It can easily switch between oxidation states, which makes it useful in chemical reactions and
        pollution control. Cerium oxide is commonly used to polish glass surfaces to a high finish. It's also a key component
        in lighter flints, where it produces sparks when struck. It shows up in both everyday tools and industrial systems.`
    },
    {
        name: "Praseodymium",
        symbol: "Pr",
        number: 59,
        mass: "140.91",
        group: 5,
        period: 8,
        category: "Lanthanide",
        state: "Solid",
        danger: "3/10 - Low toxicity overall, but dust and certain compounds can be irritating or harmful with exposure.",
        image: "images/praseodymium.png",
        fact: `Praseodymium is used in strong magnets, aircraft engines, and specialized glass and ceramics. It helps create
        materials that can withstand high temperatures and mechanical stress. In glassmaking, it can produce a yellow/green
        color and filter certain wavelengths of light. Praseodymium is also part of alloys used in high performance
        applications. It's one of the elements that contributes to advanced materials in engineering.`
    },
    {
        name: "Neodymium",
        symbol: "Nd",
        number: 60,
        mass: "144.24",
        group: 6,
        period: 8,
        category: "Lanthanide",
        state: "Solid",
        danger: "3/10 - Low toxicity, though dust and compounds can be irritating and fine powder may be flammable.",
        image: "images/neodymium.png",
        fact: `Neodymium is iconic for making powerful permanent magnets, which are used in headphones, speakers, electric 
        motors, and wind turbines. These magnets are among the strongest available and are essential in many modern devices.
        Neodymium magnets allow electronics to be smaller while still producing strong magnetic fields. They're also used in
        generators for renewable energy systems. If you've used headphones or earbuds recently, you've probably been right
        next to one of these magnets they're stronger than they look!`
    },
    {
        name: "Promethium",
        symbol: "Pm",
        number: 61,
        mass: "[145] - no stable Isotopes",
        group: 7,
        period: 8,
        category: "Lanthanide",
        state: "Solid",
        danger: "9/10 - Radioactive element that poses health risks with exposure.",
        image: "images/promethium.png",
        fact: `Promethium is a radioactive element that doesn't occur naturally in significant amounts on Earth. It's 
        typically produced in nuclear reactors and is used in specialized applications like nuclear batteries and
        luminous paint. Because it emits radiation, it can generate energy over long periods without needing
        replacement. Promethium is one of the few elements named after a mythological figure, Prometheus, reflecting
        its connection to energy and fire. Its rarity and radioactivity limit its everyday use, but it has very specific
        technological applications.`
    },
    {
        name: "Samarium",
        symbol: "Sm",
        number: 62,
        mass: "150.36",
        group: 8,
        period: 8,
        category: "Lanthanide",
        state: "Solid",
        danger: "3/10 - Low toxicity, though compounds and dust can be irritating with exposure.",
        image: "images/samarium.png",
        fact: `Samarium is used in powerful magnets, nuclear reactors, and medical treatments. Samarium cobalt magnets
        are strong and resistant to high temperatures, making them useful in aerospace and electronics. It's also used
        in cancer treatment, where certain isotopes help target and destroy cancer cells. In addition, samarium can
        absorb neutrons, which makes it valuable in controlling nuclear reactions. It's a key material where both precision
        and stability are important.`
    },
    {
        name: "Europium",
        symbol: "Eu",
        number: 63,
        mass: "151.96",
        group: 9,
        period: 8,
        category: "Lanthanide",
        state: "Solid",
        danger: "2/10 - Low toxicity, though compounds can be mildly hazardous with exposure.",
        image: "images/europium.png",
        fact: `Europium is probably best known for producing bright red and blue colors in screens and lighting. It's 
        used in phosphors for TVs, monitors, and LED lights, helping create vivid and accurate colors. Europium compounds 
        glow under ultraviolet light, which makes them useful in security features like anti-counterfeiting measures.
        It's also used in fluorescent lamps and other lighting technologies. Much of the color you see on modern screens
        depends on elements like europium.`
    },
    {
        name: "Gadolinium",
        symbol: "Gd",
        number: 64,
        mass: "157.25",
        group: 10,
        period: 8,
        category: "Lanthanide",
        state: "Solid",
        danger: "4/10 - Generally low toxicity, but compounds used in medicine must be carefully controlled.",
        image: "images/gadolinium.png",
        fact: `Gadolinium is used in MRI scans and advanced magnetic materials. In medicine (common theme now, eh?), 
        gadolinium-based compounds are used as contrast agents to improve the clarity of imaging. It also has strong
        magnetic properties, which makes it useful in research and certain types of electronic devices. Gadolinium reacts
        strongly to magnetic fields, even at room temperature, which is somewhat unusual. Its combination of medical and
        physical applications makes it especially versatile.`
    },
    {
        name: "Terbium",
        symbol: "Tb",
        number: 65,
        mass: "158.93",
        group: 11,
        period: 8,
        category: "Lanthanide",
        state: "Solid",
        danger: "3/10 - Low toxicity, though compounds and dust can be harmful with prolonged exposure.",
        image: "images/terbium.png",
        fact: `Terbium is used in green phosphors, solid-state devices, and advanced materials. It helps produce green
        light in display screens and is often used alongside europium for color balance. Terbium is also used in specialized
        alloys that respond to magnetic fields, which can be useful in sensors and actuators. Its compounds can enhance the
        performance of electronic and optical systems. It plays a supporting role in many technologies that rely on precise
        color and responsiveness.`
    },
    {
        name: "Dysprosium",
        symbol: "Dy",
        number: 66,
        mass: "162.50",
        group: 12,
        period: 8,
        category: "Lanthanide",
        state: "Solid",
        danger: "3/10 - Low toxicity, though dust and compounds can be harmful with prolonged exposure.",
        image: "images/dysprosium.png",
        fact: `Dysprosium is used in high performance magnets, especially those that need to operate at high temperatures.
        It's often added to neodymium magnets to improve their stability and resistance to heat, which is important in electric
        vehicles and wind turbines. Dysprosium also has strong magnetic properties of its own, making it valuable in advanced
        materials. It's relatively rare and usually obtained as part of rare earth mineral processing. Its role becomes critical
        in technologies that push materials to their limits.`
    },
    {
        name: "Holmium",
        symbol: "Ho",
        number: 67,
        mass: "164.93",
        group: 13,
        period: 8,
        category: "Lanthanide",
        state: "Solid",
        danger: "3/10 - Low toxicity, though dust and compounds can be irritating or harmful with exposure.",
        image: "images/holmium.png",
        fact: `Holmium has one of the strongest magnetic properties of any element, which makes it useful in specialized magnetic
        applications (bet you saw that coming, most lanthanides have strong magnetic properties). It's used in certain types of 
        lasers, particularly in medical and dental procedures. Holmium can also absorb neutrons, making it useful in nuclear 
        control systems. Its compounds are sometimes used to create colored glass. It's not widely used, but in the right situations,
        its properties are very specific and valuable.`
    },
    {
        name: "Erbium",
        symbol: "Er",
        number: 68,
        mass: "167.26",
        group: 14,
        period: 8,
        category: "Lanthanide",
        state: "Solid",
        danger: "2/10 - Low toxicity, though compounds and dust can be mildly irritating.",
        image: "images/erbium.png",
        fact: `Erbium is used in fiber optic communication systems, where it helps amplify signals over long distances. It's 
        essential for keeping internet and data transmissions strong and reliable. Erbium is also used in lasers and can produce
        a pink color in glass and ceramics. Its ability to enhance signal strength makes it important in modern communication
        infrastructure. It plays a direct role in how information travels across the world.`
    },
    {
        name: "Thulium",
        symbol: "Tm",
        number: 69,
        mass: "168.93",
        group: 15,
        period: 8,
        category: "Lanthanide",
        state: "Solid",
        danger: "3/10 - Low toxicity, though radiation-emitting isotopes and compounds require careful handling.",
        image: "images/thulium.png",
        fact: `Thulium is one of the least abundant lanthanides and is used in portable X-ray devices and certain laser systems.
        It can emit radiation in a controlled way, which makes it useful for imaging applications. Thulium is also studied for
        use in nuclear medicine and energy technologies. Because it's so rare, it's typically used only in specialized applications.
        Its uses are focused and precise rather than widespread.`
    },
    {
        name: "Ytterbium",
        symbol: "Yb",
        number: 70,
        mass: "173.05",
        group: 16,
        period: 8,
        category: "Lanthanide",
        state: "Solid",
        danger: "2/10 - Low toxicity, though compounds and dust may cause irritation.",
        image: "images/ytterbium.png",
        fact: `Ytterbium is used in lasers, atomic clocks, and stress measurement devices. It can help improve the accuracy 
        of timekeeping systems and is used in research involving precision measurement. Ytterbium is also added to alloys to 
        improve strength and resistance to wear. In some cases, it's used to monitor changes in materials under pressure.
        Its applications focus on accuracy, measurement, and controlled performance.`
    },
    {
        name: "Lutetium",
        symbol: "Lu",
        number: 71,
        mass: "174.97",
        group: 17,
        period: 8,
        category: "Lanthanide",
        state: "Solid",
        danger: "3/10 - Low toxicity, though compounds and dust can be harmful with prolonged exposure.",
        image: "images/lutetium.png",
        fact: `Lutetium is the last element in the lanthanide series and is used in medical imaging and cancer treatments. 
        Certain isotopes of lutetium are used in targeted radiation therapy, where they help destroy cancer cells while
        minimizing damage to surrounding tissue. It's also used in PET scan detectors because of its ability to detect
        radiation efficiently. Lutetium is relatively rare and expensive, so its use is focused on high value applications.
        It marks the transition from the lanthanides back into the transition metals.`
    },
    {
        name: "Hafnium",
        symbol: "Hf",
        number: 72,
        mass: "178.49",
        group: 4,
        period: 6,
        category: "Transition Metal",
        state: "Solid",
        danger: "3/10 - Generally low toxicity, but fine powder can be flammable and inhalation may be harmful.",
        image: "images/hafnium.png",
        fact: `Getting back into metals, hafnium is a metal used in nuclear reactors and high temperature alloys. It has
        a strong ability to absorb neutrons, which makes it useful for controlling nuclear reactions safely. Hafnium is
        also used in microelectronics, particularly in advanced processors where it helps improve transistor performance.
        Its resistance to heat and corrosion makes it valuable in demanding environments. It often appears alongside
        zirconium due to their similar chemical properties.`
    },
    {
        name: "Tantalum",
        symbol: "Ta",
        number: 73,
        mass: "180.95",
        group: 5,
        period: 6,
        category: "Transition Metal",
        state: "Solid",
        danger: "2/10 - Very stable and corrosion-resistant, with low toxicity under normal conditions.",
        image: "images/tantalum.png",
        fact: `Tantalum is widely used in electronics, especially capacitors found in phones, computers, and other devices.
        It can store and release electrical energy efficiently, making it ideal for compact electronic components.
        Tantalum is also highly resistant to corrosion, which allows it to be used in medical implants and chemical equipment.
        Its reliability makes it a key material in modern electronics. It's one of the elements that helps keep devices
        stable and consistent.`
    },
    {
        name: "Tungsten",
        symbol: "W",
        number: 74,
        mass: "183.84",
        group: 6,
        period: 6,
        category: "Transition Metal",
        state: "Solid",
        danger: "4/10 - Generally stable, but dust and compounds can be harmful if inhaled.",
        image: "images/tungsten.png",
        fact: `Tungsten has the highest melting point of any metal, which makes it incredibly useful in extreme heat 
        environments. It's used in things like light bulb filaments, cutting tools, and high temperature machinery. Tungsten
        is also very dense and hard, which adds to its durability. Its ability to withstand heat without melting makes it
        stand out among metals. It basically looks at extreme temperatures and says "That all you got?!"!`
    },
    {
        name: "Rhenium",
        symbol: "Re",
        number: 75,
        mass: "186.21",
        group: 7,
        period: 6,
        category: "Transition Metal",
        state: "Solid",
        danger: "3/10 - Low toxicity, though compounds can be harmful with prolonged exposure.",
        image: "images/rhenium.png",
        fact: `Rhenium is a rare metal used in jet engines and high-performance alloys. It helps materials maintain
        strength under extreme heat and stress, which is critical in aerospace applications. Rhenium is also used as a
        catalyst in refining petroleum, improving the efficiency of chemical processes. Because of its rarity, it's used
        in small amounts but has a large impact on performance. It's a key element in environments where failure isn't
        an option.`
    },
    {
        name: "Osmium",
        symbol: "Os",
        number: 76,
        mass: "190.23",
        group: 8,
        period: 6,
        category: "Transition Metal",
        state: "Solid",
        danger: "7/10 - Can form highly toxic osmium tetroxide when exposed to air.",
        image: "images/osmium.png",
        fact: `One of the densest elements known, making it extremely heavy for its size. It's used in specialized alloys
        where durability and hardness are important, such as in fountain pen tips and electrical contacts. Osmium is also
        highly resistant to wear, which helps it maintain its shape over time. However, it can form toxic compounds when
        exposed to air, so it's handled carefully. Its density and toughness make it stand out among metals.`
    },
    {
        name: "Iridium",
        symbol: "Ir",
        number: 77,
        mass: "192.22",
        group: 9,
        period: 6,
        category: "Transition Metal",
        state: "Solid",
        danger: "3/10 - Extremely stable and corrosion-resistant, with low toxicity under normal conditions.",
        image: "images/iridium.png",
        fact: `Iridium is a very dense and corrosion resistant metal that's used in spark plugs, electronics, and high 
        temperature equipment. It can withstand extreme environments without degrading, which makes it valuable in both
        industrial and scientific applications. Iridium is also found in meteorites and is associated with the asteroid
        impact that contributed to the extinction of the dinosaurs! Its resistance to heat and corrosion makes it one of
        the most durable elements. It's built to last under conditions that would destroy most materials.`
    },
    {
        name: "Platinum",
        symbol: "Pt",
        number: 78,
        mass: "195.08",
        group: 10,
        period: 6,
        category: "Transition Metal",
        state: "Solid",
        danger: "3/10 - Generally low toxicity, though some compounds can be harmful.",
        image: "images/platinum.png",
        fact: `Platinum is a rare metal used in catalytic converters, electronics, and jewelry. It plays a key role in 
        reducing vehicle emissions by helping chemical reactions occur more efficiently. Platinum is also highly resistant
        to corrosion and maintains its appearance over time, which makes it desirable in jewelry. In industry, it's used
        in chemical processing and laboratory equipment. Its combination of stability and reactivity makes it very versatile.`
    },
    {
        name: "Gold",
        symbol: "Au",
        number: 79,
        mass: "196.97",
        group: 11,
        period: 6,
        category: "Transition Metal",
        state: "Solid",
        danger: "1/10 - Extremely stable and non-toxic in pure form.",
        image: "images/gold.png",
        fact: `Gold is a well-known metal valued for its use in jewelry, electronics, and currency. It doesn't corrode or
        tarnish, which is why it maintains its appearance over long periods of time. Gold is also an excellent conductor of
        electricity, so it's used in high reliability electronic components. Its softness makes it easy to shape and work
        with. It's basically been humanity's favorite shiny object for thousands of years!`
    },
    {
        name: "Mercury",
        symbol: "Hg",
        number: 80,
        mass: "200.59",
        group: 12,
        period: 6,
        category: "Transition Metal",
        state: "Liquid",
        danger: "10/10 - Highly toxic, especially as vapor; can cause severe neurological damage.",
        image: "images/mercury.png",
        fact: `While classified as a metal, mercury is actually a liquid at room temperature, which makes it very different
        from most other metals. It has been used in thermometers, barometers, and switches because of its ability to flow
        and conduct electricity. Mercury is also used in some industrial processes and older types of lighting. However,
        it is highly toxic, so its use is now heavily restricted and carefully controlled. Its unique liquid form makes it
        easy to recognize, but also something to handle with caution.`
    },
    {
        name: "Thallium",
        symbol: "Tl",
        number: 81,
        mass: "204.38",
        group: 13,
        period: 6,
        category: "Post-Transition Metal",
        state: "Solid",
        danger: "10/10 - Extremely toxic; can cause severe neurological and organ damage.",
        image: "images/thallium.png",
        fact: `Thallium is a soft, dense metal that has been used in electronics, optical lenses, and specialized glass. It
        can improve the performance of certain materials by altering their electrical or optical properties. Thallium compounds
        were once used in rat poison due to their high toxicity, but this use has largely been discontinued for safety reasons.
        Today, it's used more carefully in controlled industrial and scientific applications. Its toxicity makes it important
        to handle with strict precautions.`
    },
    {
        name: "Lead",
        symbol: "Pb",
        number: 82,
        mass: "207.2",
        group: 14,
        period: 6,
        category: "Post-Transition Metal",
        state: "Solid",
        danger: "9/10 - Highly toxic, especially with long-term exposure; can damage the nervous system.",
        image: "images/lead.png",
        fact: `Lead is a dense metal known for its use in batteries, radiation shielding, and construction materials. It's very
        effective at blocking radiation, which makes it useful in medical and nuclear settings. Lead has been used for thousands
        of years, including in pipes and paints, though many of these uses have been reduced due to health concerns. It's also
        a key component in lead-acid batteries, which are still widely used today. Its combination of density and malleability
        makes it useful in specific, controlled applications.`
    },
    {
        name: "Bismuth",
        symbol: "Bi",
        number: 83,
        mass: "208.98",
        group: 15,
        period: 6,
        category: "Post-Transition Metal",
        state: "Solid",
        danger: "1/10 - Very low toxicity compared to similar heavy metals.",
        image: "images/bismuth.png",
        fact: `Bismuth is a metal known for its low toxicity and unique crystal structures, which often form colorful, geometric 
        patterns. It's used in pharmaceuticals, cosmetics, and low melting alloys. Bismuth compounds are found in some medications,
        including treatments for stomach issues. It also expands when it solidifies, which is unusual and useful in certain casting
        applications. Its visual appearance and safer profile compared to similar metals make it stand out!`
    },
    {
        name: "Polonium",
        symbol: "Po",
        number: 84,
        mass: "[209]",
        group: 16,
        period: 6,
        category: "Metalloid",
        state: "Solid",
        danger: "10/10 - Extremely radioactive and highly toxic, even in tiny amounts.",
        image: "images/polonium.png",
        fact: `Polonium is a highly radioactive element that was discovered by Marie Curie. It emits a significant amount of 
        radiation and heat, which makes it useful in specialized applications like antistatic devices and certain power
        sources. Because of its intense radioactivity, it is extremely dangerous to handle without proper protection. Polonium
        has also been historically associated with poisoning cases due to its toxicity. Its use is limited to highly 
        controlled environments.`
    },
    {
        name: "Astatine",
        symbol: "At",
        number: 85,
        mass: "[210]",
        group: 17,
        period: 6,
        category: "Halogen",
        state: "Solid",
        danger: "10/10 - Extremely radioactive and unstable, posing serious health risks.",
        image: "images/astatine.png",
        fact: `One of the rarest naturally occurring elements, astatine is also radioactive. Very little is known about it 
        compared to other elements because it exists in such small quantities and decays quickly. It is classified as a halogen,
        but its properties are not fully studied due to its instability. Astatine is being researched for potential use in
        targeted cancer treatments, where its radiation could be used to destroy tumor cells. It remains one of the least
        understood elements on the periodic table.`
    },
    {
        name: "Radon",
        symbol: "Rn",
        number: 86,
        mass: "[222]",
        group: 18,
        period: 6,
        category: "Noble Gas",
        state: "Gas",
        danger: "9/10 - Radioactive gas that can cause lung cancer with prolonged exposure.",
        image: "images/radon.png",
        fact: `Radon is a radioactive noble gas that forms naturally from the decay of uranium in rocks and soil. It's
        colorless and odorless, which makes it difficult to detect without special equipment. Radon can accumulate in
        enclosed spaces like basements, where long term exposure can pose health risks. Because of this, it's commonly
        monitored in homes and buildings. Despite being a noble gas, its radioactivity makes it far more dangerous than
        others in its group.`
    },
    {
        name: "Francium",
        symbol: "Fr",
        number: 87,
        mass: "[223]",
        group: 1,
        period: 7,
        category: "Alkali Metal",
        state: "Solid",
        danger: "10/10 - Extremely radioactive and highly reactive, though rarely encountered.",
        image: "images/francium.png",
        fact: `Francium is an extremely rare and highly radioactive metal that exists only in tiny amounts at any given 
        time. It decays very quickly, so it's difficult to study and has almost no practical applications. Francium is part
        of the alkali metal group, meaning it would be highly reactive if enough of it could be collected. Most of what
        scientists know about it comes from theoretical predictions and limited experiments. It's one of the least accessible
        elements on the periodic table.`
    },
    {
        name: "Radium",
        symbol: "Ra",
        number: 88,
        mass: "[226]",
        group: 2,
        period: 7,
        category: "Alkaline Earth Metal",
        state: "Solid",
        danger: "10/10 - Highly radioactive and dangerous to biological tissue.",
        image: "images/radium.png",
        fact: `Radium is a radioactive metal that was once used in glow in the dark paints and medical treatments. It emits 
        radiation continuously, which causes certain materials to glow without needing light. Radium played an important role
        in early research on radioactivity, but its health risks were not fully understood at the time. Today, it is handled
        very carefully due to its dangerous radiation. It literally glows in the dark, just not in a way you'd want anywhere
        near you!`
    },
    {
        name: "Actinium",
        symbol: "Ac",
        number: 89,
        mass: "[227]",
        group: 3,
        period: 9,
        category: "Actinide",
        state: "Solid",
        danger: "10/10 - Highly radioactive element that poses serious health risks with exposure.",
        image: "images/actinium.png",
        fact: `Starting off the actinides, actinium is a highly radioactive element. It emits radiation and is used in specialized
        applications, including research and some forms of cancer treatment. Actinium-based isotopes are studied for their ability
        to deliver targeted radiation therapy. It's not found in large quantities and is typically handled only in controlled
        environments. Its role is mainly in scientific and medical research.`
    },
    {
        name: "Thorium",
        symbol: "Th",
        number: 90,
        mass: "232.04",
        group: 4,
        period: 9,
        category: "Actinide",
        state: "Solid",
        danger: "8/10 - Radioactive metal that can pose health risks with prolonged exposure.",
        image: "images/thorium.png",
        fact: `Thorium is a radioactive metal that has been studied as a potential alternative nuclear fuel. It is more abundant
        than uranium and can produce energy through nuclear reactions. Thorium has also been used in gas mantles for lighting and
        in certain alloys. Because of its properties, it has gained attention as a possible cleaner option for nuclear power. Its
        role in future energy systems is still being explored.`
    },
    {
        name: "Protactinium",
        symbol: "Pa",
        number: 91,
        mass: "231.04",
        group: 5,
        period: 9,
        category: "Actinide",
        state: "Solid",
        danger: "10/10 - Highly radioactive and toxic, posing serious health risks with exposure.",
        image: "images/protactinium.png",
        fact: `Very rare, protactinium is a radioactive element that appears in the decay chain of uranium. It's extremely difficult
        to isolate, so it has very limited practical use outside of scientific research. Protactinium is highly toxic and radioactive,
        which makes it challenging to study safely. Most of what we know about it comes from controlled laboratory work. It mainly
        exists as a stepping stone in nuclear processes rather than as a widely used material.`
    },
    {
        name: "Uranium",
        symbol: "U",
        number: 92,
        mass: "238.03",
        group: 6,
        period: 9,
        category: "Actinide",
        state: "Solid",
        danger: "10/10 - Radioactive and chemically toxic; can cause severe health and environmental damage.",
        image: "images/uranium.png",
        fact: `Uranium is a heavy radioactive metal best known for its role in nuclear power and nuclear weapons. Certain isotopes
        of uranium can undergo fission, releasing large amounts of energy, which is harnessed in nuclear reactors. It's also used
        in military applications and has been studied extensively for energy production. Uranium is naturally occurring but must be
        processed to be useful in most applications. It's the element that can power entire cities or do a lot worse if things
        go wrong!`
    },
    {
        name: "Neptunium",
        symbol: "Np",
        number: 93,
        mass: "[237]",
        group: 7,
        period: 9,
        category: "Actinide",
        state: "Solid",
        danger: "10/10 - Highly radioactive element with significant health risks.",
        image: "images/neptunium.png",
        fact: `Neptunium is a synthetic radioactive element produced in nuclear reactors as a byproduct of uranium processing. 
        It's not found in significant natural amounts and is mainly used in research and nuclear science. Neptunium can undergo
        radioactive decay into other elements, including plutonium. It's also studied for potential use in nuclear fuel cycles.
        Its role is mostly behind the scenes in nuclear chemistry.`
    },
    {
        name: "Plutonium",
        symbol: "Pu",
        number: 94,
        mass: "[244]",
        group: 8,
        period: 9,
        category: "Actinide",
        state: "Solid",
        danger: "10/10 - Extremely radioactive and highly toxic, even in very small amounts.",
        image: "images/plutonium.png",
        fact: `Plutonium is a highly radioactive element used in nuclear weapons and nuclear reactors. It can undergo fission 
        like uranium, making it a powerful energy source as well as a major safety concern. Plutonium is produced in reactors
        rather than mined directly from the Earth. It has also been used in radioisotope thermoelectric generators to power
        spacecraft. Its extreme energy potential comes with equally serious risks.`
    },
    {
        name: "Americium",
        symbol: "Am",
        number: 95,
        mass: "[243]",
        group: 9,
        period: 9,
        category: "Actinide",
        state: "Solid",
        danger: "9/10 - Radioactive and toxic, though used safely in controlled amounts.",
        image: "images/americium.png",
        fact: `Americium is a radioactive element commonly used in smoke detectors, where it helps detect smoke particles in
        the air. It emits radiation that interacts with air inside the detector, and any disruption triggers the alarm.
        Americium is also used in some industrial gauges and research applications. It's typically produced in nuclear reactors
        rather than found naturally. It's a small but important part of everyday safety systems.`
    },
    {
        name: "Curium",
        symbol: "Cm",
        number: 96,
        mass: "[247]",
        group: 10,
        period: 9,
        category: "Actinide",
        state: "Solid",
        danger: "10/10 - Highly radioactive element that emits intense radiation and heat.",
        image: "images/curium.png",
        fact: `Curium is a radioactive element produced in nuclear reactors and named after Marie and Pierre Curie. It's used
        in research and has been studied for potential use in space exploration, where its heat output could be useful for
        power generation. Curium emits strong radiation, which makes it difficult to handle safely. It's also used in the
        production of heavier elements through nuclear reactions. Its role is mostly within advanced nuclear science.`
    },
    {
        name: "Berkelium",
        symbol: "Bk",
        number: 97,
        mass: "[247]",
        group: 11,
        period: 9,
        category: "Actinide",
        state: "Solid",
        danger: "10/10 - Highly radioactive with significant health risks on exposure.",
        image: "images/berkelium.png",
        fact: `Berkelium is a synthetic radioactive element created in laboratories and used primarily in scientific research.
        It has been important in the discovery of even heavier elements, acting as a starting material in nuclear experiments.
        Berkelium doesn't have widespread practical applications due to its instability and limited availability. Most of what
        we know about it comes from controlled experiments. It's a stepping stone element in the study of nuclear chemistry.`
    },
    {
        name: "Californium",
        symbol: "Cf",
        number: 98,
        mass: "[251]",
        group: 12,
        period: 9,
        category: "Actinide",
        state: "Solid",
        danger: "10/10 - Extremely radioactive neutron emitter that requires strict shielding.",
        image: "images/californium.png",
        fact: `Californium is a powerful radioactive element used as a neutron source. It's used in applications like starting
        nuclear reactors, detecting gold and silver in mining, and even in some medical treatments. Californium can release a
        large number of neutrons, which makes it extremely useful in both industry and research. Because of its radioactivity,
        it's handled with strict safety measures. It's one of the few heavy elements with practical, real world uses.`
    },
    {
        name: "Einsteinium",
        symbol: "Es",
        number: 99,
        mass: "[252]",
        group: 13,
        period: 9,
        category: "Actinide",
        state: "Solid",
        danger: "10/10 - Highly radioactive and exists only in tiny, hazardous amounts.",
        image: "images/einsteinium.png",
        fact: `Einsteinium is a synthetic element produced in nuclear reactions and is mainly used in scientific research. It 
        was first discovered in the debris of nuclear explosions, which highlights the extreme conditions required to create it.
        Einsteinium is highly radioactive and exists only in small amounts. It has been used to help create even heavier elements.
        Its importance lies in expanding our understanding of atomic structure.`
    },
    {
        name: "Fermium",
        symbol: "Fm",
        number: 100,
        mass: "[257]",
        group: 14,
        period: 9,
        category: "Actinide",
        state: "Solid",
        danger: "10/10 - Extremely radioactive and unstable, posing serious health risks.",
        image: "images/fermium.png",
        fact: `And element number one hundred is... Fermium! This is a synthetic radioactive element that is also produced under 
        extreme conditions, such as nuclear reactions. It has no practical applications outside of research, largely due to its
        short half life and difficulty in production. Fermium is studied to better understand the behavior of heavy atomic nuclei.
        Like Einsteinium, it plays a role in the creation of even heavier elements. It exists mainly as part of advanced nuclear experiments.`
    },
    {
        name: "Mendelevium",
        symbol: "Md",
        number: 101,
        mass: "[258]",
        group: 15,
        period: 9,
        category: "Actinide",
        state: "Solid",
        danger: "? - Exists only in tiny, short-lived amounts; radioactive but not encountered in real-world exposure.",
        image: "images/mendelevium.png",
        fact: `Mendelevium is a synthetic radioactive element named after Dmitri Mendeleev, the creator of the periodic table.
        It was one of the first elements produced one atom at a time in a laboratory, highlighting how difficult these heavy
        elements are to create. Mendelevium has no practical uses outside of scientific research due to its short half life.
        It's mainly studied to better understand the behavior of heavy atomic nuclei. Its name reflects its importance in the
        history of chemistry.`
    },
    {
        name: "Nobelium",
        symbol: "No",
        number: 102,
        mass: "[259]",
        group: 16,
        period: 9,
        category: "Actinide",
        state: "Solid",
        danger: "? - Highly radioactive but exists only briefly in controlled lab conditions.",
        image: "images/nobelium.png",
        fact: `Nobelium is a synthetic element named after Alfred Nobel, the inventor of dynamite and founder of the Nobel Prize.
        It's produced in particle accelerators and exists only for short periods before decaying. Like many elements in this range,
        it's used purely for research into nuclear structure and stability. Nobelium helps scientists study how atomic nuclei behave
        under extreme conditions.`
    },
    {
        name: "Lawrencium",
        symbol: "Lr",
        number: 103,
        mass: "[262]",
        group: 17,
        period: 9,
        category: "Actinide",
        state: "Solid",
        danger: "? - Extremely unstable and only exists momentarily in laboratory environments.",
        image: "images/lawrencium.png",
        fact: `Lawrencium is named after Ernest Lawrence, the inventor of the cyclotron, a device used to create many synthetic
        elements. It marks the end of the actinide series and represents a transition into the heaviest elements on the periodic
        table. Lawrencium is highly unstable and exists only in controlled laboratory conditions. It's studied to understand the
        limits of atomic structure. Its discovery reflects the advancement of particle physics and experimental chemistry.`
    },
    {
        name: "Rutherfordium",
        symbol: "Rf",
        number: 104,
        mass: "[267]",
        group: 4,
        period: 7,
        category: "Transition Metal",
        state: "Solid",
        danger: "? - Synthetic and extremely short-lived; no real-world exposure risk.",
        image: "images/rutherfordium.png",
        fact: `Rutherfordium is named after Ernest Rutherford, a key figure in the development of nuclear physics. It is yet another
        synthetic element created in particle accelerators and exists only for very short periods. Rutherfordium's properties are
        predicted based on its position in the periodic table, as direct observation is limited. It helps scientists test theories
        about how heavy elements should behave. Its name honors one of the pioneers of atomic science.`
    },
    {
        name: "Dubnium",
        symbol: "Db",
        number: 105,
        mass: "[268]",
        group: 5,
        period: 7,
        category: "Transition Metal",
        state: "Solid",
        danger: "? - Exists only in lab-created atoms and decays almost instantly.",
        image: "images/dubnium.png",
        fact: `Dubnium is named after the city of Dubna, Russia, where it was discovered and important nuclear research has taken
        place. It is another synthetic element produced in laboratories and has no practical applications outside of research.
        Like most elements toward the end of the table, Dubnium exists only briefly before decaying into lighter elements. It
        is used to study nuclear reactions and the properties of superheavy elements. Its discovery is part of the ongoing effort
        to explore the limits of the periodic table.`
    },
    {
        name: "Seaborgium",
        symbol: "Sg",
        number: 106,
        mass: "[271]",
        group: 6,
        period: 7,
        category: "Transition Metal",
        state: "Solid",
        danger: "? - Exists only in lab-created atoms and decays almost instantly.",
        image: "images/seaborgium.png",
        fact: `Seaborgium is a synthetic element named after Glenn T. Seaborg, a key figure in nuclear chemistry. It's created in
        particle accelerators and exists only for a very short time before decaying. Scientists study seaborgium to
        better understand how superheavy elements behave and how far the periodic table can extend. Its properties are mostly
        predicted based on its position, since it's difficult to observe directly. It represents a major step in human-made
        element discovery.`
    },
    {
        name: "Bohrium",
        symbol: "Bh",
        number: 107,
        mass: "[270]",
        group: 7,
        period: 7,
        category: "Transition Metal",
        state: "Solid",
        danger: "? - Synthetic and extremely short-lived, with no real-world exposure risk.",
        image: "images/bohrium.png",
        fact: `Bohrium is named after Niels Bohr, one of the pioneers of atomic theory. Like other elements in this range, it 
        is synthetic and highly unstable, existing only briefly after being created. Bohrium is produced in laboratories through
        nuclear fusion reactions. It has no practical applications outside of research. Like the others, its main purpose is to
        help scientists explore the structure and limits of atomic nuclei.`
    },
    {
        name: "Hassium",
        symbol: "Hs",
        number: 108,
        mass: "[277]",
        group: 8,
        period: 7,
        category: "Transition Metal",
        state: "Solid",
        danger: "? - Exists only for fractions of a second in controlled lab conditions.",
        image: "images/hassium.png",
        fact: `Hassium is a synthetic element named after the German state of Hesse, where it was first discovered. It is thought
        to have properties similar to osmium, based on its position in the periodic table. Hassium exists for only fractions of a
        second, making direct study extremely difficult. Researchers rely on theoretical models and limited experimental data
        to understand it. It's part of the ongoing effort to map out superheavy elements.`
    },
    {
        name: "Meitnerium",
        symbol: "Mt",
        number: 109,
        mass: "[278]",
        group: 9,
        period: 7,
        category: "Transition Metal",
        state: "Solid",
        danger: "? - Extremely unstable and not encountered outside laboratory synthesis.",
        image: "images/meitnerium.png",
        fact: `Meitnerium is named after Lise Meitner, a physicist who contributed to the discovery of nuclear fission. It is
        another synthetic element that exists only briefly before decaying. Meitnerium has no known practical uses and is studied
        purely for scientific research. Its discovery helps confirm theories about how heavy elements behave. It's one of many
        elements that exist mainly to expand our understanding of atomic science.`
    },
    {
        name: "Darmstadtium",
        symbol: "Ds",
        number: 110,
        mass: "[281]",
        group: 10,
        period: 7,
        category: "Transition Metal",
        state: "Solid",
        danger: "? - Decays almost immediately after formation; no practical exposure risk.",
        image: "images/darmstadtium.png",
        fact: `Darmstadtium is named after Darmstadt, Germany, where it was first created. It is a synthetic superheavy element
        that decays almost immediately after formation. Scientists study it to test predictions about the stability and structure
        of very heavy atoms. Its properties are largely theoretical due to its short existence. Darmstadtium represents how far
        modern science has pushed the creation of new elements.`
    },
    {
        name: "Roentgenium",
        symbol: "Rg",
        number: 111,
        mass: "[282]",
        group: 11,
        period: 7,
        category: "Transition Metal",
        state: "Solid",
        danger: "?",
        image: "images/roentgenium.png",
        fact: `Roentgenium is a synthetic element named after Wilhelm Rontgen, the discoverer of X-rays. It is created in particle
        accelerators and exists only for a very short time before decaying. Scientists believe it may have properties similar to gold,
        based on its position in the periodic table, but this is mostly theoretical. Roentgenium has no practical applications due to
        its instability. Its main purpose is to help researchers understand superheavy elements.`
    },
    {
        name: "Copernicium",
        symbol: "Cn",
        number: 112,
        mass: "[285]",
        group: 12,
        period: 7,
        category: "Transition Metal",
        state: "Liquid",
        danger: "?",
        image: "images/copernicium.png",
        fact: `Copernicium is named after Nicolaus Copernicus, the astronomer who proposed the heliocentric model of the solar system.
        It is a synthetic element that decays rapidly after being created. Some predictions suggest it may behave more like a noble
        gas than a metal, which would make it unusual compared to nearby elements. Because of its extremely short lifespan, its properties
        are still being studied indirectly. It exists almost entirely in theory and brief experiments.`
    },
    {
        name: "Nihonium",
        symbol: "Nh",
        number: 113,
        mass: "[286]",
        group: 13,
        period: 7,
        category: "Post-Transition Metal",
        state: "Solid",
        danger: "?",
        image: "images/nihonium.png",
        fact: `Nihonium is named after Japan ("Nihon"), where it was first discovered. It is one of the few elements discovered in 
        Asia and represents a major milestone in modern chemistry. Nihonium is highly unstable and exists only for fractions of a
        second. Its properties are predicted based on its position in the periodic table, likely resembling heavier versions of post-
        transition metals. It's one of the newest additions to the periodic table.`
    },
    {
        name: "Flerovium",
        symbol: "Fl",
        number: 114,
        mass: "[289]",
        group: 14,
        period: 7,
        category: "Post-Transition Metal",
        state: "Solid",
        danger: "?",
        image: "images/flerovium.png",
        fact: `Flerovium is named after the Flerov Laboratory of Nuclear Reactions in Russia. It is a synthetic superheavy element 
        that may show unusual behavior compared to typical metals, possibly acting more like a noble gas in some conditions.
        Flerovium is part of ongoing research into the "island of stability," a theory suggesting some heavy elements could be more
        stable than expected. Its existence is extremely short lived. It represents one of the frontiers of nuclear science.`
    },
    {
        name: "Moscovium",
        symbol: "Mc",
        number: 115,
        mass: "[290]",
        group: 15,
        period: 7,
        category: "Post-Transition Metal",
        state: "Solid",
        danger: "?",
        image: "images/moscovium.png",
        fact: `Moscovium is named after the Moscow region, where it was discovered. It is a synthetic element created in particle
        accelerators and decays almost immediately. Scientists study it to better understand nuclear reactions and the limits of
        atomic structure. Like many elements in this range, its properties are mostly theoretical. It contributes to research on
        how heavy elements form and behave.`
    },
    {
        name: "Livermorium",
        symbol: "Lv",
        number: 116,
        mass: "[293]",
        group: 16,
        period: 7,
        category: "Post-Transition Metal",
        state: "Solid",
        danger: "?",
        image: "images/livermorium.png",
        fact: `Livermorium is named after the Lawrence Livermore National Laboratory in the United States. It is a synthetic element
        that exists only briefly after being created. Livermorium is part of the effort to explore the limits of the periodic table
        and understand superheavy nuclei. Its properties are predicted rather than directly observed. It reflects international
        collaboration in modern element discovery.`
    },
    {
        name: "Tennessine",
        symbol: "Ts",
        number: 117,
        mass: "[294]",
        group: 17,
        period: 7,
        category: "Halogen",
        state: "Solid",
        danger: "?",
        image: "images/tennessine.png",
        fact: `Tennessine is named after the state of Tennessee, recognizing contributions from research institutions there. It
        is a synthetic element classified as a halogen, though its behavior may differ due to its extreme size and instability.
        Tennessine decays very quickly and is studied only in laboratory conditions. Its discovery required advanced nuclear
        techniques and collaboration across multiple countries. It's one of the newest members of the periodic table.`
    },
    {
        name: "Oganesson",
        symbol: "Og",
        number: 118,
        mass: "[294]",
        group: 18,
        period: 7,
        category: "Noble Gas",
        state: "Gas",
        danger: "?",
        image: "images/oganesson.png",
        fact: `Oganesson is named after Yuri Oganessian, a leading scientist in the discovery of superheavy elements. It is 
        currently the heaviest known element and is classified as a noble gas, though it may not behave like one due to its
        extreme atomic structure. Oganesson exists for only a tiny fraction of a second before decaying. Its properties challenge
        existing theories about how elements should behave. It marks the current end of the periodic table... for now.`
    },

];


const table = document.getElementById("periodic-table");

let particlesEnabled = true;

const alkaliMetals = ["Lithium", "Sodium", "Potassium", "Rubidium", "Cesium", "Francium"];

const alkalineEarthMetals = ["Beryllium", "Magnesium", "Calcium", "Strontium", "Barium", "Radium"];

const transitionMetals = [

    "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese", "Iron", "Cobalt", "Nickel", "Copper", "Zinc",
    "Yttrium", "Zirconium", "Niobium", "Molybdenum", "Technetium", "Ruthenium", "Rhodium", "Palladium", "Silver", "Cadmium",
    "Hafnium", "Tantalum", "Tungsten", "Rhenium", "Osmium", "Iridium", "Platinum", "Gold", "Mercury",
    "Rutherfordium", "Dubnium", "Seaborgium", "Bohrium", "Hassium", "Meitnerium", "Darmstadtium", "Roentgenium", "Copernicium"
];

const lanthanides = [

    "Lanthanum", "Cerium", "Praseodymium", "Neodymium", "Promethium", "Samarium", "Europium",
    "Gadolinium", "Terbium", "Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium", "Lutetium"
];

const actinides = [

    "Actinium", "Thorium", "Protactinium", "Uranium", "Neptunium", "Plutonium", "Americium",
    "Curium", "Berkelium", "Californium", "Einsteinium", "Fermium", "Mendelevium", "Nobelium", "Lawrencium"
];

const postTransitionMetals = [

    "Aluminum", "Gallium", "Indium", "Tin", "Thallium", "Lead", "Bismuth", "Nihonium", "Flerovium", "Moscovium", "Livermorium"
];

const metalloids = ["Boron", "Silicon", "Germanium", "Arsenic", "Antimony", "Tellurium", "Polonium"];

const nonmetals = ["Hydrogen", "Carbon", "Nitrogen", "Oxygen", "Phosphorus", "Sulfur", "Selenium"];

const halogens = ["Fluorine", "Chlorine", "Bromine", "Iodine", "Astatine", "Tennessine"];

const nobleGases = ["Helium", "Neon", "Argon", "Krypton", "Xenon", "Radon", "Oganesson"];


const knowledgeQuestions = [

    {
        question: "Which element is the lightest and most abundant in the universe?",
        answer: "Hydrogen",
        explanation: "Hydrogen is the lightest and most abundant element."
    },

    {
        question: "Which element is used in balloons because it is lighter than air and nonreactive?",
        answer: "Helium",
        explanation: "Helium is used in balloons because it is lighter than air."
    },
    {
        question: "Which element is used in rechargeable batteries for electronics?",
        answer: "Lithium",
        explanation: "Lithium is used in lithium-ion batteries."
    },
    {
        question: "Which element is used in aerospace because it is lightweight and strong?",
        answer: "Beryllium",
        explanation: "Beryllium is used in aerospace materials."
    },
    {
        question: "Which element is used to make strong glass and detergents?",
        answer: "Boron",
        explanation: "Boron is used in glass and cleaning products."
    },
    {
        question: "Which element is the backbone of all organic life?",
        answer: "Carbon",
        explanation: "Carbon forms the basis of life."
    },
    {
        question: "Which element makes up most of Earth's atmosphere?",
        answer: "Nitrogen",
        explanation: "Nitrogen makes up about 78% of the atmosphere."
    },
    {
        question: "Which element makes up about 21% of Earth's atmosphere?",
        answer: "Oxygen",
        explanation: "Oxygen is essential for respiration."
    },
    {
        question: "Which element is the most reactive halogen?",
        answer: "Fluorine",
        explanation: "Fluorine is the most reactive halogen."
    },
    {
        question: "Which element is famous for glowing in signs?",
        answer: "Neon",
        explanation: "Neon is used in bright signs."
    },

    {
        question: "Which element reacts violently with water and is part of table salt?",
        answer: "Sodium",
        explanation: "Sodium forms salt with chlorine."
    },
    {
        question: "Which element burns with a bright white flame in fireworks?",
        answer: "Magnesium",
        explanation: "Magnesium produces bright white light."
    },
    {
        question: "Which element is lightweight and used in cans and aircraft?",
        answer: "Aluminum",
        explanation: "Aluminum is widely used due to its strength and low weight."
    },
    {
        question: "Which element is used in computer chips and electronics?",
        answer: "Silicon",
        explanation: "Silicon is essential for electronics."
    },
    {
        question: "Which element is used in matches and DNA?",
        answer: "Phosphorus",
        explanation: "Phosphorus is biologically important."
    },
    {
        question: "Which element is used in fertilizers and smells strongly in some compounds?",
        answer: "Sulfur",
        explanation: "Sulfur is used in fertilizers."
    },
    {
        question: "Which element is used to disinfect water and pools?",
        answer: "Chlorine",
        explanation: "Chlorine kills bacteria in water."
    },
    {
        question: "Which element is used in light bulbs and is chemically inactive?",
        answer: "Argon",
        explanation: "Argon is a noble gas used in bulbs."
    },
    {
        question: "Which element is essential for muscles and nerves and reacts with water?",
        answer: "Potassium",
        explanation: "Potassium is vital for the body."
    },
    {
        question: "Which element is essential for bones and teeth?",
        answer: "Calcium",
        explanation: "Calcium strengthens bones."
    },
    {
        question: "Which element is used in lightweight alloys and electronics?",
        answer: "Scandium",
        explanation: "Scandium strengthens alloys."
    },
    {
        question: "Which element is used in aircraft and implants due to strength?",
        answer: "Titanium",
        explanation: "Titanium is strong and corrosion-resistant."
    },
    {
        question: "Which element strengthens steel and tools?",
        answer: "Vanadium",
        explanation: "Vanadium improves steel strength."
    },
    {
        question: "Which element gives chrome plating its shine?",
        answer: "Chromium",
        explanation: "Chromium is used in plating."
    },
    {
        question: "Which element is used in steel and batteries?",
        answer: "Manganese",
        explanation: "Manganese improves steel."
    },
    {
        question: "Which element is used in steel and carries oxygen in blood?",
        answer: "Iron",
        explanation: "Iron is essential in hemoglobin."
    },
    {
        question: "Which element is used in batteries and blue pigments?",
        answer: "Cobalt",
        explanation: "Cobalt gives blue color."
    },
    {
        question: "Which element is used in coins and stainless steel?",
        answer: "Nickel",
        explanation: "Nickel resists corrosion."
    },
    {
        question: "Which element is widely used in electrical wiring?",
        answer: "Copper",
        explanation: "Copper conducts electricity well."
    },
    {
        question: "Which element protects steel from rust?",
        answer: "Zinc",
        explanation: "Zinc coating prevents corrosion."
    },
    {
        question: "Which element can melt in your hand?",
        answer: "Gallium",
        explanation: "Gallium has a low melting point."
    },
    {
        question: "Which element is used in semiconductors and fiber optics?",
        answer: "Germanium",
        explanation: "Germanium is used in electronics."
    },
    {
        question: "Which element is known as a poison but used in semiconductors?",
        answer: "Arsenic",
        explanation: "Arsenic is toxic but useful in electronics."
    },
    {
        question: "Which element is used in electronics and glass?",
        answer: "Selenium",
        explanation: "Selenium is used in tech and glass."
    },
    {
        question: "Which element is a liquid at room temperature besides mercury?",
        answer: "Bromine",
        explanation: "Bromine is a liquid halogen."
    },
    {
        question: "Which element is used in lighting and lasers?",
        answer: "Krypton",
        explanation: "Krypton is used in lighting."
    },
    {
        question: "Which element is highly reactive and used in atomic clocks?",
        answer: "Rubidium",
        explanation: "Rubidium is used in precise clocks."
    },
    {
        question: "Which element gives fireworks a red color?",
        answer: "Strontium",
        explanation: "Strontium produces red flames."
    },
    {
        question: "Which element is used in LEDs and superconductors?",
        answer: "Yttrium",
        explanation: "Yttrium is used in advanced electronics."
    },
    {
        question: "Which element resists corrosion and is used in nuclear reactors?",
        answer: "Zirconium",
        explanation: "Zirconium is corrosion-resistant."
    },

    {
        question: "Which element strengthens steel and is used in superconductors?",
        answer: "Niobium",
        explanation: "Niobium improves steel."
    },
    {
        question: "Which element helps steel resist high temperatures?",
        answer: "Molybdenum",
        explanation: "Molybdenum improves heat resistance."
    },
    {
        question: "Which element is radioactive and used in medical imaging?",
        answer: "Technetium",
        explanation: "Technetium is used in scans."
    },
    {
        question: "Which element is used in electronics and corrosion-resistant alloys?",
        answer: "Ruthenium",
        explanation: "Ruthenium is used in electronics."
    },
    {
        question: "Which element is valuable and used in catalytic converters?",
        answer: "Rhodium",
        explanation: "Rhodium is rare and valuable."
    },
    {
        question: "Which element is rarer than gold and used in electronics?",
        answer: "Palladium",
        explanation: "Palladium is used in tech."
    },
    {
        question: "Which element has been used as money and conducts electricity well?",
        answer: "Silver",
        explanation: "Silver is an excellent conductor."
    },
    {
        question: "Which element is toxic and used in batteries?",
        answer: "Cadmium",
        explanation: "Cadmium is used in batteries."
    },
    {
        question: "Which element is used in touchscreens?",
        answer: "Indium",
        explanation: "Indium is used in displays."
    },
    {
        question: "Which element is used in solder and has a low melting point?",
        answer: "Tin",
        explanation: "Tin is used in solder."
    },

    {
        question: "Which element is used in flame retardants?",
        answer: "Antimony",
        explanation: "Antimony is used in fire-resistant materials."
    },
    {
        question: "Which element is used in solar panels?",
        answer: "Tellurium",
        explanation: "Tellurium is used in solar tech."
    },
    {
        question: "Which element is essential for the thyroid?",
        answer: "Iodine",
        explanation: "Iodine supports thyroid function."
    },
    {
        question: "Which element is used in high-intensity lamps?",
        answer: "Xenon",
        explanation: "Xenon is used in lighting."
    },
    {
        question: "Which element explodes in water and is extremely reactive?",
        answer: "Cesium",
        explanation: "Cesium reacts violently with water."
    },
    {
        question: "Which element is used in X-ray imaging compounds?",
        answer: "Barium",
        explanation: "Barium helps imaging."
    },
    {
        question: "Which element is used in lighter flints?",
        answer: "Cerium",
        explanation: "Cerium sparks in lighters."
    },
    {
        question: "Which element is used in powerful magnets?",
        answer: "Neodymium",
        explanation: "Neodymium magnets are very strong."
    },
    {
        question: "Which element is radioactive and very rare?",
        answer: "Promethium",
        explanation: "Promethium is rare and unstable."
    },
    {
        question: "Which element is used in MRI contrast agents?",
        answer: "Gadolinium",
        explanation: "Gadolinium improves imaging."
    },

    {
        question: "Which element is used in green phosphors?",
        answer: "Terbium",
        explanation: "Terbium is used in displays."
    },
    {
        question: "Which element is used in high-temp magnets?",
        answer: "Dysprosium",
        explanation: "Dysprosium stabilizes magnets."
    },
    {
        question: "Which element has one of the strongest magnetic properties?",
        answer: "Holmium",
        explanation: "Holmium is highly magnetic."
    },
    {
        question: "Which element is used in fiber optics?",
        answer: "Erbium",
        explanation: "Erbium boosts signals."
    },
    {
        question: "Which element is rare and used in X-ray devices?",
        answer: "Thulium",
        explanation: "Thulium is used in portable X-rays."
    },
    {
        question: "Which element is used in atomic clocks?",
        answer: "Ytterbium",
        explanation: "Ytterbium is used in precision clocks."
    },
    {
        question: "Which element is used in PET scan detectors?",
        answer: "Lutetium",
        explanation: "Lutetium is used in medical imaging."
    },
    {
        question: "Which element absorbs neutrons in reactors?",
        answer: "Hafnium",
        explanation: "Hafnium controls reactions."
    },
    {
        question: "Which element is corrosion-resistant and used in implants?",
        answer: "Tantalum",
        explanation: "Tantalum resists corrosion."
    },
    {
        question: "Which element has the highest melting point?",
        answer: "Tungsten",
        explanation: "Tungsten has the highest melting point."
    },

    {
        question: "Which element is used in nuclear fuel?",
        answer: "Uranium",
        explanation: "Uranium powers nuclear reactors."
    },
    {
        question: "Which element is used in smoke detectors?",
        answer: "Americium",
        explanation: "Americium is used in detectors."
    },
    {
        question: "Which element is used in nuclear weapons and reactors?",
        answer: "Plutonium",
        explanation: "Plutonium is used in nuclear tech."
    },

    {
        question: "Which element is named after Dmitri Mendeleev?",
        answer: "Mendelevium",
        explanation: "Named after creator of periodic table."
    },
    {
        question: "Which element is named after Alfred Nobel?",
        answer: "Nobelium",
        explanation: "Named after Nobel."
    },
    {
        question: "Which element is named after Nicolaus Copernicus?",
        answer: "Copernicium",
        explanation: "Named after Copernicus."
    },
    {
        question: "Which element is named after Ernest Rutherford?",
        answer: "Rutherfordium",
        explanation: "Named after Rutherford."
    },
    {
        question: "Which element is named after Japan?",
        answer: "Nihonium",
        explanation: "Named after Japan."
    },
    {
        question: "Which element is named after Tennessee?",
        answer: "Tennessine",
        explanation: "Named after Tennessee."
    }
];


function getCategoryClass(category) {

    switch (category) {

        case "Alkali Metal":

            return "alkali";

        case "Alkaline Earth Metal":

            return "alkaline";

        case "Transition Metal":

            return "transition";

        case "Post-Transition Metal":

            return "post-transition";

        case "Metalloid":

            return "metalloid";

        case "Nonmetal":

            return "nonmetal";

        case "Halogen":

            return "halogen";

        case "Noble Gas":

            return "noble";

        case "Lanthanide":

            return "lanthanide";

        case "Actinide":

            return "actinide";

        default:

            return "";
    }
}


const infoCard = document.getElementById("info-card");

let outsideClickHandler = null;

function showElementCard(e, sourceDiv = null) {

    if (quizActive) return;

    currentElement = e;

    const img = document.getElementById("element-image");

    document.getElementById("element-name").textContent = e.name;
    document.getElementById("element-symbol").textContent = "Symbol: " + e.symbol;
    document.getElementById("element-number").textContent = "Atomic Number: " + e.number;
    document.getElementById("element-mass").textContent = "Atomic Mass: " + e.mass;
    document.getElementById("element-group").textContent = "Group: " + e.group;
    document.getElementById("element-period").textContent = "Period: " + e.period;
    document.getElementById("element-category").textContent = "Category: " + e.category;
    document.getElementById("element-state").textContent = "State: " + e.state;
    document.getElementById("element-danger").textContent = "Danger Level: " + e.danger;
    document.getElementById("element-description").textContent = e.description || e.fact;

    updateFavoriteButton();

    infoCard.classList.remove("hidden");
    infoCard.style.display = "block";
    infoCard.style.position = "fixed";
    infoCard.style.transform = "none";
    infoCard.style.visibility = "hidden";

    function positionCard() {
        const margin = 12;
        const cardWidth = 300;
        const cardHeight = infoCard.offsetHeight;

        if (sourceDiv) {

            const rect = sourceDiv.getBoundingClientRect();

            let left = rect.right + margin;
            let top = rect.top;

            if (left + cardWidth > window.innerWidth - margin) {

                left = rect.left - cardWidth - margin;
            }

            if (left < margin) {

                left = margin;
            }

            if (top + cardHeight > window.innerHeight - margin) {

                top = window.innerHeight - cardHeight - margin;
            }

            if (top < margin) {

                top = margin;
            }

            infoCard.style.left = left + "px";
            infoCard.style.top = top + "px";
            infoCard.style.right = "";
        }
        else {

            infoCard.style.left = "50%";
            infoCard.style.top = "100px";
            infoCard.style.right = "";
            infoCard.style.transform = "translateX(-50%)";
        }

        infoCard.style.visibility = "visible";
    }

    if (e.image) {

        img.onload = function () {
            positionCard();
        };

        img.src = e.image;
        img.alt = e.name;
        img.style.display = "block";

        if (img.complete) {

            positionCard();
        }
    }
    else {

        img.style.display = "none";
        positionCard();
    }

    if (outsideClickHandler) {

        document.removeEventListener("click", outsideClickHandler);
    }

    outsideClickHandler = function (event) {
        if (!infoCard.contains(event.target)) {

            infoCard.classList.add("hidden");
            infoCard.style.display = "none";
            document.removeEventListener("click", outsideClickHandler);
            outsideClickHandler = null;
        }
    };

    setTimeout(() => {
        document.addEventListener("click", outsideClickHandler);
    }, 0);
}

infoCard.addEventListener("click", function (event) {
    event.stopPropagation();
    infoCard.classList.add("hidden");
    infoCard.style.display = "none";

    if (outsideClickHandler) {

        document.removeEventListener("click", outsideClickHandler);
        outsideClickHandler = null;
    }
});

elements.forEach(e => {

    const div = document.createElement("div");

    div.classList.add("element");
    div.classList.add(getCategoryClass(e.category));

    div.style.gridColumn = e.group;
    div.style.gridRow = e.period;

    div.innerHTML = `
        <div class="number">${e.number}</div>
        <div class="symbol">${e.symbol}</div>
    `;

    div.addEventListener("click", (event) => {
        event.stopPropagation();
        const div = getElementDiv(e.symbol);
        showElementCard(e, div);
    });

    table.appendChild(div);
});

function createSeriesMarker(number, symbol, group, period, categoryClass) {

    const div = document.createElement("div");

    div.classList.add("element");
    div.classList.add(categoryClass);
    div.classList.add("series-marker");

    div.style.gridColumn = group;
    div.style.gridRow = period;

    div.innerHTML = `
        <div class="number">${number}</div>
        <div class="symbol">${symbol}</div>
        <div class="asterisk">*</div>
    `;

    table.appendChild(div);
}

createSeriesMarker("57 - 71", "La", 3, 6, "lanthanide");
createSeriesMarker("89 - 103", "Ac", 3, 7, "actinide");

let score = 0;
let totalQuestions = 0;
let currentQuestion = null;
let quizActive = false;
let answered = false;
let questionNumber = 0;
let maxQuestions = 10;
let quizHistory = [];
let practiceMode = false;
let practiceType = null;

function getDifficultyRange() {

    if (totalQuestions < 2) {

        return 40;
    }

    let percent = (score / totalQuestions) * 100;

    if (percent < 50) {

        return 40;
    }

    else if (percent <= 80) {

        return 90;
    }

    else {

        return 118;
    }
}

function categoryQuestionsUnlocked() {

    if (totalQuestions < 3) {

        return false;
    }

    let percent = (score / totalQuestions) * 100;

    if (percent < 50) {

        return false;
    }

    else if (percent <= 80) {

        return true;
    }

    else {

        return true;
    }
}

function knowledgeQuestionsUnlocked() {

    if (totalQuestions < 4) {

        return false;
    }

    let percent = (score / totalQuestions) * 100;

    return percent >= 70;
}

function getElementsUpToDifficulty() {

    let maxNumber = getDifficultyRange();

    return elements.filter(e => e.number <= maxNumber);
}

function getRandomFromArray(arr) {
   
    return arr[Math.floor(Math.random() * arr.length)];
}

function getCategoryPool(categoryName) {

    if (categoryName === "Alkali Metal") {

        return alkaliMetals;
    }

    else if (categoryName === "Alkaline Earth Metal") {

        return alkalineEarthMetals;
    }

    else if (categoryName === "Transition Metal") {

        return transitionMetals;
    }

    else if (categoryName === "Lanthanide") {

        return lanthanides;
    }

    else if (categoryName === "Actinide") {

        return actinides;
    }

    else if (categoryName === "Post-Transition Metal") {

        return postTransitionMetals;
    }

    else if (categoryName === "Metalloid") {

        return metalloids;
    }

    else if (categoryName === "Nonmetal") {

        return nonmetals;
    }

    else if (categoryName === "Halogen") {

        return halogens;
    }

    else if (categoryName === "Noble Gas") {

        return nobleGases;
    }

    return [];
}

function getElementsNotInCategory(categoryName) {

    let pool = getElementsUpToDifficulty();
    let categoryPool = getCategoryPool(categoryName);

    return pool.filter(e => !categoryPool.includes(e.name));
}

function getElementsInCategory(categoryName) {

    let pool = getElementsUpToDifficulty();
    let categoryPool = getCategoryPool(categoryName);

    return pool.filter(e => categoryPool.includes(e.name));
}

function generateWhichIsAlkaliMetalQuestion() {

    let correctPool = getElementsInCategory("Alkali Metal");
    let wrongPool = getElementsNotInCategory("Alkali Metal");

    let correctElement = correctPool[Math.floor(Math.random() * correctPool.length)];
    let choices = [correctElement.name];

    while (choices.length < 4) {

        let wrongElement = wrongPool[Math.floor(Math.random() * wrongPool.length)];

        if (!choices.includes(wrongElement.name)) {

            choices.push(wrongElement.name);
        }
    }

    shuffleArray(choices);

    return {

        question: "Which element is an Alkali Metal?",
        answer: correctElement.name,
        choices: choices,
        explanation: correctElement.name + " is an Alkali Metal.",
        questionType: 5
    };
}

function generateWhichIsNotAlkaliMetalQuestion() {

    let correctPool = getElementsNotInCategory("Alkali Metal");
    let wrongPool = getElementsInCategory("Alkali Metal");

    let correctElement = correctPool[Math.floor(Math.random() * correctPool.length)];
    let choices = [correctElement.name];

    while (choices.length < 4) {

        let wrongElement = wrongPool[Math.floor(Math.random() * wrongPool.length)];

        if (!choices.includes(wrongElement.name)) {

            choices.push(wrongElement.name);
        }
    }

    shuffleArray(choices);

    return {

        question: "Which element is not an Alkali Metal?",
        answer: correctElement.name,
        choices: choices,
        explanation: correctElement.name + " is not an Alkali Metal.",
        questionType: 6
    };
}


function generateWhichIsAlkalineEarthMetalQuestion() {

    let correctPool = getElementsInCategory("Alkaline Earth Metal");
    let wrongPool = getElementsNotInCategory("Alkaline Earth Metal");

    let correctElement = correctPool[Math.floor(Math.random() * correctPool.length)];
    let choices = [correctElement.name];

    while (choices.length < 4) {

        let wrongElement = wrongPool[Math.floor(Math.random() * wrongPool.length)];

        if (!choices.includes(wrongElement.name)) {

            choices.push(wrongElement.name);
        }
    }

    shuffleArray(choices);

    return {

        question: "Which element is an Alkaline Earth Metal?",
        answer: correctElement.name,
        choices: choices,
        explanation: correctElement.name + " is an Alkaline Earth Metal.",
        questionType: 7
    };
}

function generateWhichIsNotAlkalineEarthMetalQuestion() {

    let correctPool = getElementsNotInCategory("Alkaline Earth Metal");
    let wrongPool = getElementsInCategory("Alkaline Earth Metal");

    let correctElement = correctPool[Math.floor(Math.random() * correctPool.length)];
    let choices = [correctElement.name];

    while (choices.length < 4) {

        let wrongElement = wrongPool[Math.floor(Math.random() * wrongPool.length)];

        if (!choices.includes(wrongElement.name)) {

            choices.push(wrongElement.name);
        }
    }

    shuffleArray(choices);

    return {

        question: "Which element is not an Alkaline Earth Metal?",
        answer: correctElement.name,
        choices: choices,
        explanation: correctElement.name + " is not an Alkaline Earth Metal.",
        questionType: 8
    };
}
function generateWhichIsTransitionMetalQuestion() {

    let correctPool = getElementsInCategory("Transition Metal");
    let wrongPool = getElementsNotInCategory("Transition Metal");

    let correctElement = correctPool[Math.floor(Math.random() * correctPool.length)];
    let choices = [correctElement.name];

    while (choices.length < 4) {

        let wrongElement = wrongPool[Math.floor(Math.random() * wrongPool.length)];

        if (!choices.includes(wrongElement.name)) {

            choices.push(wrongElement.name);
        }
    }

    shuffleArray(choices);

    return {

        question: "Which element is a Transition Metal?",
        answer: correctElement.name,
        choices: choices,
        explanation: correctElement.name + " is a Transition Metal.",
        questionType: 9
    };
}

function generateWhichIsNotTransitionMetalQuestion() {

    let correctPool = getElementsNotInCategory("Transition Metal");
    let wrongPool = getElementsInCategory("Transition Metal");

    let correctElement = correctPool[Math.floor(Math.random() * correctPool.length)];
    let choices = [correctElement.name];

    while (choices.length < 4) {

        let wrongElement = wrongPool[Math.floor(Math.random() * wrongPool.length)];

        if (!choices.includes(wrongElement.name)) {

            choices.push(wrongElement.name);
        }
    }

    shuffleArray(choices);

    return {

        question: "Which element is not a Transition Metal?",
        answer: correctElement.name,
        choices: choices,
        explanation: correctElement.name + " is not a Transition Metal.",
        questionType: 10
    };
}
function generateWhichIsLanthanideQuestion() {

    let correctPool = getElementsInCategory("Lanthanide");
    let wrongPool = getElementsNotInCategory("Lanthanide");

    let correctElement = correctPool[Math.floor(Math.random() * correctPool.length)];
    let choices = [correctElement.name];

    while (choices.length < 4) {

        let wrongElement = wrongPool[Math.floor(Math.random() * wrongPool.length)];

        if (!choices.includes(wrongElement.name)) {

            choices.push(wrongElement.name);
        }
    }

    shuffleArray(choices);

    return {

        question: "Which element is a Lanthanide?",
        answer: correctElement.name,
        choices: choices,
        explanation: correctElement.name + " is a Lanthanide.",
        questionType: 11
    };
}

function generateWhichIsNotLanthanideQuestion() {

    let correctPool = getElementsNotInCategory("Lanthanide");
    let wrongPool = getElementsInCategory("Lanthanide");

    let correctElement = correctPool[Math.floor(Math.random() * correctPool.length)];
    let choices = [correctElement.name];

    while (choices.length < 4) {

        let wrongElement = wrongPool[Math.floor(Math.random() * wrongPool.length)];

        if (!choices.includes(wrongElement.name)) {

            choices.push(wrongElement.name);
        }
    }

    shuffleArray(choices);

    return {

        question: "Which element is not a Lanthanide?",
        answer: correctElement.name,
        choices: choices,
        explanation: correctElement.name + " is not a Lanthanide.",
        questionType: 12
    };
}
function generateWhichIsActinideQuestion() {

    let correctPool = getElementsInCategory("Actinide");
    let wrongPool = getElementsNotInCategory("Actinide");

    let correctElement = correctPool[Math.floor(Math.random() * correctPool.length)];
    let choices = [correctElement.name];

    while (choices.length < 4) {

        let wrongElement = wrongPool[Math.floor(Math.random() * wrongPool.length)];

        if (!choices.includes(wrongElement.name)) {

            choices.push(wrongElement.name);
        }
    }

    shuffleArray(choices);

    return {

        question: "Which element is an Actinide?",
        answer: correctElement.name,
        choices: choices,
        explanation: correctElement.name + " is an Actinide.",
        questionType: 13
    };
}

function generateWhichIsNotActinideQuestion() {

    let correctPool = getElementsNotInCategory("Actinide");
    let wrongPool = getElementsInCategory("Actinide");

    let correctElement = correctPool[Math.floor(Math.random() * correctPool.length)];
    let choices = [correctElement.name];

    while (choices.length < 4) {

        let wrongElement = wrongPool[Math.floor(Math.random() * wrongPool.length)];

        if (!choices.includes(wrongElement.name)) {

            choices.push(wrongElement.name);
        }
    }

    shuffleArray(choices);

    return {

        question: "Which element is not an Actinide?",
        answer: correctElement.name,
        choices: choices,
        explanation: correctElement.name + " is not an Actinide.",
        questionType: 14
    };
}
function generateWhichIsPostTransitionMetalQuestion() {

    let correctPool = getElementsInCategory("Post-Transition Metal");
    let wrongPool = getElementsNotInCategory("Post-Transition Metal");

    let correctElement = correctPool[Math.floor(Math.random() * correctPool.length)];
    let choices = [correctElement.name];

    while (choices.length < 4) {

        let wrongElement = wrongPool[Math.floor(Math.random() * wrongPool.length)];

        if (!choices.includes(wrongElement.name)) {

            choices.push(wrongElement.name);
        }
    }

    shuffleArray(choices);

    return {

        question: "Which element is a Post-Transition Metal?",
        answer: correctElement.name,
        choices: choices,
        explanation: correctElement.name + " is a Post-Transition Metal.",
        questionType: 15
    };
}

function generateWhichIsNotPostTransitionMetalQuestion() {

    let correctPool = getElementsNotInCategory("Post-Transition Metal");
    let wrongPool = getElementsInCategory("Post-Transition Metal");

    let correctElement = correctPool[Math.floor(Math.random() * correctPool.length)];
    let choices = [correctElement.name];

    while (choices.length < 4) {

        let wrongElement = wrongPool[Math.floor(Math.random() * wrongPool.length)];

        if (!choices.includes(wrongElement.name)) {

            choices.push(wrongElement.name);
        }
    }

    shuffleArray(choices);

    return {

        question: "Which element is not a Post-Transition Metal?",
        answer: correctElement.name,
        choices: choices,
        explanation: correctElement.name + " is not a Post-Transition Metal.",
        questionType: 16
    };
}

function generateWhichIsMetalloidQuestion() {

    let correctPool = getElementsInCategory("Metalloid");
    let wrongPool = getElementsNotInCategory("Metalloid");

    let correctElement = correctPool[Math.floor(Math.random() * correctPool.length)];
    let choices = [correctElement.name];

    while (choices.length < 4) {

        let wrongElement = wrongPool[Math.floor(Math.random() * wrongPool.length)];

        if (!choices.includes(wrongElement.name)) {

            choices.push(wrongElement.name);
        }
    }

    shuffleArray(choices);

    return {

        question: "Which element is a Metalloid?",
        answer: correctElement.name,
        choices: choices,
        explanation: correctElement.name + " is a Metalloid.",
        questionType: 17
    };
}

function generateWhichIsNotMetalloidQuestion() {

    let correctPool = getElementsNotInCategory("Metalloid");
    let wrongPool = getElementsInCategory("Metalloid");

    let correctElement = correctPool[Math.floor(Math.random() * correctPool.length)];
    let choices = [correctElement.name];

    while (choices.length < 4) {

        let wrongElement = wrongPool[Math.floor(Math.random() * wrongPool.length)];

        if (!choices.includes(wrongElement.name)) {

            choices.push(wrongElement.name);
        }
    }

    shuffleArray(choices);

    return {

        question: "Which element is not a Metalloid?",
        answer: correctElement.name,
        choices: choices,
        explanation: correctElement.name + " is not a Metalloid.",
        questionType: 18
    };
}
function generateWhichIsNonmetalQuestion() {

    let correctPool = getElementsInCategory("Nonmetal");
    let wrongPool = getElementsNotInCategory("Nonmetal");

    let correctElement = correctPool[Math.floor(Math.random() * correctPool.length)];
    let choices = [correctElement.name];

    while (choices.length < 4) {

        let wrongElement = wrongPool[Math.floor(Math.random() * wrongPool.length)];

        if (!choices.includes(wrongElement.name)) {

            choices.push(wrongElement.name);
        }
    }

    shuffleArray(choices);

    return {

        question: "Which element is a Nonmetal?",
        answer: correctElement.name,
        choices: choices,
        explanation: correctElement.name + " is a Nonmetal.",
        questionType: 19
    };
}

function generateWhichIsNotNonmetalQuestion() {

    let correctPool = getElementsNotInCategory("Nonmetal");
    let wrongPool = getElementsInCategory("Nonmetal");

    let correctElement = correctPool[Math.floor(Math.random() * correctPool.length)];
    let choices = [correctElement.name];

    while (choices.length < 4) {

        let wrongElement = wrongPool[Math.floor(Math.random() * wrongPool.length)];

        if (!choices.includes(wrongElement.name)) {

            choices.push(wrongElement.name);
        }
    }

    shuffleArray(choices);

    return {

        question: "Which element is not a Nonmetal?",
        answer: correctElement.name,
        choices: choices,
        explanation: correctElement.name + " is not a Nonmetal.",
        questionType: 20
    };
}
function generateWhichIsHalogenQuestion() {

    let correctPool = getElementsInCategory("Halogen");
    let wrongPool = getElementsNotInCategory("Halogen");

    let correctElement = correctPool[Math.floor(Math.random() * correctPool.length)];
    let choices = [correctElement.name];

    while (choices.length < 4) {

        let wrongElement = wrongPool[Math.floor(Math.random() * wrongPool.length)];

        if (!choices.includes(wrongElement.name)) {

            choices.push(wrongElement.name);
        }
    }

    shuffleArray(choices);

    return {

        question: "Which element is a Halogen?",
        answer: correctElement.name,
        choices: choices,
        explanation: correctElement.name + " is a Halogen.",
        questionType: 21
    };
}

function generateWhichIsNotHalogenQuestion() {

    let correctPool = getElementsNotInCategory("Halogen");
    let wrongPool = getElementsInCategory("Halogen");

    let correctElement = correctPool[Math.floor(Math.random() * correctPool.length)];
    let choices = [correctElement.name];

    while (choices.length < 4) {

        let wrongElement = wrongPool[Math.floor(Math.random() * wrongPool.length)];

        if (!choices.includes(wrongElement.name)) {

            choices.push(wrongElement.name);
        }
    }

    shuffleArray(choices);

    return {

        question: "Which element is not a Halogen?",
        answer: correctElement.name,
        choices: choices,
        explanation: correctElement.name + " is not a Halogen.",
        questionType: 22
    };
}

function generateWhichIsNobleGasQuestion() {

    let correctPool = getElementsInCategory("Noble Gas");
    let wrongPool = getElementsNotInCategory("Noble Gas");

    let correctElement = correctPool[Math.floor(Math.random() * correctPool.length)];
    let choices = [correctElement.name];

    while (choices.length < 4) {

        let wrongElement = wrongPool[Math.floor(Math.random() * wrongPool.length)];

        if (!choices.includes(wrongElement.name)) {

            choices.push(wrongElement.name);
        }
    }

    shuffleArray(choices);

    return {

        question: "Which element is a Noble Gas?",
        answer: correctElement.name,
        choices: choices,
        explanation: correctElement.name + " is a Noble Gas.",
        questionType: 23
    };
}

function generateWhichIsNotNobleGasQuestion() {

    let correctPool = getElementsNotInCategory("Noble Gas");
    let wrongPool = getElementsInCategory("Noble Gas");

    let correctElement = correctPool[Math.floor(Math.random() * correctPool.length)];
    let choices = [correctElement.name];

    while (choices.length < 4) {

        let wrongElement = wrongPool[Math.floor(Math.random() * wrongPool.length)];

        if (!choices.includes(wrongElement.name)) {

            choices.push(wrongElement.name);
        }
    }

    shuffleArray(choices);

    return {

        question: "Which element is not a Noble Gas?",
        answer: correctElement.name,
        choices: choices,
        explanation: correctElement.name + " is not a Noble Gas.",
        questionType: 24
    };
}

function generateKnowledgeQuestion() {

    let maxNumber = getDifficultyRange();
    let availableKnowledgeQuestions = knowledgeQuestions.filter(kq => {

        let answerElement = elements.find(e => e.name === kq.answer);

        return answerElement && answerElement.number <= maxNumber;
    });

    if (availableKnowledgeQuestions.length === 0) {

        return generateOriginalQuestion();
    }

    let selected = availableKnowledgeQuestions[Math.floor(Math.random() * availableKnowledgeQuestions.length)];
    let correctElement = elements.find(e => e.name === selected.answer);

    let wrongPool = elements.filter(e =>

        e.number <= maxNumber &&
        e.name !== selected.answer
    );

    let choices = [selected.answer];

    while (choices.length < 4) {

        let wrongElement = wrongPool[Math.floor(Math.random() * wrongPool.length)];

        if (!choices.includes(wrongElement.name)) {

            choices.push(wrongElement.name);
        }
    }

    shuffleArray(choices);

    return {

        question: selected.question,
        answer: selected.answer,
        choices: choices,
        explanation: selected.explanation,
        questionType: 25
    };
}


function getRandomElement() {

    let maxNumber = getDifficultyRange();
    let availableElements = elements.filter(e => e.number <= maxNumber);

    return availableElements[Math.floor(Math.random() * availableElements.length)];
}

function shuffleArray(arr) {

    for (let i = arr.length - 1; i > 0; i--) {

        let j = Math.floor(Math.random() * (i + 1));
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

function getWrongAnswers(correctElement, questionType, correctAnswer) {

    let maxNumber = getDifficultyRange();
    let pool = elements.filter(e => e.number <= maxNumber && e.number !== correctElement.number);
    let wrongAnswers = [];

    while (wrongAnswers.length < 3) {

        let randomElement = pool[Math.floor(Math.random() * pool.length)];
        let choice = "";

        if (questionType === 0) {

            choice = randomElement.symbol;
        }

        else if (questionType === 1) {

            choice = randomElement.name;
        }

        else if (questionType === 2) {

            choice = randomElement.group.toString();
        }

        else if (questionType === 3) {

            choice = randomElement.period.toString();
        }

        else if (questionType === 4) {

            choice = randomElement.category;
        }

        if (!wrongAnswers.includes(choice) && choice !== correctAnswer) {

            wrongAnswers.push(choice);
        }
    }

    return wrongAnswers;
}

function getTypeName(questionType) {

    if (questionType === 0) return "symbol";
    if (questionType === 1) return "name";
    if (questionType === 2) return "group";
    if (questionType === 3) return "period";
    if (questionType === 4) return "category";

    if (questionType === 5 || questionType === 6) return "alkali metal";
    if (questionType === 7 || questionType === 8) return "alkaline earth metal";
    if (questionType === 9 || questionType === 10) return "transition metal";
    if (questionType === 11 || questionType === 12) return "lanthanide";
    if (questionType === 13 || questionType === 14) return "actinide";
    if (questionType === 15 || questionType === 16) return "post-transition metal";
    if (questionType === 17 || questionType === 18) return "metalloid";
    if (questionType === 19 || questionType === 20) return "nonmetal";
    if (questionType === 21 || questionType === 22) return "halogen";
    if (questionType === 23 || questionType === 24) return "noble gas";
    if (questionType === 25) return "knowledge";

    return "question";
}

function generateQuestion(forcedType = null) {

    if (forcedType !== null) {

        if (forcedType === 0 || forcedType === 1 || forcedType === 2 || forcedType === 3 || forcedType === 4) {

            return generateOriginalQuestion(forcedType);
        }
        else if (forcedType === 5) return generateWhichIsAlkaliMetalQuestion();
        else if (forcedType === 6) return generateWhichIsNotAlkaliMetalQuestion();
        else if (forcedType === 7) return generateWhichIsAlkalineEarthMetalQuestion();
        else if (forcedType === 8) return generateWhichIsNotAlkalineEarthMetalQuestion();
        else if (forcedType === 9) return generateWhichIsTransitionMetalQuestion();
        else if (forcedType === 10) return generateWhichIsNotTransitionMetalQuestion();
        else if (forcedType === 11) return generateWhichIsLanthanideQuestion();
        else if (forcedType === 12) return generateWhichIsNotLanthanideQuestion();
        else if (forcedType === 13) return generateWhichIsActinideQuestion();
        else if (forcedType === 14) return generateWhichIsNotActinideQuestion();
        else if (forcedType === 15) return generateWhichIsPostTransitionMetalQuestion();
        else if (forcedType === 16) return generateWhichIsNotPostTransitionMetalQuestion();
        else if (forcedType === 17) return generateWhichIsMetalloidQuestion();
        else if (forcedType === 18) return generateWhichIsNotMetalloidQuestion();
        else if (forcedType === 19) return generateWhichIsNonmetalQuestion();
        else if (forcedType === 20) return generateWhichIsNotNonmetalQuestion();
        else if (forcedType === 21) return generateWhichIsHalogenQuestion();
        else if (forcedType === 22) return generateWhichIsNotHalogenQuestion();
        else if (forcedType === 23) return generateWhichIsNobleGasQuestion();
        else if (forcedType === 24) return generateWhichIsNotNobleGasQuestion();
        else if (forcedType === 25) return generateKnowledgeQuestion();
    }

    let questionPool = [0, 1, 2, 3, 4];

    if (categoryQuestionsUnlocked()) {

        questionPool.push(5);
        questionPool.push(6);
        questionPool.push(7);
        questionPool.push(8);
        questionPool.push(9);
        questionPool.push(10);
        questionPool.push(11);
        questionPool.push(12);
        questionPool.push(13);
        questionPool.push(14);
        questionPool.push(15);
        questionPool.push(16);
        questionPool.push(17);
        questionPool.push(18);
        questionPool.push(19);
        questionPool.push(20);
        questionPool.push(21);
        questionPool.push(22);
        questionPool.push(23);
        questionPool.push(24);
    }

    if (knowledgeQuestionsUnlocked()) {

        questionPool.push(25);
    }

    let chosenType = questionPool[Math.floor(Math.random() * questionPool.length)];

    if (chosenType === 0 || chosenType === 1 || chosenType === 2 || chosenType === 3 || chosenType === 4) {

        return generateOriginalQuestion(chosenType);
    }

    else if (chosenType === 5) return generateWhichIsAlkaliMetalQuestion();
    else if (chosenType === 6) return generateWhichIsNotAlkaliMetalQuestion();
    else if (chosenType === 7) return generateWhichIsAlkalineEarthMetalQuestion();
    else if (chosenType === 8) return generateWhichIsNotAlkalineEarthMetalQuestion();
    else if (chosenType === 9) return generateWhichIsTransitionMetalQuestion();
    else if (chosenType === 10) return generateWhichIsNotTransitionMetalQuestion();
    else if (chosenType === 11) return generateWhichIsLanthanideQuestion();
    else if (chosenType === 12) return generateWhichIsNotLanthanideQuestion();
    else if (chosenType === 13) return generateWhichIsActinideQuestion();
    else if (chosenType === 14) return generateWhichIsNotActinideQuestion();
    else if (chosenType === 15) return generateWhichIsPostTransitionMetalQuestion();
    else if (chosenType === 16) return generateWhichIsNotPostTransitionMetalQuestion();
    else if (chosenType === 17) return generateWhichIsMetalloidQuestion();
    else if (chosenType === 18) return generateWhichIsNotMetalloidQuestion();
    else if (chosenType === 19) return generateWhichIsNonmetalQuestion();
    else if (chosenType === 20) return generateWhichIsNotNonmetalQuestion();
    else if (chosenType === 21) return generateWhichIsHalogenQuestion();
    else if (chosenType === 22) return generateWhichIsNotHalogenQuestion();
    else if (chosenType === 23) return generateWhichIsNobleGasQuestion();
    else if (chosenType === 24) return generateWhichIsNotNobleGasQuestion();
    else if (chosenType === 25) return generateKnowledgeQuestion();

    return generateOriginalQuestion(0);
}

function generateOriginalQuestion(forcedType = null) {

    let e = getRandomElement();
    let questionType;

    if (forcedType === null) {

        questionType = Math.floor(Math.random() * 5);
    }

    else {

        questionType = forcedType;
    }

    let question = "";
    let answer = "";
    let explanation = "";

    if (questionType === 0) {

        question = `What is the symbol for ${e.name}?`;
        answer = e.symbol;
        explanation = `${e.name} has the chemical symbol ${e.symbol}. Symbols are the abbreviations used on the periodic table.`;
    }

    else if (questionType === 1) {

        question = `What is the name of the element with symbol ${e.symbol}?`;
        answer = e.name;
        explanation = `${e.symbol} stands for ${e.name}. Each element has its own unique symbol.`;
    }

    else if (questionType === 2) {

        question = `What group is ${e.name} in?`;
        answer = e.group.toString();
        explanation = `${e.name} is in group ${e.group}. Groups are the vertical columns on the periodic table.`;
    }

    else if (questionType === 3) {

        question = `What period is ${e.name} in?`;
        answer = e.period.toString();
        explanation = `${e.name} is in period ${e.period}. Periods are the horizontal rows on the periodic table.`;
    }

    else {

        question = `What category does ${e.name} belong to?`;
        answer = e.category;
        explanation = `${e.name} belongs to the category ${e.category}. Categories describe general chemical behavior and placement.`;
    }

    let choices = [answer, ...getWrongAnswers(e, questionType, answer)];
    shuffleArray(choices);

    return {

        question: question,
        answer: answer,
        choices: choices,
        explanation: explanation,
        questionType: questionType
    };
}

function generatePracticeQuestion(typeName) {

    if (typeName === "symbol") {

        return generateQuestion(0);
    }

    else if (typeName === "name") {

        return generateQuestion(1);
    }

    else if (typeName === "group") {

        return generateQuestion(2);
    }

    else if (typeName === "period") {

        return generateQuestion(3);
    }

    else if (typeName === "category") {

        return generateQuestion(4);
    }

    else if (typeName === "alkali metal") {

        let types = [5, 6];
        let chosenType = types[Math.floor(Math.random() * types.length)];
        return generateQuestion(chosenType);
    }

    else if (typeName === "alkaline earth metal") {

        let types = [7, 8];
        let chosenType = types[Math.floor(Math.random() * types.length)];
        return generateQuestion(chosenType);
    }

    else if (typeName === "transition metal") {

        let types = [9, 10];
        let chosenType = types[Math.floor(Math.random() * types.length)];
        return generateQuestion(chosenType);
    }

    else if (typeName === "lanthanide") {

        let types = [11, 12];
        let chosenType = types[Math.floor(Math.random() * types.length)];
        return generateQuestion(chosenType);
    }

    else if (typeName === "actinide") {

        let types = [13, 14];
        let chosenType = types[Math.floor(Math.random() * types.length)];
        return generateQuestion(chosenType);
    }

    else if (typeName === "post-transition metal") {

        let types = [15, 16];
        let chosenType = types[Math.floor(Math.random() * types.length)];
        return generateQuestion(chosenType);
    }

    else if (typeName === "metalloid") {

        let types = [17, 18];
        let chosenType = types[Math.floor(Math.random() * types.length)];
        return generateQuestion(chosenType);
    }

    else if (typeName === "nonmetal") {

        let types = [19, 20];
        let chosenType = types[Math.floor(Math.random() * types.length)];
        return generateQuestion(chosenType);
    }

    else if (typeName === "halogen") {

        let types = [21, 22];
        let chosenType = types[Math.floor(Math.random() * types.length)];
        return generateQuestion(chosenType);
    }

    else if (typeName === "noble gas") {

        let types = [23, 24];
        let chosenType = types[Math.floor(Math.random() * types.length)];
        return generateQuestion(chosenType);
    }

    else if (typeName === "knowledge") {

        return generateQuestion(25);
    }

    else {

        return generateQuestion(0);
    }
}

function updateQuizButtons() {

    const startBtn = document.getElementById("start-btn");
    const quitBtn = document.getElementById("quit-btn");
    const quitPracticeBtn = document.getElementById("quit-practice-btn");
    const lessonBtn = document.getElementById("lesson-btn");
    const nextBtn = document.getElementById("next-btn");
    const searchSection = document.getElementById("search-section");
    const elementSearch = document.getElementById("element-search");
    const searchResults = document.getElementById("search-results");

    if (quizActive) {

        searchSection.classList.add("search-disabled");
        elementSearch.disabled = true;
        searchResults.classList.add("hidden");
    }

    else {
        searchSection.classList.remove("search-disabled");
        elementSearch.disabled = false;
    }

    if (quizActive) {

        nextBtn.style.display = "inline-block";
    }

    else {

        nextBtn.style.display = "none";
    }

    if (quizActive) {
        lessonBtn.disabled = true;
        lessonBtn.style.opacity = "0.5";
        lessonBtn.style.cursor = "not-allowed";
    }

    else {

        lessonBtn.disabled = false;
        lessonBtn.style.opacity = "1";
        lessonBtn.style.cursor = "pointer";
    }

    if (practiceMode) {
        startBtn.classList.add("hidden");
        quitBtn.classList.add("hidden");
        quitPracticeBtn.classList.remove("hidden");
    }

    else if (quizActive) {
        startBtn.classList.add("hidden");
        quitBtn.classList.remove("hidden");
        quitPracticeBtn.classList.add("hidden");
    }

    else {
        startBtn.classList.remove("hidden");
        quitBtn.classList.add("hidden");
        quitPracticeBtn.classList.add("hidden");
    }
}

function showQuestion() {

    if (!practiceMode && questionNumber >= maxQuestions) {

        endQuiz(false);

        return;
    }

    if (practiceMode) {
        currentQuestion = generatePracticeQuestion(practiceType);
    }

    else {
        currentQuestion = generateQuestion();
    }

    const title = document.getElementById("quiz-title");

    if (practiceMode) {

        title.textContent = "Practice Mode";
    }

    else {

        title.textContent = "Quiz Mode";
    }

    answered = false;

    if (practiceMode) {

        document.getElementById("question-text").textContent =
            `Practice Mode (${practiceType}): ${currentQuestion.question}`;

        document.getElementById("score-display").textContent = "";
    }

    else {

        document.getElementById("question-text").textContent =
            `Question ${questionNumber + 1} of ${maxQuestions}: ${currentQuestion.question}`;
    }

    document.getElementById("feedback").textContent = "";

    for (let i = 0; i < 4; i++) {
        let btn = document.getElementById("btn" + i);
        btn.textContent = currentQuestion.choices[i];
        btn.disabled = false;
        btn.classList.remove("correct-choice");
        btn.classList.remove("wrong-choice");
    }
}

function selectAnswer(choice, buttonClicked) {

    if (!quizActive || answered) {

        return;
    }

    answered = true;

    // Only count questions in quiz mode
    if (!practiceMode) {
        totalQuestions++;
        questionNumber++;
    }

    let isCorrect = choice.toLowerCase() === currentQuestion.answer.toLowerCase();

    if (isCorrect) {

        if (!practiceMode) {
            score++;
        }

        buttonClicked.classList.add("correct-choice");
        document.getElementById("feedback").textContent =
            `Correct! ${currentQuestion.explanation}`;
    }

    else {

        buttonClicked.classList.add("wrong-choice");

        for (let i = 0; i < 4; i++) {

            let btn = document.getElementById("btn" + i);

            if (btn.textContent.toLowerCase() === currentQuestion.answer.toLowerCase()) {
                btn.classList.add("correct-choice");
            }
        }

        document.getElementById("feedback").textContent =
            `Incorrect. You chose "${choice}", but the correct answer is "${currentQuestion.answer}". ${currentQuestion.explanation}`;
    }

    // Only track history in quiz mode
    if (!practiceMode) {

        quizHistory.push({
            questionNumber: questionNumber,
            question: currentQuestion.question,
            choices: [...currentQuestion.choices],
            selectedAnswer: choice,
            correctAnswer: currentQuestion.answer,
            explanation: currentQuestion.explanation,
            isCorrect: isCorrect,
            questionType: currentQuestion.questionType
        });

        document.getElementById("score-display").textContent =
            `Score: ${score} / ${totalQuestions}`;
    }

    for (let i = 0; i < 4; i++) {

        document.getElementById("btn" + i).disabled = true;
    }

    if (!practiceMode && questionNumber >= maxQuestions) {

        endQuiz(false);
    }
}

function quitPractice() {

    practiceMode = false;
    practiceType = null;
    quizActive = false;

    document.getElementById("feedback").textContent = "";
    document.getElementById("question-text").textContent = "Practice ended. Good work!";
    document.getElementById("score-display").textContent = "";

    updateQuizButtons();

    document.getElementById("report-section").classList.remove("hidden");
    document.getElementById("toggle-report-btn").classList.remove("hidden");
    document.getElementById("toggle-report-btn").textContent = "Minimize Report";
    reportMinimized = false;
    document.getElementById("report-content").classList.remove("hidden");
}

document.getElementById("quit-practice-btn").onclick = () => {

    quitPractice();
};

function startQuiz() {

    score = 0;
    totalQuestions = 0;
    questionNumber = 0;
    quizHistory = [];
    quizActive = true;
    answered = false;
    practiceMode = false;
    practiceType = null;

    document.getElementById("score-display").textContent = "Score: 0 / 0";
    document.getElementById("feedback").textContent = "";
    document.getElementById("info-card").classList.add("hidden");
    document.getElementById("report-section").classList.add("hidden");
    document.getElementById("review-list").innerHTML = "";
    document.getElementById("report-summary").textContent = "";
    document.getElementById("element-search").value = "";
    document.getElementById("search-results").classList.add("hidden");

    updateQuizButtons();
    showQuestion();

    toggleReportBtn.classList.add("hidden");
    reportContent.classList.remove("hidden");
    reportMinimized = false;
}

function endQuiz(wasQuit) {

    quizActive = false;
    practiceMode = false;
    practiceType = null;

    for (let i = 0; i < 4; i++) {

        document.getElementById("btn" + i).disabled = true;
    }

    document.getElementById("question-text").textContent = wasQuit
        ? "Quiz ended early."
        : "Quiz finished.";

    if (wasQuit) {
        document.getElementById("feedback").textContent = "You quit the quiz. Review your answers below.";
    }

    else {
        document.getElementById("feedback").textContent = "Nice work. Review your answers below.";
    }

    updateQuizButtons();
    showReport(wasQuit);

    toggleReportBtn.classList.remove("hidden");
    toggleReportBtn.textContent = "Minimize Report";
    reportMinimized = false;
    reportContent.classList.remove("hidden");
}

function showReport(wasQuit) {

    let reportSection = document.getElementById("report-section");
    let reportSummary = document.getElementById("report-summary");
    let reviewList = document.getElementById("review-list");

    reportSection.classList.remove("hidden");
    reviewList.innerHTML = "";

    let percent = totalQuestions === 0 ? 0 : Math.round((score / totalQuestions) * 100);

    if (wasQuit) {

        reportSummary.textContent =
            `You answered ${totalQuestions} question(s) before quitting. Final score: ${score} / ${totalQuestions} (${percent}%).`;
    }

    else {

        reportSummary.textContent =
            `You completed all ${maxQuestions} questions. Final score: ${score} / ${totalQuestions} (${percent}%).`;
    }

    quizHistory.forEach(item => {

        let div = document.createElement("div");
        div.classList.add("review-item");

        if (item.isCorrect) {

            div.classList.add("correct");
        }

        else {

            div.classList.add("wrong");
        }

        div.innerHTML = `
            <div class="review-question">Question ${item.questionNumber}: ${item.question}</div>
            <div class="review-answer">Your answer: ${item.selectedAnswer}</div>
            <div class="review-answer">Correct answer: ${item.correctAnswer}</div>
            <div class="review-answer">Result: ${item.isCorrect ? "Correct" : "Incorrect"}</div>
            <div class="review-answer">Explanation: ${item.explanation}</div>
        `;

        if (!item.isCorrect) {

            let practiceBtn = document.createElement("button");

            practiceBtn.textContent = `Practice more ${getTypeName(item.questionType)} questions`;
            practiceBtn.classList.add("practice-btn");

            practiceBtn.onclick = () => {
                startPractice(item.questionType);
            };

            div.appendChild(practiceBtn);
        }

        reviewList.appendChild(div);
    });
}

function startPractice(type) {

    practiceMode = true;
    practiceType = getTypeName(type);
    quizActive = true;
    answered = false;

    document.getElementById("report-section").classList.add("hidden");
    document.getElementById("feedback").textContent =
        `Practice mode: working on ${practiceType} questions.`;
    updateQuizButtons();
    showQuestion();
    toggleReportBtn.classList.add("hidden");
    reportContent.classList.remove("hidden");
    reportMinimized = false;
}

document.getElementById("btn0").onclick = function () {

    selectAnswer(this.textContent, this);
};

document.getElementById("btn1").onclick = function () {

    selectAnswer(this.textContent, this);
};

document.getElementById("btn2").onclick = function () {

    selectAnswer(this.textContent, this);
};

document.getElementById("btn3").onclick = function () {

    selectAnswer(this.textContent, this);
};

document.getElementById("start-btn").onclick = () => {

    startQuiz();
};

document.getElementById("element-search").value = "";
document.getElementById("search-results").classList.add("hidden");

document.getElementById("next-btn").onclick = () => {

    if (!quizActive) return;

    if (!answered) return;

    showQuestion();
};

document.getElementById("quit-btn").onclick = () => {

    if (!quizActive) return;

    endQuiz(true);
};

updateQuizButtons();

const music = document.getElementById("bg-music");
const muteBtn = document.getElementById("mute-btn");

music.volume = 0.25;

muteBtn.onclick = () => {

    if (music.muted) {

        music.muted = false;
        muteBtn.textContent = "Mute";
        music.play();
    }

    else {

        music.muted = true;
        muteBtn.textContent = "Unmute";
    }
};

// autoplay fallback (in case browser blocks it)
document.addEventListener("click", () => {

    if (music.paused && !music.muted) {

        music.play().catch(() => { });
    }
}, { once: true });

const lessonBtn = document.getElementById("lesson-btn");
const lessonCard = document.getElementById("lesson-card");
const closeLessonBtn = document.getElementById("close-lesson-btn");


const overlay = document.getElementById("lesson-overlay");

lessonBtn.addEventListener("click", () => {

    if (quizActive) return;

    lessonCard.classList.remove("hidden");
    overlay.classList.remove("hidden");
});

closeLessonBtn.addEventListener("click", () => {

    lessonCard.classList.add("hidden");
    overlay.classList.add("hidden");
});

let reportMinimized = false;

const toggleReportBtn = document.getElementById("toggle-report-btn");
const reportContent = document.getElementById("report-content");

toggleReportBtn.addEventListener("click", () => {

    reportMinimized = !reportMinimized;

    if (reportMinimized) {

        reportContent.classList.add("hidden");
        toggleReportBtn.textContent = "Expand Report";
    }

    else {

        reportContent.classList.remove("hidden");
        toggleReportBtn.textContent = "Minimize Report";
    }
});


const elementSearch = document.getElementById("element-search");
const searchResults = document.getElementById("search-results");
const searchSection = document.getElementById("search-section");

elementSearch.addEventListener("input", () => {

    if (quizActive) return;

    const query = elementSearch.value.trim().toLowerCase();

    searchResults.innerHTML = "";

    if (query === "") {

        searchResults.classList.add("hidden");
        return;
    }

    let matches = elements.filter(e =>

        e.name.toLowerCase().includes(query)
    );

    if (matches.length === 0) {

        searchResults.classList.add("hidden");
        return;
    }

    matches.forEach(e => {

        const item = document.createElement("div");

        item.classList.add("search-result-item");
        item.textContent = `${e.name} (${e.symbol})`;

        item.addEventListener("click", (event) => {

            event.stopPropagation();
            elementSearch.value = e.name;
            searchResults.classList.add("hidden");
            const div = getElementDiv(e.symbol);
            showElementCard(e, div);
        });

        searchResults.appendChild(item);
    });

    searchResults.classList.remove("hidden");
});

document.addEventListener("click", () => {

    if (!infoCard.classList.contains("hidden")) {
        infoCard.classList.add("hidden");
    }
});

function getElementDiv(symbol) {

    return [...document.querySelectorAll(".element")]

        .find(el => el.querySelector(".symbol").textContent === symbol);
}

const particleBg = document.getElementById("particle-bg");

function spawnBurst() {
    const colors = [

        "#ff4d4d", // red
        "#4da6ff", // blue
        "#4dff88", // green
        "#ffd24d", // yellow
        "#ff944d"  // orange
    ];

    const burstCount = Math.floor(Math.random() * 6) + 6;
    const centerX = Math.random() * window.innerWidth;
    const centerY = Math.random() * window.innerHeight;

    for (let i = 0; i < burstCount; i++) {

        const p = document.createElement("div");
        p.classList.add("particle-burst");

        const color = colors[Math.floor(Math.random() * colors.length)];
        const burstCount = Math.floor(Math.random() * 4) + 4;

        p.style.background = color;
        p.style.boxShadow = `0 0 10px ${color}`;

        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 80 + 20;

        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;

        p.style.left = centerX + "px";
        p.style.top = centerY + "px";

        p.animate(
            [
                { transform: "translate(0px, 0px) scale(0.4)", opacity: 1 },
                { transform: `translate(${dx}px, ${dy}px) scale(1.4)`, opacity: 0 }
            ],
            {
                duration: 1200,
                easing: "ease-out",
                fill: "forwards"
            }
        );

        particleBg.appendChild(p);

        setTimeout(() => {

            p.remove();
        }, 1200);
    }
}

setInterval(() => {

    if (particlesEnabled) {

        spawnBurst();
    }
}, 1800);

const particleToggleBtn = document.getElementById("particle-toggle-btn");

particleToggleBtn.addEventListener("click", () => {

    particlesEnabled = !particlesEnabled;

    particleToggleBtn.textContent = particlesEnabled
        ? "Particles: ON"
        : "Particles: OFF";
});

const themeToggleBtn = document.getElementById("theme-toggle-btn");

function applyTheme(theme) {

    if (theme === "light") {

        document.body.classList.add("light-mode");
        themeToggleBtn.textContent = "Dark Mode";
    }

    else {

        document.body.classList.remove("light-mode");
        themeToggleBtn.textContent = "Light Mode";
    }
}

themeToggleBtn.addEventListener("click", () => {

    const isLight = document.body.classList.contains("light-mode");
    const newTheme = isLight ? "dark" : "light";

    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
});

const savedTheme = localStorage.getItem("theme") || "dark";
applyTheme(savedTheme);

let currentElement = null;
let favorites = JSON.parse(localStorage.getItem("favoriteElements")) || [];

const favoriteBtn = document.getElementById("favorite-btn");
const favoritesBtn = document.getElementById("favorites-btn");
const favoritesPanel = document.getElementById("favorites-panel");
const favoritesList = document.getElementById("favorites-list");
const closeFavoritesBtn = document.getElementById("close-favorites-btn");
const confirmModal = document.getElementById("confirm-modal");
const confirmMessage = document.getElementById("confirm-message");
const confirmYesBtn = document.getElementById("confirm-yes-btn");
const confirmNoBtn = document.getElementById("confirm-no-btn");

function saveFavorites() {

    localStorage.setItem("favoriteElements", JSON.stringify(favorites));
}

function isFavorite(symbol) {

    return favorites.includes(symbol);
}

function updateFavoriteButton() {

    if (!currentElement) return;

    if (isFavorite(currentElement.symbol)) {

        favoriteBtn.textContent = "★";
    }

    else {

        favoriteBtn.textContent = "☆";
    }
}

favoriteBtn.addEventListener("click", (event) => {

    event.stopPropagation();

    if (!currentElement) return;

    const symbol = currentElement.symbol;
    const index = favorites.indexOf(symbol);

    if (index === -1) {

        favorites.push(symbol);
    }

    else {

        favorites.splice(index, 1);
    }

    saveFavorites();
    updateFavoriteButton();
    renderFavorites();
});

function showConfirm(message, onYes) {

    confirmMessage.textContent = message;
    confirmModal.classList.remove("hidden");

    function handleYes() {

        confirmModal.classList.add("hidden");
        confirmYesBtn.removeEventListener("click", handleYes);
        confirmNoBtn.removeEventListener("click", handleNo);
        onYes();
    }

    function handleNo() {

        confirmModal.classList.add("hidden");
        confirmYesBtn.removeEventListener("click", handleYes);
        confirmNoBtn.removeEventListener("click", handleNo);
    }

    confirmYesBtn.addEventListener("click", handleYes);
    confirmNoBtn.addEventListener("click", handleNo);
}

function renderFavorites() {

    favoritesList.innerHTML = "";

    if (favorites.length === 0) {

        favoritesList.innerHTML = "<p>No favorite elements yet.</p>";

        return;
    }

    favorites.forEach(symbol => {

        const element = elements.find(e => e.symbol === symbol);

        if (!element) return;

        const card = document.createElement("div");
        card.classList.add("favorite-card");

        card.innerHTML = `

        <button class="favorite-remove-btn" data-symbol="${element.symbol}">★</button>
            <h3>${element.name} (${element.symbol})</h3>
            <p>Symbol: ${element.symbol}</p>
            <p>Atomic Number: ${element.number}</p>
            <p>Atomic Mass: ${element.mass}</p>
            <p>Group: ${element.group}</p>
            <p>Period: ${element.period}</p>
            <p>Category: ${element.category}</p>
            <p>Danger: ${element.danger}</p>
            <p>State: ${element.state}</p>
        `;

        const removeBtn = card.querySelector(".favorite-remove-btn");

        removeBtn.addEventListener("click", (event) => {

            event.stopPropagation();

            showConfirm(
                `Are you sure you want to remove ${element.name} from favorites?`,

                function () {
                    const index = favorites.indexOf(element.symbol);

                    if (index !== -1) {

                        favorites.splice(index, 1);
                    }

                    favorites.sort((a, b) => {

                        const elA = elements.find(e => e.symbol === a);
                        const elB = elements.find(e => e.symbol === b);

                        return elA.number - elB.number;
                    });

                    saveFavorites();
                    renderFavorites();

                    if (currentElement && currentElement.symbol === element.symbol) {

                        updateFavoriteButton();
                    }
                }
            );
        });

        card.addEventListener("click", (event) => {

            event.stopPropagation();

            favoritesPanel.classList.add("hidden");

            const div = getElementDiv(element.symbol);
            showElementCard(element, div);
        });

        favoritesList.appendChild(card);
    });
}

favoritesBtn.addEventListener("click", (event) => {

    event.stopPropagation();
    renderFavorites();
    favoritesPanel.classList.remove("hidden");
});

closeFavoritesBtn.addEventListener("click", (event) => {

    event.stopPropagation();
    favoritesPanel.classList.add("hidden");
});

favoritesPanel.addEventListener("click", (event) => {

    event.stopPropagation();
});

confirmModal.addEventListener("click", () => {

    confirmModal.classList.add("hidden");
});

document.querySelector(".confirm-box").addEventListener("click", (event) => {

    event.stopPropagation();
});

document.addEventListener("click", () => {

    if (!infoCard.classList.contains("hidden")) {

        infoCard.classList.add("hidden");
    }

    if (!favoritesPanel.classList.contains("hidden")) {

        favoritesPanel.classList.add("hidden");
    }
});

favorites.sort((a, b) => {

    const elA = elements.find(e => e.symbol === a);
    const elB = elements.find(e => e.symbol === b);

    return elA.number - elB.number;
});

