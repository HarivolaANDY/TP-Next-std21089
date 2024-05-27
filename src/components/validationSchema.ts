import { z } from "zod";

const phoneNumberRegexp = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?(-?\s?[0-9])+$/;

export const MessageSchema = z.object({
    firstname: z.string().max(25),
    lastname: z.string().max(20),
    email: z.string().email(),
    tel: z.string().regex(phoneNumberRegexp),
    message: z.string().max(255).min(0)
});
