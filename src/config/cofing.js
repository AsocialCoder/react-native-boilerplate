const development = {
    apiURL: ""
};

const production = {
    apiURL: ""
};


export default process.env.NODE_ENV === "production" ? production : development;