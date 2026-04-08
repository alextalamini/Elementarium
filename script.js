
const elements = [
    {
        name: "Hydrogen",
        symbol: "H",
        number: 1,
        group: 1,
        period: 1,
        category: "Nonmetal",
        fact: "Hydrogen is the most common element in the universe."
    },
    {
        name: "Helium",
        symbol: "He",
        number: 2,
        group: 18,
        period: 1,
        category: "Noble Gas",
        fact: "Helium makes balloons float and doesn’t react with much."
    },
    {
        name: "Lithium",
        symbol: "Li",
        number: 3,
        group: 1,
        period: 2,
        category: "Alkali Metal",
        fact: "Lithium powers a lot of modern batteries, so your phone kind of owes it one."
    },
    {
        name: "Beryllium",
        symbol: "Be",
        number: 4,
        group: 2,
        period: 2,
        category: "Alkaline Earth Metal",
        fact: "Beryllium is super light and strong, which makes it useful in aerospace equipment."
    },
    {
        name: "Boron",
        symbol: "B",
        number: 5,
        group: 13,
        period: 2,
        category: "Metalloid",
        fact: "Boron helps make strong glass and detergents, and plants actually need a little of it too."
    },
    {
        name: "Carbon",
        symbol: "C",
        number: 6,
        group: 14,
        period: 2,
        category: "Nonmetal",
        fact: "Carbon is basically the backbone of life and can show up as graphite or diamond."
    },
    {
        name: "Nitrogen",
        symbol: "N",
        number: 7,
        group: 15,
        period: 2,
        category: "Nonmetal",
        fact: "Nitrogen makes up most of the air, even though your body can’t use it directly."
    },
    {
        name: "Oxygen",
        symbol: "O",
        number: 8,
        group: 16,
        period: 2,
        category: "Nonmetal",
        fact: "Oxygen helps you breathe and loves reacting with other elements."
    },
    {
        name: "Fluorine",
        symbol: "F",
        number: 9,
        group: 17,
        period: 2,
        category: "Halogen",
        fact: "Fluorine is insanely reactive, so pure fluorine is not something you casually handle."
    },
    {
        name: "Neon",
        symbol: "Ne",
        number: 10,
        group: 18,
        period: 2,
        category: "Noble Gas",
        fact: "Neon is famous for glowing in signs, even though many neon signs use other gases too."
    },
    {
        name: "Sodium",
        symbol: "Na",
        number: 11,
        group: 1,
        period: 3,
        category: "Alkali Metal",
        fact: "Sodium reacts violently with water, which is why it’s always stored carefully."
    },
    {
        name: "Magnesium",
        symbol: "Mg",
        number: 12,
        group: 2,
        period: 3,
        category: "Alkaline Earth Metal",
        fact: "Magnesium burns with a super bright white flame and is used in fireworks."
    },
    {
        name: "Aluminum",
        symbol: "Al",
        number: 13,
        group: 13,
        period: 3,
        category: "Post-Transition Metal",
        fact: "Aluminum is lightweight, strong, and used everywhere from cans to airplanes."
    },
    {
        name: "Silicon",
        symbol: "Si",
        number: 14,
        group: 14,
        period: 3,
        category: "Metalloid",
        fact: "Silicon is the backbone of computer chips and modern electronics."
    },
    {
        name: "Phosphorus",
        symbol: "P",
        number: 15,
        group: 15,
        period: 3,
        category: "Nonmetal",
        fact: "Phosphorus is essential for life and glows faintly in some forms."
    },
    {
        name: "Sulfur",
        symbol: "S",
        number: 16,
        group: 16,
        period: 3,
        category: "Nonmetal",
        fact: "Sulfur is known for its strong smell and is used in fertilizers."
    },
    {
        name: "Chlorine",
        symbol: "Cl",
        number: 17,
        group: 17,
        period: 3,
        category: "Halogen",
        fact: "Chlorine is used to disinfect water but is toxic in pure gas form."
    },
    {
        name: "Argon",
        symbol: "Ar",
        number: 18,
        group: 18,
        period: 3,
        category: "Noble Gas",
        fact: "Argon is a noble gas that doesn’t react and is used in light bulbs."
    },
    {
        name: "Potassium",
        symbol: "K",
        number: 19,
        group: 1,
        period: 4,
        category: "Alkali Metal",
        fact: "Potassium reacts fast with water and is also important for your nerves and muscles."
    },
    {
        name: "Calcium",
        symbol: "Ca",
        number: 20,
        group: 2,
        period: 4,
        category: "Alkaline Earth Metal",
        fact: "Calcium helps build strong bones and teeth, and it also shows up in cement and rocks."
    },
    {
        name: "Scandium",
        symbol: "Sc",
        number: 21,
        group: 3,
        period: 4,
        category: "Transition Metal",
        fact: "Scandium is lightweight and helps make aluminum alloys stronger without adding much weight."
    },
    {
        name: "Titanium",
        symbol: "Ti",
        number: 22,
        group: 4,
        period: 4,
        category: "Transition Metal",
        fact: "Titanium is super strong for its weight and shows up in aircraft, implants, and high-end gear."
    },
    {
        name: "Vanadium",
        symbol: "V",
        number: 23,
        group: 5,
        period: 4,
        category: "Transition Metal",
        fact: "Vanadium helps make steel tougher and is also used in some advanced battery systems."
    },
    {
        name: "Chromium",
        symbol: "Cr",
        number: 24,
        group: 6,
        period: 4,
        category: "Transition Metal",
        fact: "Chromium gives chrome its shine and helps stainless steel resist rust."
    },
    {
        name: "Manganese",
        symbol: "Mn",
        number: 25,
        group: 7,
        period: 4,
        category: "Transition Metal",
        fact: "Manganese is used in steel production and helps make metal stronger and more durable."
    },
    {
        name: "Iron",
        symbol: "Fe",
        number: 26,
        group: 8,
        period: 4,
        category: "Transition Metal",
        fact: "Iron is one of the most important building metals on Earth, and your blood uses it too."
    },
    {
        name: "Cobalt",
        symbol: "Co",
        number: 27,
        group: 9,
        period: 4,
        category: "Transition Metal",
        fact: "Cobalt is used in batteries and also makes that deep rich blue color in glass and ceramics."
    },
    {
        name: "Nickel",
        symbol: "Ni",
        number: 28,
        group: 10,
        period: 4,
        category: "Transition Metal",
        fact: "Nickel helps make stainless steel and shows up in coins, batteries, and Earth’s core."
    },
    {
        name: "Copper",
        symbol: "Cu",
        number: 29,
        group: 11,
        period: 4,
        category: "Transition Metal",
        fact: "Copper is amazing at conducting electricity, which is why so much wiring depends on it."
    },
    {
        name: "Zinc",
        symbol: "Zn",
        number: 30,
        group: 12,
        period: 4,
        category: "Transition Metal",
        fact: "Zinc protects steel from rust and also helps support your immune system."
    },
    {
        name: "Gallium",
        symbol: "Ga",
        number: 31,
        group: 13,
        period: 4,
        category: "Post-Transition Metal",
        fact: "Gallium can melt in your hand because its melting point is just a little above room temperature."
    },
    {
        name: "Germanium",
        symbol: "Ge",
        number: 32,
        group: 14,
        period: 4,
        category: "Metalloid",
        fact: "Germanium helped early electronics and still shows up in fiber optics and infrared tech."
    },
    {
        name: "Arsenic",
        symbol: "As",
        number: 33,
        group: 15,
        period: 4,
        category: "Metalloid",
        fact: "Arsenic is famous for being poisonous, but it also has uses in semiconductors and alloys."
    },
    {
        name: "Selenium",
        symbol: "Se",
        number: 34,
        group: 16,
        period: 4,
        category: "Nonmetal",
        fact: "Selenium is needed in tiny amounts by the body and is also used in glass and electronics."
    },
    {
        name: "Bromine",
        symbol: "Br",
        number: 35,
        group: 17,
        period: 4,
        category: "Halogen",
        fact: "Bromine is one of the only elements that’s liquid at room temperature, which is a little unsettling."
    },
    {
        name: "Krypton",
        symbol: "Kr",
        number: 36,
        group: 18,
        period: 4,
        category: "Noble Gas",
        fact: "Krypton is a noble gas used in lighting and lasers, even if Superman made the name way more famous."
    },
    {
        name: "Rubidium",
        symbol: "Rb",
        number: 37,
        group: 1,
        period: 5,
        category: "Alkali Metal",
        fact: "Rubidium is extremely reactive and can ignite on contact with air or water."
    },
    {
        name: "Strontium",
        symbol: "Sr",
        number: 38,
        group: 2,
        period: 5,
        category: "Alkaline Earth Metal",
        fact: "Strontium gives fireworks that bright red color you see in explosions."
    },
    {
        name: "Yttrium",
        symbol: "Y",
        number: 39,
        group: 3,
        period: 5,
        category: "Transition Metal",
        fact: "Yttrium is used in LEDs and superconductors, even if most people have never heard of it."
    },
    {
        name: "Zirconium",
        symbol: "Zr",
        number: 40,
        group: 4,
        period: 5,
        category: "Transition Metal",
        fact: "Zirconium resists corrosion so well it’s used in nuclear reactors and medical tools."
    },
    {
        name: "Niobium",
        symbol: "Nb",
        number: 41,
        group: 5,
        period: 5,
        category: "Transition Metal",
        fact: "Niobium strengthens steel and is used in superconducting magnets."
    },
    {
        name: "Molybdenum",
        symbol: "Mo",
        number: 42,
        group: 6,
        period: 5,
        category: "Transition Metal",
        fact: "Molybdenum helps steel handle high temperatures without losing strength."
    },
    {
        name: "Technetium",
        symbol: "Tc",
        number: 43,
        group: 7,
        period: 5,
        category: "Transition Metal",
        fact: "Technetium is radioactive and was the first element made artificially in a lab."
    },
    {
        name: "Ruthenium",
        symbol: "Ru",
        number: 44,
        group: 8,
        period: 5,
        category: "Transition Metal",
        fact: "Ruthenium is used in electronics and can make materials harder and more durable."
    },
    {
        name: "Rhodium",
        symbol: "Rh",
        number: 45,
        group: 9,
        period: 5,
        category: "Transition Metal",
        fact: "Rhodium is super shiny and extremely valuable, often used in catalytic converters."
    },
    {
        name: "Palladium",
        symbol: "Pd",
        number: 46,
        group: 10,
        period: 5,
        category: "Transition Metal",
        fact: "Palladium is used in electronics and catalytic converters and is rarer than gold."
    },
    {
        name: "Silver",
        symbol: "Ag",
        number: 47,
        group: 11,
        period: 5,
        category: "Transition Metal",
        fact: "Silver is one of the best electrical conductors and has been used as money for centuries."
    },
    {
        name: "Cadmium",
        symbol: "Cd",
        number: 48,
        group: 12,
        period: 5,
        category: "Transition Metal",
        fact: "Cadmium is toxic but used in batteries and protective coatings."
    },
    {
        name: "Indium",
        symbol: "In",
        number: 49,
        group: 13,
        period: 5,
        category: "Post-Transition Metal",
        fact: "Indium is soft enough to cut with a knife and is used in touchscreens."
    },
    {
        name: "Tin",
        symbol: "Sn",
        number: 50,
        group: 14,
        period: 5,
        category: "Post-Transition Metal",
        fact: "Tin has been used since ancient times and is a key part of bronze."
    },
    {
        name: "Antimony",
        symbol: "Sb",
        number: 51,
        group: 15,
        period: 5,
        category: "Metalloid",
        fact: "Antimony is used in flame retardants and was known to ancient civilizations."
    },
    {
        name: "Tellurium",
        symbol: "Te",
        number: 52,
        group: 16,
        period: 5,
        category: "Metalloid",
        fact: "Tellurium is rare and used in solar panels and advanced electronics."
    },
    {
        name: "Iodine",
        symbol: "I",
        number: 53,
        group: 17,
        period: 5,
        category: "Halogen",
        fact: "Iodine is essential for your thyroid and can sublimate into a purple vapor."
    },
    {
        name: "Xenon",
        symbol: "Xe",
        number: 54,
        group: 18,
        period: 5,
        category: "Noble Gas",
        fact: "Xenon is used in high-intensity lamps and can even form rare compounds."
    },
    {
        name: "Cesium",
        symbol: "Cs",
        number: 55,
        group: 1,
        period: 6,
        category: "Alkali Metal",
        fact: "Cesium is one of the most reactive metals and can explode when it touches water."
    },
    {
        name: "Barium",
        symbol: "Ba",
        number: 56,
        group: 2,
        period: 6,
        category: "Alkaline Earth Metal",
        fact: "Barium is used in medical imaging because barium compounds can show up clearly on X-rays."
    },
    {
        name: "Lanthanum Placeholder",
        symbol: "La",
        number: 57,
        group: 3,
        period: 6,
        category: "Lanthanide",
        fact: "This is a placeholder for the lanthanide series."
    },
    {
        name: "Lanthanum",
        symbol: "La",
        number: 57,
        group: 3,
        period: 8,
        category: "Lanthanide",
        fact: "Lanthanum is a soft silvery metal used in camera lenses and special battery materials."
    },
    {
        name: "Cerium",
        symbol: "Ce",
        number: 58,
        group: 4,
        period: 8,
        category: "Lanthanide",
        fact: "Cerium is used in lighter flints and glass polishing powders."
    },
    {
        name: "Praseodymium",
        symbol: "Pr",
        number: 59,
        group: 5,
        period: 8,
        category: "Lanthanide",
        fact: "Praseodymium is used to make strong magnets and special yellow-green glass."
    },
    {
        name: "Neodymium",
        symbol: "Nd",
        number: 60,
        group: 6,
        period: 8,
        category: "Lanthanide",
        fact: "Neodymium is famous for making incredibly strong permanent magnets."
    },
    {
        name: "Promethium",
        symbol: "Pm",
        number: 61,
        group: 7,
        period: 8,
        category: "Lanthanide",
        fact: "Promethium is radioactive and is very rare in nature."
    },
    {
        name: "Samarium",
        symbol: "Sm",
        number: 62,
        group: 8,
        period: 8,
        category: "Lanthanide",
        fact: "Samarium is used in magnets and in some cancer treatment technologies."
    },
    {
        name: "Europium",
        symbol: "Eu",
        number: 63,
        group: 9,
        period: 8,
        category: "Lanthanide",
        fact: "Europium helps make red and blue colors in TV and monitor screens."
    },
    {
        name: "Gadolinium",
        symbol: "Gd",
        number: 64,
        group: 10,
        period: 8,
        category: "Lanthanide",
        fact: "Gadolinium is used in MRI contrast agents and absorbs neutrons really well."
    },
    {
        name: "Terbium",
        symbol: "Tb",
        number: 65,
        group: 11,
        period: 8,
        category: "Lanthanide",
        fact: "Terbium is used in green phosphors and some electronic devices."
    },
    {
        name: "Dysprosium",
        symbol: "Dy",
        number: 66,
        group: 12,
        period: 8,
        category: "Lanthanide",
        fact: "Dysprosium helps magnets stay strong even at high temperatures."
    },
    {
        name: "Holmium",
        symbol: "Ho",
        number: 67,
        group: 13,
        period: 8,
        category: "Lanthanide",
        fact: "Holmium has one of the highest magnetic strengths of any element."
    },
    {
        name: "Erbium",
        symbol: "Er",
        number: 68,
        group: 14,
        period: 8,
        category: "Lanthanide",
        fact: "Erbium is used in fiber optic cables to help carry signals long distances."
    },
    {
        name: "Thulium",
        symbol: "Tm",
        number: 69,
        group: 15,
        period: 8,
        category: "Lanthanide",
        fact: "Thulium is one of the rarest lanthanides and is used in some portable X-ray devices."
    },
    {
        name: "Ytterbium",
        symbol: "Yb",
        number: 70,
        group: 16,
        period: 8,
        category: "Lanthanide",
        fact: "Ytterbium is used in lasers and certain kinds of atomic clocks."
    },
    {
        name: "Lutetium",
        symbol: "Lu",
        number: 71,
        group: 17,
        period: 8,
        category: "Lanthanide",
        fact: "Lutetium is one of the hardest and densest lanthanides and is used in PET scan detectors."
    },
    {
        name: "Hafnium",
        symbol: "Hf",
        number: 72,
        group: 4,
        period: 6,
        category: "Transition Metal",
        fact: "Hafnium is used in nuclear control rods because it absorbs neutrons really well."
    },
    {
        name: "Tantalum",
        symbol: "Ta",
        number: 73,
        group: 5,
        period: 6,
        category: "Transition Metal",
        fact: "Tantalum resists corrosion and is used in electronics and medical implants."
    },
    {
        name: "Tungsten",
        symbol: "W",
        number: 74,
        group: 6,
        period: 6,
        category: "Transition Metal",
        fact: "Tungsten has the highest melting point of any metal."
    },
    {
        name: "Rhenium",
        symbol: "Re",
        number: 75,
        group: 7,
        period: 6,
        category: "Transition Metal",
        fact: "Rhenium is extremely rare and is used in jet engines and high-temperature alloys."
    },
    {
        name: "Osmium",
        symbol: "Os",
        number: 76,
        group: 8,
        period: 6,
        category: "Transition Metal",
        fact: "Osmium is one of the densest elements known."
    },
    {
        name: "Iridium",
        symbol: "Ir",
        number: 77,
        group: 9,
        period: 6,
        category: "Transition Metal",
        fact: "Iridium is extremely corrosion-resistant and is linked to the asteroid impact that helped wipe out the dinosaurs."
    },
    {
        name: "Platinum",
        symbol: "Pt",
        number: 78,
        group: 10,
        period: 6,
        category: "Transition Metal",
        fact: "Platinum is valuable, resistant to corrosion, and used in catalytic converters and jewelry."
    },
    {
        name: "Gold",
        symbol: "Au",
        number: 79,
        group: 11,
        period: 6,
        category: "Transition Metal",
        fact: "Gold doesn’t tarnish easily and has been prized by humans for thousands of years."
    },
    {
        name: "Mercury",
        symbol: "Hg",
        number: 80,
        group: 12,
        period: 6,
        category: "Transition Metal",
        fact: "Mercury is a metal that is liquid at room temperature."
    },
    {
        name: "Thallium",
        symbol: "Tl",
        number: 81,
        group: 13,
        period: 6,
        category: "Post-Transition Metal",
        fact: "Thallium is highly toxic and was once used in rat poison."
    },
    {
        name: "Lead",
        symbol: "Pb",
        number: 82,
        group: 14,
        period: 6,
        category: "Post-Transition Metal",
        fact: "Lead is dense and useful for shielding radiation, but it is also toxic."
    },
    {
        name: "Bismuth",
        symbol: "Bi",
        number: 83,
        group: 15,
        period: 6,
        category: "Post-Transition Metal",
        fact: "Bismuth forms cool rainbow oxide crystals and is less toxic than many heavy metals."
    },
    {
        name: "Polonium",
        symbol: "Po",
        number: 84,
        group: 16,
        period: 6,
        category: "Metalloid",
        fact: "Polonium is extremely radioactive and was discovered by Marie Curie."
    },
    {
        name: "Astatine",
        symbol: "At",
        number: 85,
        group: 17,
        period: 6,
        category: "Halogen",
        fact: "Astatine is incredibly rare and is one of the least understood elements."
    },
    {
        name: "Radon",
        symbol: "Rn",
        number: 86,
        group: 18,
        period: 6,
        category: "Noble Gas",
        fact: "Radon is a radioactive gas that can build up in homes."
    },
    {
        name: "Francium",
        symbol: "Fr",
        number: 87,
        group: 1,
        period: 7,
        category: "Alkali Metal",
        fact: "Francium is extremely radioactive and one of the rarest elements on Earth."
    },
    {
        name: "Radium",
        symbol: "Ra",
        number: 88,
        group: 2,
        period: 7,
        category: "Alkaline Earth Metal",
        fact: "Radium glows faintly due to its radioactivity and was once used in luminous paint."
    },
    {
        name: "Actinide Placeholder",
        symbol: "Ac",
        number: 89,
        group: 3,
        period: 7,
        category: "Actinide",
        fact: "This is a placeholder for the actinide series."
    },

    // ACTINIDES ROW (bottom)
    {
        name: "Actinium",
        symbol: "Ac",
        number: 89,
        group: 3,
        period: 9,
        category: "Actinide",
        fact: "Actinium is highly radioactive and was discovered in 1899."
    },
    {
        name: "Thorium",
        symbol: "Th",
        number: 90,
        group: 4,
        period: 9,
        category: "Actinide",
        fact: "Thorium can be used as a nuclear fuel and is more abundant than uranium."
    },
    {
        name: "Protactinium",
        symbol: "Pa",
        number: 91,
        group: 5,
        period: 9,
        category: "Actinide",
        fact: "Protactinium is rare, radioactive, and very difficult to study."
    },
    {
        name: "Uranium",
        symbol: "U",
        number: 92,
        group: 6,
        period: 9,
        category: "Actinide",
        fact: "Uranium is widely known for its use in nuclear power and weapons."
    },
    {
        name: "Neptunium",
        symbol: "Np",
        number: 93,
        group: 7,
        period: 9,
        category: "Actinide",
        fact: "Neptunium is a synthetic radioactive element used in research."
    },
    {
        name: "Plutonium",
        symbol: "Pu",
        number: 94,
        group: 8,
        period: 9,
        category: "Actinide",
        fact: "Plutonium is used in nuclear weapons and power generation."
    },
    {
        name: "Americium",
        symbol: "Am",
        number: 95,
        group: 9,
        period: 9,
        category: "Actinide",
        fact: "Americium is used in smoke detectors."
    },
    {
        name: "Curium",
        symbol: "Cm",
        number: 96,
        group: 10,
        period: 9,
        category: "Actinide",
        fact: "Curium is used in scientific research and space missions."
    },
    {
        name: "Berkelium",
        symbol: "Bk",
        number: 97,
        group: 11,
        period: 9,
        category: "Actinide",
        fact: "Berkelium is a synthetic element created in nuclear reactors."
    },
    {
        name: "Californium",
        symbol: "Cf",
        number: 98,
        group: 12,
        period: 9,
        category: "Actinide",
        fact: "Californium is used in neutron sources and cancer treatment."
    },
    {
        name: "Einsteinium",
        symbol: "Es",
        number: 99,
        group: 13,
        period: 9,
        category: "Actinide",
        fact: "Einsteinium was discovered in the debris of a hydrogen bomb test."
    },
    {
        name: "Fermium",
        symbol: "Fm",
        number: 100,
        group: 14,
        period: 9,
        category: "Actinide",
        fact: "Fermium is a synthetic radioactive element with no commercial use."
    },
    {
        name: "Mendelevium",
        symbol: "Md",
        number: 101,
        group: 15,
        period: 9,
        category: "Actinide",
        fact: "Mendelevium is named after Dmitri Mendeleev, creator of the periodic table."
    },
    {
        name: "Nobelium",
        symbol: "No",
        number: 102,
        group: 16,
        period: 9,
        category: "Actinide",
        fact: "Nobelium is a synthetic radioactive element named after Alfred Nobel."
    },
    {
        name: "Lawrencium",
        symbol: "Lr",
        number: 103,
        group: 17,
        period: 9,
        category: "Actinide",
        fact: "Lawrencium is the last actinide and is named after the inventor of the cyclotron."
    },

    {
        name: "Rutherfordium",
        symbol: "Rf",
        number: 104,
        group: 4,
        period: 7,
        category: "Transition Metal",
        fact: "Rutherfordium is a synthetic element named after physicist Ernest Rutherford."
    },
    {
        name: "Dubnium",
        symbol: "Db",
        number: 105,
        group: 5,
        period: 7,
        category: "Transition Metal",
        fact: "Dubnium is highly radioactive and exists only in laboratories."
    },
    {
        name: "Seaborgium",
        symbol: "Sg",
        number: 106,
        group: 6,
        period: 7,
        category: "Transition Metal",
        fact: "Seaborgium is named after Glenn Seaborg, a pioneer in transuranium elements."
    },
    {
        name: "Bohrium",
        symbol: "Bh",
        number: 107,
        group: 7,
        period: 7,
        category: "Transition Metal",
        fact: "Bohrium is named after Niels Bohr and is extremely unstable."
    },
    {
        name: "Hassium",
        symbol: "Hs",
        number: 108,
        group: 8,
        period: 7,
        category: "Transition Metal",
        fact: "Hassium is named after the German state of Hesse."
    },
    {
        name: "Meitnerium",
        symbol: "Mt",
        number: 109,
        group: 9,
        period: 7,
        category: "Transition Metal",
        fact: "Meitnerium is named after physicist Lise Meitner."
    },
    {
        name: "Darmstadtium",
        symbol: "Ds",
        number: 110,
        group: 10,
        period: 7,
        category: "Transition Metal",
        fact: "Darmstadtium was first created in Darmstadt, Germany."
    },
    {
        name: "Roentgenium",
        symbol: "Rg",
        number: 111,
        group: 11,
        period: 7,
        category: "Transition Metal",
        fact: "Roentgenium is named after Wilhelm Röntgen, who discovered X-rays."
    },
    {
        name: "Copernicium",
        symbol: "Cn",
        number: 112,
        group: 12,
        period: 7,
        category: "Transition Metal",
        fact: "Copernicium is named after Nicolaus Copernicus."
    },
    {
        name: "Nihonium",
        symbol: "Nh",
        number: 113,
        group: 13,
        period: 7,
        category: "Post-Transition Metal",
        fact: "Nihonium is named after Japan (Nihon)."
    },
    {
        name: "Flerovium",
        symbol: "Fl",
        number: 114,
        group: 14,
        period: 7,
        category: "Post-Transition Metal",
        fact: "Flerovium is named after the Flerov Laboratory of Nuclear Reactions."
    },
    {
        name: "Moscovium",
        symbol: "Mc",
        number: 115,
        group: 15,
        period: 7,
        category: "Post-Transition Metal",
        fact: "Moscovium is named after the Moscow region."
    },
    {
        name: "Livermorium",
        symbol: "Lv",
        number: 116,
        group: 16,
        period: 7,
        category: "Post-Transition Metal",
        fact: "Livermorium is named after Lawrence Livermore National Laboratory."
    },
    {
        name: "Tennessine",
        symbol: "Ts",
        number: 117,
        group: 17,
        period: 7,
        category: "Halogen",
        fact: "Tennessine is named after the state of Tennessee."
    },
    {
        name: "Oganesson",
        symbol: "Og",
        number: 118,
        group: 18,
        period: 7,
        category: "Noble Gas",
        fact: "Oganesson is one of the heaviest elements ever created."
    }

];


