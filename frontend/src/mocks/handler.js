import { rest } from "msw";

const baseURL = "https://gaelic-games-network-8985caf64f6b.herokuapp.com/";

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(
            ctx.json({
                pk: 1,
                username: "edward",
                email: "",
                first_name: "",
                last_name: "",
                profile_id: 1,
                profile_image:
                    "https://res.cloudinary.com/dqriyfsvh/image/upload/v1/media/../default_profile_dzbvvo",
            })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200));
    }),
];