
const elements = [
    {
        name: "Hydrogen",
        symbol: "H",
        number: 1,
        group: 1,
        period: 1,
        category: "Nonmetal",
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
        group: 18,
        period: 1,
        category: "Noble Gas",
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
        group: 1,
        period: 2,
        category: "Alkali Metal",
        image: "images/lithium.png",
        fact: `Lithium is a very light metal that plays a huge role in modern technology, especially
        in lithium - ion batteries used in phones, laptops, and electric vehicles. It's highly reactive,
        so it's usually found combined with other elements rather than on its own. Its ability to store
        and release energy efficiently makes it one of the most important elements for portable power.
        Lithium is also used in some medications, particularly for mood stabilization.
        Small element, big impact.`
    },
    {
        name: "Beryllium",
        symbol: "Be",
        number: 4,
        group: 2,
        period: 2,
        category: "Alkaline Earth Metal",
        image: "images/beryllium.png",
        fact: `Beryllium is a lightweight but extremely strong metal, which makes it valuable in
        aerospace and high- performance applications. It's used in things like satellites, aircraft parts,
        and precision instruments where both strength and low weight matter. Despite its usefulness,
        beryllium is toxic if inhaled as dust, so it has to be handled carefully. Its stiffness and 
        stability make it ideal for situations where precision is critical. It's not common in everyday life,
        but it shows up in some very important places.`
    },
    {
        name: "Boron",
        symbol: "B",
        number: 5,
        group: 13,
        period: 2,
        category: "Metalloid",
        image: "images/boron.png",
        fact: `Boron is a somewhat overlooked element, you probably don't even know what it does! but it's
        essential in a variety of applications. It's used to make strong, heat- resistant glass, like the 
        kind found in lab equipment and cookware. Boron also appears in detergents and plays a role in
        agriculture, since plants need small amounts of it to grow properly.In materials science, it helps 
        improve strength and durability. Not the most famous element, but definitely one that keeps things 
        working behind the scenes.`
    },
    {
        name: "Carbon",
        symbol: "C",
        number: 6,
        group: 14,
        period: 2,
        category: "Nonmetal",
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
        group: 15,
        period: 2,
        category: "Nonmetal",
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
        group: 16,
        period: 2,
        category: "Nonmetal",
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
        group: 17,
        period: 2,
        category: "Halogen",
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
        group: 18,
        period: 2,
        category: "Noble Gas",
        image: "images/neon.png",
        fact: `Neon is a noble gas that's best known for its use in bright, glowing signs. When 
        electricity passes through neon gas, it emits a distinct reddish - orange light, which made
        it famous in advertising. Like other noble gases, neon is very stable and doesn't react 
        easily with other elements. It's also used in high - voltage indicators and some types of
        lasers. Simple element, very recognizable effect.`
    },
    {
        name: "Sodium",
        symbol: "Na",
        number: 11,
        group: 1,
        period: 3,
        category: "Alkali Metal",
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
        group: 2,
        period: 3,
        category: "Alkaline Earth Metal",
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
        group: 13,
        period: 3,
        category: "Post-Transition Metal",
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
        group: 14,
        period: 3,
        category: "Metalloid",
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
        group: 15,
        period: 3,
        category: "Nonmetal",
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
        group: 16,
        period: 3,
        category: "Nonmetal",
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
        group: 17,
        period: 3,
        category: "Halogen",
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
        group: 18,
        period: 3,
        category: "Noble Gas",
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
        group: 1,
        period: 4,
        category: "Alkali Metal",
        image: "images/potassium.png",
        fact: `Potassium is a very reactive metal that plays a crucial role in muscle function and nerve signaling 
        in the human body.Like sodium, it reacts strongly with water and is never found freely in nature. Potassium
        compounds are commonly used in fertilizers because plants need it to grow properly. It's also an essential
        dietary mineral for humans. Reactive on its own, but vital in the right form.`
    },
    {
        name: "Calcium",
        symbol: "Ca",
        number: 20,
        group: 2,
        period: 4,
        category: "Alkaline Earth Metal",
        image: "images/calcium.png",
        fact: `Calcium is a metal that's essential for bones and teeth, making it one of the most important 
        elements in the human body. It's also involved in muscle contraction, nerve signaling, and blood clotting.
        Calcium is commonly found in minerals like limestone and in foods such as milk and dairy products.
        In industry, it's used in construction materials like cement.It's one of those elements that's both 
        biologically and structurally important.`
    },
    {
        name: "Scandium",
        symbol: "Sc",
        number: 21,
        group: 3,
        period: 4,
        category: "Transition Metal",
        image: "images/scandium.png",
        fact: `Scandium is a relatively rare metal that's often used to strengthen aluminum alloys, especially
        in aerospace and high-performance equipment. Even small amounts of scandium can significantly improve
        strength and durability without adding much weight. Because of its rarity, it's not widely used in everyday
        products, but it shows up in specialized applications like sports equipment and advanced materials. It also
        has uses in certain types of lighting, including high intensity lamps.Not very common, but when it shows up,
        it makes a difference.`
    },
    {
        name: "Titanium",
        symbol: "Ti",
        number: 22,
        group: 4,
        period: 4,
        category: "Transition Metal",
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
        group: 5,
        period: 4,
        category: "Transition Metal",
        image: "images/vanadium.png",
        fact: `Vanadium is a metal primarily used to strengthen steel, making tools, structures, and machinery 
        more durable and resistant to wear. Even in small amounts, it improves toughness and resistance to corrosion.
        It's also used in some advanced battery technologies, particularly vanadium redox batteries for energy storage.
        Vanadium compounds can display a range of colors, which makes them interesting in chemistry as well. It's not
        very well- known, but it quietly improves a lot of materials.`
    },
    {
        name: "Chromium",
        symbol: "Cr",
        number: 24,
        group: 6,
        period: 4,
        category: "Transition Metal",
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
        group: 7,
        period: 4,
        category: "Transition Metal",
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
        group: 8,
        period: 4,
        category: "Transition Metal",
        image: "images/iron.png",
        fact: `Iron is one of the most important elements in both industry and biology. It's the main component 
        of steel, making it essential for buildings, infrastructure, tools, and machines.In the human body, iron
        is part of hemoglobin, the molecule that carries oxygen in the blood.Iron is abundant in the Earth's crust
        and has been used by humans for thousands of years, marking entire historical periods like the Iron Age.
        It's one of those elements that quite literally holds modern civilization together.`
    },
    {
        name: "Cobalt",
        symbol: "Co",
        number: 27,
        group: 9,
        period: 4,
        category: "Transition Metal",
        image: "images/cobalt.png",
        fact: `Cobalt is a metal known for its use in batteries and blue pigments. It plays a key role in lithium ion
        batteries, especially in stabilizing their performance, which makes it important for electronics and electric
        vehicles. Cobalt compounds have been used for centuries to produce a deep blue color in glass and ceramics.
        It's also used in high strength alloys that can withstand extreme temperatures. Even if you don't know about 
        its existence, it tends to show up in some very important places.`
    },
    {
        name: "Nickel",
        symbol: "Ni",
        number: 28,
        group: 10,
        period: 4,
        category: "Transition Metal",
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
        group: 11,
        period: 4,
        category: "Transition Metal",
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
        group: 12,
        period: 4,
        category: "Transition Metal",
        image: "images/zinc.png",
        fact: `Zinc is commonly used to protect steel from rusting: a process known as galvanization. By coating steel 
        with zinc, it prevents corrosion and extends the lifespan of structures and materials.Zinc is also important in
        biology, playing a role in immune function and enzyme activity.It's used in batteries, alloys, and even dietary
        supplements. Probably an element you've heard of, but never known its exact use, but it does a lot of protective 
        work behind the scenes!`
    },
    {
        name: "Gallium",
        symbol: "Ga",
        number: 31,
        group: 13,
        period: 4,
        category: "Post-Transition Metal",
        image: "images/gallium.png",
        fact: `Gallium is a metal with a surprisingly low melting point, it can actually melt in your hand at around 30°C
        (86°F). Despite that, it's not commonly found in pure form and is usually extracted as a byproduct of refining
        other metals. Gallium is important in electronics, especially in semiconductors like gallium arsenide, which are
        used in LEDs, solar panels, and high speed devices.It also expands when it solidifies, which is unusual for metals.
        A solid metal that melts like that tends to leave an impression.`
    },
    {
        name: "Germanium",
        symbol: "Ge",
        number: 32,
        group: 14,
        period: 4,
        category: "Metalloid",
        image: "images/germanium.png",
        fact: `Germanium is a metalloid that played an important role in the early development of semiconductors and 
        electronics. Before silicon became dominant, germanium was used in the first transistors.Today, it's still used
        in fiber optics, infrared optics, and some specialized electronics.It has properties that allow it to control
        electrical conductivity, making it useful for signal transmission.Germanium sits right between metals and nonmetals
        in behavior, which is exactly what makes it useful in technology.`
    },
    {
        name: "Arsenic",
        symbol: "As",
        number: 33,
        group: 15,
        period: 4,
        category: "Metalloid",
        image: "images/arsenic.png",
        fact: `Arsenic is well known for its toxicity, but it also has important uses in electronics and semiconductors.
        It's often combined with gallium to form gallium arsenide, a material used in high- speed electronics and LEDs.
        Arsenic compounds have been used historically in pesticides and even medicines, though many uses are now restricted
        due to safety concerns. In nature, it can be found in minerals and groundwater in certain regions. It's a good example
        of an element that's both dangerous and useful, depending on how it's handled.`
    },
    {
        name: "Selenium",
        symbol: "Se",
        number: 34,
        group: 16,
        period: 4,
        category: "Nonmetal",
        image: "images/selenium.png",
        fact: `Selenium is a nonmetal that's used in electronics, glassmaking, and photocells. It has the interesting 
        property of changing its electrical conductivity when exposed to light, which makes it useful in sensors and
        solar cells. Selenium is also an essential trace element for humans, playing a role in metabolism and antioxidant
        systems. In glass production, it can be used to remove color or create red pigments. Its ability to respond to
        light gives it an unique role in both technology and chemistry.`
    },
    {
        name: "Bromine",
        symbol: "Br",
        number: 35,
        group: 17,
        period: 4,
        category: "Halogen",
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
        group: 18,
        period: 4,
        category: "Noble Gas",
        image: "images/krypton.png",
        fact: `Krypton is a noble gas that's used in specialized lighting and lasers, especially where a bright, stable 
        light is needed. It's chemically inert, meaning it doesn't react much with other elements, which makes it useful
        in controlled environments. Krypton is also used in high- performance light bulbs and photographic flashes. It's
        rare in Earth's atmosphere, making up only a tiny fraction of the air. And no, it doesn't weaken superheroes, at least
        not outside of comics!`
    },
    {
        name: "Rubidium",
        symbol: "Rb",
        number: 37,
        group: 1,
        period: 5,
        category: "Alkali Metal",
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
        group: 2,
        period: 5,
        category: "Alkaline Earth Metal",
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
        group: 3,
        period: 5,
        category: "Transition Metal",
        image: "images/yttrium.png",
        fact: `Yttrium is a metal used in LEDs, superconductors, and advanced materials.It plays a role in producing 
        certain colors in displays, especially in phosphors used for lighting and screens. Yttrium is also used in high
        temperature superconductors, which can conduct electricity with little to no resistance under certain conditions.
        It often appears alongside rare earth elements and is important in modern electronics. It's not widely recognized,
        but it shows up in a lot of advanced technology.`
    },
    {
        name: "Zirconium",
        symbol: "Zr",
        number: 40,
        group: 4,
        period: 5,
        category: "Transition Metal",
        image: "images/zirconium.png",
        fact: `Zirconium is a corrosion resistant metal that's widely used in nuclear reactors and high temperature 
        environments. It doesn't react easily with water or steam at high temperatures, which makes it ideal for reactor
        components. Zirconium compounds are also used in ceramics and heat - resistant materials. In jewelry, zircon
        (a mineral containing zirconium) is sometimes used as a diamond substitute. It's built for environments where
        durability really matters.`
    },
    {
        name: "Niobium",
        symbol: "Nb",
        number: 41,
        group: 5,
        period: 5,
        category: "Transition Metal",
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
        group: 6,
        period: 5,
        category: "Transition Metal",
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
        group: 7,
        period: 5,
        category: "Transition Metal",
        image: "images/technetium.png",
        fact: `Technetium is a radioactive element and was the first element ever produced artificially in a laboratory.
        It doesn't occur naturally in large amounts, so it had to be created through nuclear reactions. Today, it's widely
        used in medical imaging, especially in diagnostic scans that help doctors see inside the body. Its radioactive
        properties make it ideal for tracing processes in the body without causing long- term damage. It's one of the most
        important elements in modern nuclear medicine.`
    },
    {
        name: "Ruthenium",
        symbol: "Ru",
        number: 44,
        group: 8,
        period: 5,
        category: "Transition Metal",
        image: "images/ruthenium.png",
        fact: `Ruthenium is a rare metal used in electronics, catalysts, and wear resistant coatings. It can improve the 
        durability and efficiency of other materials, especially in chemical reactions and electrical contacts. Ruthenium
        is also used in some specialized alloys to increase hardness and resistance to corrosion. In electronics, it helps
        maintain stable performance over time. It's often used in small amounts, but it plays a big role in improving
        material performance.`
    },
    {
        name: "Rhodium",
        symbol: "Rh",
        number: 45,
        group: 9,
        period: 5,
        category: "Transition Metal",
        image: "images/rhodium.png",
        fact: `Rhodium is a rare and extremely valuable metal best known for its use in catalytic converters, where it 
        helps reduce harmful emissions from vehicles.It's highly reflective and resistant to corrosion, which also makes
        it useful in coatings and high- end finishes. Rhodium doesn't tarnish easily, so it's sometimes used in jewelry to
        maintain a bright appearance. Its rarity and usefulness in emission control make it one of the most expensive metals.
        It's a small component with a major environmental impact.`
    },
    {
        name: "Palladium",
        symbol: "Pd",
        number: 46,
        group: 10,
        period: 5,
        category: "Transition Metal",
        image: "images/palladium.png",
        fact: `Palladium is a rare metal widely used in catalytic converters, where it helps reduce harmful emissions from
        vehicles. It can absorb large amounts of hydrogen, which makes it interesting for hydrogen storage and fuel
        technologies. Palladium is also used in electronics, dentistry, and jewelry due to its durability and resistance
        to corrosion. Its rarity and demand in industry have made it quite valuable.It plays a major role in cleaner energy
        and environmental protection.`
    },
    {
        name: "Silver",
        symbol: "Ag",
        number: 47,
        group: 11,
        period: 5,
        category: "Transition Metal",
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
        group: 12,
        period: 5,
        category: "Transition Metal",
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
        group: 13,
        period: 5,
        category: "Post-Transition Metal",
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
        group: 14,
        period: 5,
        category: "Post-Transition Metal",
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
        group: 15,
        period: 5,
        category: "Metalloid",
        image: "images/antimony.png",
        fact: "Antimony is used in flame retardants and was known to ancient civilizations."
    },
    {
        name: "Tellurium",
        symbol: "Te",
        number: 52,
        group: 16,
        period: 5,
        category: "Metalloid",
        image: "images/tellurium.png",
        fact: "Tellurium is rare and used in solar panels and advanced electronics."
    },
    {
        name: "Iodine",
        symbol: "I",
        number: 53,
        group: 17,
        period: 5,
        category: "Halogen",
        image: "images/iodine.png",
        fact: "Iodine is essential for your thyroid and can sublimate into a purple vapor."
    },
    {
        name: "Xenon",
        symbol: "Xe",
        number: 54,
        group: 18,
        period: 5,
        category: "Noble Gas",
        image: "images/xenon.png",
        fact: "Xenon is used in high-intensity lamps and can even form rare compounds."
    },
    {
        name: "Cesium",
        symbol: "Cs",
        number: 55,
        group: 1,
        period: 6,
        category: "Alkali Metal",
        image: "images/cesium.png",
        fact: "Cesium is one of the most reactive metals and can explode when it touches water."
    },
    {
        name: "Barium",
        symbol: "Ba",
        number: 56,
        group: 2,
        period: 6,
        category: "Alkaline Earth Metal",
        image: "images/barium.png",
        fact: "Barium is used in medical imaging because barium compounds can show up clearly on X-rays."
    },


    {
        name: "Lanthanum",
        symbol: "La",
        number: 57,
        group: 3,
        period: 8,
        category: "Lanthanide",
        image: "images/lanthanum.png",
        fact: "Lanthanum is a soft silvery metal used in camera lenses and special battery materials."
    },
    {
        name: "Cerium",
        symbol: "Ce",
        number: 58,
        group: 4,
        period: 8,
        category: "Lanthanide",
        image: "images/cerium.png",
        fact: "Cerium is used in lighter flints and glass polishing powders."
    },
    {
        name: "Praseodymium",
        symbol: "Pr",
        number: 59,
        group: 5,
        period: 8,
        category: "Lanthanide",
        image: "images/praseodymium.png",
        fact: "Praseodymium is used to make strong magnets and special yellow-green glass."
    },
    {
        name: "Neodymium",
        symbol: "Nd",
        number: 60,
        group: 6,
        period: 8,
        category: "Lanthanide",
        image: "images/neodymium.png",
        fact: "Neodymium is famous for making incredibly strong permanent magnets."
    },
    {
        name: "Promethium",
        symbol: "Pm",
        number: 61,
        group: 7,
        period: 8,
        category: "Lanthanide",
        image: "images/promethium.png",
        fact: "Promethium is radioactive and is very rare in nature."
    },
    {
        name: "Samarium",
        symbol: "Sm",
        number: 62,
        group: 8,
        period: 8,
        category: "Lanthanide",
        image: "images/samarium.png",
        fact: "Samarium is used in magnets and in some cancer treatment technologies."
    },
    {
        name: "Europium",
        symbol: "Eu",
        number: 63,
        group: 9,
        period: 8,
        category: "Lanthanide",
        image: "images/europium.png",
        fact: "Europium helps make red and blue colors in TV and monitor screens."
    },
    {
        name: "Gadolinium",
        symbol: "Gd",
        number: 64,
        group: 10,
        period: 8,
        category: "Lanthanide",
        image: "images/gadolinium.png",
        fact: "Gadolinium is used in MRI contrast agents and absorbs neutrons really well."
    },
    {
        name: "Terbium",
        symbol: "Tb",
        number: 65,
        group: 11,
        period: 8,
        category: "Lanthanide",
        image: "images/terbium.png",
        fact: "Terbium is used in green phosphors and some electronic devices."
    },
    {
        name: "Dysprosium",
        symbol: "Dy",
        number: 66,
        group: 12,
        period: 8,
        category: "Lanthanide",
        image: "images/dysprosium.png",
        fact: "Dysprosium helps magnets stay strong even at high temperatures."
    },
    {
        name: "Holmium",
        symbol: "Ho",
        number: 67,
        group: 13,
        period: 8,
        category: "Lanthanide",
        image: "images/holmium.png",
        fact: "Holmium has one of the highest magnetic strengths of any element."
    },
    {
        name: "Erbium",
        symbol: "Er",
        number: 68,
        group: 14,
        period: 8,
        category: "Lanthanide",
        image: "images/erbium.png",
        fact: "Erbium is used in fiber optic cables to help carry signals long distances."
    },
    {
        name: "Thulium",
        symbol: "Tm",
        number: 69,
        group: 15,
        period: 8,
        category: "Lanthanide",
        image: "images/thulium.png",
        fact: "Thulium is one of the rarest lanthanides and is used in some portable X-ray devices."
    },
    {
        name: "Ytterbium",
        symbol: "Yb",
        number: 70,
        group: 16,
        period: 8,
        category: "Lanthanide",
        image: "images/ytterbium.png",
        fact: "Ytterbium is used in lasers and certain kinds of atomic clocks."
    },
    {
        name: "Lutetium",
        symbol: "Lu",
        number: 71,
        group: 17,
        period: 8,
        category: "Lanthanide",
        image: "images/lutetium.png",
        fact: "Lutetium is one of the hardest and densest lanthanides and is used in PET scan detectors."
    },
    {
        name: "Hafnium",
        symbol: "Hf",
        number: 72,
        group: 4,
        period: 6,
        category: "Transition Metal",
        image: "images/hafnium.png",
        fact: "Hafnium is used in nuclear control rods because it absorbs neutrons really well."
    },
    {
        name: "Tantalum",
        symbol: "Ta",
        number: 73,
        group: 5,
        period: 6,
        category: "Transition Metal",
        image: "images/tantalum.png",
        fact: "Tantalum resists corrosion and is used in electronics and medical implants."
    },
    {
        name: "Tungsten",
        symbol: "W",
        number: 74,
        group: 6,
        period: 6,
        category: "Transition Metal",
        image: "images/tungsten.png",
        fact: "Tungsten has the highest melting point of any metal."
    },
    {
        name: "Rhenium",
        symbol: "Re",
        number: 75,
        group: 7,
        period: 6,
        category: "Transition Metal",
        image: "images/rhenium.png",
        fact: "Rhenium is extremely rare and is used in jet engines and high-temperature alloys."
    },
    {
        name: "Osmium",
        symbol: "Os",
        number: 76,
        group: 8,
        period: 6,
        category: "Transition Metal",
        image: "images/osmium.png",
        fact: "Osmium is one of the densest elements known."
    },
    {
        name: "Iridium",
        symbol: "Ir",
        number: 77,
        group: 9,
        period: 6,
        category: "Transition Metal",
        image: "images/iridium.png",
        fact: "Iridium is extremely corrosion-resistant and is linked to the asteroid impact that helped wipe out the dinosaurs."
    },
    {
        name: "Platinum",
        symbol: "Pt",
        number: 78,
        group: 10,
        period: 6,
        category: "Transition Metal",
        image: "images/platinum.png",
        fact: "Platinum is valuable, resistant to corrosion, and used in catalytic converters and jewelry."
    },
    {
        name: "Gold",
        symbol: "Au",
        number: 79,
        group: 11,
        period: 6,
        category: "Transition Metal",
        image: "images/gold.png",
        fact: "Gold doesn't tarnish easily and has been prized by humans for thousands of years."
    },
    {
        name: "Mercury",
        symbol: "Hg",
        number: 80,
        group: 12,
        period: 6,
        category: "Transition Metal",
        image: "images/mercury.png",
        fact: "Mercury is a metal that is liquid at room temperature."
    },
    {
        name: "Thallium",
        symbol: "Tl",
        number: 81,
        group: 13,
        period: 6,
        category: "Post-Transition Metal",
        image: "images/thallium.png",
        fact: "Thallium is highly toxic and was once used in rat poison."
    },
    {
        name: "Lead",
        symbol: "Pb",
        number: 82,
        group: 14,
        period: 6,
        category: "Post-Transition Metal",
        image: "images/lead.png",
        fact: "Lead is dense and useful for shielding radiation, but it is also toxic."
    },
    {
        name: "Bismuth",
        symbol: "Bi",
        number: 83,
        group: 15,
        period: 6,
        category: "Post-Transition Metal",
        image: "images/bismuth.png",
        fact: "Bismuth forms cool rainbow oxide crystals and is less toxic than many heavy metals."
    },
    {
        name: "Polonium",
        symbol: "Po",
        number: 84,
        group: 16,
        period: 6,
        category: "Metalloid",
        image: "images/polonium.png",
        fact: "Polonium is extremely radioactive and was discovered by Marie Curie."
    },
    {
        name: "Astatine",
        symbol: "At",
        number: 85,
        group: 17,
        period: 6,
        category: "Halogen",
        image: "images/astatine.png",
        fact: "Astatine is incredibly rare and is one of the least understood elements."
    },
    {
        name: "Radon",
        symbol: "Rn",
        number: 86,
        group: 18,
        period: 6,
        category: "Noble Gas",
        image: "images/radon.png",
        fact: "Radon is a radioactive gas that can build up in homes."
    },
    {
        name: "Francium",
        symbol: "Fr",
        number: 87,
        group: 1,
        period: 7,
        category: "Alkali Metal",
        image: "images/francium.png",
        fact: "Francium is extremely radioactive and one of the rarest elements on Earth."
    },
    {
        name: "Radium",
        symbol: "Ra",
        number: 88,
        group: 2,
        period: 7,
        category: "Alkaline Earth Metal",
        image: "images/radium.png",
        fact: "Radium glows faintly due to its radioactivity and was once used in luminous paint."
    },

    {
        name: "Actinium",
        symbol: "Ac",
        number: 89,
        group: 3,
        period: 9,
        category: "Actinide",
        image: "images/actinium.png",
        fact: "Actinium is highly radioactive and was discovered in 1899."
    },
    {
        name: "Thorium",
        symbol: "Th",
        number: 90,
        group: 4,
        period: 9,
        category: "Actinide",
        image: "images/thorium.png",
        fact: "Thorium can be used as a nuclear fuel and is more abundant than uranium."
    },
    {
        name: "Protactinium",
        symbol: "Pa",
        number: 91,
        group: 5,
        period: 9,
        category: "Actinide",
        image: "images/protactinium.png",
        fact: "Protactinium is rare, radioactive, and very difficult to study."
    },
    {
        name: "Uranium",
        symbol: "U",
        number: 92,
        group: 6,
        period: 9,
        category: "Actinide",
        image: "images/uranium.png",
        fact: "Uranium is widely known for its use in nuclear power and weapons."
    },
    {
        name: "Neptunium",
        symbol: "Np",
        number: 93,
        group: 7,
        period: 9,
        category: "Actinide",
        image: "images/neptunium.png",
        fact: "Neptunium is a synthetic radioactive element used in research."
    },
    {
        name: "Plutonium",
        symbol: "Pu",
        number: 94,
        group: 8,
        period: 9,
        category: "Actinide",
        image: "images/plutonium.png",
        fact: "Plutonium is used in nuclear weapons and power generation."
    },
    {
        name: "Americium",
        symbol: "Am",
        number: 95,
        group: 9,
        period: 9,
        category: "Actinide",
        image: "images/americium.png",
        fact: "Americium is used in smoke detectors."
    },
    {
        name: "Curium",
        symbol: "Cm",
        number: 96,
        group: 10,
        period: 9,
        category: "Actinide",
        image: "images/curium.png",
        fact: "Curium is used in scientific research and space missions."
    },
    {
        name: "Berkelium",
        symbol: "Bk",
        number: 97,
        group: 11,
        period: 9,
        category: "Actinide",
        image: "images/berkelium.png",
        fact: "Berkelium is a synthetic element created in nuclear reactors."
    },
    {
        name: "Californium",
        symbol: "Cf",
        number: 98,
        group: 12,
        period: 9,
        category: "Actinide",
        image: "images/californium.png",
        fact: "Californium is used in neutron sources and cancer treatment."
    },
    {
        name: "Einsteinium",
        symbol: "Es",
        number: 99,
        group: 13,
        period: 9,
        category: "Actinide",
        image: "images/einsteinium.png",
        fact: "Einsteinium was discovered in the debris of a hydrogen bomb test."
    },
    {
        name: "Fermium",
        symbol: "Fm",
        number: 100,
        group: 14,
        period: 9,
        category: "Actinide",
        image: "images/fermium.png",
        fact: "Fermium is a synthetic radioactive element with no commercial use."
    },
    {
        name: "Mendelevium",
        symbol: "Md",
        number: 101,
        group: 15,
        period: 9,
        category: "Actinide",
        image: "images/mendelevium.png",
        fact: "Mendelevium is named after Dmitri Mendeleev, creator of the periodic table."
    },
    {
        name: "Nobelium",
        symbol: "No",
        number: 102,
        group: 16,
        period: 9,
        category: "Actinide",
        image: "images/nobelium.png",
        fact: "Nobelium is a synthetic radioactive element named after Alfred Nobel."
    },
    {
        name: "Lawrencium",
        symbol: "Lr",
        number: 103,
        group: 17,
        period: 9,
        category: "Actinide",
        image: "images/lawrencium.png",
        fact: "Lawrencium is the last actinide and is named after the inventor of the cyclotron."
    },
    {
        name: "Rutherfordium",
        symbol: "Rf",
        number: 104,
        group: 4,
        period: 7,
        category: "Transition Metal",
        image: "images/rutherfordium.png",
        fact: "Rutherfordium is a synthetic element named after physicist Ernest Rutherford."
    },
    {
        name: "Dubnium",
        symbol: "Db",
        number: 105,
        group: 5,
        period: 7,
        category: "Transition Metal",
        image: "images/dubnium.png",
        fact: "Dubnium is highly radioactive and exists only in laboratories."
    },
    {
        name: "Seaborgium",
        symbol: "Sg",
        number: 106,
        group: 6,
        period: 7,
        category: "Transition Metal",
        image: "images/seaborgium.png",
        fact: "Seaborgium is named after Glenn Seaborg, a pioneer in transuranium elements."
    },
    {
        name: "Bohrium",
        symbol: "Bh",
        number: 107,
        group: 7,
        period: 7,
        category: "Transition Metal",
        image: "images/bohrium.png",
        fact: "Bohrium is named after Niels Bohr and is extremely unstable."
    },
    {
        name: "Hassium",
        symbol: "Hs",
        number: 108,
        group: 8,
        period: 7,
        category: "Transition Metal",
        image: "images/hassium.png",
        fact: "Hassium is named after the German state of Hesse."
    },
    {
        name: "Meitnerium",
        symbol: "Mt",
        number: 109,
        group: 9,
        period: 7,
        category: "Transition Metal",
        image: "images/meitnerium.png",
        fact: "Meitnerium is named after physicist Lise Meitner."
    },
    {
        name: "Darmstadtium",
        symbol: "Ds",
        number: 110,
        group: 10,
        period: 7,
        category: "Transition Metal",
        image: "images/darmstadtium.png",
        fact: "Darmstadtium was first created in Darmstadt, Germany."
    },
    {
        name: "Roentgenium",
        symbol: "Rg",
        number: 111,
        group: 11,
        period: 7,
        category: "Transition Metal",
        image: "images/roentgenium.png",
        fact: "Roentgenium is named after Wilhelm Röntgen, who discovered X-rays."
    },
    {
        name: "Copernicium",
        symbol: "Cn",
        number: 112,
        group: 12,
        period: 7,
        category: "Transition Metal",
        image: "images/copernicium.png",
        fact: "Copernicium is named after Nicolaus Copernicus."
    },
    {
        name: "Nihonium",
        symbol: "Nh",
        number: 113,
        group: 13,
        period: 7,
        category: "Post-Transition Metal",
        image: "images/nihonium.png",
        fact: "Nihonium is named after Japan (Nihon)."
    },
    {
        name: "Flerovium",
        symbol: "Fl",
        number: 114,
        group: 14,
        period: 7,
        category: "Post-Transition Metal",
        image: "images/flerovium.png",
        fact: "Flerovium is named after the Flerov Laboratory of Nuclear Reactions."
    },
    {
        name: "Moscovium",
        symbol: "Mc",
        number: 115,
        group: 15,
        period: 7,
        category: "Post-Transition Metal",
        image: "images/moscovium.png",
        fact: "Moscovium is named after the Moscow region."
    },
    {
        name: "Livermorium",
        symbol: "Lv",
        number: 116,
        group: 16,
        period: 7,
        category: "Post-Transition Metal",
        image: "images/livermorium.png",
        fact: "Livermorium is named after Lawrence Livermore National Laboratory."
    },
    {
        name: "Tennessine",
        symbol: "Ts",
        number: 117,
        group: 17,
        period: 7,
        category: "Halogen",
        image: "images/tennessine.png",
        fact: "Tennessine is named after the state of Tennessee."
    },
    {
        name: "Oganesson",
        symbol: "Og",
        number: 118,
        group: 18,
        period: 7,
        category: "Noble Gas",
        image: "images/oganesson.png",
        fact: "Oganesson is one of the heaviest elements ever created."
    }

];