const table = document.getElementById("periodic-table");

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

elements.forEach(e => {
    const div = document.createElement("div");
    div.classList.add("element");
    div.classList.add(getCategoryClass(e.category));

    if (
        (e.number === 57 && e.period === 6 && e.group === 3) ||
        (e.number === 89 && e.period === 7 && e.group === 3)
    ) {
        div.classList.add("series-marker");
    }

    div.style.gridColumn = e.group;
    div.style.gridRow = e.period;

    div.innerHTML = `
        <div class="number">${e.number}</div>
        <div class="symbol">${e.symbol}</div>
    `;

    div.addEventListener("click", () => {
        if (quizActive) return;

        document.getElementById("element-name").textContent = e.name;
        document.getElementById("element-symbol").textContent = "Symbol: " + e.symbol;
        document.getElementById("element-number").textContent = "Atomic Number: " + e.number;
        document.getElementById("element-group").textContent = "Group: " + e.group;
        document.getElementById("element-period").textContent = "Period: " + e.period;
        document.getElementById("element-category").textContent = "Category: " + e.category;
        document.getElementById("element-fact").textContent = e.fact;

        document.getElementById("info-panel").classList.remove("hidden");
        document.getElementById("info-panel").style.borderColor = getComputedStyle(div).backgroundColor;
    });

    table.appendChild(div);
});

