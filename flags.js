// Flags about the user to make conversations more intelligent

// Default flags
let flags = {
    "number_of_visits": 0,
    "seen_survey": false,
    "seen_voicelines": [],
    "last_selection": "",
};

// Load flags from localStorage if they exist
if (localStorage.getItem('flags')) {
    flags = JSON.parse(localStorage.getItem('flags'));
}

// get a flag value
export function getFlag(key) {
    return flags[key];
}

// set a flag value
export function setFlag(key, value) {
    flags[key] = value;
    localStorage.setItem('flags', JSON.stringify(flags));
}