const table = document.getElementById("periodic-table");

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
    // ===== 1–10 =====
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

    // ===== 11–20 =====
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

    // ===== 21–30 =====
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

    // ===== 31–40 =====
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

    // ===== 41–50 =====
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

    // ===== 51–60 =====
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

    // ===== 61–80 =====
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

    // ===== IMPORTANT HEAVY =====
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

    // ===== NAMING (100+) =====
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

    div.addEventListener("click", () => {
        if (quizActive) return;

        const img = document.getElementById("element-image");

        document.getElementById("element-name").textContent = e.name;
        document.getElementById("element-symbol").textContent = "Symbol: " + e.symbol;
        document.getElementById("element-number").textContent = "Atomic Number: " + e.number;
        document.getElementById("element-group").textContent = "Group: " + e.group;
        document.getElementById("element-period").textContent = "Period: " + e.period;
        document.getElementById("element-category").textContent = "Category: " + e.category;
        document.getElementById("element-description").textContent = e.description || e.fact;

        if (e.image) {
            img.src = e.image;
            img.alt = e.name;
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }

        const rect = div.getBoundingClientRect();
        const cardWidth = 300;
        const spaceRight = window.innerWidth - rect.right;

        if (spaceRight > cardWidth + 20) {
            // place on right
            infoCard.style.left = (window.scrollX + rect.right + 12) + "px";
        } else {
            // place on left
            infoCard.style.left = (window.scrollX + rect.left - cardWidth - 12) + "px";
        }

        infoCard.style.top = (window.scrollY + rect.top) + "px";

        infoCard.classList.remove("hidden");
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

createSeriesMarker(57, "La", 3, 6, "lanthanide");
createSeriesMarker(89, "Ac", 3, 7, "actinide");

document.getElementById("close-btn").onclick = () => {
    infoCard.classList.add("hidden");
};
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
        } else if (questionType === 1) {
            choice = randomElement.name;
        } else if (questionType === 2) {
            choice = randomElement.group.toString();
        } else if (questionType === 3) {
            choice = randomElement.period.toString();
        } else if (questionType === 4) {
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
    } else {
        questionType = forcedType;
    }

    let question = "";
    let answer = "";
    let explanation = "";

    if (questionType === 0) {
        question = `What is the symbol for ${e.name}?`;
        answer = e.symbol;
        explanation = `${e.name} has the chemical symbol ${e.symbol}. Symbols are the abbreviations used on the periodic table.`;
    } else if (questionType === 1) {
        question = `What is the name of the element with symbol ${e.symbol}?`;
        answer = e.name;
        explanation = `${e.symbol} stands for ${e.name}. Each element has its own unique symbol.`;
    } else if (questionType === 2) {
        question = `What group is ${e.name} in?`;
        answer = e.group.toString();
        explanation = `${e.name} is in group ${e.group}. Groups are the vertical columns on the periodic table.`;
    } else if (questionType === 3) {
        question = `What period is ${e.name} in?`;
        answer = e.period.toString();
        explanation = `${e.name} is in period ${e.period}. Periods are the horizontal rows on the periodic table.`;
    } else {
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

    if (quizActive) {
        nextBtn.style.display = "inline-block";
    } else {
        nextBtn.style.display = "none";
    }

    if (quizActive) {
        lessonBtn.disabled = true;
        lessonBtn.style.opacity = "0.5";
        lessonBtn.style.cursor = "not-allowed";
    } else {
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
    } else {
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
    } else {
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
    } else {
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
    document.getElementById("question-text").textContent = "Practice ended. Good Work!";
    document.getElementById("score-display").textContent = "";

    updateQuizButtons();

    // show report again
    document.getElementById("report-section").classList.remove("hidden");
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
    } else {
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
    } else {
        reportSummary.textContent =
            `You completed all ${maxQuestions} questions. Final score: ${score} / ${totalQuestions} (${percent}%).`;
    }

    quizHistory.forEach(item => {
        let div = document.createElement("div");
        div.classList.add("review-item");

        if (item.isCorrect) {
            div.classList.add("correct");
        } else {
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
    } else {
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
    } else {
        reportContent.classList.remove("hidden");
        toggleReportBtn.textContent = "Minimize Report";
    }
});