document.getElementById("close-btn").onclick = () => {
    document.getElementById("info-panel").classList.add("hidden");
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
    if (totalQuestions < 5) {
        return 40;
    }

    let percent = (score / totalQuestions) * 100;

    if (percent < 50) {
        return 40;
    } else if (percent < 80) {
        return 90;
    } else {
        return 118;
    }
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
    return "category";
}

function generateQuestion(forcedType = null) {
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

function updateQuizButtons() {
    const startBtn = document.getElementById("start-btn");
    const quitBtn = document.getElementById("quit-btn");
    const quitPracticeBtn = document.getElementById("quit-practice-btn");

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
        currentQuestion = generateQuestion(practiceType);
    } else {
        currentQuestion = generateQuestion();
    }

    const title = document.getElementById("quiz-title");

    if (practiceMode) {
        title.textContent = "Practice Mode";
    } else {
        title.textContent = "Quiz Mode";
    }

    answered = false;

    if (practiceMode) {
        document.getElementById("question-text").textContent =
            `Practice Mode (${getTypeName(practiceType)}): ${currentQuestion.question}`;

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
    document.getElementById("question-text").textContent = "Practice ended. Review your results above.";
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
    document.getElementById("info-panel").classList.add("hidden");
    document.getElementById("report-section").classList.add("hidden");
    document.getElementById("review-list").innerHTML = "";
    document.getElementById("report-summary").textContent = "";

    updateQuizButtons();
    showQuestion();
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
    practiceType = type;
    quizActive = true;
    answered = false;

    document.getElementById("report-section").classList.add("hidden");
    document.getElementById("feedback").textContent =
        `Practice mode: working on ${getTypeName(type)} questions.`;
    updateQuizButtons();
    showQuestion();
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