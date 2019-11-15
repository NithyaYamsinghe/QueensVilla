const contentful = require("contentful");

export default contentful.createClient({
  space: process.env.REACT_APP_API_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN
});

//vvtxvu9nb4w3
//x2N46OkYSClNvs2XBSecYqN1trJkRnTmVoFapJ_dVCk
//process.env.REACT_APP_API_SPACE
//process.env.REACT_APP_ACCESS_TOKEN